const fs = require('fs');
const path = require('path');

const journalFile = path.join(process.cwd(), 'content/journal/journal.json');
const outputFile = path.join(process.cwd(), 'src/data/journal.json');

function generateJournalData() {
  try {
    // Ensure output directory exists
    const outputDir = path.dirname(outputFile);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Read journal entries
    if (!fs.existsSync(journalFile)) {
      console.log('No journal.json found, creating empty array');
      fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
      return;
    }

    const fileContents = fs.readFileSync(journalFile, 'utf8');
    const entries = JSON.parse(fileContents);

    // Sort entries by date and time (newest first)
    const sortedEntries = entries.sort((a, b) => {
      const dateA = `${a.date} ${a.time || '00:00'}`;
      const dateB = `${b.date} ${b.time || '00:00'}`;
      return dateB.localeCompare(dateA);
    });

    // Write to JSON file
    fs.writeFileSync(outputFile, JSON.stringify(sortedEntries, null, 2));
    console.log(`Generated journal data: ${sortedEntries.length} entries written to ${outputFile}`);
  } catch (error) {
    console.error('Error generating journal data:', error);
    // Write empty array as fallback
    fs.writeFileSync(outputFile, JSON.stringify([], null, 2));
  }
}

generateJournalData();
