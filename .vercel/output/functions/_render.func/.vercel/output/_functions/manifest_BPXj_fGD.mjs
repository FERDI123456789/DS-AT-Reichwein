import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_C0H_yr99.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_DAUWoVIA.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/ferdi/r-ds-at/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"datenschutz/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/datenschutz","isIndex":false,"type":"page","pattern":"^\\/datenschutz\\/?$","segments":[[{"content":"datenschutz","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/datenschutz.astro","pathname":"/datenschutz","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"ds-at-als-arbeitsgeber/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ds-at-als-arbeitsgeber","isIndex":false,"type":"page","pattern":"^\\/ds-at-als-arbeitsgeber\\/?$","segments":[[{"content":"ds-at-als-arbeitsgeber","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ds-at-als-arbeitsgeber.astro","pathname":"/ds-at-als-arbeitsgeber","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"impressum/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/impressum","isIndex":false,"type":"page","pattern":"^\\/impressum\\/?$","segments":[[{"content":"impressum","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/impressum.astro","pathname":"/impressum","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"innovation-nachhaltigkeit/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/innovation-nachhaltigkeit","isIndex":false,"type":"page","pattern":"^\\/innovation-nachhaltigkeit\\/?$","segments":[[{"content":"innovation-nachhaltigkeit","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/innovation-nachhaltigkeit.astro","pathname":"/innovation-nachhaltigkeit","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"karriere/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/karriere","isIndex":false,"type":"page","pattern":"^\\/karriere\\/?$","segments":[[{"content":"karriere","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/karriere.astro","pathname":"/karriere","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"kontakt/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/kontakt","isIndex":false,"type":"page","pattern":"^\\/kontakt\\/?$","segments":[[{"content":"kontakt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/kontakt.astro","pathname":"/kontakt","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"oems-und-partner/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/oems-und-partner","isIndex":false,"type":"page","pattern":"^\\/oems-und-partner\\/?$","segments":[[{"content":"oems-und-partner","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/oems-und-partner.astro","pathname":"/oems-und-partner","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"unsere-dienstleistung/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/unsere-dienstleistung","isIndex":false,"type":"page","pattern":"^\\/unsere-dienstleistung\\/?$","segments":[[{"content":"unsere-dienstleistung","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unsere-dienstleistung.astro","pathname":"/unsere-dienstleistung","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"unsere-zertifizierungen/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/unsere-zertifizierungen","isIndex":false,"type":"page","pattern":"^\\/unsere-zertifizierungen\\/?$","segments":[[{"content":"unsere-zertifizierungen","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unsere-zertifizierungen.astro","pathname":"/unsere-zertifizierungen","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"unsere-zusaetzlichen-benefits/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/unsere-zusaetzlichen-benefits","isIndex":false,"type":"page","pattern":"^\\/unsere-zusaetzlichen-benefits\\/?$","segments":[[{"content":"unsere-zusaetzlichen-benefits","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/unsere-zusaetzlichen-benefits.astro","pathname":"/unsere-zusaetzlichen-benefits","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/ferdi/r-ds-at/src/components/datenshutz/DataHero.astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/pages/datenschutz.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/datenschutz@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/components/impressum/ImpresHero.astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/pages/impressum.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/impressum@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/components/karriere/KarriereHero.astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/pages/karriere.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/karriere@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/components/kontakt/KontaktHero.astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/pages/kontakt.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/kontakt@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/components/geber/geberHero.astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/pages/ds-at-als-arbeitsgeber.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/ds-at-als-arbeitsgeber@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/components/IvNg/IvNgHero.astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/pages/innovation-nachhaltigkeit.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/innovation-nachhaltigkeit@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/components/Ud/UdHero.astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/pages/unsere-dienstleistung.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/unsere-dienstleistung@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/components/404/Header404.astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/components/Uz/UzHero.astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/pages/unsere-zertifizierungen.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/unsere-zertifizierungen@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/components/ui/Hero.astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/components/Zb/ZbHero.astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/pages/unsere-zusaetzlichen-benefits.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/unsere-zusaetzlichen-benefits@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/components/OP/OPHero.astro",{"propagation":"in-tree","containsHead":false}],["/home/ferdi/r-ds-at/src/pages/oems-und-partner.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/oems-und-partner@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/datenschutz@_@astro":"pages/datenschutz.astro.mjs","\u0000@astro-page:src/pages/impressum@_@astro":"pages/impressum.astro.mjs","\u0000@astro-page:src/pages/karriere@_@astro":"pages/karriere.astro.mjs","\u0000@astro-page:src/pages/kontakt@_@astro":"pages/kontakt.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/ds-at-als-arbeitsgeber@_@astro":"pages/ds-at-als-arbeitsgeber.astro.mjs","\u0000@astro-page:src/pages/innovation-nachhaltigkeit@_@astro":"pages/innovation-nachhaltigkeit.astro.mjs","\u0000@astro-page:src/pages/unsere-dienstleistung@_@astro":"pages/unsere-dienstleistung.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/unsere-zertifizierungen@_@astro":"pages/unsere-zertifizierungen.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/unsere-zusaetzlichen-benefits@_@astro":"pages/unsere-zusaetzlichen-benefits.astro.mjs","\u0000@astro-page:src/pages/oems-und-partner@_@astro":"pages/oems-und-partner.astro.mjs","/home/ferdi/r-ds-at/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/home/ferdi/r-ds-at/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_BPXj_fGD.mjs","/home/ferdi/r-ds-at/src/components/impressum/ImpresNavReact":"_astro/ImpresNavReact.CCYORe9I.js","/home/ferdi/r-ds-at/src/components/404/404NavReact":"_astro/404NavReact.CjYBUYCd.js","/home/ferdi/r-ds-at/src/components/IvNg/IvNgNavReact":"_astro/IvNgNavReact.DIdAM5Lr.js","/home/ferdi/r-ds-at/src/components/datenshutz/DataNavReact.tsx":"_astro/DataNavReact.Djnb4Mk0.js","/home/ferdi/r-ds-at/src/components/karriere/KarriereNavReact":"_astro/KarriereNavReact.CqztSxib.js","/home/ferdi/r-ds-at/src/components/geber/geberNavReact":"_astro/geberNavReact.CCZ6hhI9.js","/home/ferdi/r-ds-at/src/components/kontakt/KontaktNavReact":"_astro/KontaktNavReact.Dlt3lPL7.js","/home/ferdi/r-ds-at/src/components/OP/OPNavReact":"_astro/OPNavReact.CKx_Olax.js","/home/ferdi/r-ds-at/src/components/Ud/UdNavReact":"_astro/UdNavReact.Dha5DipQ.js","/home/ferdi/r-ds-at/src/components/Uz/UzNavReact":"_astro/UzNavReact.BGIykKsF.js","/home/ferdi/r-ds-at/src/components/Zb/ZbNavReact":"_astro/ZbNavReact.DsgjEWRP.js","/home/ferdi/r-ds-at/src/components/NavReact":"_astro/NavReact.BZ3IaASS.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","/astro/hoisted.js?q=0":"_astro/hoisted.2daoxv0f.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/Reichwein50.CSbVP35H.png","/_astro/Stellantis.gqBoalgE.png","/_astro/ATP.C-Mwd6sY.png","/_astro/august-bertrams-gmbh.VRy6VT_4.png","/_astro/bmw-langenhahn.BWWTBo3y.png","/_astro/Continental_Logo_Tagline_Black_sRGB.DNObjZ7K.png","/_astro/cosmo.Cjl9kSSv.png","/_astro/faktmotion_schwarz.V8KtWNQO.png","/_astro/flaggen5.mQ4nqas8.png","/_astro/gts.opA5UJf0.png","/_astro/hirsch.uPaDRpr5.png","/_astro/Hankook.DFlODI7f.png","/_astro/Logo_DUNLOP_TECH_GmbH_dt_3000px.C_ViwCoM.png","/_astro/ice-makers.ClYUP1cx.png","/_astro/nexen.Bl9-tDYo.png","/_astro/petschak.C11EGxcR.png","/_astro/schade.MRP1qBuB.png","/_astro/sri-e.DF_5gL_E.png","/_astro/Racelogic_VBAU-Blue.Lppkyj3E.png","/_astro/techauto.CUs4T1Ir.png","/_astro/WuR.GLdIU-JP.png","/_astro/john-busch.DQ1rhCG7.png","/_astro/1200px-Bosch-logotype.9Z3LpAkG.png","/_astro/Logo-neu-goethling_s.D4qKav4I.png","/_astro/logo-blue.CUAGM8xW.svg","/_astro/180912_NTC_Logo-blau-600x111.BKx90qJy.png","/_astro/Michelin_(2017).Cbr-PVFF.png","/_astro/dekra_cut.CqZ2SkAg.png","/_astro/stahlgruber.Bd71al-W.png","/_astro/tuev-nord.HXxxnFmW.png","/_astro/logo.DAyEcQT0.svg","/_astro/pirelli.DfGaN-Uk.png","/_astro/logo_Magna-white.61L2meIA.svg","/_astro/Flaggen_1170.7a7y-5mj.jpg","/_astro/tisax.B9n9QPpH.png","/_astro/IHK.BucmJ1UX.png","/_astro/AVL.Bvgd3zpS.png","/_astro/Betriebsrente.UzmeSl4O.png","/_astro/Eigenverantwortlciches-Arbeiten.CiUdWr9q.png","/_astro/Einkommensschutz.8TO2SplJ.png","/_astro/Faire-Entlohnung.DEz2PEu1.png","/_astro/Flache-Hierarchien.Dxmcqphq.png","/_astro/Gesundheitskonto.DYW5mJbS.png","/_astro/Jobrad.OmTtebTj.png","/_astro/Jubilaeumszahlung.DX9UX2TF.png","/_astro/Motivierte-Kollegen.nN0Wr6nN.png","/_astro/Sicherheitsairbag._4YooxfA.png","/_astro/auto.DoRlomFV.png","/_astro/Teilhabe-am-Erfolg.D7917nxd.png","/_astro/Top-Konditionen.CmIVPXTd.png","/_astro/Wachstum.BXoiW3g4.png","/_astro/Weiterentwicklung.BFKOqo_O.png","/_astro/datenschutz.DFPtBBVg.css","/Favicon.png","/Reichwein50.png","/favicon.svg","/shutterstock_591685676.jpg","/_astro/404NavReact.CjYBUYCd.js","/_astro/DataNavReact.Djnb4Mk0.js","/_astro/ImpresNavReact.CCYORe9I.js","/_astro/IvNgNavReact.DIdAM5Lr.js","/_astro/KarriereNavReact.CqztSxib.js","/_astro/KontaktNavReact.Dlt3lPL7.js","/_astro/NavReact.BZ3IaASS.js","/_astro/OPNavReact.CKx_Olax.js","/_astro/UdNavReact.Dha5DipQ.js","/_astro/UzNavReact.BGIykKsF.js","/_astro/ZbNavReact.DsgjEWRP.js","/_astro/client.BIGLHmRd.js","/_astro/geberNavReact.CCZ6hhI9.js","/_astro/hoisted.2daoxv0f.js","/_astro/index.DhYZZe0J.js","/_astro/jsx-runtime.7faW4zRM.js","/404.html","/datenschutz/index.html","/ds-at-als-arbeitsgeber/index.html","/impressum/index.html","/innovation-nachhaltigkeit/index.html","/karriere/index.html","/kontakt/index.html","/oems-und-partner/index.html","/unsere-dienstleistung/index.html","/unsere-zertifizierungen/index.html","/unsere-zusaetzlichen-benefits/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"lSSCPjQOyKi1sPKEMdxSUD/Alb5SzzaLWUF6cx1QcFc=","experimentalEnvGetSecretEnabled":false});

export { manifest };
