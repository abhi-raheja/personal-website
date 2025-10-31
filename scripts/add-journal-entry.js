#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { execSync } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  return {
    date: `${year}-${month}-${day}`,
    time: `${hours}:${minutes}`,
    id: `${year}-${month}-${day}-${hours}:${minutes}:${seconds}`
  };
}

async function addJournalEntry() {
  console.log('\n📔 What\'s on your mind?\n');
  
  try {
    const content = await question('');
    
    if (!content.trim()) {
      console.log('\n❌ Entry cannot be empty');
      process.exit(1);
    }
    
    const journalFile = path.join(process.cwd(), 'content/journal/journal.json');
    const { date, time, id } = getCurrentDateTime();
    
    // Read existing entries
    let entries = [];
    if (fs.existsSync(journalFile)) {
      const fileContents = fs.readFileSync(journalFile, 'utf8');
      entries = JSON.parse(fileContents);
    }
    
    // Add new entry to beginning of array
    const newEntry = {
      id,
      date,
      time,
      content: content.trim()
    };
    
    entries.unshift(newEntry);
    
    // Write back to file
    fs.writeFileSync(journalFile, JSON.stringify(entries, null, 2) + '\n', 'utf8');
    
    console.log(`\n✅ Entry saved locally!`);
    console.log(`📅 ${date} at ${time}\n`);
    
    // Ask if user wants to deploy
    const deploy = await question('Deploy to website? (y/n): ');
    
    if (deploy.toLowerCase() === 'y' || deploy.toLowerCase() === 'yes') {
      try {
        console.log('\n🚀 Deploying...');
        
        // Re-generate journal data
        execSync('node scripts/generate-journal-data.js', { stdio: 'inherit' });
        
        // Add all changes
        execSync('git add .', { stdio: 'inherit' });
        
        // Commit
        const commitMessage = `Journal entry: ${date} ${time}`;
        execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
        
        // Push
        execSync('git push origin main', { stdio: 'inherit' });
        
        console.log('\n✅ Committed and pushed to GitHub!');
        console.log('⏳ Vercel will auto-deploy in ~2 minutes');
        console.log(`🔗 Your entry will be live at: https://abhiraheja.com/journal\n`);
      } catch (error) {
        console.error('\n❌ Error deploying:', error.message);
        console.log('\n💡 You can deploy manually later with: git push\n');
      }
    } else {
      console.log('\n💡 Entry saved locally. Deploy later with: git push\n');
    }
    
  } catch (error) {
    console.error('\n❌ Error adding entry:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

// Run the script
addJournalEntry();
