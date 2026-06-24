# TODO - React Router + Vercel routing fixes

- [ ] Inspect current routing usage and existing entry points (done: reviewed main.jsx/App.jsx/Nav components)
- [x] Update `package.json` to add `react-router-dom`
- [x] Update `src/main.jsx` to wrap app with `BrowserRouter`
- [x] Update `src/App.jsx` to configure `<Routes>` including:

  - [ ] Route `/` (home)
  - [ ] Route(s) for `/products`, `/about`, `/contact` (render same sections)
  - [ ] Fallback `*` route redirect to `/`
- [ ] Add `vercel.json` with rewrites so Vercel always serves `index.html`
- [ ] Run `npm install`, `npm run build` to validate
- [ ] Deploy to Vercel and verify deep-link + refresh from external apps

