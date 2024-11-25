/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockExtractions = [
  { id: 1, name: "Extraction 1", description: "Description 1", defaults: { enrich: false, merge: false }, template: "" },
];


export default async function HomePage() {
  const extractions = await db.query.extractions.findMany({
    orderBy: (extractions, { desc }) => [desc(extractions.createdAt)],
  });
  console.log(extractions);
  
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {extractions.map((extraction, index) => (
          <div key={extraction.id + "-" + index} className="flex w-48 flex-col">
            <h2>{extraction.name}</h2>
            <p>{extraction.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
