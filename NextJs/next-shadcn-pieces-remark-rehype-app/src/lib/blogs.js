import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getBlogs() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content'));

  return files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('content', filename), 'utf-8');
    const { data } = matter(markdownWithMeta);
    return {
      ...data,
      slug: filename.replace('.md', ''),
    };
  });
}
