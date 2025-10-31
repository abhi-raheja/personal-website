# Personal Website Project

## Background and Motivation

The user wants to adapt their existing personal website to match the framework and design approach used by nikunjk.com. Current status:

- **Current Tech Stack**: Next.js + TypeScript + Tailwind CSS ✅
- **Target Inspiration**: nikunjk.com - clean, professional portfolio style
- **Goal**: Transform current design to match nikunjk.com's layout and aesthetic
- **Hosting**: Vercel (switched from GitHub Pages)
- **Content**: About section + writings (formal blog posts) + NEW: Journal (casual daily thoughts)
- **Navigation**: Simple, professional navigation
- **New Requirements**: Match nikunjk.com's professional, minimalist design patterns
- **New Content Maintenance**: Clean up outdated blog entries and ensure metadata stays accurate for the writings system (Oct 20, 2025 update).
- **Latest Requirement (Dec 2025)**: Add "Journal" section for quick, casual daily thoughts with seamless posting workflow

## Key Challenges and Analysis

### nikunjk.com Design Analysis:
1. **Layout Structure**: 
   - Large, bold name/title at top
   - Brief professional tagline/description
   - Sectioned content (Recent Writing, Speaking, Investing)
   - Clean typography hierarchy
   - Minimal color palette (black, gray, white)

2. **Typography & Spacing**:
   - Sans-serif fonts (likely Inter or similar)
   - Large headings with generous spacing
   - Consistent vertical rhythm
   - Subtle text weight variations

3. **Navigation & UX**:
   - Simple, text-based navigation
   - "Skip to main content" accessibility feature
   - Email contact integration
   - "Pick random" functionality for content

4. **Content Organization**:
   - Clear sections with emoji headers (🗣️)
   - Date-based content organization
   - External links to podcasts/shows
   - Professional focus areas clearly defined

### Technical Challenges:
1. **Font Migration**: Need to fix @next/font deprecation warning
2. **Design System**: Create typography and spacing system matching nikunjk.com
3. **Content Structure**: Reorganize current content to match professional portfolio format
4. **Accessibility**: Add skip-to-content and proper semantic structure

### Blog Content Maintenance (Current Focus)
1. Removing markdown posts requires syncing both `content/posts/` and `public/content/posts/` because the client fetches raw markdown from the `public` copy.
2. `scripts/generate-posts-data.js` regenerates `src/data/posts.json` during `npm run build`; deleting posts alters ordering of recent posts on the homepage/writings pages.
3. Updating a post title/date means adjusting frontmatter and any duplicated headings inside the markdown to avoid double rendering.
4. After content changes we must rerun `npm run build` (or at least `node scripts/generate-posts-data.js`) to ensure the JSON index is refreshed.

### Journal Feature Planning (NEW - Dec 2025)

#### User Requirements:
1. **New Section**: "Journal" tab separate from "Writings"
2. **Content Type**: Casual daily thoughts, quick posts
3. **Posting Experience**: Must be "seamless" - no commits, no GitHub, no asking for help
4. **Display**: Sequential chronological order (newest first or oldest first?)
5. **Difference from Writings**: Writings = formal articles; Journal = raw, casual thoughts

#### Key Design Questions to Resolve:
1. **Storage Approach**:
   - **Option A**: Markdown files (like Writings) - still requires running scripts
   - **Option B**: External service (Notion, AirTable, GitHub Gists, etc.)
   - **Option C**: Vercel KV/Redis database (needs backend)
   - **Option D**: Simple JSON file (can be edited directly)

2. **Seamless Posting**:
   - If markdown: still requires script execution or manual file creation
   - If external API: requires authentication and interface
   - If JSON: user can edit directly but need to understand format
   - **Best for "seamless"**: Some kind of interface or automation

3. **Format**:
   - Markdown-based (like Writings)? Or plain text?
   - Frontmatter needed? Or timestamp auto-generated?
   - Character limits?

4. **Location**:
   - `/journal` route?
   - Separate from `/writings` but similar structure?
   - Individual post pages or just feed-style?

5. **Visual Design**:
   - More casual than Writings?
   - Different typography/colors?
   - Minimal metadata (just date maybe)?
   - No excerpts needed?

#### Recommended Approach:

**Hybrid Solution: Simple JSON + CLI Tool**

**The Experience:**
1. User opens terminal in project folder
2. Runs: `npm run journal` (or `npm run add-thought`)
3. CLI prompts: "What's on your mind?"
4. User types their thought (or pastes text)
5. CLI auto-adds timestamp and saves to `content/journal/journal.json`
6. CLI shows: "Want to deploy? (y/n)"
7. If yes: auto-commits and pushes to GitHub, Vercel auto-deploys
8. Entry appears on site in ~2 minutes

**Alternative Workflows for Different Devices:**

**A. Terminal CLI (For computer/desktop)**
```bash
$ npm run journal
What's on your mind? 
> Thinking about the future of AI and privacy...

✓ Saved! Deploy? (y/n) y
✓ Committed and pushed!
```

**B. Phone/Tablet - GitHub Mobile App**
- Open GitHub mobile app
- Navigate to repo → `content/journal/journal.json`
- Tap "Edit" (pencil icon)
- Add entry to JSON array
- Tap "Commit changes" → "Commit to main"
- Vercel auto-deploys
- **PROBLEM**: Editing JSON on phone is painful! ❌

**C. Phone/Tablet - Simple Web Form (RECOMMENDED)**
- Open browser on phone
- Go to `abhiraheja.com/journal/add` 
- Enter password (stored in env vars)
- Big text area: "What's on your mind?"
- Tap "Post" button
- Backend auto-creates entry, commits & pushes to GitHub
- Vercel auto-deploys
- **BEST FOR PHONE**: Real form, auto-deploy! ✅

**D. Phone/Tablet - SMS/Telegram Bot (ADVANCED)**
- Text your thought to a number or Telegram bot
- Bot posts to Journal via API
- **COOL BUT COMPLEX**: Requires external services

**E. Phone/Tablet - Markdown in GitHub Mobile**
- Similar to option B but editing markdown
- **STILL PAINFUL**: Not touch-friendly

**F. Phone/Tablet - Notes App → Manual Copy**
- Write in Notes app on phone
- Copy to clipboard
- Later paste into terminal on computer
- **WORKS BUT**: Delayed posting

**RECOMMENDATION FOR MULTI-DEVICE:**
- **Terminal CLI** for computer (fast, seamless)
- **Web form at `/journal/add`** for phone (password protected, touch-friendly)
- Both use same JSON storage
- Both auto-deploy to Vercel

**Phone Web Form Experience:**

**Screen 1 - Landing:**
```
┌─────────────────────────────┐
│  Journal                    │
│                             │
│  [Lock icon]                │
│                             │
│  This page is private       │
│                             │
│  ┌───────────────────────┐ │
│  │ Enter Password        │ │
│  └───────────────────────┘ │
│                             │
│  [🔓 Unlock]               │
└─────────────────────────────┘
```

**Screen 2 - Text Input:**
```
┌─────────────────────────────┐
│  Journal • New Entry        │
│                             │
│  What's on your mind?       │
│  ┌─────────────────────────┐│
│  │                         ││
│  │  [Text area expands]    ││
│  │                         ││
│  │                         ││
│  └─────────────────────────┘│
│                             │
│  [📝 Post to Journal]      │
│                             │
│  [← Back]                   │
└─────────────────────────────┘
```

**Screen 3 - Success:**
```
┌─────────────────────────────┐
│  ✓ Posted!                  │
│                             │
│  Your entry is being        │
│  published to your journal. │
│                             │
│  Live in ~2 minutes...      │
│                             │
│  [View Journal]             │
│  [Post Another]             │
└─────────────────────────────┘
```

**Technical Implementation of Web Form:**
- Next.js API route: `/api/journal/add` 
- Password check (env var: `JOURNAL_PASSWORD`)
- Reads current `journal.json`
- Adds new entry with timestamp
- Uses GitHub API or simple file write + git commands
- Redirects to `/journal` to see post
- Vercel handles deployment automatically

**Password Implementation Details:**

**Option 1: Simple Environment Variable (RECOMMENDED)**
- Store password in Vercel: `JOURNAL_PASSWORD=your-secret-password`
- User sets this once when deploying
- Anyone with the URL + password can post
- **NOT secure** but fine for single-user journal
- **PROS**: Simple, no auth service needed
- **CONS**: If password leaked, anyone can post

**Option 2: GitHub OAuth (MORE SECURE)**
- Click "Login with GitHub"
- Only YOU (repository owner) can post
- Uses GitHub's authentication
- **PROS**: More secure, only you can access
- **CONS**: Requires GitHub OAuth setup

**Option 3: IP Whitelist**
- Only allow posts from your IP addresses
- Check request IP against whitelist
- **PROS**: No password needed
- **CONS**: IP changes when on different networks (home vs coffee shop)

**Option 4: No Protection (PUBLIC POSTING)**
- Skip password entirely
- Anyone can add entries
- **PROS**: No friction
- **CONS**: Risk of spam/vandalism

**RECOMMENDATION**: Start with **Option 1** (env var password) because:
- Simple to implement
- Good enough for personal journal
- Can upgrade to GitHub OAuth later if needed
- You control the password

**How It Works:**
1. You set `JOURNAL_PASSWORD=my-secret-word-123` in Vercel dashboard
2. When someone tries to post via `/journal/add`, form asks for password
3. Backend checks if password matches env var
4. If yes → post is created
5. If no → error message

**Required Setup Items:**

**For Password Auth (Option 1):**
1. ✅ Set env var in Vercel: `JOURNAL_PASSWORD=whatever-you-want`
2. ⚠️ **GitHub Personal Access Token** (for auto-commit from web form)
   - Create token at: github.com/settings/tokens
   - Needs `repo` permissions
   - Store in Vercel: `GITHUB_TOKEN=ghp_xxxxx...`
   - **This is required** for the web form to commit + push to GitHub

**For CLI Tool:**
- ✅ No setup needed (uses local Git credentials)

**Full Setup Steps:**
1. Go to Vercel → Your Project → Settings → Environment Variables
2. Add: `JOURNAL_PASSWORD` = your secret password
3. Add: `GITHUB_TOKEN` = your GitHub personal access token
4. Redeploy (or wait for auto-deploy)

**Alternative Without GitHub Token:**

**Option A: "Copy & Push Later"**
- Web form saves entry to `journal.json` locally
- Shows message: "Entry saved! Run `git push` to publish"
- User pushes manually when convenient
- **PROS**: No API setup
- **CONS**: Not fully seamless, requires terminal

**Option B: "Open GitHub Editor"**
- Web form creates entry JSON
- Opens GitHub.com web editor with content pre-filled
- User clicks "Commit" on GitHub
- **PROS**: No API setup, works on any device
- **CONS**: Still need to click commit on GitHub

**Option C: Just Use CLI (Simplest)**
- Skip web form entirely
- Only support `npm run journal` CLI
- For phone: SSH into server and run command
- Or: Just use computer for posting
- **PROS**: Zero setup, simplest implementation
- **CONS**: Not phone-friendly

**Recommendation Path:**

**If you want zero setup:**
→ Use CLI only (`npm run journal` on your computer)
- 0 minutes setup
- Phone posting: Not really feasible

**If you want phone support with minimal setup:**
→ Use CLI + GitHub web editor approach (no API token needed)
- 0 minutes setup
- Phone posting: Open GitHub editor, paste content, commit
- Requires you to click "Commit" on GitHub (one extra step)

**If you want truly seamless phone posting:**
→ Set up GitHub API token (5 minutes of setup)
- ~5 minutes: Create GitHub token, add to Vercel
- Phone posting: Truly seamless (just type and post)
- Best experience but requires initial setup

**My Recommendation: Start Simple**
1. Build CLI tool first (zero setup, works great on computer)
2. If you want phone posting later, we can add it
3. Most journaling happens on computer anyway

**Why This is Best for Phone:**
✅ Native browser experience (no app needed)
✅ Touch-friendly text input
✅ Password-protected (private)
✅ Auto-commits & deploys
✅ Works on any device with browser
✅ Can bookmark for quick access

**Device-Specific Comparison:**

| Method           | Device | Setup Time | Posting Time | Pain Level | Best For          |
|------------------|--------|------------|--------------|------------|-------------------|
| Terminal CLI     | Computer | 0 min     | 30 sec       | ⭐ Easy    | Fast daily posts  |
| Web Form         | Phone    | 0 min     | 1 min        | ⭐ Easy    | On-the-go thoughts|
| GitHub Mobile    | Phone    | 0 min     | 3-5 min      | ⭐⭐⭐ Hard | Emergency only    |
| Markdown CLI     | Computer | 0 min     | 30 sec       | ⭐ Easy    | If you like MD    |
| Telegram Bot     | Any      | 30 min+   | 10 sec       | ⭐⭐ Medium | Cool factor       |

**Recommendation**: Start with CLI only, add phone support if needed later

**Storage Format (for JSON approach):**
```json
[
  {
    "id": "2025-12-10-14:30:00",
    "date": "2025-12-10",
    "time": "14:30",
    "content": "Thinking about the future of AI..."
  }
]
```

**Why This Works:**
- ✅ True "seamless" experience with CLI
- ✅ No manual Git commands
- ✅ Auto-timestamp (no date entry needed)
- ✅ Auto-deploy if user wants
- ✅ JSON is simple to backup/edit manually if needed

#### Complete User Experience Flow:

```
┌─────────────────────────────────────────────────────────────┐
│ USER HAS A THOUGHT                                          │
└─────────────────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────────────────┐
│ Opens terminal in project folder                            │
│ Types: npm run journal                                      │
└─────────────────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────────────────┐
│ CLI: "What's on your mind?"                                 │
│ [User types their thought here...]                          │
│                                                              │
│ Thinking about how quantum computing will                   │
│ fundamentally change cryptography as we know it.            │
│ It's both terrifying and exhilarating.                      │
└─────────────────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────────────────┐
│ CLI auto-adds timestamp: 2025-12-10 14:30                  │
│ Saves to: content/journal/journal.json                     │
│                                                              │
│ ✓ Entry saved locally!                                      │
│ Deploy to website? (y/n):                                   │
└─────────────────────────────────────────────────────────────┘
                      ↓
            ┌────────┴────────┐
         YES │                │ NO
            ↓                 ↓
┌────────────────────┐   ┌────────────────────┐
│ Auto commit & push │   │ Just saved locally │
│ to GitHub          │   │ (deploy later      │
│                    │   │  with git)         │
│ git add .          │   └────────────────────┘
│ git commit -m "..." │
│ git push           │
└────────────────────┘
            ↓
┌─────────────────────────────────────────────────────────────┐
│ Vercel detects GitHub push                                  │
│ Auto-deploys in ~2 minutes                                  │
└─────────────────────────────────────────────────────────────┘
            ↓
┌─────────────────────────────────────────────────────────────┐
│ Entry appears at abhiraheja.com/journal                     │
│ ✓ DONE!                                                      │
└─────────────────────────────────────────────────────────────┘
```

**Total time if deploying**: ~3-5 minutes (mostly waiting for Vercel)
**Total time without deploying**: ~30 seconds
**Manual Git commands**: 0

## High-level Task Breakdown

### Phase 1: Technical Foundation & Font Fix
- [ ] Fix @next/font deprecation warning (migrate to next/font)
- [ ] Set up Inter font system (matching nikunjk.com style)
- [ ] Create base typography system
- [ ] Test font rendering and performance

### Immediate Task: Blog Cleanup (Oct 20, 2025)
1. **Inventory Current Posts** – confirm target markdown files exist in both source and public directories, note slugs.
2. **Remove Outdated Posts** – delete `on-creativity` and `first-thoughts` markdown files from both locations and ensure their metadata disappears from `posts.json`.
3. **Update "Elon's Algorithm" Post** – adjust frontmatter (title/date) and ensure leading markdown heading matches or is removed to prevent duplication.
4. **Regenerate Post Index** – run `npm run build` (or the prebuild script) to refresh `src/data/posts.json`; verify homepage and writings listings reflect changes.
5. **Manual Verification** – inspect `/writings` and the updated post page locally for correct dates, ordering, and absence of removed posts.

### Phase 2: Layout Restructure (nikunjk.com Style)
- [ ] Create large hero section with name and tagline
- [ ] Implement skip-to-content accessibility feature
- [ ] Design new navigation structure (minimal, professional)
- [ ] Create section-based content layout

### Phase 3: Homepage Redesign
- [ ] Large name/title header (similar to "Nikunj Kothari")
- [ ] Professional tagline section
- [ ] "Recent Writing" section with clean typography
- [ ] Optional: "Speaking" or "Projects" section
- [ ] Footer with professional links

### Phase 4: Content Pages Adaptation
- [ ] Redesign About page to match professional portfolio style
- [ ] Update Writings page with cleaner, date-focused layout
- [ ] Individual post pages with consistent typography
- [ ] Add proper semantic HTML structure

### Phase 5: Design System Refinement
- [ ] Implement nikunjk.com color palette (black, gray, white)
- [ ] Fine-tune typography hierarchy and spacing
- [ ] Ensure consistent vertical rhythm
- [ ] Add subtle hover effects and interactions

### Phase 6: Testing & Polish
- [ ] Test across devices and browsers
- [ ] Verify accessibility features work
- [ ] Performance optimization
- [ ] Final design adjustments

### NEW FEATURE: Journal System (Dec 2025)

**Phase 1: Core Infrastructure**
- [ ] Create `content/journal/journal.json` structure
- [ ] Build journal data generation script (similar to `generate-posts-data.js`)
- [ ] Create `/journal` page route
- [ ] Design casual journal entry component (different from Writings)
- [ ] Add "Journal" link to navigation

**Phase 2: Computer/Desktop Workflow**
- [ ] Create CLI tool: `npm run journal`
- [ ] Add prompt: "What's on your mind?"
- [ ] Auto-timestamp entries
- [ ] Add auto-deploy option (commit + push)
- [ ] Test CLI workflow locally

**Phase 3: Phone/Mobile Workflow**
- [ ] Create `/journal/add` protected page
- [ ] Add password auth (env var)
- [ ] Design mobile-friendly text input
- [ ] Create API route: `/api/journal/add`
- [ ] Implement GitHub API integration for auto-commit
- [ ] Test on mobile browser

**Phase 4: Polish & Documentation**
- [ ] Test sequential ordering (chronological, newest first)
- [ ] Add loading states for deployments
- [ ] Create user guide/README
- [ ] Deploy to production
- [ ] User acceptance testing

## Project Status Board

### Current Sprint: Journal Feature Planning
- [x] User consultation on storage approach and workflow
- [x] Decide on JSON vs Markdown vs External service (JSON chosen)
- [x] Design seamless posting workflow for computer + phone
- [x] Plan CLI tool + web form dual approach
- [ ] Get user approval on approach
- [ ] Implement chosen solution

### Previous Sprint: nikunjk.com Adaptation Planning 
- [x] Analyze nikunjk.com design patterns and structure
- [x] Create comprehensive task breakdown
- [x] Identify key technical challenges
- [ ] Begin Phase 1: Technical Foundation & Font Fix (deferred)

### Immediate Execution: Blog Cleanup (Oct 20, 2025)
- [x] Remove outdated posts (`on-creativity`, `first-thoughts`) from both source and public copies — **completed**
- [x] Update "Elon's Algorithm" metadata (title/date/headings) in both copies — **completed**
- [x] Regenerate posts index and verify site listings after cleanup — **completed**

### Next Sprint: Implementation
- [ ] Execute Phase 1 tasks (font migration, typography setup)
- [ ] Begin homepage redesign to match nikunjk.com layout

## Current Status / Progress Tracking

**Status (Dec 2025)**: Planning Journal feature for casual daily thoughts posting

**Current Focus**: Design seamless posting workflow for Journal entries. User wants:
- Easy posting without Git commits or GitHub operations
- Sequential chronological display
- Casual format (distinct from formal Writings)
- No assistance needed to post

**Active Decisions Needed**:
1. Storage format: JSON file vs Markdown vs External service
2. Posting mechanism: Direct file edit, CLI tool, or web interface
3. Visual design: More casual than Writings
4. Chronological order: Newest first (recommended) or oldest first

**Completed Milestones**: 
- ✅ Blog cleanup applied (post deletions + metadata updates)
- ✅ Markdown renderer updated to strip duplicate H1 headings
- ✅ Substack subscription form added to all pages
- ✅ Vercel deployment configured and working
- ✅ New blog post creation workflow established

**Next Milestone**: Get user approval on Journal approach, then implement.

**Recommended Approach**: Simple JSON storage with CLI tool for seamless posting

## Executor's Feedback or Assistance Requests

**Executor Update (Oct 22 2025)**:

- Confirmed blog renderer fix removes duplicated H1 headings on `writings/[slug]` pages.
- Validated local listings show updated dates/titles after JSON regeneration.
- Dev server running on `127.0.0.1:3003`; Watchpack `EMFILE` warnings noted but site serves correctly.
- Successfully committed and pushed changes (commit `1453c95`) to GitHub repository.
- GitHub Pages deployment should now reflect the corrected blog rendering.

**Executor Update (Latest)**:

- Added Substack subscribe iframe to homepage, writings page, and individual blog post pages.
- Converted HTML iframe to JSX format (frameBorder instead of frameborder, added title attribute for accessibility).
- Made iframe responsive with max-width constraints and proper styling.
- All three pages now include the "Subscribe" section with the Substack embed form.

## Lessons

- User prefers spinning up local server for testing before committing to GitHub
- Always evaluate feedback and get explicit approval before moving to next phase
- Include debugging info in program output
- Read files before editing them
- Run npm audit if vulnerabilities appear
- Ask before using force git commands
- Write tests first, then code, then run tests until they pass

**Executor Notes (Oct 20, 2025)**:
- Deleted `on-creativity.md` and `first-thoughts.md` from both `content/posts/` and `public/content/posts/`.
- Updated frontmatter for `elons-algorithm-a-spacex-engineers-perspective.md` (both locations) to use title "On Elon's Algorithm" with date `2025-10-20`.
- Regenerated `src/data/posts.json` via `npm run build`; list now reflects 8 posts with updated title/date/excerpt.
- Dev server restarted (`npm run dev`) for local verification.
- Adjusted markdown renderer to strip a leading H1 heading before conversion to prevent duplicate titles.

## JOURNAL FEATURE EXECUTION SUMMARY

**✅ DEPLOYMENT COMPLETE - Feature Live**

### What We Built:
A "Journal" section for casual daily thoughts, separate from formal Writings

### User Experience:
**Computer:** Run `npm run journal`, type thought, auto-deploy ✅
**Phone:** (To be added later if needed)

### Implementation Completed:
- ✅ Phase 1: Core (JSON storage, generation script, `/journal` page)
- ✅ Phase 2: CLI tool (`npm run journal` with auto-deploy)
- ✅ Phase 3: Navigation links added to all pages
- ✅ Phase 4: Deployed to production

### Storage:
Simple JSON array: `content/journal/journal.json`

### Display:
Sequential chronological feed (newest first), casual design

### Files Created:
- `content/journal/journal.json` - Journal entries storage
- `scripts/generate-journal-data.js` - Data generation script
- `scripts/add-journal-entry.js` - CLI tool for adding entries
- `src/app/journal/page.tsx` - Journal page component
- `src/data/journal.json` - Generated data file

### How to Use:
1. Run `npm run journal` in terminal
2. Type your thought when prompted
3. Choose 'y' to auto-deploy or 'n' to save locally
4. Entry appears on site after Vercel deploys

### Notes:
- User successfully tested the CLI and added first entry
- Had to handle Git rebase when local branch diverged from remote
- Feature is now live at https://abhiraheja.com/journal

**✅ FEATURE COMPLETE AND TESTED**

