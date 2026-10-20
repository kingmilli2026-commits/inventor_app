# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Deploying to shared hosting

The GitHub Actions workflow builds the app and deploys the contents of `dist/` to the FTP destination when code is pushed to `main`. You can also run it manually from the Actions tab.

Add these repository secrets under **Settings → Secrets and variables → Actions**:

- `FTP_SERVER`: FTP server hostname, without a protocol prefix.
- `FTP_USERNAME`: FTP account username.
- `FTP_PASSWORD`: FTP account password.
- `FTP_SERVER_DIR`: destination directory on the server, such as `public_html/`. Use the directory for this app's document root.

The deployment uses `npm ci` and `npm run build`; it does not upload the source files.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
