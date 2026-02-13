
import {Converters} from "patchwork-mapconverter";
import path from "node:path";
import fs from "node:fs";

function processConvert(list: {input:string,output:string}[]){
  for (const map of list){
    Converters.War2JsonService.convert(map.input, map.output);
  }
}

function main(){
  const p = path.resolve(__dirname, '../', './dist/bin');
  const fns = fs.readdirSync(p, {
    withFileTypes: true,
    encoding: 'utf-8'
  });
  const valid: {name: string,path:string}[] = [];
  fns.forEach((fileName)=>{
    if (!fileName.isFile()) return;
    if (!fileName.name.endsWith('.w3x')) return;

    valid.push({name: fileName.name, path: fileName.parentPath});
  });

  const processList: {input:string,output:string}[] = [];

  for (const f of valid){
    processList.push({
      input: path.join(f.path, f.name),
      output: path.resolve(__dirname, './map-data/', f.name)
    });
  }

  console.table(processList)
  //processConvert(processList);
}


try {
  main()
} catch(e){
  console.error(e);
}
