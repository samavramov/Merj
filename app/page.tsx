import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center p-6">
      <section className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-4">Merj</h1>
        <p className="text-lg text-gray-600 mb-8">
          Merj is an AI-powered CLI that automatically resolves merge conflicts during <code>git pull</code> operations, harnessing the power of GitHub, CodeRabbit, VoyageAI, and Claude.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <Link
            href="https://github.com/Anay-jo/MergeConflictResolver"
            className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800"
          >
            View on GitHub
          </Link>
          <a
            href="#setup"
            className="border border-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200"
          >
            Setup Guide
          </a>
        </div>
      </section>

      <section id="setup" className="max-w-2xl text-left mt-12">
        <h2 className="text-3xl font-semibold mb-4">Setup Guide - Merj CLI</h2>

        <h3 className="text-2xl font-medium mb-2">Prerequisites</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Node.js (v14 or higher recommended)</li>
          <li>npm (comes with Node.js)</li>
          <li>Git</li>
          <li>A GitHub account</li>
        </ul>

        <h3 className="text-2xl font-medium mb-2">Step-by-Step Setup</h3>

        <h4 className="text-xl font-semibold mb-1">1. Clone the Repository</h4>
        <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
          <code>
            git clone https://github.com/Anay-jo/MergeConflictResolver.git{'\n'}
            cd MergeConflictResolver
          </code>
        </pre>

        <h4 className="text-xl font-semibold mb-1">2. Install Dependencies</h4>
        <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
          <code>
            npm install
          </code>
        </pre>
        <p className="text-gray-600 mb-6">
          This will install all required packages:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>commander - CLI framework</li>
          <li>@octokit/rest - GitHub API client</li>
          <li>dotenv - Environment variables</li>
          <li>inquirer - Interactive prompts</li>
          <li>simple-git - Git operations</li>
        </ul>

        <h4 className="text-xl font-semibold mb-1">3. Link the CLI</h4>
        <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
          <code>
            npm link
          </code>
        </pre>
        <p className="text-gray-600 mb-6">
          This makes the <code>merj</code> command available globally from any directory.
        </p>

        <h4 className="text-xl font-semibold mb-1">4. Set Up GitHub Authentication</h4>
        <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
          <code>
            # Create a GitHub Personal Access Token{'\n'}
            # Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic){'\n'}
            # Click "Generate new token (classic)"{'\n'}
            # Name it (e.g., "Merj CLI"){'\n'}
            # Select scopes:{'\n'}
            #   repo (Full control of private repositories){'\n'}
            #   read:org (if needed for organization repos){'\n'}
            # Click "Generate token"{'\n'}
            # Copy token immediately—you won’t see it again!{'\n\n'}
            # Authenticate with Merj:{'\n'}
            merj auth
          </code>
        </pre>

        <h4 className="text-xl font-semibold mb-1">5. Verify Installation</h4>
        <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
          <code>
            merj --help
          </code>
        </pre>
        <p className="text-gray-600 mb-6">
          You should see:
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
          <code>
            Usage: merj [options] [command]{'\n\n'}
            A CLI that automatically resolves merge conflicts upon git pulls{'\n\n'}
            Commands:{'\n'}
              auth            Set up GitHub authentication with Personal Access Token{'\n'}
              pull [options]  Pull changes from remote and automatically resolve merge conflicts{'\n'}
              push [options]  Push changes to remote repository
          </code>
        </pre>

        <h4 className="text-xl font-semibold mb-1">6. Test the Commands</h4>
        <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
          <code>
            cd /path/to/your/repo{'\n'}
            merj pull
          </code>
        </pre>
        <p className="text-gray-600 mb-6">
          You should see: authentication confirmation, repository information, pull status.
        </p>

        <h4 className="text-xl font-semibold mb-1">Common Issues</h4>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><b>Issue: merj: command not found</b> — Solution: <code>npm link</code> or use <code>npx merj</code></li>
          <li><b>Issue: Authentication Failed</b> — Solution: verify your token, ensure correct scopes, rerun <code>merj auth</code></li>
          <li><b>Issue: Not a git repository</b> — Solution: ensure you’re in a directory containing a <code>.git</code> folder</li>
          <li><b>Issue: Push fails with "divergent branches"</b> — Solution: <code>merj push --force</code> (with caution!)</li>
        </ul>

        <h4 className="text-xl font-semibold mb-1">Project Structure</h4>
        <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
          <code>
MergeConflictResolver/ {'\n'}
├── bin/ {'\n'}
│   └── index.js          # Main CLI entry point{'\n'}
├── lib/ {'\n'}
│   ├── auth.js           # GitHub authentication{'\n'}
│   └── git.js            # Git operations{'\n'}
├── package.json          # Dependencies and config{'\n'}
├── README.md             # Project overview{'\n'}
├── SETUP.md              # This file{'\n'}
└── TESTING_GUIDE.md      # How to test features
          </code>
        </pre>

        <h4 className="text-xl font-semibold mb-1">What Each Command Does</h4>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li><code>merj auth</code> — Sets up GitHub authentication, stores your token securely, validates the token</li>
          <li><code>merj pull</code> — Authenticates with GitHub, shows repository information, checks for existing merge conflicts, pulls changes from remote, detects conflicts after pull</li>
          <li><code>merj push</code> — Authenticates with GitHub, shows repository information, pushes changes to remote repository, supports <code>--force</code> flag</li>
        </ul>

        <h4 className="text-xl font-semibold mb-1">Environment Variables</h4>
        <p className="text-gray-600 mb-6">
          The CLI stores authentication in:
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
          <code>
macOS/Linux: ~/.merjrc{'\n'}
File permissions: 600 (owner read/write only){'\n'}
No additional environment variables needed!
          </code>
        </pre>

        <h4 className="text-xl font-semibold mb-1">Next Steps</h4>
        <p className="text-gray-600 mb-6">
          Read <code>TESTING_GUIDE.md</code> to learn how to test features. Try commands in a test repo. Report issues on GitHub.
        </p>

        <h4 className="text-xl font-semibold mb-1">Support</h4>
        <p className="text-gray-600 mb-6">
          For issues or questions: <br/>
          GitHub Issues: <Link href="https://github.com/Anay-jo/MergeConflictResolver/issues"><a className="text-blue-600 underline">https://github.com/Anay-jo/MergeConflictResolver/issues</a></Link><br/>
          Check <code>TESTING_GUIDE.md</code> for testing scenarios.
        </p>

        <h4 className="text-xl font-semibold mb-1">Development</h4>
        <p className="text-gray-600 mb-6">
          If you want to contribute: after cloning & <code>npm install</code>, run <code>npm link</code>, then make changes to files in <code>bin/</code> or <code>lib/</code>, test changes with <code>merj --help</code>.
        </p>

        <h4 className="text-xl font-semibold mb-1">Uninstall</h4>
        <p className="text-gray-600 mb-6">
          To remove the global link: <code>npm unlink -g merj</code><br/>
          To remove local dependencies: <code>npm uninstall</code>
        </p>
      </section>

      <footer className="mt-20 text-sm text-gray-500">
      Built by Anay Joshi, Sam Avramov, Ayush Sridhar, and Josh Chen
      </footer>
    </main>
  );
}
