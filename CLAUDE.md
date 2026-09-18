# dunchi-trader — CLAUDE.md

## Project Overview
dunchi-trader project

## Development Environment
- Server: deverse-dev (gsamwell@89.167.88.21)
- Path: ~/projects/dunchi-trader/
- GitHub: gsamwell-lang/dunchi-trader

## Key Rules
- No version numbers in documents — Git handles versioning
- Always commit and push after completing work
- Read this file at the start of every session
- When replacing functionality, delete old files and remove dead references

## File Naming Convention
All files in docs/ must use one of these prefixes: HANDOVER-, SOLUTION-DESIGN-, BUILD-PLAN-, WIREFRAME-, UAT-, RESTORE-, AUDIT-
Before committing any docs/ file, verify the filename matches this convention.
The deploy endpoint will reject non-compliant filenames with a suggested rename.

## Docs Naming Convention
All files you create in any project's `docs/` folder must use one of these prefixes:

| Prefix | Purpose |
|---|---|
| `HANDOVER-` | Current project state, decisions, outstanding tasks |
| `SOLUTION-DESIGN-` | Architecture and technical approach |
| `BUILD-PLAN-` | Phased build steps and implementation plan |
| `WIREFRAME-` | UI layouts and screen designs (`.html`) |
| `UAT-` | User acceptance testing scripts and results |
| `RESTORE-` | Step-by-step rebuild instructions |
| `AUDIT-` | Audit reports and compliance checks |

- Never invent a new prefix. If none of the above fit, ask.
- Never use `CHANGE-REQUEST-`, `CHAT-HANDOVER-`, or any other prefix not on this list.
- Only create docs files for the project you are currently working in. Never write to another project's `docs/` folder.
- `CLAUDE.md` in the project root is exempt.
- Files outside `docs/` are exempt.

## Project Structure
(Update as project grows)
