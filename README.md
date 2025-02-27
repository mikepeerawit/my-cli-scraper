# My CLI Scraper

A simple CLI application that fetches a webpage and extracts text content from an element using a CSS selector.

## Project Structure

```
my-cli-scraper/
├── bin/
│   └── cli-app.js        # Main executable script
├── .gitignore            # Git ignore file
├── package.json          # Project metadata and dependency definitions
└── README.md             # Project documentation (this file)
```

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/my-cli-scraper.git
   ```

2. **Change into the Project Directory:**

   ```bash
   cd my-cli-scraper
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

## Usage

### Running the CLI Application Directly

Execute the script with Node.js by providing the URL and the CSS selector as arguments. For example, to extract text from the first `<h1>` element on example.com:

```bash
node bin/cli-app.js "https://example.com" "h1"
```

### Using the npm Start Script

If you prefer using the npm start script defined in `package.json`, run:

```bash
npm start -- "https://example.com" "h1"
```

_Note:_ The `--` ensures that the arguments are passed directly to the CLI script.

### Installing Globally with npm Link

For convenience, you can link the package globally. This will allow you to run the tool from anywhere using the command `scraper`:

1. **Link the Package:**

   ```bash
   npm link
   ```

2. **Run the CLI Tool Globally:**

   ```bash
   scraper "https://example.com" "h1"
   ```

## Git Setup

To initialize a Git repository and commit your changes, use the following commands:

1. **Initialize Git:**

   ```bash
   git init
   ```

2. **Add Files:**

   ```bash
   git add .
   ```

3. **Make Your First Commit:**

   ```bash
   git commit -m "Initial commit with project structure and CLI tool"
   ```

4. **Link to a Remote Repository (e.g., GitHub):**

   ```bash
   git remote add origin https://github.com/yourusername/my-cli-scraper.git
   git push -u origin master
   ```
