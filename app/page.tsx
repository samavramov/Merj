import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center p-6">
      <section className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-4">Merj</h1>
        <p className="text-lg text-gray-600 mb-8">
          Merj is an AI-powered CLI that resolves merge conflicts during{" "}
          git pull operations, harnessing GitHub, CodeRabbit,
          VoyageAI, and Claude to produce intelligent, ready-to-merge results.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="https://github.com/Anay-jo/MergeConflictResolver"
            className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800"
          >
            View on GitHub
          </Link>
          <Link
            href="/setup"
            className="border border-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200"
          >
            Get Started
          </Link>
        </div>

        <div className="mt-10 text-left mx-auto max-w-2xl text-gray-700">
          <h2 className="text-2xl font-semibold mb-2 justify-center">What it does</h2>
          <p className="mb-4">
            When you run merj pull, Merj detects merge conflicts.
            If clean, it behaves like git pull. If conflicts exist,
            Merj collects diffs from the last common ancestor, retrieves relevant
            code context (RAG with VoyageAI + ChromaDB), summarizes changes with
            CodeRabbit, and asks Claude to generate a safe, goal-preserving
            resolution.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Why Merj</h2>
          <ul className="list-disc pl-6">
            <li>Save time on tedious conflict resolution</li>
            <li>Preserve intent from both branches</li>
            <li>Keep developers in flow—no manual context spelunking</li>
          </ul>
        </div>
      </section>

      <footer className="mt-20 text-sm text-gray-500">
        Built by Anay Joshi, Sam Avramov, Ayush Sridhar, and Josh Chen
      </footer>
    </main>
  );
}
