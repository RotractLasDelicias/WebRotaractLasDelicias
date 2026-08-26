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

export function getContentData(folderName) {
  // Ahora la carpeta depende de lo que le pases: 'blog', 'projects' o 'partners'
  const targetDirectory = path.join(process.cwd(), `content/${folderName}`);
  
  // Verificación de seguridad por si la carpeta no existe
  if (!fs.existsSync(targetDirectory)) return [];

  const fileNames = fs.readdirSync(targetDirectory);

  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(targetDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return { id, ...data };
  });
}