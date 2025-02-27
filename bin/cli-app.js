const axios = require("axios");
const cheerio = require("cheerio");

// Validate command-line arguments
if (process.argv.length < 4) {
  console.error("Usage: scraper <URL> <CSS selector>");
  process.exit(1);
}

const url = process.argv[2];
const selector = process.argv[3];

// Fetch the HTML from the URL
axios
  .get(url)
  .then((response) => {
    // Load HTML into Cheerio
    const $ = cheerio.load(response.data);
    // Select the first element matching the CSS selector
    const element = $(selector).first();

    if (element.length === 0) {
      console.error("No element matches the given selector.");
      process.exit(1);
    }

    // Print the text content of the element
    console.log(element.text().trim());
  })
  .catch((error) => {
    console.error("Error fetching the URL:", error.message);
    process.exit(1);
  });
