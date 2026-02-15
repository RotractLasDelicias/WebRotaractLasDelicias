import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getSortedPostsData() {
  // Obtener nombres de archivos bajo /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Quitar ".md" del nombre para tener un id
    const id = fileName.replace(/\.md$/, '');

    // Leer el archivo como string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Usar gray-matter para separar los metadatos (título, etc)
    const medicalResult = matter(fileContents);

    return {
      id,
      ...medicalResult.data,
    };
  });
  return allPostsData;
}