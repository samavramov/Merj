import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center p-6">
      <section className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-4">Merj</h1>
        <p className="text-lg text-gray-600 mb-8">
          Merj is an AI-powered CLI that automatically resolves merge conflicts during git pull operations, harnessing the power of GitHub, CodeRabbit, VoyageAI, and Claude.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <Link
            href="https://github.com/Anay-jo/MergeConflictResolver"
            className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800"
          >
            View on GitHub
          </Link>
          <a
            href="#install"
            className="border border-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200"
          >
            Get Started
          </a>
        </div>
      </section>

      <section id="install" className="max-w-2xl text-left mt-12">
        <h2 className="text-3xl font-semibold mb-4">🚀 Installation & Setup</h2>
        
        <h3 className="text-2xl font-medium mb-2">Clone & Install</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
          <code>
            git clone https://github.com/Anay-jo/MergeConflictResolver.git{'\n'}
            cd MergeConflictResolver{'\n'}
            npm install{'\n'}
            npm link{'\n'}
          </code>
        </pre>

        <h3 className="text-2xl font-medium mb-2">Authenticate</h3>
        <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
          <code>
            # Authenticate Merj tools{'\n'}
            merj auth{'\n\n'}
            # Authenticate CodeRabbit CLI{'\n'}
            curl -fsSL https://cli.coderabbit.ai/install.sh | sh{'\n'}
            source ~/.zshrc  # or reopen terminal{'\n'}
            coderabbit auth login
          </code>
        </pre>

        <p className="text-gray-600 mb-8">
          After authenticating with your GitHub token and CodeRabbit credentials, you can start using the commands:
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg mb-8">
          <code>
            merj pull{'\n'}
            merj push
          </code>
        </pre>

        <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
        <p className="text-gray-600 mb-4">
          Merj detects merge conflicts and then executes a workflow: it computes diffs from the last common ancestor, embeds relevant code context via VoyageAI and ChromaDB, uses CodeRabbit to get semantic summaries of changes, and finally uses Claude 3.5 Sonnet to resolve the conflict.
        </p>

        <ul className="list-disc pl-6 text-gray-700 mb-12">
          <li>Detects merge conflicts automatically</li>
          <li>Retrieves relevant code context</li>
          <li>Uses LLM reasoning for conflict resolution</li>
          <li>Outputs ready-to-merge files</li>
        </ul>

        <div className="text-center">
          <Link
            href="https://github.com/Anay-jo/MergeConflictResolver"
            className="inline-block bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-700"
          >
            Visit GitHub →
          </Link>
        </div>
      </section>

      <footer className="mt-20 text-sm text-gray-500">
        Built by Anay Joshi, Sam Avramov, Ayush Sridhar, and Josh Chen
      </footer>
    </main>
  );
}
