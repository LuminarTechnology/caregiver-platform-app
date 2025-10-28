# Caregiver Platform

This repository contains the Caregiver Platform mobile apps and shared libraries. It's an Nx workspace that uses Expo for the mobile apps.

Short summary:

- Two Expo apps in this workspace: the client app (`app/client`) and the provider app (`app/provider`).
- A shared library folder: `lib` for reusable UI, hooks, and config.
- Workspace tooling includes Nx and Node workspaces; Expo and EAS are used for app development and builds.

## Repository layout

Top-level structure you'll work with:

- `app/`
  - `client/` — Expo app for clients (mobile)
  - `provider/` — Expo app for providers (mobile)
- `lib/` — shared code (hooks, UI, config, icons)
- `package.json` — workspace scripts and workspaces
- `nx.json` — Nx workspace config

Open `app/client` and `app/provider` to see each app's source and app-specific config (they both contain an `app.json`, `eas.json`, and Metro config).

## Prerequisites

- Node.js (recommend LTS 18+ or current stable LTS)
- npm or Yarn (this repo uses npm workspaces in `package.json` but Yarn also works)
- Expo CLI (optional; you can use the local `expo` via npx) and EAS CLI for builds if you use EAS

Install global tools you need (optional):

```bash
# install Expo CLI and EAS if you want them globally
npm install -g expo-cli eas-cli
```

## Quick start — local development

1. Install dependencies from the repo root:

```bash
npm install
```

2. Start the client app dev server:

```bash
npm run client
```

This runs `cd app/client && expo start` (see `package.json` scripts). In the Expo terminal you can press `i` to open iOS simulator, `a` for Android, or scan the QR code with the Expo Go app.

3. Start the provider app in a separate terminal:

```bash
npm run provider
```

## Build and release

This repository includes `eas.json` files in each app folder for EAS builds. Typical EAS workflow:

1. Authenticate with EAS: `eas login`
2. Configure credentials and app identifiers per platform
3. From the app folder: `eas build -p ios` or `eas build -p android`

Note: EAS builds require a configured Expo account and appropriate Apple/Google credentials.

## Useful scripts

From the repo root (defined in `package.json`):

- `npm run client` — start Expo for the client app
- `npm run provider` — start Expo for the provider app

Other helpful commands:

- `npm run lint` — check and update lint issues in project
- `npx nun format` — format the project according to `.prettierrc`

## Libraries and conventions

- Shared code lives under `lib/src` (hooks, UI components, icons, config). Use packages in `lib` to share logic and components between apps.
- NativeWind (Tailwind for React Native) is configured in the workspace; see `tailwind.config.js` files in app and lib folders.
- SVG assets are handled with `react-native-svg` and `react-native-svg-transformer` via the metro config in each app.

## Development notes

- If you add native modules, follow Expo docs for config plugins or switch to the bare workflow.
- Keep platform-specific code inside each app; put cross-cutting UI, hooks and API clients in `lib`.

## Contributing

1. Create a feature branch from `dev`.
2. Add tests where appropriate and keep changes focused.
3. Ensure formatting (Prettier) and linting rules pass.

## Troubleshooting

- If Metro has stale cache: run `expo start -c` in the app folder.
- If you run into dependency resolution issues with workspaces, try a clean install:

```bash
rm -rf node_modules
npm install
```

## Where to look next

- `app/client/src` and `app/provider/src` — app entrypoints and screens
- `lib/src` — shared UI, hooks, and helpers
- `package.json` — top-level scripts
