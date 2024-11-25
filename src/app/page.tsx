/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { db } from "~/server/db";

const mockExtractions = [
  { id: 1, name: "Extraction 1", description: "Description 1", defaults: { enrich: false, merge: false }, template: "" },
  { id: 2, name: "Extraction 2", description: "Description 2", defaults: { enrich: false, merge: false }, template: "" },
  { id: 3, name: "Extraction 3", description: "Description 3", defaults: { enrich: false, merge: false }, template: "" },
  { id: 4, name: "Extraction 4", description: "Description 4", defaults: { enrich: false, merge: false }, template: "" },
  { id: 5, name: "Extraction 5", description: "Description 5", defaults: { enrich: false, merge: false }, template: "" },
  { id: 6, name: "Extraction 6", description: "Description 6", defaults: { enrich: false, merge: false }, template: "" },
  { id: 7, name: "Extraction 7", description: "Description 7", defaults: { enrich: false, merge: false }, template: "" },
  { id: 8, name: "Extraction 8", description: "Description 8", defaults: { enrich: false, merge: false }, template: "" },
  { id: 9, name: "Extraction 9", description: "Description 9", defaults: { enrich: false, merge: false }, template: "" },
];
export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockExtractions.map((extraction, index) => (
          <div key={extraction.id + "-" + index} className="w-48">
            <h2>{extraction.name}</h2>
            <p>{extraction.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
