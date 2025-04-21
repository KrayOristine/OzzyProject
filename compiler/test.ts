import {execFile} from "child_process";
import {loadProjectConfig, logger, getMapName} from "./utils";

function main() {
  const config = loadProjectConfig();
  const cwd = process.cwd();
  const file = `${cwd}/dist/bin/${getMapName()}`;

  logger.info(`Launching map "${file.replace(/\\/g, "/")}"...`);
  execFile(config.game.executable, [...config.game.args, "-loadfile", file], (err: any) => {
    if (err && err.code === 'ENOENT') {
      logger.error(`No such file or directory "${config.game.executable}". Make sure gameExecutable is configured properly in config.json.`);
    }
  });
}

main();
