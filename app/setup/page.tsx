import Link from "next/link";

export default function Setup() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center p-6">
            <section className="max-w-2xl w-full">
                <div className="mb-6">
                    <Link href="/" className="text-sm underline hover:no-underline">
                        ← Back to Overview
                    </Link>
                </div>

                <h1 className="text-4xl font-bold mb-4">Setup Guide - Merj CLI</h1>

                <h2 className="text-2xl font-semibold mb-2">Prerequisites</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                    <li>Node.js (v14 or higher recommended)</li>
                    <li>npm (comes with Node.js)</li>
                    <li>Git</li>
                    <li>A GitHub account</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-2">Step-by-Step Setup</h2>

                <h3 className="text-xl font-semibold mb-1">1. Clone the Repository</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
                    {`git clone https://github.com/Anay-jo/MergeConflictResolver.git
cd MergeConflictResolver`}
                </pre>

                <h3 className="text-xl font-semibold mb-1">2. Install Dependencies</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg mb-2">
                    {`npm install`}
                </pre>

                <h3 className="text-xl font-semibold mb-1">3. Link the CLI</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg mb-2">
                    {`npm link`}
                </pre>
                <h3 className="text-xl font-semibold mb-1">4. Set Up GitHub Authentication</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
                    {`# GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
# Generate token with scopes:
#   repo (full control of private repos)
#   read:org (if you need org repos)
# Copy the token immediately!
# Authenticate with Merj:
merj auth`}
                </pre>

                <h3 className="text-xl font-semibold mb-1">5. Authenticate CodeRabbit</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
                    {`# Install CodeRabbit CLI
curl -fsSL https://cli.coderabbit.ai/install.sh | sh
# Reload shell or open a new terminal
source ~/.zshrc
# Log in to authorize CodeRabbit
coderabbit auth login`}
                </pre>

                <h3 className="text-xl font-semibold mb-1">6. Verify Installation</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
                    {`merj --help`}
                </pre>
                <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
                    {`Usage: merj [options] [command]

A CLI that automatically resolves merge conflicts upon git pulls

Commands:
  auth            Set up GitHub authentication with Personal Access Token
  pull [options]  Pull changes from remote and automatically resolve merge conflicts
  push [options]  Push changes to remote repository`}
                </pre>

                <h3 className="text-xl font-semibold mb-1">7. Test the Commands</h3>
                <pre className="bg-gray-900 text-white p-4 rounded-lg mb-2">
                    {`cd /path/to/your/repo
merj pull`}
                </pre>
                <p className="text-gray-600 mb-6">
                    You should see authentication confirmation, repository info, and pull status.
                </p>

                <h2 className="text-2xl font-semibold mb-2">Common Issues</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                    <li><b>merj: command not found</b> → npm link or npx merj</li>
                    <li><b>Authentication failed</b> → verify token + scopes, rerun merj auth</li>
                    <li><b>Not a git repository</b> → ensure there’s a .git folder</li>
                    <li><b>Push fails (divergent branches)</b> → merj push --force (use with caution)</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-2">Project Structure</h2>
                <pre className="bg-gray-900 text-white p-4 rounded-lg mb-6">
                    {`MergeConflictResolver/
├── bin/
│   └── index.js          # Main CLI entry point
├── lib/
│   ├── auth.js           # GitHub authentication
│   └── git.js            # Git operations
├── package.json          # Dependencies and config
├── README.md             # Project overview
├── SETUP.md
└── TESTING_GUIDE.md      # How to test features`}
                </pre>

                <h2 className="text-2xl font-semibold mb-2">Support & Contributing</h2>
                <p className="text-gray-700 mb-6">
                    Issues:{" "}
                    <Link
                        href="https://github.com/Anay-jo/MergeConflictResolver/issues"
                        className="underline text-blue-600"
                    >
                        https://github.com/Anay-jo/MergeConflictResolver/issues
                    </Link>
                    <br />
                    To contribute: after cloning and <code>npm install</code>, run{" "}
                    npm link, edit files in <code>bin/</code> or{" "}
                    lib, and test with merj --help.
                </p>

                <h2 className="text-2xl font-semibold mb-2">Uninstall</h2>
                <p className="text-gray-700 mb-16">
                    Remove global link: npm unlink -g merj
                    <br />
                    Remove local deps: npm uninstall
                </p>

                <footer className="text-sm text-gray-500 pb-8">
                    Built by Anay Joshi, Sam Avramov, Ayush Sridhar, and Josh Chen
                </footer>
            </section>
        </main>
    );
}
