
# FITNESS365 - Expo project (ready for GitHub & EAS Build)

This repository is prepared to be pushed to GitHub and connected to Expo EAS Cloud Build.
Owner in app.json is set to: **Paulo_P.J**

## How to use

1. Extract this project and `cd` into it.
2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Login to Expo (use your account `Paulo_P.J`):
```bash
eas login
```

4. (Optional) Configure EAS:
```bash
eas build:configure
```

5. Trigger a cloud build for Android (AAB) or preview APK:
```bash
# Production (App Bundle for Play Store)
eas build -p android --profile production

# Quick APK (preview)
eas build -p android --profile preview
```

6. When the build completes, Expo will provide a link where you can download the APK/AAB.

## Structure
- App.js (entry)
- screens/ (Home, Workouts, Nutrition, Profile)
- assets/ (icons & splash)
- app.json, eas.json, package.json

## Notes
- Update `app.json` owner if needed.
- Add real icons and splash images in `assets/` before building for production.
