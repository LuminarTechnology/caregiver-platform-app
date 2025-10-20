# Caregiver Monorepo - React Native Apps

A modern React Native monorepo built with NX, featuring client and provider applications with shared UI components and styling system.

## 🏗️ Project Structure

```
caregiver-platform-app/
├── app/                          # Applications
│   ├── client/                   # Client React Native App
│   │   ├── src/
│   │   │   ├── App.tsx          # Main app component
│   │   │   ├── navigation/      # React Navigation setup
│   │   │   ├── screens/         # App screens
│   │   │   └── assets/          # App-specific assets
│   │   ├── android/             # Android native code
│   │   ├── ios/                 # iOS native code
│   │   ├── metro.config.js      # Metro bundler config
│   │   ├── package.json         # App dependencies
│   │   └── vite.config.ts       # Web build config
│   │
│   └── provider/                # Provider React Native App
│       ├── src/
│       │   ├── App.tsx          # Main app component
│       │   └── assets/          # App-specific assets
│       ├── android/             # Android native code
│       ├── ios/                 # iOS native code
│       ├── metro.config.js      # Metro bundler config
│       ├── package.json         # App dependencies
│       └── vite.config.ts       # Web build config
│
├── lib/                         # Shared Library
│   └── src/
│       ├── ui/                  # Reusable UI components
│       │   ├── Button.tsx       # Button component
│       │   └── index.ts         # UI exports
│       ├── styles/              # Shared styling system
│       │   └── base.ts          # Base styles and colors
│       └── index.ts             # Main library exports
│
├── node_modules/                # Dependencies
├── scripts/                     # Build and utility scripts
├── nx.json                      # NX workspace configuration
├── package.json                 # Root dependencies and scripts
├── tsconfig.base.json           # Base TypeScript configuration
├── eslint.config.mjs            # ESLint configuration
└── .prettierrc                  # Prettier configuration
```

## 🚀 Tech Stack

- **🏗️ Monorepo**: NX 21.6.5 for workspace management
- **📱 React Native**: 0.79.3 for mobile development
- **🌐 Web Support**: Vite for web builds with React Native Web
- **🎨 Styling**: React Native StyleSheet
- **🧭 Navigation**: React Navigation v6 (Stack + Bottom Tabs)
- **📝 TypeScript**: Full type safety across the workspace
- **🎯 Code Quality**: ESLint + Prettier for consistent code formatting
- **📦 Package Manager**: npm with workspace support

## ⚡ Quick Start

### Prerequisites

- **Node.js**: >= 20.x
- **npm**: >= 10.x
- **iOS Development**: Xcode 14+ (macOS only)
- **Android Development**: Android Studio + Android SDK
- **CocoaPods**: `sudo gem install cocoapods` (iOS only)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd caregiver-platorm-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install iOS dependencies** (iOS only)
   ```bash
   npm run pod-install
   ```

## 🏃‍♂️ Development Commands

### Client App

```bash
# Start Metro bundler
npm run client:start

# Run on iOS simulator
npm run client:ios

# Run on Android emulator/device
npm run client:android

# Run web version
npm run client:web

# Build for production
npm run client:build
```

### Provider App

```bash
# Start Metro bundler
npm run provider:start

# Run on iOS simulator
npm run provider:ios

# Run on Android emulator/device
npm run provider:android

# Run web version
npm run provider:web

# Build for production
npm run provider:build
```

### Workspace Commands

```bash
# Run all apps simultaneously
npm run build

# Lint all projects
npm run lint

# Run tests across workspace
npm run test

# Clean workspace and reinstall
npm run clean

# View project dependency graph
npm run graph

# Reset NX cache
npm run repair
```

## 📱 Navigation Structure

The apps use **React Navigation v6** with a hybrid navigation structure:

```typescript
// Navigation Hierarchy
RootStack (Stack Navigator)
├── MainTabs (Bottom Tab Navigator)
│   ├── Home
│   ├── Search
│   ├── Notifications
│   └── Messages
├── Profile
├── Settings
└── Details
```

### Navigation Usage

```typescript
// Navigate between screens
navigation.navigate('Profile', { userId: '123' })

// Go back
navigation.goBack()

// Navigate to tab
navigation.navigate('MainTabs', { screen: 'Home' })
```

## 🎨 Shared UI Library

### Component Usage

```typescript
// Import shared components
import Button from '@lib/ui/Button'
import { BaseStyle } from '@lib/styles/base'

// Use in your app
;<Button
  title="Primary Action"
  variant="primary"
  size="large"
  onPress={() => console.log('Pressed!')}
/>
```

### Available Components

- **Button**: Customizable button with multiple variants
  - Variants: `primary`, `secondary`, `outline`, `ghost`, `danger`
  - Sizes: `small`, `medium`, `large`
  - States: `loading`, `disabled`

### Path Aliases

```typescript
// Clean imports with path mapping
import Button from '@lib/ui/Button' // lib/src/ui/Button
import { BaseStyle } from '@lib/styles/base' // lib/src/styles/base
import { SomeUtil } from '@lib/utils' // lib/src/utils
```

## 🎯 Code Quality

### Linting & Formatting

```bash
# Lint all projects
npm run lint

# Format code with Prettier
npx prettier --write .

# Fix auto-fixable ESLint issues
npx eslint . --fix
```

### Git Hooks (Recommended)

```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": ["eslint --fix", "prettier --write"]
  }
}
```

## 🔧 Configuration

### TypeScript Path Mapping

```json
// tsconfig.base.json
{
  "compilerOptions": {
    "paths": {
      "@lib/*": ["lib/src/*"],
      "@ui/*": ["lib/src/ui/*"],
      "@styles/*": ["lib/src/styles/*"]
    }
  }
}
```

### Metro Configuration

```javascript
// app/client/metro.config.js
module.exports = withNxMetro(
  mergeConfig(defaultConfig, {
    resolver: {
      alias: {
        '@lib': '../../lib/src',
        '@ui': '../../lib/src/ui',
        '@styles': '../../lib/src/styles'
      }
    }
  })
)
```

## 📦 Building for Production

### Mobile Apps

```bash
# Build iOS
cd app/client/ios && xcodebuild -workspace Client.xcworkspace -scheme Client -configuration Release

# Build Android
cd app/client/android && ./gradlew assembleRelease
```

### Web Apps

```bash
# Build client web app
npm run client:build

# Build provider web app
npm run provider:build
```

## 🚨 Troubleshooting

### Common Issues

1. **Metro bundler issues**

   ```bash
   npm run clean
   npm run client:start -- --reset-cache
   ```

2. **iOS build failures**

   ```bash
   cd app/client/ios && pod install --repo-update
   ```

3. **Android build issues**

   ```bash
   cd app/client/android && ./gradlew clean
   ```

4. **TypeScript path resolution**
   - Ensure `tsconfig.base.json` paths are correctly configured
   - Restart your IDE/TypeScript service

### Performance Tips

- Use `--verbose` flag for detailed NX output
- Enable Metro bundler caching for faster rebuilds
- Use `nx affected` commands for large codebases
- Consider using `nx run-many` for parallel execution

## 🤝 Development Workflow

1. **Feature Development**

   ```bash
   # Create feature branch
   git checkout -b feature/new-component

   # Develop in shared library
   # Test in both apps
   npm run client:start
   npm run provider:start

   # Lint and format
   npm run lint
   npx prettier --write .
   ```

2. **Adding New Components**

   ```bash
   # Create component in lib/src/ui/
   # Export from lib/src/ui/index.ts
   # Import using @ui/* alias
   ```

3. **Adding New Screens**
   ```bash
   # Create screen in app/*/src/screens/
   # Add to navigation structure
   # Update navigation types
   ```

## 📝 Scripts Reference

| Command            | Description                                |
| ------------------ | ------------------------------------------ |
| `client:start`     | Start Metro bundler for client app         |
| `client:ios`       | Run client app on iOS simulator            |
| `client:android`   | Run client app on Android                  |
| `client:web`       | Run client app in web browser              |
| `provider:start`   | Start Metro bundler for provider app       |
| `provider:ios`     | Run provider app on iOS simulator          |
| `provider:android` | Run provider app on Android                |
| `provider:web`     | Run provider app in web browser            |
| `build`            | Build all apps for production              |
| `lint`             | Lint all projects in workspace             |
| `test`             | Run tests across workspace                 |
| `clean`            | Clean workspace and reinstall dependencies |
| `repair`           | Reset NX cache and repair workspace        |
| `graph`            | View project dependency graph              |
| `pod-install`      | Install iOS CocoaPods dependencies         |

## 📄 License

This project is licensed under the ISC License.

## 🙋‍♂️ Support

For questions and support:

- Check the [troubleshooting section](#-troubleshooting)
- Review NX documentation: https://nx.dev
- Review React Native documentation: https://reactnative.dev
- Review React Navigation documentation: https://reactnavigation.org
