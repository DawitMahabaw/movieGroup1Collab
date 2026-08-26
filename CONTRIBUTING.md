# Contributing Guidelines

Welcome to the Netflix Clone project.

This guide explains how our team should use Git, GitHub, and Trello so the shared codebase stays stable and easy for everyone to work on.

## 1. Protect `main`

The `main` branch is the stable version of the project.

Do not push feature work directly to `main`. All development must happen on a separate feature branch and be merged through a Pull Request.

```text
main
|
|-- feature/your-task-name
```

## 2. Start from the Latest `main`

Before beginning a task, update your local `main` branch:

```bash
git checkout main
git pull origin main
```

Then create a feature branch:

```bash
git checkout -b feature/your-task-name
```

Good branch names:

```text
feature/header
feature/banner
feature/movie-card
feature/footer
feature/search
feature/responsive-layout
```

Use a branch name that clearly describes your task.

## 3. Work on Your Assigned Task

Each member should focus on their assigned task. Avoid changing another member's work unless it is required for your task and the teammate knows about it.

Be extra careful with shared files:

- `src/App.jsx`
- `src/main.jsx`
- `src/index.css`
- Routing files
- Shared components
- API utility files

If your task requires shared code changes, communicate with the relevant teammate or leader before making large changes.

## 4. Keep Commits Clear

Make small, meaningful commits while you work.

Good commit messages:

```text
feat: add responsive navbar
feat: add movie card hover preview
fix: correct banner image rendering
style: improve footer spacing
```

Avoid vague commit messages:

```text
update
changes
final
final-final
done
```

Your commit message should explain what changed.

## 5. Test Before You Push

Before pushing your work, run the project locally:

```bash
npm run dev
```

Also run linting when possible:

```bash
npm run lint
```

Check that:

- Your feature works locally.
- There are no obvious console errors.
- The app still loads.
- You did not accidentally edit unrelated files.
- Your task matches the assigned requirement.

## 6. Push Your Feature Branch

After committing your work:

```bash
git push -u origin feature/your-task-name
```

Only push your feature branch. Do not push directly to `main`.

## 7. Create a Pull Request

When your task is complete, create a Pull Request from your feature branch into `main`.

Before creating the Pull Request:

- Test your feature locally.
- Check for console/runtime errors.
- Confirm your assigned task is complete.
- Review your changed files.
- Remove accidental unrelated changes.
- Add a clear Pull Request title and description.

## 8. Get Two Approvals

Every Pull Request needs two approvals before it is merged into `main`.

Reviewers should check:

- Does the feature work?
- Does it satisfy the assigned task?
- Does it break existing functionality?
- Are there obvious bugs?
- Is the code readable?
- Are there unnecessary file changes?

Do not approve a Pull Request without reviewing the code and, when possible, testing the feature.

## 9. Keep Your Branch Updated

Other teammates will continue merging work into `main`. If your branch becomes outdated, update it with the latest `main`.

If you see merge conflicts, do not delete code randomly to make the conflict disappear. Ask the relevant teammate or a leader if you are unsure how to resolve it.

## 10. Never Commit Secrets

The TMDB API key must never be committed to GitHub.

Each developer should create a local `.env` file:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

Never commit:

- `.env`
- API keys
- Passwords
- Private credentials
- Access tokens

If a secret is accidentally pushed, tell the repository owner immediately.

## 11. Keep Pull Requests Focused

A Pull Request should contain one task or one closely related set of changes.

Good example:

```text
feature/movie-card
```

Avoid combining unrelated work in one Pull Request, such as:

```text
MovieCard + Footer + Navbar + API setup
```

Focused Pull Requests are easier to review and less likely to create conflicts.

## 12. Keep Trello Updated

Use Trello to show the current status of your task.

Workflow:

```text
BACKLOG -> TODO -> DOING -> REVIEW -> DONE
```

When you start working, move the card from TODO to DOING.

When you create a Pull Request, move the card from DOING to REVIEW and add the Pull Request link to the Trello card.

After the Pull Request is approved, merged, and verified, move the card from REVIEW to DONE.

## 13. Definition of Done

A task is DONE only when:

- Implementation is complete.
- The feature works locally.
- Changes are committed.
- The branch is pushed.
- A Pull Request is created.
- Two approvals are received.
- The Pull Request is merged into `main`.
- The feature is verified after merging.
- The Trello card is moved to DONE.

## 14. If You Are Blocked

If you get stuck, communicate early instead of waiting.

When asking for help, include:

1. What you expected to happen
2. What actually happened
3. What you tried
4. The error message, if there is one

Clear information helps the team solve problems faster.

## 15. Standard Workflow

Use this workflow for every task:

```bash
git checkout main
git pull origin main
git checkout -b feature/your-task-name
```

Then:

```text
1. Move Trello card to DOING.
2. Develop your feature.
3. Test locally.
4. Commit your changes.
5. Push your feature branch.
6. Create a Pull Request.
7. Get two approvals.
8. Merge into main.
9. Verify the feature after merging.
10. Move Trello card to DONE.
```

## Team Principle

We are building one project as a team, not separate individual projects.

Protect `main`, keep your work focused, communicate before changing shared code, review Pull Requests carefully, and keep GitHub and Trello synchronized.
