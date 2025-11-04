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

function formatDate(dateString) {
  const [year, month, day] = dateString.split('-');
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function formatTime(timeString) {
  const [hours, minutes] = timeString.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
}

async function deleteJournalEntry() {
  const journalFile = path.join(process.cwd(), 'content/journal/journal.json');
  
  try {
    // Read existing entries
    if (!fs.existsSync(journalFile)) {
      console.log('\n❌ No journal entries found.\n');
      process.exit(0);
    }
    
    const fileContents = fs.readFileSync(journalFile, 'utf8');
    const entries = JSON.parse(fileContents);
    
    if (entries.length === 0) {
      console.log('\n❌ No journal entries found.\n');
      process.exit(0);
    }
    
    // Display entries
    console.log('\n📔 Journal Entries:\n');
    entries.forEach((entry, index) => {
      const preview = entry.content.length > 60 
        ? entry.content.substring(0, 60) + '...' 
        : entry.content;
      console.log(`${index + 1}. ${formatDate(entry.date)} at ${formatTime(entry.time)}`);
      console.log(`   "${preview}"\n`);
    });
    
    // Ask which entry to delete
    const answer = await question(`Which entry do you want to delete? (1-${entries.length}, or 'cancel'): `);
    
    if (answer.toLowerCase() === 'cancel' || answer.toLowerCase() === 'c') {
      console.log('\n❌ Cancelled.\n');
      process.exit(0);
    }
    
    const index = parseInt(answer) - 1;
    
    if (isNaN(index) || index < 0 || index >= entries.length) {
      console.log('\n❌ Invalid selection.\n');
      process.exit(1);
    }
    
    const entryToDelete = entries[index];
    const preview = entryToDelete.content.length > 60 
      ? entryToDelete.content.substring(0, 60) + '...' 
      : entryToDelete.content;
    
    // Confirm deletion
    console.log(`\n⚠️  About to delete:`);
    console.log(`   ${formatDate(entryToDelete.date)} at ${formatTime(entryToDelete.time)}`);
    console.log(`   "${preview}"\n`);
    
    const confirm = await question('Are you sure? (yes/no): ');
    
    if (confirm.toLowerCase() !== 'yes' && confirm.toLowerCase() !== 'y') {
      console.log('\n❌ Cancelled.\n');
      process.exit(0);
    }
    
    // Remove entry
    entries.splice(index, 1);
    
    // Write back to file
    fs.writeFileSync(journalFile, JSON.stringify(entries, null, 2) + '\n', 'utf8');
    
    console.log('\n✅ Entry deleted locally!');
    console.log(`📅 Removed: ${formatDate(entryToDelete.date)} at ${formatTime(entryToDelete.time)}\n`);
    
    // Ask if user wants to deploy
    const deploy = await question('Deploy changes to website? (y/n): ');
    
    if (deploy.toLowerCase() === 'y' || deploy.toLowerCase() === 'yes') {
      try {
        console.log('\n🚀 Deploying...');
        
        // Re-generate journal data
        execSync('node scripts/generate-journal-data.js', { stdio: 'inherit' });
        
        // Add all changes
        execSync('git add .', { stdio: 'inherit' });
        
        // Commit
        const commitMessage = `Delete journal entry: ${entryToDelete.date} ${entryToDelete.time}`;
        execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
        
        // Push
        execSync('git push origin main', { stdio: 'inherit' });
        
        console.log('\n✅ Committed and pushed to GitHub!');
        console.log('⏳ Vercel will auto-deploy in ~2 minutes\n');
      } catch (error) {
        console.error('\n❌ Error deploying:', error.message);
        console.log('\n💡 You can deploy manually later with: git push\n');
      }
    } else {
      console.log('\n💡 Entry deleted locally. Deploy later with: git push\n');
    }
    
  } catch (error) {
    console.error('\n❌ Error deleting entry:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

// Run the script
deleteJournalEntry();
