# BPAS Quick Start Guide

## Prerequisites
- Node.js 18.0.0 or higher
- npm 9.0.0 or higher (comes with Node.js)

## Installation & Running

### Step 1: Install Dependencies
Open terminal in the project directory and run:
```bash
npm install
```

This will install all required packages:
- React 18.2
- TypeScript 5.3
- Tailwind CSS 3.4
- Framer Motion 10.16
- Recharts 2.10
- And more...

### Step 2: Start Development Server
```bash
npm run dev
```

The application will automatically:
- Start on `http://localhost:3000`
- Open in your default browser
- Enable hot module replacement (HMR)

### Step 3: Login
Use the following credentials to test:
- **Email**: any-email@example.com
- **Password**: any 6+ character password
- **OTP**: 123456 (any 6 digits work)
- **Biometric**: Will auto-complete

## Available Commands

```bash
# Development
npm run dev          # Start dev server with HMR

# Production
npm run build        # Create optimized build
npm run preview      # Preview production build locally

# Quality Assurance
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types
```

## Project Structure

```
📁 BPAS Prototype
├── 📄 package.json               # Dependencies & scripts
├── 📄 vite.config.ts            # Vite configuration
├── 📄 tsconfig.json             # TypeScript configuration
├── 📄 tailwind.config.ts        # Tailwind CSS config
├── 📄 postcss.config.js         # PostCSS configuration
├── 📄 index.html                # HTML entry point
├── 📄 README.md                 # Full documentation
│
└── 📁 src/
    ├── 📄 main.tsx              # React app entry
    ├── 📄 index.css             # Global styles
    ├── 📄 App.tsx               # Main app with routing
    │
    ├── 📁 components/
    │   ├── 📄 Card.tsx          # Card UI component
    │   └── 📄 Layout.tsx        # Layout wrapper
    │
    ├── 📁 hooks/
    │   └── 📄 useAuth.ts        # Auth context hook
    │
    └── 📁 screens/ (16+ screens)
        ├── 📄 SplashScreen.tsx
        ├── 📄 LoginScreen.tsx
        ├── 📄 DashboardScreen.tsx
        ├── 📄 BatteryIdentityScreen.tsx
        ├── 📄 QRScanScreen.tsx
        ├── 📄 QRVerificationScreen.tsx
        ├── 📄 CybersecurityDashboardScreen.tsx
        ├── 📄 SecurityScanScreen.tsx
        ├── 📄 SecurityScanProgressScreen.tsx
        ├── 📄 SecurityScanReportScreen.tsx
        ├── 📄 AIBatteryHealthScreen.tsx
        ├── 📄 BatteryPassportScreen.tsx
        ├── 📄 OwnershipTransferScreen.tsx
        ├── 📄 OwnershipOTPScreen.tsx
        ├── 📄 OwnershipVerificationScreen.tsx
        ├── 📄 ServiceHistoryScreen.tsx
        ├── 📄 IncidentTimelineScreen.tsx
        ├── 📄 NotificationsScreen.tsx
        ├── 📄 EmergencyLockScreen.tsx
        ├── 📄 ProfileScreen.tsx
        ├── 📄 SettingsScreen.tsx
        ├── 📄 AdminDashboardScreen.tsx
        └── 📄 ChatbotScreen.tsx
```

## Testing the App

### Default Login Credentials
- **Email**: test@example.com
- **Password**: password123
- **OTP**: 123456
- **Biometric**: Auto-completes

### Sample Actions to Test

1. **Dashboard Navigation**
   - Explore all quick action cards
   - Check real-time metrics with animations

2. **QR Verification**
   - Navigate to "Scan QR"
   - Click "Authentic", "Counterfeit", or "Tampered" buttons
   - View detailed verification results

3. **Security Scanning**
   - Start from Cybersecurity Dashboard
   - Run the full security scan
   - Watch the progress animation
   - View comprehensive report

4. **Ownership Transfer**
   - Enter new owner email
   - Go through OTP verification
   - View successful blockchain transfer

5. **Admin Dashboard**
   - View fleet analytics
   - Check attack heatmaps
   - Monitor compromised batteries

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Build & Deployment

### Development Build
```bash
npm run build
```
Creates optimized production files in the `dist/` folder.

### Deploy to Production
1. Build the app: `npm run build`
2. Deploy the `dist/` folder to your hosting provider:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3
   - Or any static hosting service

## Performance Tips

- The app uses code splitting via Vite
- All animations are GPU-accelerated
- Charts are optimized with Recharts
- Images are auto-optimized

## Troubleshooting

**Issue**: Port 3000 already in use
```bash
# Use a different port
npm run dev -- --port 3001
```

**Issue**: Node modules not found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Issue**: TypeScript errors
```bash
# Run type check
npm run type-check
```

## Next Steps

1. **Customize Styling**: Edit `tailwind.config.ts` and `src/index.css`
2. **Add Backend**: Connect API endpoints in components
3. **Add State Management**: Integrate Redux or Zustand for complex state
4. **Add Testing**: Set up Jest and React Testing Library
5. **Deploy**: Follow deployment guide above

## Support & Documentation

- React: https://react.dev
- TypeScript: https://www.typescriptlang.org
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion
- Vite: https://vitejs.dev

---

**Happy coding! 🚀**
BPAS - Battery Pack Aadhaar System v1.0
