import { objectDataGenerator } from './generator.ts';
import { loadData } from './data.ts';
import { mkdir, writeFile } from 'fs/promises';
import { existsSync } from 'fs';

export async function GenData() {
  console.log('Starting');
  const generatorData = await loadData('enus');
  const objectData = await objectDataGenerator(generatorData);

  if (!existsSync('../generated')) { await mkdir('../generated'); }
  if (!existsSync('../generated/constants')) { await mkdir('../generated/constants'); }
  //if (!existsSync('../generated_json')) { await mkdir('../generated_json', { recursive: true }); }

  for (const [name, objects] of Object.entries(objectData)) {
    await writeFile(`../generated/${name}.ts`, objects.tsContent);
    await writeFile(`../generated/constants/${name}.ts`, objects.constants);
    //await writeFile(`../generated_json/${name}data.json`, objects.jsonContent);
  }
  console.log('Finished');
};
