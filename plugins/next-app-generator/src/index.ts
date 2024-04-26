import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  Tree,
} from '@nrwl/devkit';

interface Schema {
  name: string; // The name of the Next.js app, for example "my-app".
}

export default async function (host: Tree, schema: Schema) {
  const targetDirectory = joinPathFragments('src/app'); // The target directory within the Next.js app structure.
  generateFiles(
    host, // The virtual file system tree.
    joinPathFragments(__dirname, 'schematics/app-structure/files'), // Path to the templates.
    targetDirectory, // Destination path of the files.
    {
      ...schema,
      ...names(schema.name), // Utility to generate names (e.g., className, propertyName).
      tmpl: '', // This is used to remove the '__tmpl__' from the file names.
    },
  );

  await formatFiles(host); // This will format the files created by the generator.
}
