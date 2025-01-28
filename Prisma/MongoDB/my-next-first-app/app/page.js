// "use client"
import prisma from "@/lib/prisma";

export default async function Home() {
  const posts = await prisma.post.findMany();
  console.log(posts);
  const p = [1, 2, 3, 4, 5];

  return (
    <main className="pt-10">
      <div>Home page</div>
      <div>
        Data From MongoDB
        {posts.map((post) => (
          <ul key={post.id} className="border-2 m-2 p-2">
            <li className="text-blue-400">{post.id}</li>
            <li>{post.title}</li>
            <li>{post.content}</li>
          </ul>
        ))}
      </div>
    </main>
  );
}
