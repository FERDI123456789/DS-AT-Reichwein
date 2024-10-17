/* empty css                                       */
import { c as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DReZCw7e.mjs';
import 'kleur/colors';
import { $ as $$Layout, r as reichwein } from '../chunks/Reichwein50_CRyE6Z0x.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                               */
import { a as $$Image } from '../chunks/_astro_assets_dJ9FQuWX.mjs';
export { renderers } from '../renderers.mjs';

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOne, setMenuOne] = useState(false);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx("nav", { className: "font-inter mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20", children: [
    /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("img", { src: "/public/Reichwein50.png", alt: "Reichwein", width: "200px", className: "md:w-80" }) }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0 ${isOpen ? "" : "hidden"}`,
        children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/",
              className: "font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-red-500",
              children: "Home"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/kontakt",
              className: "font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-red-500",
              children: "Kontakt"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/karriere",
              className: "font-inter lg: rounded-lg pb-8 lg:px-6 lg:py-4 lg: lg:hover:text-red-500",
              children: "Karriere"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setMenuOne(!menuOne),
                className: `flex flex-row rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-red-500 ${menuOne ? "text-gray-800 lg:border lg:border-gray-600 lg:bg-gray-50" : "text-black lg:border lg:border-white"}`,
                children: [
                  "Über uns",
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: `w-6 h-6 fill-current transition-transform duration-300 ${menuOne ? "rotate-180" : "rotate-0"}`,
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ jsx("path", { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" })
                    }
                  )
                ]
              }
            ),
            menuOne && /* @__PURE__ */ jsxs("div", { className: " z-50 flex w-full flex-col rounded-lg px-5 py-5 lg:absolute lg:top-20 lg:right-1 lg:w-[800px] bg-gray-100 lg:flex-row lg:flex-wrap lg:py-7 xl:w-[950px]", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  className: "flex grow flex-col rounded-lg px-5 py-5  lg:basis-60 xl:px-8",
                  href: "/unsere-dienstleistung",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "relative bg-black w-12 p-1 rounded-lg ", children: /* @__PURE__ */ jsx("img", { src: "../../public/Favicon.png", alt: "Reichwein", width: "100", className: "transition ease-in-out lg:hover:rotate-90" }) }),
                    /* @__PURE__ */ jsx("h2", { className: "font-inter mb-1 mt-5 text-lg font-medium text-black lg:hover:text-red-500", children: "Unsere Dienstleistungen" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  className: "flex grow flex-col rounded-lg px-5 py-5  lg:basis-60 xl:px-8",
                  href: "/innovation-nachhaltigkeit",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "relative bg-black w-12 p-1 rounded-lg", children: /* @__PURE__ */ jsx("img", { src: "../../public/Favicon.png", alt: "Reichwein", width: "100", className: "transition ease-in-out lg:hover:rotate-90" }) }),
                    /* @__PURE__ */ jsx("h2", { className: "font-inter mb-1 mt-5 text-lg font-medium text-black lg:hover:text-red-500", children: "Innovationen, Nachhaltigkeit" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  className: "flex grow flex-col rounded-lg px-5 py-5  lg:basis-60 xl:px-8",
                  href: "/unsere-zertifizierungen",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "relative bg-black w-12 p-1 rounded-lg", children: /* @__PURE__ */ jsx("img", { src: "../../public/Favicon.png", alt: "Reichwein", width: "100", className: "transition ease-in-out lg:hover:rotate-90" }) }),
                    /* @__PURE__ */ jsx("h2", { className: "font-inter mb-1 mt-5 text-lg font-medium text-black lg:hover:text-red-500", children: "Unsere Zertifizierungen" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  className: "flex grow flex-col rounded-lg px-5 py-5  lg:basis-60 xl:px-8",
                  href: "/ds-at-als-arbeitsgeber",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "relative bg-black w-12 p-1 rounded-lg", children: /* @__PURE__ */ jsx("img", { src: "../../public/Favicon.png", alt: "Reichwein", width: "100", className: "transition ease-in-out lg:hover:rotate-90" }) }),
                    /* @__PURE__ */ jsx("h2", { className: "font-inter mb-1 mt-5 text-lg font-medium text-black lg:hover:text-red-500", children: "DS-AT als Arbeitgeber" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  className: "flex grow flex-col rounded-lg px-5 py-5  lg:basis-60 xl:px-8",
                  href: "/unsere-zusaetzlichen-benefits",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "relative bg-black w-12 p-1 rounded-lg", children: /* @__PURE__ */ jsx("img", { src: "../../public/Favicon.png", alt: "Reichwein", width: "100", className: "transition ease-in-out lg:hover:rotate-90" }) }),
                    /* @__PURE__ */ jsx("h2", { className: "font-inter mb-1 mt-5 text-lg font-medium text-black lg:hover:text-red-500", children: "Unsere zusätzlichen Benefits" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  className: "flex grow flex-col rounded-lg px-5 py-5 lg:basis-60 xl:px-8",
                  href: "/oems-und-partner",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "relative bg-black w-12 p-1 rounded-lg", children: /* @__PURE__ */ jsx("img", { src: "../../public/Favicon.png", alt: "Reichwein", width: "100", className: "transition ease-in-out lg:hover:rotate-90" }) }),
                    /* @__PURE__ */ jsx("h2", { className: "font-inter mb-1 mt-5 text-lg font-medium text-black lg:hover:text-red-500", children: "OEMs und Partner" })
                  ]
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "absolute right-5 lg:hidden",
        onClick: () => {
          setIsOpen(!isOpen);
        },
        children: /* @__PURE__ */ jsxs(
          "svg",
          {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M3.75 12H20.25",
                  stroke: "#160042",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M3.75 6H20.25",
                  stroke: "#160042",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M3.75 18H20.25",
                  stroke: "#160042",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }
              )
            ]
          }
        )
      }
    )
  ] }) }) }) });
};

const $$Header404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404Header", "data-astro-cid-f3duyyzu": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header data-astro-cid-f3duyyzu> <!-- Hero Container --> <div class="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20" data-astro-cid-f3duyyzu> <!-- Component --> <div class="mx-auto mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16" data-astro-cid-f3duyyzu> <!-- Hero Title --> <h1 class="mb-4 text-4xl font-bold md:text-6xl" data-astro-cid-f3duyyzu> 404 Page </h1> <h3 class="mb-4 text-sm font-bold text-red-500 md:text-6xl" data-astro-cid-f3duyyzu></h3> <p class="mx-auto mb-5 max-w-full text-sm text-gray-500 sm:text-xl md:mb-6 lg:mb-8" data-astro-cid-f3duyyzu> Keine seite mit diesem namen gefunden </p> <!-- Hero Button --> <div class="flex items-stretch justify-center" data-astro-cid-f3duyyzu> <a href="/" class="mr-5 inline-block rounded-md bg-black px-8 py-4 text-center font-semibold text-white md:mr-6 lg:mr-8" data-astro-cid-f3duyyzu> Home </a> </div> </div> </div> </header> ` })} `;
}, "/home/ferdi/r-ds-at/src/components/404/Header404.astro", void 0);

const $$Hero404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Hero", "data-astro-cid-zfdv7yco": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="gradient-bg" style="margin-top: -100px;" data-astro-cid-zfdv7yco> <!-- Container --> <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20" data-astro-cid-zfdv7yco> <!-- Title --> <h2 id="warum" class="text-black mx-auto max-w-2xl text-center text-3xl mb-5 font-bold md:text-5xl md:mb-12 lg:mb-16" data-astro-cid-zfdv7yco> Hast du eine von denn gesucht? </h2> <section data-astro-cid-zfdv7yco> <!-- Content --> <div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3" data-astro-cid-zfdv7yco> <!-- Item --> <a href="/unsere-dienstleistung" class="rounded-3xl hover-gradient bg-white text-black flex-col flex items-start justify-between border border-black p-10 h-72 hover:text-white transition" data-astro-cid-zfdv7yco> <div class=" flex w-full items-center justify-between" data-astro-cid-zfdv7yco> <h5 class="text-xl font-bold" data-astro-cid-zfdv7yco>Unsere Dienstleistungen</h5> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-zfdv7yco> <path d="M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zfdv7yco></path> <path d="M8.25 6H18V15.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zfdv7yco></path> </svg> </div> <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 32 32" data-astro-cid-zfdv7yco><path fill="currentColor" d="M21.5 2.5v1.406a5.6 5.6 0 0 0-2.28.938l-1.032-.97l-1.375 1.47l1 .937a5.7 5.7 0 0 0-.907 2.22H15.5v2h1.406c.146.83.474 1.586.938 2.25l-1.063 1.03l1.44 1.44l1.03-1.064c.664.464 1.42.792 2.25.938V16.5h2v-1.406a5.7 5.7 0 0 0 2.22-.906l.936 1l1.47-1.376l-.97-1.03c.47-.67.79-1.445.938-2.282H29.5v-2h-1.406a5.6 5.6 0 0 0-.938-2.25l.938-.938l-1.407-1.406l-.937.938a5.6 5.6 0 0 0-2.25-.938V2.5zm1 3.313A3.664 3.664 0 0 1 26.188 9.5c0 2.055-1.633 3.688-3.688 3.688s-3.688-1.633-3.688-3.688s1.633-3.688 3.688-3.688zM9.53 11.718l-1.842.75l.718 1.81a6.94 6.94 0 0 0-2.344 2.314l-1.78-.72l-.75 1.845l1.78.718a6.8 6.8 0 0 0-.218 1.656c0 .57.085 1.126.218 1.656l-1.78.72l.75 1.843l1.78-.72a6.9 6.9 0 0 0 2.344 2.345l-.72 1.78l1.845.75l.72-1.78a6.8 6.8 0 0 0 1.656.218c.57 0 1.128-.085 1.656-.218l.72 1.78l1.843-.75l-.72-1.78a6.9 6.9 0 0 0 2.314-2.344l1.81.718l.75-1.843l-1.81-.72c.13-.53.218-1.087.218-1.656c0-.57-.087-1.128-.22-1.657l1.813-.718l-.75-1.845l-1.81.72a6.9 6.9 0 0 0-2.314-2.314l.72-1.81l-1.845-.75l-.717 1.81a7 7 0 0 0-1.657-.217c-.57 0-1.126.086-1.656.218l-.72-1.81zm2.376 3.592c2.663 0 4.78 2.12 4.78 4.782c.002 2.663-2.117 4.812-4.78 4.812a4.806 4.806 0 0 1-4.812-4.812c0-2.663 2.15-4.782 4.812-4.782" data-astro-cid-zfdv7yco></path></svg> </a> <!-- Item --> <a href="/innovation-nachhaltigkeit" class="rounded-3xl hover-gradient bg-white flex-col flex items-start justify-between border border-black p-10 h-72 hover:bg-red-600 hover:text-white transition" data-astro-cid-zfdv7yco> <div class=" flex w-full items-center justify-between" data-astro-cid-zfdv7yco> <h5 class="text-xl font-bold" data-astro-cid-zfdv7yco>Innovationen, Nachhaltigkeit</h5> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-zfdv7yco> <path d="M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zfdv7yco></path> <path d="M8.25 6H18V15.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zfdv7yco></path> </svg> </div> <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 32 32" data-astro-cid-zfdv7yco><path fill="currentColor" d="M21.57 27.75A12.9 12.9 0 0 1 16 29C8.832 29 3 23.168 3 16c0-3.075 1.057-5.979 3-8.308V10h2V4H2v2h2.842A14.86 14.86 0 0 0 1 16c0 8.271 6.729 15 15 15a14.9 14.9 0 0 0 6.43-1.444z" data-astro-cid-zfdv7yco></path><path fill="currentColor" d="M21 9c-3.16 0-5.751 2.457-5.978 5.56A5.97 5.97 0 0 0 11 13H7v4c0 3.309 2.692 6 6 6h2v4h2v-8h2c3.308 0 6-2.691 6-6V9zm-8 12c-2.206 0-4-1.794-4-4v-2h2c2.206 0 4 1.794 4 4v.586l-2.293-2.293l-1.414 1.414L13.586 21zm10-8c0 2.206-1.794 4-4 4h-.586l2.293-2.293l-1.414-1.414L17 15.586V15c0-2.206 1.794-4 4-4h2z" data-astro-cid-zfdv7yco></path><path fill="currentColor" d="M31 16c0-8.271-6.729-15-15-15a14.9 14.9 0 0 0-6.43 1.444l.86 1.806A12.9 12.9 0 0 1 16 3c7.168 0 13 5.832 13 13c0 3.075-1.057 5.979-3 8.308V22h-2v6h6v-2h-2.842A14.86 14.86 0 0 0 31 16" data-astro-cid-zfdv7yco></path></svg> </a> <!-- Item --> <a href="/unsere-zertifizierungen" class="rounded-3xl hover-gradient bg-white flex-col flex items-start justify-between border border-black p-10 h-72 hover:bg-red-600 hover:text-white transition" data-astro-cid-zfdv7yco> <div class=" flex w-full items-center justify-between" data-astro-cid-zfdv7yco> <h5 class="text-xl font-bold" data-astro-cid-zfdv7yco>Unsere Zertifizierungen</h5> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-zfdv7yco> <path d="M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zfdv7yco></path> <path d="M8.25 6H18V15.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zfdv7yco></path> </svg> </div> <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24" data-astro-cid-zfdv7yco><g fill="none" data-astro-cid-zfdv7yco><path fill="currentColor" d="m15 22l-.555.832A1 1 0 0 0 16 22zm-3-2l.555-.832a1 1 0 0 0-1.11 0zm-3 2H8a1 1 0 0 0 1.555.832zM8.75 3.537l-.08.997zm1.685-.697l-.762-.648zM6.532 5.686l-.997.08zm2.154-2.154l.08-.997zM5.84 7.435l.648.761zm.697-1.684l.997-.08zm-.747 4.772l-.648.762zm0-3.046l-.648-.762zm.747 4.772l-.997-.08zm-.697-1.684l.648-.761zm2.846 3.903l.08.997zm-2.154-2.154l.997.08zm3.903 2.846l.761-.648zm-1.684-.697l-.08-.997zm4.772.747l.762.648zm-3.046 0l-.762.648zm4.772-.747l.08-.997zm-1.684.697l-.761-.648zm3.903-2.846l.997-.08zm-2.154 2.154l-.08.997zm2.846-3.903l.648.762zm-.697 1.684l-.997.08zm.747-4.772l.648-.762zm0 3.046l-.648-.761zm-.747-4.772l-.997-.08zm.697 1.684l-.648.761zm-2.846-3.903l-.08-.997zm2.154 2.154l.997.08zM13.565 2.84l.762-.648zm1.684.697l.08.997zm-1.726-.747l-.761.648zm-3.046 0l.761.648zM9 14.458l.044-.999zm6.555 6.71l-3-2l-1.11 1.664l3 2zm-4.11-2l-3 2l1.11 1.664l3-2zm1.317-15.73l.042.05l1.523-1.296l-.042-.05zm2.567 1.096l.065-.005l-.16-1.994l-.065.005zm1.142 1.072l-.005.065l1.994.16l.005-.065zm1.041 2.59l.05.042l1.296-1.523l-.05-.042zm.05 1.566l-.05.042l1.296 1.523l.05-.042zm-1.096 2.567l.005.065l1.994-.16l-.005-.065zm-1.072 1.142l-.065-.005l-.16 1.994l.065.005zm-2.59 1.041l-.042.05l1.523 1.296l.042-.05zm-1.566.05l-.042-.05l-1.523 1.296l.042.05zm-2.567-1.096l-.065.005l.16 1.994l.065-.005zm-1.142-1.072l.005-.065l-1.994-.16l-.005.065zm-1.041-2.59l-.05-.042l-1.296 1.523l.05.042zm-.05-1.566l.05-.042l-1.296-1.523l-.05.042zm1.096-2.567l-.005-.065l-1.994.16l.005.065zm1.072-1.142l.065.005l.16-1.994l-.065-.005zm2.59-1.041l.042-.05l-1.523-1.296l-.042.05zM8.671 4.534a3 3 0 0 0 2.525-1.046L9.673 2.192a1 1 0 0 1-.842.348zM7.529 5.606a1 1 0 0 1 1.077-1.077l.16-1.994a3 3 0 0 0-3.23 3.231zm-1.041 2.59a3 3 0 0 0 1.046-2.525l-1.994.16a1 1 0 0 1-.348.842zm-.05 1.566a1 1 0 0 1 0-1.524L5.142 6.715a3 3 0 0 0 0 4.57zm1.096 2.567a3 3 0 0 0-1.046-2.525l-1.296 1.523a1 1 0 0 1 .348.842zm1.072 1.142a1 1 0 0 1-1.077-1.077l-1.994-.16a3 3 0 0 0 3.231 3.23zm4.156 1.09a1 1 0 0 1-1.524 0l-1.523 1.297a3 3 0 0 0 4.57 0zm3.71-2.167a1 1 0 0 1-1.078 1.077l-.16 1.994a3 3 0 0 0 3.23-3.231zm1.04-2.59a3 3 0 0 0-1.046 2.525l1.994-.16a1 1 0 0 1 .348-.842zm.05-1.566a1 1 0 0 1 0 1.524l1.296 1.523a3 3 0 0 0 0-4.57zm-1.096-2.567a3 3 0 0 0 1.046 2.525l1.296-1.523a1 1 0 0 1-.348-.842zm-1.072-1.142a1 1 0 0 1 1.077 1.077l1.994.16a3 3 0 0 0-3.231-3.23zm-2.59-1.041a3 3 0 0 0 2.525 1.046l-.16-1.994a1 1 0 0 1-.842-.348zm1.48-1.346a3 3 0 0 0-4.569 0l1.523 1.296a1 1 0 0 1 1.524 0zm-3.088 12.37a3 3 0 0 0-2.152-1.053l-.088 1.998a1 1 0 0 1 .717.351zM9.044 13.46a3 3 0 0 0-.373.007l.16 1.994a1 1 0 0 1 .125-.003zM10 22v-7.542H8V22zm5.33-8.534a3 3 0 0 0-.374-.007l.088 1.998a1 1 0 0 1 .125.003zm-.374-.007a3 3 0 0 0-2.152 1.053l1.523 1.296a1 1 0 0 1 .717-.35zm-.956 1V22h2v-7.542z" data-astro-cid-zfdv7yco></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 8l-3 3l-1-1" data-astro-cid-zfdv7yco></path></g></svg> </a> <!-- Item --> <a href="/ds-at-als-arbeitsgeber" class="rounded-3xl hover-gradient-bottom bg-white flex-col flex items-start justify-between border border-black p-10 h-72 hover:bg-red-600 hover:text-white transition" data-astro-cid-zfdv7yco> <div class=" flex w-full items-center justify-between" data-astro-cid-zfdv7yco> <h5 class="text-xl font-bold" data-astro-cid-zfdv7yco>DS-AT als Arbeitgeber</h5> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-zfdv7yco> <path d="M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zfdv7yco></path> <path d="M8.25 6H18V15.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zfdv7yco></path> </svg> </div> <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24" data-astro-cid-zfdv7yco><g fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-zfdv7yco><path stroke-linecap="round" stroke-linejoin="round" d="m16.719 19.752l-.64-5.124A3 3 0 0 0 13.101 12h-2.204a3 3 0 0 0-2.976 2.628l-.641 5.124A2 2 0 0 0 9.266 22h5.468a2 2 0 0 0 1.985-2.248" data-astro-cid-zfdv7yco></path><circle cx="12" cy="5" r="3" data-astro-cid-zfdv7yco></circle><circle cx="4" cy="9" r="2" data-astro-cid-zfdv7yco></circle><circle cx="20" cy="9" r="2" data-astro-cid-zfdv7yco></circle><path stroke-linecap="round" stroke-linejoin="round" d="M4 14h-.306a2 2 0 0 0-1.973 1.671l-.333 2A2 2 0 0 0 3.361 20H7m13-6h.306a2 2 0 0 1 1.973 1.671l.333 2A2 2 0 0 1 20.639 20H17" data-astro-cid-zfdv7yco></path></g></svg> </a> <!-- Item --> <a href="/unsere-zusaetzlichen-benefits" class="rounded-3xl hover-gradient-bottom bg-white flex-col flex items-start justify-between border border-black p-10 h-72 hover:bg-red-600 hover:text-white transition" data-astro-cid-zfdv7yco> <div class=" flex w-full items-center justify-between" data-astro-cid-zfdv7yco> <h5 class="text-xl font-bold" data-astro-cid-zfdv7yco>Unsere zusätzlichen Benefits</h5> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-zfdv7yco> <path d="M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zfdv7yco></path> <path d="M8.25 6H18V15.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zfdv7yco></path> </svg> </div> <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24" data-astro-cid-zfdv7yco><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.635 14.415l1.039-2.203a.357.357 0 0 1 .652 0l1.04 2.203l2.323.356c.298.045.416.429.2.649l-1.68 1.713l.396 2.421c.051.311-.26.548-.527.401L6 18.812l-2.078 1.143c-.267.147-.578-.09-.527-.4l.396-2.422l-1.68-1.713c-.217-.22-.098-.604.2-.65zm12 0l1.039-2.203a.357.357 0 0 1 .652 0l1.04 2.203l2.323.356c.298.045.416.429.2.649l-1.68 1.713l.396 2.421c.051.311-.26.548-.527.401L18 18.812l-2.078 1.143c-.267.147-.578-.09-.527-.4l.396-2.422l-1.68-1.713c-.216-.22-.098-.604.2-.65zm-6-9l1.039-2.203a.357.357 0 0 1 .652 0l1.04 2.203l2.323.356c.298.045.416.429.2.649l-1.68 1.713l.396 2.421c.051.311-.26.548-.527.401L12 9.812l-2.078 1.143c-.267.147-.578-.09-.527-.4l.396-2.422l-1.68-1.713c-.217-.22-.098-.604.2-.65z" data-astro-cid-zfdv7yco></path></svg> </a> <!-- Item --> <a href="/oems-und-partner" class="rounded-3xl hover-gradient-bottom bg-white flex-col flex items-start justify-between border border-black p-10  h-72 hover:bg-red-600 hover:text-white transition" data-astro-cid-zfdv7yco> <div class=" flex w-full items-center justify-between" data-astro-cid-zfdv7yco> <h5 class="text-xl font-bold" data-astro-cid-zfdv7yco>OEMs und Partner</h5> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-zfdv7yco> <path d="M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zfdv7yco></path> <path d="M8.25 6H18V15.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-zfdv7yco></path> </svg> </div> <svg xmlns="http://www.w3.org/2000/svg" width="6.25em" height="5em" viewBox="0 0 640 512" data-astro-cid-zfdv7yco><path fill="currentColor" d="m272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9c-10.2 9.1-23.5 14.1-37.2 14.1H96v128c20.4.6 39.8 8.9 54.3 23.4l35.6 35.6l7 7l27 27c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4.6 22.2 6.5l10.8 10.6c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2l30.1 26.8H624c8.8 0 16 7.2 16 16v208c0 17.7-14.3 32-32 32h-32c-11.8 0-22.2-6.4-27.7-16h-84.9c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7l-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3c0 17.6-14.4 31.9-32 31.9H32c-17.7 0-32-14.3-32-32V144c0-8.8 7.2-16 16-16h99.8c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64H259c4.4 0 8.9.2 13.2.6M544 320V176h-48c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8C425 120.9 401.5 112 377.1 112c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3.5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8.8l74.4 74.4c10 10 16.5 22.3 19.4 35.1h74.8zM64 336a16 16 0 1 0-32 0a16 16 0 1 0 32 0m528 16a16 16 0 1 0 0-32a16 16 0 1 0 0 32" data-astro-cid-zfdv7yco></path></svg> </a> </div> </section></div> </section> ` })} `;
}, "/home/ferdi/r-ds-at/src/components/404/Hero404.astro", void 0);

const flaggen = new Proxy({"src":"/_astro/flaggen5.mQ4nqas8.png","width":1485,"height":335,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/flaggen5.png";
							}
							
							return target[name];
						}
					});

const $$Footer404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Footer" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<footer> <!-- Hero Container --> <div> <!-- Hero Image --> ${renderComponent($$result2, "Image", $$Image, { "src": flaggen, "alt": "autos", "format": "webp", "quality": "max", "width": 1500, "class": " mx-auto w-full" })} </div> <div class="flex-col lg:flex px-5 py-16 md:px-10 md:py-20"> <!-- TOP CONTAINER --> <div class="lg:flex lg:flex-row lg:justify-between"> <!-- LOGO DIV --> <div> <!-- LOGO --> ${renderComponent($$result2, "Image", $$Image, { "src": reichwein, "alt": "Reichwein", "style": "width: 400px" })} <p class="font-inter mt-4 max-w-80 text-base font-light text-gray-500"> Development Services & Automotive Testing </p> </div> <!-- FOOTER LINKS --> <div class="flex grow flex-row flex-wrap lg:mx-10 lg:flex-nowrap lg:justify-center"> <!-- LINK BLOCK --> <div class="my-5 mr-8 flex max-w-52 grow basis-24 flex-col space-y-5 lg:mx-10 lg:mt-0"> <h2 class="font-inter font-medium text-black">TELE</h2> <p class="font-inter font-light text-gray-500"> Telefon: 036922 4374-0 </p> <p class="font-inter font-light text-gray-500"> Telefax: 036922 4374-18 </p> </div> <!-- LINK BLOCK --> <div class="my-5 mr-8 flex max-w-52 grow basis-24 flex-col space-y-5 lg:mx-10 lg:mt-0"> <h2 class="font-inter font-medium text-black">EMAIL</h2> <p class="font-inter font-light text-gray-500"> info@ds-at-reichwein.de </p> <p class="font-inter font-light text-gray-500"> bewerbung@ds-at-reichwein.de </p> </div> <!-- LINK BLOCK --> <div class="my-5 mr-8 flex max-w-52 grow basis-24 flex-col space-y-5 lg:mx-10 lg:mt-0"> <h2 class="font-inter font-medium text-black">UNTERNEHM</h2> <a href="/" class="font-inter font-light text-gray-500"> Home </a> <a href="/kontakt" class="font-inter font-light text-gray-500"> Kontakt </a> <a href="/karriere" class="font-inter font-light text-gray-500"> Karriere </a> <a href="/impressum" class="font-inter font-light text-gray-500"> Impressum </a> <a href="/datenschutz" class="font-inter font-light text-gray-500"> Datenschutz </a> </div> </div> <!-- LOCATION & SUPPORT --> <div class="mt-10 flex flex-col lg:mt-0"> <!-- ITEM --> <div class="flex flex-row items-center max-w-72"> <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.23 8.77h1.54V7.23h-1.54zm0 4h1.54v-1.54h-1.54zm0 4h1.54v-1.54h-1.54zM16 20v-1h5V5h-9.615v2.189l-1-.72V4H22v16zM2 20v-8.5l6-4.27l6 4.27V20H9.27v-4.5H6.73V20zm1-1h2.73v-4.5h4.54V19H13v-7L8 8.489L3 12zm7.27 0v-4.5H5.73V19v-4.5h4.54z"></path></svg> <p class="font-inter ml-4 text-black"> DS-AT Reichwein GmbH & Co. KG
                Schäferstraße 5
                99837 Werra-Suhl-Tal </p> </div> <!-- ITEM --> <div class="mb-12 mt-10 flex flex-row items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><circle cx="12" cy="9" r="2.5"></circle><path d="m9 17l9-11M6 12l8-9.5M7 5l3 2.5M12.01 22c-.354 0-.519-.151-.701-.659c-.48-1.69-1.378-3.15-2.467-4.521c-.986-1.317-2.44-2.816-3.196-4.524C3.546 7.655 6.801 1.992 11.993 2c5.335-.015 8.543 5.851 6.263 10.545a21 21 0 0 1-2.339 3.333c-1.381 1.631-2.622 3.397-3.211 5.466c-.136.399-.31.656-.696.656"></path></g></svg> <a href="https://www.google-maps.com" class="font-inter text-black">Google Maps<svg class="inline ml-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6v2H5v12h12v-6zM13 3v2h4.586l-7.793 7.793l1.414 1.414L19 6.414V11h2V3z"></path></svg></a> </div> <!-- ITEM --> <div class="mb-5 flex flex-row items-center max-w-72"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 5.25L12 13.5L3 5.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg> <p class="font-inter ml-4 text-black">info@ds-at-reichwein.de</p> </div> </div> </div> </div> </footer> <div class="mx-auto flex-col lg:flex px-5 py-16 md:px-10 md:py-10 bg-black"> <div class="lg:flex lg:flex-row lg:justify-between"> <p class="font-inter text-center text-sm text-white lg:mt-0"> © 2024 DS-AT Reichwein - Dienstleistungen für die Automobilbranche - Alle Rechte vorbehalten </p> </div> </div> ` })}`;
}, "/home/ferdi/r-ds-at/src/components/404/Footer404.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavReact404", navbar, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/home/ferdi/r-ds-at/src/components/404/404NavReact", "client:component-export": "default" })} ${renderComponent($$result2, "Header404", $$Header404, {})} ${renderComponent($$result2, "Hero404", $$Hero404, {})} ${renderComponent($$result2, "Footer404", $$Footer404, {})} ` })}`;
}, "/home/ferdi/r-ds-at/src/pages/404.astro", void 0);

const $$file = "/home/ferdi/r-ds-at/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
