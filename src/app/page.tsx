/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

// const mockExtractions = [
//   { id: 1, name: "Extraction 1", description: "Description 1", defaults: { enrich: false, merge: false }, template: "" },
// ];

async function Extractions() {
  const extractions = await db.query.extractions.findMany({
    orderBy: (extractions, { desc }) => [desc(extractions.createdAt)],
  });
  console.log(extractions);
  
  return (
    <div className="flex flex-wrap gap-4">
      {extractions.map((extraction, index: number) => (
        <div key={extraction.id + "-" + index} className="flex w-48 flex-col">
          <h2>{extraction.name}</h2>
          <p>{extraction.description}</p>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Extractions />
      </SignedIn>
    </main>
  );
}
