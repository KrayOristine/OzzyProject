import * as fs from "fs-extra";
import { loadProjectConfig, logger } from "./utils";
const types = {
  "cam": "camerasetup",
  "dest": "destructable",
  "item": "item",
  "rct": "rect",
  "snd": "sound",
  "trg": "trigger",
  "unit": "unit"
};

function generateDefs(contents: string){
    const lines = contents.split("\n");
    const varTypes = {};
    let output = "";

    lines.forEach(line => {
        line = line.replace(/\s+/g, "");

        if (line.startsWith("gg_")) {
            const parts = line.split("_", 2);

            if (parts.length >= 2) {
                let type = types[parts[1]];
                const name = (line.indexOf("=") != -1 ? line.split("=")[0] : line);

                // Generated sound variables can be strings as well as sounds
                if (type === "sound" && line.indexOf(`"`) !== -1) {
                    type = "string";
                }

                if (name in varTypes == false) {
                    output += `declare var ${name}: ${type};\n`

                    varTypes[name] = type;
                }
            }
        }
    });

    return output;

}


const config = loadProjectConfig();

// Create definitions file for generated globals
const luaFile = `./maps/${config.compilerOptions.baseUrl}/war3map.lua`;

try {
    const contents = fs.readFileSync(luaFile, "utf8");
    const result = generateDefs(contents);
    fs.writeFileSync("src/war3map.d.ts", result);
} catch (err) {
    logger.error(err.toString());
    logger.error(`There was an error generating the definition file for '${luaFile}'`);
}
