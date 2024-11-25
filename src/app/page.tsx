import Link from "next/link";

const mockExtractions = [
  { id: 1, name: "Extraction 1", description: "Description 1", defaults: { enrich: false, merge: false } },
  { id: 2, name: "Extraction 2", description: "Description 2", defaults: { enrich: false, merge: false } },
  { id: 3, name: "Extraction 3", description: "Description 3", defaults: { enrich: false, merge: false } },
  { id: 4, name: "Extraction 4", description: "Description 4", defaults: { enrich: false, merge: false } },
  { id: 5, name: "Extraction 5", description: "Description 5", defaults: { enrich: false, merge: false } },
  { id: 6, name: "Extraction 6", description: "Description 6", defaults: { enrich: false, merge: false } },
  { id: 7, name: "Extraction 7", description: "Description 7", defaults: { enrich: false, merge: false } },
  { id: 8, name: "Extraction 8", description: "Description 8", defaults: { enrich: false, merge: false } },
  { id: 9, name: "Extraction 9", description: "Description 9", defaults: { enrich: false, merge: false } },
];

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockExtractions.map((extraction) => (
          <div key={extraction.id} className="w-48">
            <h2>{extraction.name}</h2>
            <p>{extraction.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
