# Personal Website Project

## Background and Motivation

The user wants to adapt their existing personal website to match the framework and design approach used by nikunjk.com. Current status:

- **Current Tech Stack**: Next.js + TypeScript + Tailwind CSS ✅
- **Target Inspiration**: nikunjk.com - clean, professional portfolio style
- **Goal**: Transform current design to match nikunjk.com's layout and aesthetic
- **Hosting**: GitHub Pages (existing plan)
- **Content**: About section + writings (current structure)
- **Navigation**: Simple, professional navigation
- **New Requirements**: Match nikunjk.com's professional, minimalist design patterns
- **New Content Maintenance**: Clean up outdated blog entries and ensure metadata stays accurate for the writings system (Oct 20, 2025 update).

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

## Project Status Board

### Current Sprint: nikunjk.com Adaptation Planning 
- [x] Analyze nikunjk.com design patterns and structure
- [x] Create comprehensive task breakdown
- [x] Identify key technical challenges
- [ ] Begin Phase 1: Technical Foundation & Font Fix

### Immediate Execution: Blog Cleanup (Oct 20, 2025)
- [x] Remove outdated posts (`on-creativity`, `first-thoughts`) from both source and public copies — **completed**
- [x] Update "Elon's Algorithm" metadata (title/date/headings) in both copies — **completed**
- [x] Regenerate posts index and verify site listings after cleanup — **completed**

### Next Sprint: Implementation
- [ ] Execute Phase 1 tasks (font migration, typography setup)
- [ ] Begin homepage redesign to match nikunjk.com layout

## Current Status / Progress Tracking

**Status (Oct 22 2025)**: Blog content cleanup and renderer fixes verified locally; preparing repository sync.

**Current Focus**: Confirm latest blog adjustments on local dev server (running at `http://127.0.0.1:3003`) and finalize commit for deployment sync.

**Completed Milestones**: 
- ✅ Blog cleanup applied (post deletions + metadata updates)
- ✅ Markdown renderer updated to strip duplicate H1 headings
- ✅ Local dev server validated latest changes despite watch limit warnings

**Next Milestone**: Commit and push updates so GitHub Pages deploys the corrected blog rendering.

**Blockers**: Watchpack `EMFILE` warnings observed when dev server starts; monitor during future sessions.

## Executor's Feedback or Assistance Requests

**Executor Update (Oct 22 2025)**:

- Confirmed blog renderer fix removes duplicated H1 headings on `writings/[slug]` pages.
- Validated local listings show updated dates/titles after JSON regeneration.
- Dev server running on `127.0.0.1:3003`; Watchpack `EMFILE` warnings noted but site serves correctly.
- Ready to stage and commit repository changes for deployment parity.

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

