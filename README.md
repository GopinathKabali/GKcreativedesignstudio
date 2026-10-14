# GK Creative Design Studio

Website source exported from Hostinger Horizons. Built with React, Vite, and Tailwind CSS.

## Run locally

Use Node.js 22 (see `.nvmrc`). From the repository root:

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Edit the website

- Pages: `apps/web/src/pages/`
- Header, footer, and shared components: `apps/web/src/components/`
- Routes: `apps/web/src/App.jsx`
- Styling: `apps/web/src/index.css` and `apps/web/tailwind.config.js`

## Production build

```sh
npm run build
```

The generated site is in `dist/apps/web`. Configure your hosting service to serve this directory and route application URLs back to `index.html`.

Images currently reference external Hostinger and other image services. Keep those assets available or replace the links with your own assets.

The original export ZIP remains in this repository as a backup. Updating GitHub does not automatically update a live Hostinger site unless deployment is configured.
