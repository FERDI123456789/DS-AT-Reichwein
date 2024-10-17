import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BprkRl0q.mjs';
import { manifest } from './manifest_7boaqaqf.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/datenschutz.astro.mjs');
const _page3 = () => import('./pages/ds-at-als-arbeitsgeber.astro.mjs');
const _page4 = () => import('./pages/impressum.astro.mjs');
const _page5 = () => import('./pages/innovation-nachhaltigkeit.astro.mjs');
const _page6 = () => import('./pages/karriere.astro.mjs');
const _page7 = () => import('./pages/kontakt.astro.mjs');
const _page8 = () => import('./pages/oems-und-partner.astro.mjs');
const _page9 = () => import('./pages/unsere-dienstleistung.astro.mjs');
const _page10 = () => import('./pages/unsere-zertifizierungen.astro.mjs');
const _page11 = () => import('./pages/unsere-zusaetzlichen-benefits.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/datenschutz.astro", _page2],
    ["src/pages/ds-at-als-arbeitsgeber.astro", _page3],
    ["src/pages/impressum.astro", _page4],
    ["src/pages/innovation-nachhaltigkeit.astro", _page5],
    ["src/pages/karriere.astro", _page6],
    ["src/pages/kontakt.astro", _page7],
    ["src/pages/oems-und-partner.astro", _page8],
    ["src/pages/unsere-dienstleistung.astro", _page9],
    ["src/pages/unsere-zertifizierungen.astro", _page10],
    ["src/pages/unsere-zusaetzlichen-benefits.astro", _page11],
    ["src/pages/index.astro", _page12]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b362f82b-d0e2-4edb-aae1-77a074007d0d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
