/* empty css                                       */
import { c as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DReZCw7e.mjs';
import 'kleur/colors';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { $ as $$Layout, r as reichwein } from '../chunks/Reichwein50_CRyE6Z0x.mjs';
import { $ as $$Picture, a as $$Image } from '../chunks/_astro_assets_dJ9FQuWX.mjs';
import { s as stellantis } from '../chunks/Stellantis_BkPtfEDK.mjs';
/* empty css                                            */
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
                className: `flex flex-row rounded-lg lg:px-6 lg:py-4 lg:hover:text-red-500 ${menuOne ? "text-gray-800 lg:border lg:border-black" : "text-black lg:border lg:border-white"}`,
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
                    /* @__PURE__ */ jsx("h2", { className: "text-red-800 font-inter mb-1 mt-5 text-lg font-medium text-black lg:hover:text-red-500", children: "OEMs und Partner" })
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

const ATP = new Proxy({"src":"/_astro/ATP.C-Mwd6sY.png","width":259,"height":70,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/partners/ATP.png";
							}
							
							return target[name];
						}
					});

const august_bertrams_gmbh = new Proxy({"src":"/_astro/august-bertrams-gmbh.VRy6VT_4.png","width":144,"height":146,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/partners/august-bertrams-gmbh.png";
							}
							
							return target[name];
						}
					});

const bmw_langenhahn = new Proxy({"src":"/_astro/bmw-langenhahn.BWWTBo3y.png","width":640,"height":114,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/partners/bmw-langenhahn.png";
							}
							
							return target[name];
						}
					});

const Continental_Logo_Tagline_Black_sRGB = new Proxy({"src":"/_astro/Continental_Logo_Tagline_Black_sRGB.DNObjZ7K.png","width":1682,"height":585,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/partners/Continental_Logo_Tagline_Black_sRGB.png";
							}
							
							return target[name];
						}
					});

const cosmo = new Proxy({"src":"/_astro/cosmo.Cjl9kSSv.png","width":200,"height":143,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/partners/cosmo.png";
							}
							
							return target[name];
						}
					});

const faktmotion_schwarz = new Proxy({"src":"/_astro/faktmotion_schwarz.V8KtWNQO.png","width":2071,"height":1217,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/partners/faktmotion_schwarz.png";
							}
							
							return target[name];
						}
					});

const gts = new Proxy({"src":"/_astro/gts.opA5UJf0.png","width":320,"height":320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/partners/gts.png";
							}
							
							return target[name];
						}
					});

const Hankook = new Proxy({"src":"/_astro/Hankook.DFlODI7f.png","width":520,"height":97,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/partners/Hankook.png";
							}
							
							return target[name];
						}
					});

const hirsch = new Proxy({"src":"/_astro/hirsch.uPaDRpr5.png","width":216,"height":60,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/partners/hirsch.png";
							}
							
							return target[name];
						}
					});

const ice_makers = new Proxy({"src":"/_astro/ice-makers.ClYUP1cx.png","width":2000,"height":345,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/partners/ice-makers.png";
							}
							
							return target[name];
						}
					});

const Logo_DUNLOP_TECH_GmbH_dt_3000px = new Proxy({"src":"/_astro/Logo_DUNLOP_TECH_GmbH_dt_3000px.C_ViwCoM.png","width":3000,"height":338,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/partners/Logo_DUNLOP_TECH_GmbH_dt_3000px.png";
							}
							
							return target[name];
						}
					});

const nexen = new Proxy({"src":"/_astro/nexen.Bl9-tDYo.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/partners/nexen.png";
							}
							
							return target[name];
						}
					});

const petschak = new Proxy({"src":"/_astro/petschak.C11EGxcR.png","width":1015,"height":147,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/partners/petschak.png";
							}
							
							return target[name];
						}
					});

const Racelogic_VBAU_Blue = new Proxy({"src":"/_astro/Racelogic_VBAU-Blue.Lppkyj3E.png","width":3000,"height":1185,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/partners/Racelogic_VBAU-Blue.png";
							}
							
							return target[name];
						}
					});

const schade = new Proxy({"src":"/_astro/schade.MRP1qBuB.png","width":410,"height":230,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/partners/schade.png";
							}
							
							return target[name];
						}
					});

const sri_e = new Proxy({"src":"/_astro/sri-e.DF_5gL_E.png","width":800,"height":48,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/partners/sri-e.png";
							}
							
							return target[name];
						}
					});

const WuR = new Proxy({"src":"/_astro/WuR.GLdIU-JP.png","width":591,"height":85,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/partners/WuR.png";
							}
							
							return target[name];
						}
					});

const john_busch = new Proxy({"src":"/_astro/john-busch.DQ1rhCG7.png","width":162,"height":312,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/partners/john-busch.png";
							}
							
							return target[name];
						}
					});

const Logo_neu_goethling_s = new Proxy({"src":"/_astro/Logo-neu-goethling_s.D4qKav4I.png","width":1765,"height":492,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/ferdi/r-ds-at/src/assets/partners/Logo-neu-goethling_s.png";
							}
							
							return target[name];
						}
					});

const $$OPHero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Logo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-32" id="team"> <h2 id="warum" class="text-black mx-auto max-w-2xl text-center text-3xl font-bold md:text-5xl md:mb-3 lg:mb-3"> Unsere OEMs </h2> <!-- Container --> <div class=" mx-auto w-full bg-white rounded-none sm:py-5 max-w-7xl px-5 lg:rounded-3xl"> <!-- Component --> <div class="flex flex-col items-center gap-8 py-10 grid grid-cols-2 sm:grid sm:grid-cols-3 sm:gap-12 md:grid-cols-6 md:gap-6 md:py-0"> <div class="flex justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" class="sm:w-20 sm:h-20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0C5.36 0 0 5.36 0 12s5.36 12 12 12s12-5.36 12-12S18.64 0 12 0m0 1.41c1.2 0 2.36.22 3.43.59l-3.3 7.13c-.04.04-.04.13-.13.13s-.09-.09-.13-.13L8.57 2c1.07-.37 2.23-.58 3.43-.58M6.9 2.74l3.82 8.23c.08.17.17.22.28.22h2c.12 0 .2-.05.29-.22l3.77-8.23c1.58.9 2.94 2.19 3.9 3.73L15.6 16.84c-.04.09-.1.13-.13.13c-.08 0-.08-.08-.13-.13l-2.05-4.54c-.09-.17-.17-.21-.29-.21h-2c-.11 0-.2.04-.29.21l-2.05 4.54c-.05.05-.04.13-.13.13s-.09-.08-.13-.13L3 6.47c.94-1.54 2.32-2.83 3.9-3.73M2.06 8.53l6.17 12c.08.17.17.3.39.3c.21 0 .29-.13.38-.3l2.87-6.39c.04-.08.09-.14.13-.14c.09 0 .09.1.13.14l2.91 6.39c.09.17.17.3.39.3c.21 0 .3-.13.38-.3l6.19-12c.37 1.07.59 2.23.59 3.47c-.05 5.79-4.8 10.59-10.59 10.59S1.46 17.79 1.46 12c0-1.2.21-2.35.6-3.47"></path></svg> </div> <div class="flex justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" class="sm:w-20 sm:h-20" viewBox="0 0 65 64"><path fill="currentColor" d="m42.182 39.684l2.648 2.945h-.674c-3.685 0-6.68 1.398-6.68 4.426c0 2.434 2.995 4.425 6.68 4.425s6.68-1.99 6.68-4.425s-3.044-5.446-4.59-7.355h-4.064zm5.165 7.272c0 1.267-1.43 2.287-3.175 2.287s-3.191-1.02-3.191-2.287s1.43-2.287 3.191-2.287s3.175 1.02 3.175 2.287m-14.067.658c0 2.419-3.964 2.419-3.964 0v-4.755h-3.422v5.068c0 4.952 10.727 5.001 10.727 0v-5.068h-3.34z"></path><path fill="currentColor" fill-rule="evenodd" d="M54.968 42.86v8.57h-3v-8.57z" clip-rule="evenodd"></path><path fill="currentColor" d="m14.197 39.98l1.184 1.448l-6.597 10.02h3.965l1.07-1.778h7.534l1.12 1.777h4.129l-7.914-11.45h-4.491zm1.036 7.354l2.27-3.75l2.37 3.75zm38.564-34.976c-2.65-.033-5.1.855-7.058 2.368a11.3 11.3 0 0 0-6.73-2.336a11.32 11.32 0 0 0-7.057 2.353a11.3 11.3 0 0 0-6.745-2.336c-2.633-.05-5.067.839-7.025 2.32c-1.86-1.432-4.18-2.27-6.696-2.32c-6.252-.082-11.401 4.952-11.5 11.187c-.082 6.252 4.935 11.401 11.187 11.484a11.25 11.25 0 0 0 7.025-2.337a11.23 11.23 0 0 0 6.712 2.32c2.65.033 5.1-.839 7.058-2.352c1.876 1.43 4.196 2.32 6.73 2.336c2.648.049 5.1-.856 7.057-2.353a11.25 11.25 0 0 0 6.729 2.336c6.252.083 11.401-4.935 11.5-11.187c.082-6.252-4.952-11.401-11.187-11.5m-.28 21.387a10.06 10.06 0 0 1-6.762-2.73c-1.941 1.76-4.31 2.796-7.025 2.747a9.98 9.98 0 0 1-6.745-2.731c-1.892 1.76-4.459 2.78-7.058 2.747c-2.5-.033-4.92-1.02-6.729-2.698a9 9 0 0 1-1.003.806a9.9 9.9 0 0 1-6.022 1.909c-4.096-.05-7.617-2.583-9.114-6.153a4.5 4.5 0 0 1-1.037-.198a11.1 11.1 0 0 1-.641-3.85C1.463 17.738 6.15 13 11.926 12.803c.149.23.33.526.477.888h.05c2.583.05 5.05 1.07 6.893 2.88l-.082-1.416a10.85 10.85 0 0 1 6.416-2.352c.082.131.313.444.51.888c2.534.033 5.117 1.152 6.894 2.863L33 15.203a10.64 10.64 0 0 1 6.45-2.401c.164.23.328.526.477.872h.049c2.55.033 5.084 1.2 6.91 2.928l-.099-1.431a11.05 11.05 0 0 1 6.45-2.419c.081.132.46.889.526.889c5.396.246 9.69 3.487 9.92 10.184c.165 5.527-4.656 9.97-10.184 9.903"></path><path fill="currentColor" d="M15.776 27.444a10.4 10.4 0 0 1-.641-3.85c.033-2.5.905-4.787 2.352-6.614c.56 0 1.12-.032 1.448-.032a9.46 9.46 0 0 0-6.465-2.682c-5.232-.066-9.543 4.13-9.608 9.345c-.05 4.557 3.126 8.406 7.403 9.377c.148-.18.313-.378.477-.592c.477.082.987.132 1.497.148c1.99.033 3.817-.609 5.397-1.777l1.316.033a10.2 10.2 0 0 1-2.123-3.175a5.4 5.4 0 0 1-1.02-.181M12.24 32.1c-4.606-.066-8.292-3.85-8.242-8.457c.066-4.59 3.866-8.291 8.473-8.242a8.25 8.25 0 0 1 4.606 1.464c-1.431 1.876-2.303 4.196-2.32 6.73a11.34 11.34 0 0 0 2.32 7.024c-1.02.675-2.747 1.514-4.837 1.48"></path><path fill="currentColor" d="M20.695 21.044c.181-.46.51-.724.51-.724c-.312-1.102-1.2-2.254-2.007-3.093a9.63 9.63 0 0 0-2.632 6.383c-.05 1.679.592 4.327 1.875 5.808c.247.28.428.592.774.889l.032-1.201c1.218-1.448 1.843-3.324 1.876-5.232c0-.987-.132-1.942-.428-2.83m-1.497 7.453a8.4 8.4 0 0 1-1.497-4.854a8.14 8.14 0 0 1 1.48-4.623a8.28 8.28 0 0 1 1.481 4.87a8.2 8.2 0 0 1-1.48 4.623m15.251-7.485c.18-.477.51-.724.51-.724c-.264-.938-1.218-2.304-1.974-3.06a9.4 9.4 0 0 0-2.583 6.366a9.47 9.47 0 0 0 2.632 6.68l.033-1.119c1.02-1.645 1.793-3.224 1.81-5.297c0-.987-.132-1.941-.428-2.83m-1.465 7.403a8.25 8.25 0 0 1-1.447-4.82a8.4 8.4 0 0 1 1.447-4.574a8.5 8.5 0 0 1 1.448 4.804a8.5 8.5 0 0 1-1.447 4.59"></path><path fill="currentColor" d="M43.366 27.411a10.7 10.7 0 0 1-.642-3.85c.033-2.5.922-4.787 2.353-6.613h1.415c-1.76-1.662-4.014-2.666-6.498-2.699a9.44 9.44 0 0 0-6.647 2.6a9.95 9.95 0 0 1 2.747 7.025c-.032 2.484-1.02 4.968-2.714 6.762a9.4 9.4 0 0 0 4.392 2.336c.149-.198.313-.395.478-.593c.477.083.987.132 1.497.149c2.155.032 3.965-.757 5.495-1.794l1.2-.033a10.2 10.2 0 0 1-2.056-3.109a5.4 5.4 0 0 1-1.02-.181m-3.603 4.656a8.4 8.4 0 0 1-4.656-1.48a11.27 11.27 0 0 0 2.304-6.697c.049-2.632-.84-5.05-2.32-7.008a8.4 8.4 0 0 1 4.902-1.514a8.37 8.37 0 0 1 4.64 1.497a11.27 11.27 0 0 0-2.303 6.696a11.32 11.32 0 0 0 2.32 7.009c-1.02.674-2.764 1.53-4.887 1.497M62.549 20.27c-.757-2.68-4.557-6.053-8.77-6.053c-2.566-.033-4.902.97-6.646 2.599c1.794 1.876 2.797 4.442 2.78 7.041c-.032 2.419-1.02 5.018-2.747 6.762a9.6 9.6 0 0 0 4.393 2.32c.148-.181.312-.379.477-.592c.477.098.987.148 1.497.148c4.853.065 8.851-3.834 8.934-8.67a8.9 8.9 0 0 0-.445-2.83c.181-.46.527-.724.527-.724m-9 11.78a8.2 8.2 0 0 1-4.639-1.481c1.431-1.86 2.27-4.179 2.303-6.696a11.3 11.3 0 0 0-2.32-7.009a8.3 8.3 0 0 1 4.887-1.513c4.59.066 8.292 3.866 8.242 8.473c-.066 4.59-3.866 8.291-8.472 8.225"></path><path fill="currentColor" d="M48.236 21.011c.197-.477.51-.724.51-.724c-.296-1.086-1.185-2.254-2.007-3.076a9.54 9.54 0 0 0-2.583 6.367a9.43 9.43 0 0 0 2.682 6.728v-1.151c1.233-1.662 1.776-3.126 1.826-5.314c0-.987-.132-1.942-.445-2.83m-1.464 7.42c-.954-1.366-1.48-3.044-1.464-4.837a8.25 8.25 0 0 1 1.448-4.574a8.3 8.3 0 0 1 1.48 4.82a8.26 8.26 0 0 1-1.464 4.59m-17.175-.986a11.1 11.1 0 0 1-.642-3.85a10.96 10.96 0 0 1 2.352-6.614l1.366-.032c-1.793-1.662-3.932-2.633-6.45-2.666a9.4 9.4 0 0 0-6.597 2.583c1.794 1.909 2.814 4.31 2.78 7.042c-.032 2.533-1.052 4.968-2.78 6.794c1.201 1.136 2.764 1.942 4.393 2.304c.148-.198.296-.395.477-.609a7.4 7.4 0 0 0 1.497.148c1.777.033 4.097-.576 5.446-1.81h1.267a9.7 9.7 0 0 1-2.057-3.126a5.6 5.6 0 0 1-1.036-.18m-3.62 4.655a8.1 8.1 0 0 1-4.606-1.464a11.28 11.28 0 0 0 2.336-6.712c.033-2.649-.856-5.084-2.336-7.042a8.37 8.37 0 0 1 4.837-1.48a8.43 8.43 0 0 1 4.656 1.497a11.27 11.27 0 0 0-2.304 6.696a11.26 11.26 0 0 0 2.303 6.992c-1.02.674-2.763 1.546-4.886 1.513"></path></svg> </div> <div class="flex justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" class="sm:w-20 sm:h-20" viewBox="0 0 24 24"><path fill="currentColor" d="M11.972 0A26 26 0 0 0 9.93.091a28 28 0 0 0-4.248.685a24 24 0 0 0-2.975.966l-.06.022s.118 7.243.21 10.831a10 10 0 0 0 .569 3.098a15 15 0 0 0 1.622 3.214A12.9 12.9 0 0 0 7.56 21.66a11 11 0 0 0 1.192.873a15 15 0 0 0 2.038 1.031c.233.098.436.192.62.255A5 5 0 0 0 12 24a5 5 0 0 0 .59-.182c.182-.063.387-.156.62-.255a15 15 0 0 0 2.037-1.031a11 11 0 0 0 1.194-.873a12.9 12.9 0 0 0 2.511-2.752a15 15 0 0 0 1.622-3.214a10 10 0 0 0 .57-3.098c.091-3.588.21-10.827.21-10.827l-.057-.026a24 24 0 0 0-2.976-.966a28 28 0 0 0-4.248-.684A26 26 0 0 0 12.031 0zm0 .361h.057c.679.008 1.288.03 1.963.09a26.6 26.6 0 0 1 4.084.663a22.5 22.5 0 0 1 2.861.937l.057.025l-.038 2.274l-.019-.01a23 23 0 0 0-2.86-.937a26.6 26.6 0 0 0-4.085-.662c-.675-.06-1.281-.1-1.96-.108h-.058c-.679.009-1.29.048-1.965.108a26.6 26.6 0 0 0-4.084.665a23 23 0 0 0-2.861.938l-.02.01l-.038-2.281l.058-.022a22.5 22.5 0 0 1 2.86-.937A26.6 26.6 0 0 1 10.01.45c.675-.06 1.284-.08 1.963-.089zm.288.216a17 17 0 0 0-.902.008c-.121.005-.288.109-.29.23l-.007.648c-.002.132.172.236.305.239c.462.01.87.002 1.318.03c.033.003.062.023.062.056l-.003.13a.042.042 0 0 1-.045.046c-.521 0-1.066-.025-1.593.017c-.028.002-.027-.005-.028.023l-.024.384l-.002.03a16 16 0 0 1 1.882 0a.32.32 0 0 0 .305-.262l.006-.627c0-.129-.158-.224-.261-.23c-.442-.028-.945-.013-1.394-.025a.046.046 0 0 1-.044-.05l.009-.145c0-.028.019-.036.047-.037c.444-.016 1.107.005 1.562.019a.07.07 0 0 0 .06-.07V.674c0-.017-.032-.067-.063-.068V.605a33 33 0 0 0-.9-.028m-1.88.064c-.423.008-1.341.125-1.862.19L8.515 2.64v.023l.47-.06a.01.01 0 0 0 .01-.006a.01.01 0 0 0 .003-.01v-.523l.947-.102c.083-.015.18.046.256.169a.9.9 0 0 1 .114.339l.467-.035c.01 0 .03 0 .028-.01a1 1 0 0 0-.307-.663a.32.32 0 0 0 .197-.31a4 4 0 0 0-.022-.564a.32.32 0 0 0-.3-.247zm3.59.019a.404.404 0 0 0-.413.332l-.01 1.195a.31.31 0 0 0 .24.289c.61.057 1.21.112 1.89.215c.011 0 .032-.007.032-.017v-.416c0-.009-.02-.028-.027-.03c-.454-.057-1.053-.137-1.589-.193a.08.08 0 0 1-.058-.07v-.812c0-.034.05-.052.084-.05c.529.044 1.056.14 1.584.197c.014.002.036-.007.037-.021l.01-.382a.04.04 0 0 0-.029-.033a36 36 0 0 0-1.75-.204zm1.98.237c-.012 0-.022.014-.022.025c-.006.274-.045 1.457-.053 1.772v.027c.155.027.326.048.453.074c.014.002.035-.008.035-.022c-.002-.207 0-.448-.004-.636c0-.013.006-.014.02-.012a31 31 0 0 1 1.102.22c.008 0 .052.007.052.03c-.003.217-.007.4-.013.617a.04.04 0 0 0 .027.04q.216.05.42.1c.037.008.043.001.044-.012c.022-.451.03-1.174.036-1.784c0-.008-.003-.02-.01-.022c-.153-.035-.297-.072-.453-.105c-.014-.003-.022.02-.023.035c-.015.223-.009.43-.026.652c0 .008 0 .012-.009.01c-.37-.076-.765-.158-1.132-.227c-.01-.002-.006-.02-.005-.031l.003-.653a.03.03 0 0 0-.026-.03zM7.934.92h-.037c-.543.086-1.089.201-1.64.32a.5.5 0 0 0-.23.143a.32.32 0 0 0-.102.205l.004 1.118a.43.43 0 0 0 .106.266a.24.24 0 0 0 .204.11a39 39 0 0 1 1.633-.323a.5.5 0 0 0 .268-.166a.36.36 0 0 0 .098-.23L8.236 1.2a.28.28 0 0 0-.11-.198a.3.3 0 0 0-.191-.08zm2.157.197a.076.076 0 0 1 .08.069l.003.189a.17.17 0 0 1-.14.166l-1.062.104l-.009-.008V1.23l.009-.004l1.111-.108zm-2.52.29a.2.2 0 0 1 .078.022a.12.12 0 0 1 .054.106l-.009.704a.13.13 0 0 1-.049.105a.3.3 0 0 1-.12.047a61 61 0 0 1-.997.19a.1.1 0 0 1-.088-.017a.13.13 0 0 1-.03-.1v-.726a.14.14 0 0 1 .04-.097a.24.24 0 0 1 .12-.06c.29-.054.67-.129.968-.172zm10.81 0l-.001.001c-.008 0-.008.012-.008.019c-.014.606-.03 1.167-.035 1.773c0 .013.006.03.018.033a22 22 0 0 1 2.158.7c.032.011.031-.013.031-.022c.003-.138.01-.278.003-.416a.04.04 0 0 0-.025-.033a17 17 0 0 0-1.66-.541a.03.03 0 0 1-.019-.026l.008-.18c0-.008.014-.01.022-.008a22 22 0 0 1 1.67.542c.01.003.01-.01.01-.019a5 5 0 0 0 0-.468a.03.03 0 0 0-.02-.026a22 22 0 0 0-1.638-.523c-.008-.002-.018-.01-.018-.018v-.192c0-.008.013-.013.021-.01c.564.144 1.184.36 1.615.519c.038.014.06.008.06-.027c0-.157.006-.168-.002-.324c-.002-.02-.004-.04-.022-.047a21 21 0 0 0-2.169-.707zm-12.97.064a.4.4 0 0 0-.084.009c-.65.166-1.303.414-1.956.652a.06.06 0 0 0-.03.052V3.65l.003.33s.471-.177.573-.21c.013-.004.013-.017.013-.031l-.01-.52c0-.015.002-.037.016-.04l1.625-.502a.3.3 0 0 0 .138-.101a.24.24 0 0 0 .052-.156l-.017-.683a.27.27 0 0 0-.119-.197a.37.37 0 0 0-.204-.068zm-.286.496c.036-.01.07.031.072.063a2 2 0 0 1 .012.25c-.001.045-.066.097-.11.11l-1.184.386c-.011.004-.031 0-.031-.012l.002-.358c0-.017.02-.031.036-.036a11 11 0 0 1 1.203-.403m6.967.981c.653.01 1.246.03 1.9.088a26.6 26.6 0 0 1 4.083.663a22.5 22.5 0 0 1 2.861.937l.014.007l-.007.448h-8.851zm-.317.002l-.001 4.618H8.827c-.043-.004-.015-.023.015-.052a1.7 1.7 0 0 1 .715-.312c.022-.002.028-.014-.003-.054a.9.9 0 0 0-.93-.212a.99.99 0 0 0-.624.603a.04.04 0 0 1-.04.031a7 7 0 0 1-.47.013c-.025 0-.037-.032-.035-.056a.74.74 0 0 1 .343-.484a1.1 1.1 0 0 1 .519-.178a.04.04 0 0 0 .02-.063a.5.5 0 0 0-.105-.093a.76.76 0 0 0-.504-.077a1.05 1.05 0 0 0-.948.964c-.01.06.006.074-.053.094c-.112.038-.322.064-.434.088c-.02.003-.05-.043-.045-.063a1.3 1.3 0 0 1 .244-.522a1 1 0 0 1 .342-.291c.026-.013.05-.044.026-.064c-.253-.22-.771.012-.98.241a1.37 1.37 0 0 0-.275.91c0 .016.014.041 0 .047a5 5 0 0 1-.4.15c-.012.003-.014-.028-.016-.04a.93.93 0 0 1 .147-.677a.66.66 0 0 1 .244-.241q.014-.011 0-.028c-.115-.149-.569-.042-.708.094c-.32.312-.297.615-.312 1.097c-.001.023-.03.111-.056.123a.6.6 0 0 1-.184.07c-.021.006-.023.014-.028-.007a.39.39 0 0 0-.57-.222a.356.356 0 0 0-.077.532c.015.017.02.034-.003.041a.42.42 0 0 0-.275.534a.34.34 0 0 0 .296.21a.63.63 0 0 0 .37-.108a.043.043 0 0 1 .06.01a.386.386 0 0 0 .531.124c.162-.107.234-.273.114-.559c-.007-.016.02-.046.034-.054a6.6 6.6 0 0 1 3.144-.88a1.8 1.8 0 0 1 .456.101l.023.008l.002.941a.2.2 0 0 1-.034.025a1 1 0 0 0-.432.55c-.004.017-.006.021-.035.024c-.193.019-.399.047-.591.062c-.011.002-.032-.019-.028-.03a1.87 1.87 0 0 1 .725-.908a.06.06 0 0 0 .01-.067a.4.4 0 0 0-.168-.093a1.09 1.09 0 0 0-.895.362a1.42 1.42 0 0 0-.312.875c-.001.022.003.058-.019.065c-.124.039-.261.074-.39.11c-.015.004-.035-.011-.038-.027a1.01 1.01 0 0 1 .486-1.03c.051-.04-.038-.102-.102-.102a.96.96 0 0 0-.913.53a1.3 1.3 0 0 0-.03.793c.003.023.019.063-.006.069c-.079.019-.265.09-.323.108q-.03.01-.047-.03a1.04 1.04 0 0 1-.021-.488a1.1 1.1 0 0 1 .268-.493c.008-.01.011-.032 0-.037a.54.54 0 0 0-.378-.025a.74.74 0 0 0-.477.38c-.159.297-.118.583.051 1.005c.008.02.018.058 0 .07l-.137.08c-.017.013-.032.002-.044-.015c-.055-.078-.124-.202-.21-.24a.42.42 0 0 0-.428.035a.41.41 0 0 0-.12.431a1 1 0 0 0 .1.152c.01.014-.001.036-.013.047c-.059.052-.14.09-.188.14a.395.395 0 0 0-.01.471a.365.365 0 0 0 .45.123a2 2 0 0 0 .232-.122c.027-.018.045-.051.07-.025a.55.55 0 0 0 .224.153a.43.43 0 0 0 .354-.062a.305.305 0 0 0 .168-.338a.9.9 0 0 0-.143-.27c-.033-.035-.035-.033 0-.054a7.4 7.4 0 0 1 1.66-.724a5 5 0 0 1 1.69-.207h.046l.003 1.949H3.206c-.054-2.133-.116-5.51-.156-7.836l.014-.007a22.5 22.5 0 0 1 2.86-.937a26.6 26.6 0 0 1 4.084-.663a23 23 0 0 1 1.768-.086zm-3.088.816a1.24 1.24 0 0 0-.693.232c-.286.188-.456.773-.49.982a.044.044 0 0 1-.04.036a6 6 0 0 0-.676.125c-.007.001-.012-.01-.012-.017a1 1 0 0 1 .258-.59a3.5 3.5 0 0 1 .493-.396c.013-.011.004-.045-.012-.051a1.03 1.03 0 0 0-.797.012a1.13 1.13 0 0 0-.675.867a2 2 0 0 0-.029.41c.002.017-.03.018-.045.023c-.246.077-.504.167-.71.236c-.01.004-.039.002-.039-.01a1.17 1.17 0 0 1 .175-.655c.12-.195.343-.305.505-.469c.011-.012.028-.044.011-.051c-.41-.165-.797.004-1.124.375a1.4 1.4 0 0 0-.2 1.124c.009.036 0 .075-.019.083a2 2 0 0 1-.23.089a.025.025 0 0 1-.033-.02c-.093-.296-.44-.238-.597-.148a.36.36 0 0 0-.139.489a.03.03 0 0 1-.01.044a.44.44 0 0 0-.205.596a.35.35 0 0 0 .428.137a1.2 1.2 0 0 0 .246-.129a.03.03 0 0 1 .03.004a.393.393 0 0 0 .566.08c.115-.082.16-.096.204-.244a.4.4 0 0 0-.09-.3c-.012-.01-.001-.04.013-.047A9.7 9.7 0 0 1 8.947 5.51a2.35 2.35 0 0 1 1.446.553a.07.07 0 0 0 .062.031a.1.1 0 0 0 .054-.056a.66.66 0 0 0-.204-.678a1.2 1.2 0 0 0-.612-.344c-.012-.003-.02-.029-.01-.037a1 1 0 0 1 .335-.22a3.6 3.6 0 0 1 .605-.05c.014-.001.035-.015.03-.028a.61.61 0 0 0-.527-.4a1.3 1.3 0 0 0-.693.1a1.12 1.12 0 0 0-.5.553a.04.04 0 0 1-.032.02a12 12 0 0 0-.594-.007c-.014 0-.035 0-.035-.014a.94.94 0 0 1 .255-.517a2 2 0 0 1 .68-.386c.019-.006.04-.036.029-.051a.55.55 0 0 0-.201-.17a1.2 1.2 0 0 0-.347-.041zm3.405 1.607h8.845c-.012.686-.025 1.433-.04 2.195h-8.805zM8.681 7.801l6.666.003a.016.016 0 0 1 .017.013l-.002 5.138a2.4 2.4 0 0 1-.143.764a3.33 3.33 0 0 1-1.44 1.725a3.47 3.47 0 0 1-1.74.491a3.5 3.5 0 0 1-2.26-.86a3.08 3.08 0 0 1-1.105-2.31L8.667 7.82c0-.013.001-.019.014-.019m6.994.086h5.217c-.012.645-.025 1.296-.034 1.926h-5.183V8.318zm-6.839.071c-.013 0-.014.005-.014.018l.007 4.753a2.97 2.97 0 0 0 1.054 2.225a3.33 3.33 0 0 0 2.153.827a3.3 3.3 0 0 0 1.66-.473a3.2 3.2 0 0 0 1.374-1.66a2.3 2.3 0 0 0 .136-.734l.002-4.94a.015.015 0 0 0-.016-.014zm4.436.304a.11.11 0 0 1 .087.071l.242.715a.08.08 0 0 1-.003.07a.07.07 0 0 1-.054.024a.065.065 0 0 1-.063-.044l-.038-.125h-.33l-.036.128c-.01.04-.04.044-.071.044a.06.06 0 0 1-.044-.028a.06.06 0 0 1-.01-.052l.232-.728a.1.1 0 0 1 .087-.075m-.763.007h.023a.23.23 0 0 1 .235.157a.046.046 0 0 1-.031.059a.053.053 0 0 1-.07-.02a.17.17 0 0 0-.132-.09a.15.15 0 0 0-.133.1a.5.5 0 0 0-.055.222a.5.5 0 0 0 .046.228a.16.16 0 0 0 .154.102a.23.23 0 0 0 .166-.243v-.039h-.135a.057.057 0 0 1-.059-.063c0-.023.007-.05.059-.05h.192c.064 0 .073.048.073.09a1 1 0 0 1-.011.152a.4.4 0 0 1-.15.236a.3.3 0 0 1-.15.043a.26.26 0 0 1-.227-.145a.6.6 0 0 1-.073-.31a.6.6 0 0 1 .08-.304a.23.23 0 0 1 .198-.125m-2.988.002h.004c.183.002.243.111.243.15c0 .035-.061.08-.095.039a.2.2 0 0 0-.157-.068a.14.14 0 0 0-.15.096a.114.114 0 0 0 .094.135a.6.6 0 0 1 .267.08h-.001a.2.2 0 0 1 .081.18a.25.25 0 0 1-.067.175a.33.33 0 0 1-.247.088a.3.3 0 0 1-.263-.14c-.004-.01-.01-.063.034-.078a.08.08 0 0 1 .082.026a.24.24 0 0 0 .156.063a.22.22 0 0 0 .148-.05a.11.11 0 0 0 .024-.116a.22.22 0 0 0-.193-.098a.25.25 0 0 1-.172-.07a.25.25 0 0 1-.069-.196a.22.22 0 0 1 .1-.163a.3.3 0 0 1 .181-.053m1.649 0h.361a.06.06 0 1 1 0 .12l-.114.002v.682a.063.063 0 0 1-.125 0v-.683h-.116a.06.06 0 0 1-.007-.12zm.56 0h.36a.06.06 0 1 1 0 .12l-.114.002v.682a.063.063 0 0 1-.125 0v-.683h-.115a.06.06 0 0 1-.007-.12zm2.74 0h.361a.06.06 0 1 1 0 .12l-.112.002v.682a.063.063 0 0 1-.125 0v-.683h-.116a.06.06 0 0 1-.007-.12zm-.677.004h.202a.36.36 0 0 1 .208.058a.28.28 0 0 1 .108.206a.24.24 0 0 1-.071.198a.3.3 0 0 1-.117.075l-.02.007l.158.2a.1.1 0 0 1 .023.056q-.004.049-.06.05a.07.07 0 0 1-.056-.027l-.187-.258h-.117v.23a.06.06 0 0 1-.063.067a.06.06 0 0 1-.062-.067v-.726a.07.07 0 0 1 .016-.05a.06.06 0 0 1 .038-.019m-3.87.002h.36a.06.06 0 0 1 0 .121h-.116v.684a.063.063 0 0 1-.125 0v-.684h-.116a.06.06 0 0 1-.003-.12zm.583 0h.002a.063.063 0 0 1 .065.064v.471a.26.26 0 0 0 .037.151a.15.15 0 0 0 .127.056a.14.14 0 0 0 .125-.056a.27.27 0 0 0 .035-.15V8.34h.001a.063.063 0 0 1 .125 0v.432a.47.47 0 0 1-.056.262a.25.25 0 0 1-.228.104a.26.26 0 0 1-.23-.104a.46.46 0 0 1-.061-.262V8.34a.063.063 0 0 1 .058-.063m3.354.115v.328h.13a.18.18 0 0 0 .2-.174a.15.15 0 0 0-.051-.109a.18.18 0 0 0-.13-.045zm-.584.015l-.136.469h.278zm-1.14 1.005c.011 0 .021.002.022.011c.002.018-.016.029-.042.042a.2.2 0 0 0-.094.08a.3.3 0 0 0-.039.163a.12.12 0 0 0 .063.079a.3.3 0 0 0 .142.028a.5.5 0 0 0 .215-.063a.6.6 0 0 1 .276-.02a.34.34 0 0 1 .194.063c.024.017.02.038.011.04c-.014.005-.029-.012-.044-.01a.7.7 0 0 0-.142.03c-.06.027-.087.037-.116.09a.1.1 0 0 0-.007.073c.01.024.035.04.04.057a.5.5 0 0 0 .064.125l.03.023a3 3 0 0 1 .282.243a.3.3 0 0 1 .04.093c.003.012-.007.03-.018.025l-.036-.029a.2.2 0 0 0-.053-.039a.4.4 0 0 0-.176-.025c-.027 0-.081.024-.05.036a.36.36 0 0 1 .132.116a.43.43 0 0 1 .107.31c0 .006-.012.01-.015.006a.4.4 0 0 0-.102-.109a.32.32 0 0 0-.21-.062c-.015.001-.06 0-.055.014a1.2 1.2 0 0 1 .123.191a.56.56 0 0 1 .039.276c-.001.005-.02.01-.023.005a1 1 0 0 0-.077-.076a.4.4 0 0 0-.094-.06a.3.3 0 0 0-.204.028a.33.33 0 0 0-.13.132a.5.5 0 0 0-.062.205a.46.46 0 0 0 .042.257a.37.37 0 0 0 .19.164a1 1 0 0 0 .334.044c.139.005.278-.016.417-.02a2 2 0 0 1 .396.003a.9.9 0 0 1 .3.12a3 3 0 0 1 .215.183c.008.006.026-.003.035-.009a.46.46 0 0 0 .131-.233a.35.35 0 0 0-.056-.246c-.047-.085-.116-.18-.17-.27a3 3 0 0 1-.202-.296a.3.3 0 0 1-.017-.221a.24.24 0 0 1 .107-.128c.011-.007.022.006.017.021a.2.2 0 0 0-.008.112a.3.3 0 0 0 .089.14c.013.01.047-.005.055-.021c.018-.043.007-.11.023-.154a.6.6 0 0 1 .108-.226a1.5 1.5 0 0 1 .36-.196c.033-.019.054-.105.091-.091s.017.1-.011.142c-.04.062-.087.1-.131.156a1.5 1.5 0 0 0-.157.247a.22.22 0 0 0-.029.137a.14.14 0 0 0 .073.094c.022.01.05-.01.07-.025a.4.4 0 0 0 .097-.103c.023-.038.01-.089.032-.128c.006-.009.03-.007.037 0a.14.14 0 0 1 .044.084a.4.4 0 0 1-.01.113c-.003.008-.024.027-.031.045a.2.2 0 0 1-.02.04c-.036.063-.078.116-.125.126c-.01.001-.017.021-.01.03a.4.4 0 0 0 .113.132a.2.2 0 0 0 .152.01c.027-.008.048-.027.079-.037c.013-.004.005.004.005.017a.3.3 0 0 1-.015.086a.2.2 0 0 1-.075.083a.4.4 0 0 1-.166.05c-.027.005-.068.025-.058.051a.3.3 0 0 0 .042.085a.12.12 0 0 0 .08.039a.2.2 0 0 0 .125-.036c.04-.026.061-.074.096-.108c.007-.006.026 0 .026.01a.4.4 0 0 1-.041.158a.5.5 0 0 1-.128.138c-.015.013-.033.029-.033.049a.2.2 0 0 0 .044.084a.13.13 0 0 0 .083.054a.3.3 0 0 0 .1 0c.013 0 .01.023-.001.031a.25.25 0 0 1-.117.068a.25.25 0 0 1-.128.008c-.081-.02-.134-.05-.214-.073a.23.23 0 0 0-.135-.009a.23.23 0 0 0-.106.083a.13.13 0 0 0-.03.064c-.006.063.025.13.005.192a1.4 1.4 0 0 1-.081.234a1.3 1.3 0 0 1-.115.165c-.04.054-.093.074-.12.133l-.038.063a.5.5 0 0 0-.058.229a.45.45 0 0 0 .085.209l.153.237a.15.15 0 0 1 .009.083a.09.09 0 0 1-.044.07a.9.9 0 0 0-.419.527l-.002.013v.004a.1.1 0 0 1-.021.042a.33.33 0 0 1-.19.096l-.165.046a.1.1 0 0 0-.044.031a.08.08 0 0 0 .009.097a.14.14 0 0 1 .03.071a.06.06 0 0 1-.013.042a.1.1 0 0 1-.028.022a1 1 0 0 1-.216.087c-.05.011-.086-.002-.07-.059a3 3 0 0 1 .098-.293a.4.4 0 0 1 .133-.14a2 2 0 0 1 .212-.162a.4.4 0 0 0 .119-.126a3 3 0 0 1 .19-.275a.16.16 0 0 0 .029-.129a.25.25 0 0 0-.142-.185l-.085-.034a.53.53 0 0 1-.246-.175a.1.1 0 0 0-.062-.04c-.063.002-.081.09-.083.138a1 1 0 0 0 .004.212a.2.2 0 0 1 .004.072a.06.06 0 0 1-.039.034a2.7 2.7 0 0 0-.565.279a.2.2 0 0 0-.063.07l-.017.029a.19.19 0 0 1-.223.08l-.044-.011a.1.1 0 0 0-.064.017a.2.2 0 0 0-.041.036l-.01.019v.014l.004.017l.022.06a.066.066 0 0 1-.038.096a1 1 0 0 1-.203.055c-.04.005-.075-.01-.065-.057a1 1 0 0 1 .07-.237a.1.1 0 0 1 .057-.06a.8.8 0 0 0 .179-.14a.27.27 0 0 1 .169-.073a.5.5 0 0 0 .262-.1a2 2 0 0 0 .225-.186a.37.37 0 0 0-.006-.46l-.02-.035c-.019-.03-.03-.073-.046-.104a.24.24 0 0 1-.039-.104c0-.068.027-.133.031-.201a.024.024 0 0 0-.016-.025a.5.5 0 0 0-.137-.03a2.7 2.7 0 0 1-.56.006a1.4 1.4 0 0 1-.39-.18c-.053-.033-.085-.07-.139-.101c-.014-.008-.015-.005-.028.006a.67.67 0 0 1-.459.125h-.002a2 2 0 0 1-.294-.077c-.073-.027-.19-.074-.26-.015c-.029.025-.022.06-.022.093a1.2 1.2 0 0 1-.01.305a.04.04 0 0 0 .003.032l.006.006a.1.1 0 0 0 .036.02l.01.004c.028.01.033.023.05.058a.2.2 0 0 1 .016.062a.2.2 0 0 1-.003.062l-.009.039a.2.2 0 0 0 .008.135a.1.1 0 0 0 .042.053l.01.004l.01.003h.02l.02-.008l.004-.002a.05.05 0 0 1 .035-.012l.01.003a.08.08 0 0 1 .063.074a.5.5 0 0 1-.046.221a.06.06 0 0 1-.077.03l-.018-.007a.5.5 0 0 1-.14-.117a.2.2 0 0 1-.049-.112a.12.12 0 0 0-.028-.082a.1.1 0 0 0-.032-.016a.14.14 0 0 1-.07-.046a.27.27 0 0 1-.052-.219a1.5 1.5 0 0 0-.046-.64a.15.15 0 0 1 .002-.108l.016-.043l.007-.016a.06.06 0 0 1 .042-.032l.029-.003a1.5 1.5 0 0 0 .45-.07a.2.2 0 0 1 .062-.01l.073.002c.03 0 .06-.027.024-.05a1 1 0 0 1-.084-.087a.05.05 0 0 0-.052-.022l-.01.005l-.009.005a.098.098 0 0 1-.152-.029a.8.8 0 0 1-.087-.202a.56.56 0 0 0-.109-.238a.24.24 0 0 0-.19-.063a.22.22 0 0 0-.13.098l-.063.088a.14.14 0 0 0-.031.067v.016l.008.032a.13.13 0 0 1-.039.154l-.094.075a.1.1 0 0 0-.03.06l-.012.06a.1.1 0 0 0-.003.045l.002.012a.1.1 0 0 0 .031.04l.013.012l.012.017a.06.06 0 0 1-.012.07l-.024.021a.8.8 0 0 1-.19.108l-.026.006c-.038.003-.05-.026-.052-.06q-.004-.066-.003-.134a.2.2 0 0 1 .057-.137a.36.36 0 0 0 .072-.225a.2.2 0 0 1 .04-.13a.3.3 0 0 0 .057-.09a.3.3 0 0 1 .039-.066a4 4 0 0 0 .281-.384c.054-.086.155-.192.237-.073a.4.4 0 0 0 .078.084a2 2 0 0 0 .259.164c.094.053.109-.042.125-.121v-.003a.3.3 0 0 1 .038-.092a1.3 1.3 0 0 1 .202-.247c.043-.038.105-.076.15-.113c.018-.016.023-.018.03-.04c.009-.022.024-.05.034-.078s.015-.055.024-.076a.3.3 0 0 0 .044-.098v-.015l-.003-.007a.05.05 0 0 0-.021-.024a.2.2 0 0 0-.102-.026h-.003a.4.4 0 0 0-.148.031a.1.1 0 0 0-.054.054a.2.2 0 0 1-.042.063a.1.1 0 0 1-.13.006c-.024-.016-.014-.043 0-.063a.4.4 0 0 0 .035-.05a.04.04 0 0 0 .005-.025v-.004l-.002-.005l-.005-.006a.05.05 0 0 0-.045-.007l-.083.027a.064.064 0 0 1-.094-.047a.2.2 0 0 1-.003-.055a.055.055 0 0 1 .04-.05c.02-.006.05-.017.046-.042v-.023l.012-.024a.1.1 0 0 1 .03-.025a4 4 0 0 0 .32-.234a.05.05 0 0 1 .064-.01l.01.006a.22.22 0 0 0 .151.02a.05.05 0 0 0 .041-.03v-.01l-.002-.006l-.003-.004a.1.1 0 0 0-.035-.021l-.058-.021a.3.3 0 0 1-.052-.025a.05.05 0 0 1-.025-.059c.023-.113.147-.114.241-.105h.004a.5.5 0 0 0 .14-.022c.06-.021.106-.067.163-.094s.117-.057.176-.08c.018-.006.033-.002.049-.009a.1.1 0 0 0 .035-.025a1 1 0 0 1 .142-.163a.8.8 0 0 1 .236-.092a.1.1 0 0 1 .03-.006zm-.425.557a.2.2 0 0 0-.105.026c-.009.005-.015.016-.008.024c.018.021.049.03.07.05a.2.2 0 0 1 .035.046c.009.019.024.04.033.06a1 1 0 0 1 .045.123a1 1 0 0 1 .05.209c.01.057.007.117.01.175v.081q0 .035-.003.07a1 1 0 0 0-.004.098v.08c.002.07.013.12.044.12a.2.2 0 0 0 .084-.019a.18.18 0 0 0 .085-.148a2 2 0 0 0-.003-.576a.5.5 0 0 0-.188-.362a.22.22 0 0 0-.144-.057zm3.96.161h5.177c-.017.825-.034 1.6-.05 2.263h-5.13l.004-1.862zm-.006 2.544h5.123a9.7 9.7 0 0 1-.545 2.911a14.5 14.5 0 0 1-1.56 3.118a12.5 12.5 0 0 1-2.415 2.669a11 11 0 0 1-1.147.848a14.6 14.6 0 0 1-1.96.999c-.224.096-.418.186-.596.247c-.193.065-.358.125-.474.156v-.115l.003-7.295a4 4 0 0 0 .316-.023c.005.015.016.057.031.1a.33.33 0 0 0 .219.166a.32.32 0 0 0 .306-.107a.37.37 0 0 0 .388.067a.235.235 0 0 0 .175-.227a.43.43 0 0 0-.033-.208l-.036-.066a4 4 0 0 0 .744-.41l.02-.006c.373-.094 1.872-.631 2.791-.643a3.3 3.3 0 0 1 1.627.39a2.8 2.8 0 0 1 .682.56c.006.009.013.028.037.032a.04.04 0 0 0 .034-.022a1.14 1.14 0 0 0 .079-.516c-.02-.282-.3-.486-.383-.57c-.003-.003-.01-.021.02-.041a1 1 0 0 1 .105-.085a1 1 0 0 1 .562-.212c.03.003.02-.04.012-.076c-.058-.25-.415-.412-.79-.354a.96.96 0 0 0-.613.417c-.007.011-.042.027-.056.013a3 3 0 0 0-.369-.107c-.045-.01-.021-.044-.019-.05a1 1 0 0 1 .304-.337a1.1 1.1 0 0 1 .494-.224c.022 0 .022-.03.016-.04a.55.55 0 0 0-.375-.302a.84.84 0 0 0-.78.14a1.4 1.4 0 0 0-.445.673c-.014.02-.018.036-.036.032c-.099-.02-.345-.007-.367-.022c-.015-.007-.012-.03-.009-.045a.9.9 0 0 1 .222-.38a.9.9 0 0 1 .364-.286a.055.055 0 0 0 .01-.094a.98.98 0 0 0-1.22.263a2.2 2.2 0 0 0-.304.696c-.002.009-.017.036-.036.036l-.508.112l-.083.019l-.022.023a3.3 3.3 0 0 0 .497-1.65zm-12.45.085h5.19v.09a3.15 3.15 0 0 0 .837 2.098H3.556a9.7 9.7 0 0 1-.342-2.188m.415 2.443h5.863l.112.1a3.9 3.9 0 0 0 2.17.898v1.21h-7.22a14 14 0 0 1-.8-1.827a10 10 0 0 1-.125-.38zm10.584.29l-.01.012h-.002l-.002-.002zm1.738.185a.9.9 0 0 0-.507.155a.93.93 0 0 0-.392.41a2.7 2.7 0 0 0-.172.775a.06.06 0 0 1-.038.035a3 3 0 0 0-.335.087a.03.03 0 0 1-.023-.02a1.1 1.1 0 0 1 .15-.727a.9.9 0 0 1 .218-.263a.037.037 0 0 0-.017-.068a.98.98 0 0 0-.648.114a.89.89 0 0 0-.452.667a1.6 1.6 0 0 0 .042.594c0 .006.006.027-.016.031c-.076.037-.282.145-.355.18c-.005.002-.019.005-.022-.006a.58.58 0 0 0-.268-.358a.53.53 0 0 0-.446.022a.55.55 0 0 0-.216.224a.375.375 0 0 0 .127.455c.006.006.017.02 0 .025c-.09.049-.092.06-.16.161a.43.43 0 0 0 .052.45a.465.465 0 0 0 .7.082c.004-.003.018.005.025.02a.6.6 0 0 0 .143.151a.46.46 0 0 0 .455 0a.41.41 0 0 0 .21-.415a.38.38 0 0 0-.111-.262c-.013-.016 0-.024.034-.046a5.4 5.4 0 0 1 1.96-.666a3.1 3.1 0 0 1 1.076.022a1.5 1.5 0 0 1 .629.312a3 3 0 0 1 .406.402a.16.16 0 0 0 .117-.025a.66.66 0 0 0 .014-.517a1.6 1.6 0 0 0-.384-.59c-.003-.002-.003-.013-.003-.02c-.004-.03.015-.045.052-.079a1.2 1.2 0 0 1 .562-.297c.027-.002.038-.022.02-.053a.656.656 0 0 0-.808-.298h-.001a.92.92 0 0 0-.454.416c-.006.011-.022.05-.037.038c-.09-.008-.242-.032-.331-.04c-.041-.002-.025-.039-.024-.045a.74.74 0 0 1 .194-.316a1.2 1.2 0 0 1 .444-.318a.02.02 0 0 0 .016-.031a.63.63 0 0 0-.465-.229a.8.8 0 0 0-.617.238a1.25 1.25 0 0 0-.337.74q-.012.035-.037.035a2 2 0 0 1-.278.025c-.015-.004-.014-.02-.014-.036a.9.9 0 0 1 .101-.406a1.5 1.5 0 0 1 .55-.582c.036-.025.038-.076.026-.082a.9.9 0 0 0-.355-.071M4.707 17.692h7.069v2.19H6.213a11 11 0 0 1-.898-1.181a17 17 0 0 1-.609-1.01zm10.076 1.176a.5.5 0 0 0-.273.069a.98.98 0 0 0-.475.56a1.1 1.1 0 0 0 .012.571c.003.007.012.024-.002.03c-.078.03-.136.065-.213.096c-.004 0-.024.005-.028-.005a.63.63 0 0 1 .088-.736c.017-.015.027-.035-.008-.047a.59.59 0 0 0-.531.193a.68.68 0 0 0-.117.659a1 1 0 0 0 .099.261c.003.005.03.021.014.028l-.15.115c-.003.003-.014.008-.019 0a.5.5 0 0 0-.29-.238a.34.34 0 0 0-.317.088a.36.36 0 0 0 .147.602c.007.003.017.012.005.02a.6.6 0 0 0-.19.212a.38.38 0 0 0 .085.406a.37.37 0 0 0 .29.089a.6.6 0 0 0 .357-.313c.002-.003.021-.017.031-.006a.53.53 0 0 0 .264.2a.32.32 0 0 0 .323-.065a.35.35 0 0 0 .111-.4a.6.6 0 0 0-.201-.216c-.013-.01-.003-.035.023-.055a3 3 0 0 1 1.402-.62a1.8 1.8 0 0 1 1.025.166a1.6 1.6 0 0 1 .337.267c.013.007.05.02.063.008a.397.397 0 0 0 .035-.548a.7.7 0 0 0-.206-.165l-.007-.015a.9.9 0 0 1 .301-.393a1.4 1.4 0 0 1 .295-.143c.022-.006.018-.02.007-.047c-.128-.293-.635-.304-.874-.15a1.1 1.1 0 0 0-.346.396c-.005.01-.012.04-.025.031l-.213-.064c-.004 0-.004-.024-.002-.028a1.12 1.12 0 0 1 .696-.565c.015-.006.01-.02.007-.028c-.11-.268-.661-.245-.93-.074a1.17 1.17 0 0 0-.493.714c-.003.02.006.037-.007.04a1.2 1.2 0 0 1-.23.055a.024.024 0 0 1-.022-.023a.64.64 0 0 1 .067-.392a2 2 0 0 1 .324-.408a.043.043 0 0 0-.003-.063a.5.5 0 0 0-.236-.07zm-3.006 1.296v3.417c-.098-.032-.214-.074-.342-.117c-.178-.06-.373-.151-.597-.247a14.6 14.6 0 0 1-1.96-1a11 11 0 0 1-1.147-.847a13 13 0 0 1-1.266-1.206h5.31z"></path></svg> </div> <div class="flex justify-center"> ${renderComponent($$result2, "Picture", $$Picture, { "src": stellantis, "alt": "Stellantis", "style": "width: 100%", "format": "webp" })} </div> <div class="flex justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" class="sm:w-20 sm:h-20" viewBox="0 0 65 64"><path fill="currentColor" d="M32.985 0c-17.651 0-32 14.325-32 31.989C.985 49.652 15.31 64 32.985 64s32-14.325 32-32.011S50.659 0 32.985 0m0 62.78c-12.026 0-21.455-6.31-25.942-15.016l.683-.253c1.162 1.934 2.688 3.615 4.738 5.895c2.528 2.81 10.522 8.222 20.498 8.222c10.636 0 19.997-5.573 25.236-14.094c.41-.115.546-.3.387-.645c2.391-4.284 4.031-9.65 4.031-14.9c0-3.317-.478-6.011-1.252-8.406a36 36 0 0 0-1.709-4.33a.7.7 0 0 1-.114-.415c.137.116.183.185.297.346c.455.852 1.503 2.948 1.981 4.33c.66 1.819 1.845 4.352 1.845 8.474c0 16.835-13.643 30.791-30.702 30.791M7.294 47.05l22.411-16.305l-1.913-1.106L7.818 46.43c-2.255-4.123-3.804-9.397-3.804-14.418c0-15.89 12.504-28.764 28.356-28.856l-4.077 25.701l1.913 1.129l2.574-26.83c.045-.345.273-.345.273 0l.16 28.28l4.555-2.694l-4.35-25.586c15.578.415 28.492 13.127 28.492 28.81c0 5.067-1.526 10.34-3.803 14.486L38.155 29.64l-1.913 1.106l21.455 15.73c.523.368.364.529-.205.23l-24.074-14.05v5.274l24.142 9.327c-5.056 8.337-14.19 13.68-24.644 13.68s-19.45-5.32-24.506-13.68l24.188-9.327v-5.274L7.568 47.28c-.593.323-.753.139-.206-.253m-.57.276c-1.07-2.21-2.186-5.343-2.641-7.807c0-.138-.023-.253 0-.391c.09.092.114.207.182.391c.729 2.28 1.366 4.307 3.006 7.37l-.57.46zM63.688 26.53s-.114-.207-.183-.368c-2.346-7.3-4.327-10.156-8.176-14.417c-5.056-5.619-13.324-9.949-22.115-9.972c-16.809 0-30.429 13.795-30.429 30.768c0 5.044 1.093 9.42 1.959 11.607c1.025 2.533 2.801 5.965 2.892 6.126c.069.184.091.254.091.415c-.136-.092-.182-.184-.296-.346c-.5-.737-2.596-4.56-3.257-6.218c-1.412-3.615-2.46-7.554-2.46-11.699C1.714 14.923 15.722.714 33.054.714C48.518.714 61 11.584 63.641 26.139c0 .138.046.253 0 .368"></path></svg> </div> <div class="flex justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" class="sm:w-20 sm:h-20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0m0 .78C18.196.78 23.219 5.803 23.219 12c0 6.196-5.022 11.219-11.219 11.219S.781 18.196.781 12S5.804.78 12 .78m-.678.63q-.494.022-.992.078l-.107 2.944a10 10 0 0 1 .71-.094l.07-1.988l-.013-.137l.043.13l.664 1.489h.606l.664-1.488l.04-.131l-.01.137l.07 1.988c.232.022.473.054.71.094l-.109-2.944a15 15 0 0 0-.992-.078l-.653 1.625l-.023.12l-.023-.12zm6.696 1.824l-1.543 2.428c.195.15.452.371.617.522l1.453-.754l.092-.069l-.069.094l-.752 1.453c.163.175.398.458.53.63l2.43-1.544a16 16 0 0 0-.46-.568L18.777 6.44l-.105.092l.078-.115l.68-1.356l-.48-.48l-1.356.68l-.115.078l.091-.106l1.018-1.539c-.18-.152-.351-.291-.57-.46M5.5 3.785c-.36.037-.638.283-1.393 1.125a19 19 0 0 0-.757.914l2.074 1.967c.687-.76.966-1.042 1.508-1.613c.383-.405.6-.87.216-1.317c-.208-.242-.558-.295-.85-.175l-.028.01l.01-.026a.7.7 0 0 0-.243-.734a.72.72 0 0 0-.537-.15zm.006.615c.136-.037.277.06.308.2c.032.14-.056.272-.154.382c-.22.25-1.031 1.098-1.031 1.098l-.402-.383c.417-.51.861-.974 1.062-1.158a.55.55 0 0 1 .217-.139M12 4.883a7.114 7.114 0 0 0-7.08 6.388v.002a7.122 7.122 0 0 0 8.516 7.697a7.11 7.11 0 0 0 5.68-6.97A7.12 7.12 0 0 0 12 4.885zm-5.537.242q.072-.001.14.043c.088.059.128.16.106.26c-.026.119-.125.231-.205.318l-1.045 1.12l-.42-.4s.787-.832 1.045-1.099c.102-.106.168-.17.238-.205a.3.3 0 0 1 .14-.037zM12 5.818A6.175 6.175 0 0 1 18.182 12H12v6.182A6.175 6.175 0 0 1 5.818 12H12z"></path></svg> </div> </div> </div> <h2 id="warum" class="mt-20 text-black mx-auto max-w-2xl text-center text-3xl font-bold md:text-5xl md:mb-3 lg:mb-3"> Unsere Partner </h2> <!-- Container 2 --> <div class="bg-white mx-auto w-full border border-black max-w-7xl px-5 py-16 md:px-10 md:py-20"> <!-- Component 2 --> <div class="flex flex-col items-center gap-8 grid grid-cols-1 sm:grid sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-6"> <div class="flex justify-center"> ${renderComponent($$result2, "Picture", $$Picture, { "src": ATP, "alt": "ATP", "style": "width: 500px; height: 500px padding: 10px", "format": "webp" })} </div> <div class="flex justify-center"> ${renderComponent($$result2, "Picture", $$Picture, { "src": august_bertrams_gmbh, "alt": "august_bertrams_gmbh", "style": "width: 150px; height: 150px; padding: 10px", "format": "webp" })} </div> <div class="flex justify-center"> ${renderComponent($$result2, "Picture", $$Picture, { "src": bmw_langenhahn, "alt": "bmw_langenhahn", "style": "width: 1000px; padding: 10px", "format": "webp" })} </div> <div class="flex justify-center"> ${renderComponent($$result2, "Picture", $$Picture, { "src": Continental_Logo_Tagline_Black_sRGB, "alt": "Continental_Logo", "style": "width: 500px; padding: 10px", "format": "webp" })} </div> <div class="flex justify-center"> ${renderComponent($$result2, "Picture", $$Picture, { "src": cosmo, "alt": "cosmo", "style": "width: 500px; padding: 10px", "format": "webp" })} </div> <div class="flex justify-center"> ${renderComponent($$result2, "Picture", $$Picture, { "src": faktmotion_schwarz, "alt": "faktmotion_schwarz", "style": "width: 500px; padding: 10px", "format": "webp" })} </div> <div class="flex justify-center"> ${renderComponent($$result2, "Picture", $$Picture, { "src": gts, "alt": "gts", "style": "width: 500px; padding: 10px", "format": "webp" })} </div> <div class="flex justify-center"> ${renderComponent($$result2, "Picture", $$Picture, { "src": Hankook, "alt": "Hankok", "style": "width: 500px; padding: 10px", "format": "webp" })} </div> <div class="flex justify-center"> ${renderComponent($$result2, "Picture", $$Picture, { "src": hirsch, "alt": "hirsch", "style": "width: 500px; padding: 10px", "format": "webp" })} </div> <div class="flex justify-center"> ${renderComponent($$result2, "Picture", $$Picture, { "src": ice_makers, "alt": "ice-makers", "style": "width: 500px; padding: 10px", "format": "webp" })} </div> <div class="flex justify-center"> ${renderComponent($$result2, "Picture", $$Picture, { "src": Logo_DUNLOP_TECH_GmbH_dt_3000px, "alt": "Logo_DUNLOP_TECH_GmbH", "style": "width: 500px; padding: 10px", "format": "webp" })} </div> <div class="flex justify-center"> ${renderComponent($$result2, "Picture", $$Picture, { "src": nexen, "alt": "nexen", "style": "width: 150px; padding: 10px", "format": "webp" })} </div> <div class="flex justify-center"> ${renderComponent($$result2, "Picture", $$Picture, { "src": petschak, "alt": "petschak", "style": "width: 500px; padding: 10px", "format": "webp" })} </div> <div class="flex justify-center"> ${renderComponent($$result2, "Picture", $$Picture, { "src": Racelogic_VBAU_Blue, "alt": "VBAU_Blue", "style": "width: 150px; padding: 10px", "format": "webp" })} </div> <div class="flex justify-center"> ${renderComponent($$result2, "Picture", $$Picture, { "src": schade, "alt": "schade", "style": "width: 500px; padding: 10px", "format": "webp" })} </div> <div class="flex justify-center"> ${renderComponent($$result2, "Picture", $$Picture, { "src": sri_e, "alt": "sri-e", "style": "width: 500px; padding: 10px", "format": "webp" })} </div> <div class="flex justify-center"> ${renderComponent($$result2, "Picture", $$Picture, { "src": WuR, "alt": "Wand und Reichwein", "style": "width: 500px; padding: 10px", "format": "webp" })} </div> <div class="flex justify-center"> ${renderComponent($$result2, "Picture", $$Picture, { "src": john_busch, "alt": "John Busch", "style": "width: 100px; padding: 10px", "format": "webp" })} </div> <div class="flex justify-center"> ${renderComponent($$result2, "Picture", $$Picture, { "src": Logo_neu_goethling_s, "alt": "Logo_neu_goethling_s", "style": "width: 300px; padding: 10px", "format": "webp" })} </div> <div class="flex justify-center"> <p style="background-color: black; color: white; font-size: 30px; width: 160px; padding: 10px;">MICHELIN</p> </div> <div class="flex justify-center"> <p style="background-color: black; color: white; font-size: 30px; width: 130px; padding: 10px;">PIRELLI</p> </div> <div class="flex justify-center"> <p style="background-color: black; color: white; font-size: 30px; width: 130px; padding: 10px;">MAGNA</p> </div> <div class="flex justify-center"> <p style="background-color: black; color: white; font-size: 16px; width: 140px; padding: 10px;">ROBERT-BOSCH</p> </div> <div class="flex justify-center"> <p style="background-color: black; color: white; font-size: 15px; width: 130px; padding: 10px;">Nardo Technical Center S.R.L</p> </div> <div class="flex justify-center"> <p style="background-color: black; color: white; font-size: 30px; width: 115px; padding: 10px;">DEKRA</p> </div> <div class="flex justify-center"> <p style="background-color: black; color: white; font-size: 15px; width: 100px; padding: 10px;">TÜV-NORD TÜV-SÜD</p> </div> <div class="flex justify-center"> <p style="background-color: black; color: white; font-size: 25px; width: 190px; padding: 10px;">STAHLGRUBER</p> </div> <div class="flex justify-center"> <p style="background-color: black; color: white; font-size: 30px; width: 100px; padding: 10px;">ARRK</p> </div> </div> </div> </section> ` })}`;
}, "/home/ferdi/r-ds-at/src/components/OP/OPHero.astro", void 0);

const $$OPFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "UdFooter" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<footer> <!-- Hero Container --> <div class="flex-col lg:flex px-5 py-16 md:px-10 md:py-20"> <!-- TOP CONTAINER --> <div class="lg:flex lg:flex-row lg:justify-between"> <!-- LOGO DIV --> <div> <!-- LOGO --> ${renderComponent($$result2, "Image", $$Image, { "src": reichwein, "alt": "Reichwein", "style": "width: 400px" })} <p class="font-inter mt-4 max-w-80 text-base font-light text-gray-500"> Development Services & Automotive Testing </p> </div> <!-- FOOTER LINKS --> <div class="flex grow flex-row flex-wrap lg:mx-10 lg:flex-nowrap lg:justify-center"> <!-- LINK BLOCK --> <div class="my-5 mr-8 flex max-w-52 grow basis-24 flex-col space-y-5 lg:mx-10 lg:mt-0"> <h2 class="font-inter font-medium text-black">TELE</h2> <p class="font-inter font-light text-gray-500"> Telefon: 036922 4374-0 </p> <p class="font-inter font-light text-gray-500"> Telefax: 036922 4374-18 </p> </div> <!-- LINK BLOCK --> <div class="my-5 mr-8 flex max-w-52 grow basis-24 flex-col space-y-5 lg:mx-10 lg:mt-0"> <h2 class="font-inter font-medium text-black">EMAIL</h2> <p class="font-inter font-light text-gray-500"> info@ds-at-reichwein.de </p> <p class="font-inter font-light text-gray-500"> bewerbung@ds-at-reichwein.de </p> </div> <!-- LINK BLOCK --> <div class="my-5 mr-8 flex max-w-52 grow basis-24 flex-col space-y-5 lg:mx-10 lg:mt-0"> <h2 class="font-inter font-medium text-black">UNTERNEHM</h2> <a href="/" class="font-inter font-light text-gray-500"> Home </a> <a href="/kontakt" class="font-inter font-light text-gray-500"> Kontakt </a> <a href="/karriere" class="font-inter font-light text-gray-500"> Karriere </a> <a href="/impressum" class="font-inter font-light text-gray-500"> Impressum </a> <a href="/datenschutz" class="font-inter font-light text-gray-500"> Datenschutz </a> </div> </div> <!-- LOCATION & SUPPORT --> <div class="mt-10 flex flex-col lg:mt-0"> <!-- ITEM --> <div class="flex flex-row items-center max-w-72"> <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.23 8.77h1.54V7.23h-1.54zm0 4h1.54v-1.54h-1.54zm0 4h1.54v-1.54h-1.54zM16 20v-1h5V5h-9.615v2.189l-1-.72V4H22v16zM2 20v-8.5l6-4.27l6 4.27V20H9.27v-4.5H6.73V20zm1-1h2.73v-4.5h4.54V19H13v-7L8 8.489L3 12zm7.27 0v-4.5H5.73V19v-4.5h4.54z"></path></svg> <p class="font-inter ml-4 text-black"> DS-AT Reichwein GmbH & Co. KG
                Schäferstraße 5
                99837 Werra-Suhl-Tal </p> </div> <!-- ITEM --> <div class="mb-12 mt-10 flex flex-row items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><circle cx="12" cy="9" r="2.5"></circle><path d="m9 17l9-11M6 12l8-9.5M7 5l3 2.5M12.01 22c-.354 0-.519-.151-.701-.659c-.48-1.69-1.378-3.15-2.467-4.521c-.986-1.317-2.44-2.816-3.196-4.524C3.546 7.655 6.801 1.992 11.993 2c5.335-.015 8.543 5.851 6.263 10.545a21 21 0 0 1-2.339 3.333c-1.381 1.631-2.622 3.397-3.211 5.466c-.136.399-.31.656-.696.656"></path></g></svg> <a href="https://www.google-maps.com" class="font-inter text-black">Google Maps<svg class="inline ml-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6v2H5v12h12v-6zM13 3v2h4.586l-7.793 7.793l1.414 1.414L19 6.414V11h2V3z"></path></svg></a> </div> <!-- ITEM --> <div class="mb-5 flex flex-row items-center max-w-72"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 5.25L12 13.5L3 5.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg> <p class="font-inter ml-4 text-black">info@ds-at-reichwein.de</p> </div> </div> </div> </div> </footer> <div class="mx-auto flex-col lg:flex px-5 py-16 md:px-10 md:py-10 bg-black"> <div class="lg:flex lg:flex-row lg:justify-between"> <p class="font-inter text-center text-sm text-white lg:mt-0"> © 2024 DS-AT Reichwein - Dienstleistungen für die Automobilbranche - Alle Rechte vorbehalten </p> </div> </div> ` })}`;
}, "/home/ferdi/r-ds-at/src/components/OP/OPFooter.astro", void 0);

const $$OPLinks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Unsere Dienstleistung", "data-astro-cid-r6vroai5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section style="border-top: 2px solid black; margin-bottom: -100px;" data-astro-cid-r6vroai5> <!-- Container --> <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20" data-astro-cid-r6vroai5> <section data-astro-cid-r6vroai5> <!-- Content --> <div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3" data-astro-cid-r6vroai5> <!-- Item --> <a href="/unsere-dienstleistung" class="rounded-3xl hover-gradient bg-white text-black flex-col flex items-start justify-between border border-black p-10 h-72 hover:text-white transition" data-astro-cid-r6vroai5> <div class=" flex w-full items-center justify-between" data-astro-cid-r6vroai5> <h5 class="text-xl font-bold" data-astro-cid-r6vroai5>Unsere Dienstleistungen</h5> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-r6vroai5> <path d="M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-r6vroai5></path> <path d="M8.25 6H18V15.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-r6vroai5></path> </svg> </div> <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 32 32" data-astro-cid-r6vroai5><path fill="currentColor" d="M21.5 2.5v1.406a5.6 5.6 0 0 0-2.28.938l-1.032-.97l-1.375 1.47l1 .937a5.7 5.7 0 0 0-.907 2.22H15.5v2h1.406c.146.83.474 1.586.938 2.25l-1.063 1.03l1.44 1.44l1.03-1.064c.664.464 1.42.792 2.25.938V16.5h2v-1.406a5.7 5.7 0 0 0 2.22-.906l.936 1l1.47-1.376l-.97-1.03c.47-.67.79-1.445.938-2.282H29.5v-2h-1.406a5.6 5.6 0 0 0-.938-2.25l.938-.938l-1.407-1.406l-.937.938a5.6 5.6 0 0 0-2.25-.938V2.5zm1 3.313A3.664 3.664 0 0 1 26.188 9.5c0 2.055-1.633 3.688-3.688 3.688s-3.688-1.633-3.688-3.688s1.633-3.688 3.688-3.688zM9.53 11.718l-1.842.75l.718 1.81a6.94 6.94 0 0 0-2.344 2.314l-1.78-.72l-.75 1.845l1.78.718a6.8 6.8 0 0 0-.218 1.656c0 .57.085 1.126.218 1.656l-1.78.72l.75 1.843l1.78-.72a6.9 6.9 0 0 0 2.344 2.345l-.72 1.78l1.845.75l.72-1.78a6.8 6.8 0 0 0 1.656.218c.57 0 1.128-.085 1.656-.218l.72 1.78l1.843-.75l-.72-1.78a6.9 6.9 0 0 0 2.314-2.344l1.81.718l.75-1.843l-1.81-.72c.13-.53.218-1.087.218-1.656c0-.57-.087-1.128-.22-1.657l1.813-.718l-.75-1.845l-1.81.72a6.9 6.9 0 0 0-2.314-2.314l.72-1.81l-1.845-.75l-.717 1.81a7 7 0 0 0-1.657-.217c-.57 0-1.126.086-1.656.218l-.72-1.81zm2.376 3.592c2.663 0 4.78 2.12 4.78 4.782c.002 2.663-2.117 4.812-4.78 4.812a4.806 4.806 0 0 1-4.812-4.812c0-2.663 2.15-4.782 4.812-4.782" data-astro-cid-r6vroai5></path></svg> </a> <!-- Item --> <a href="/innovation-nachhaltigkeit" class="rounded-3xl hover-gradient bg-white flex-col flex items-start justify-between border border-black p-10 h-72 hover:bg-red-600 hover:text-white transition" data-astro-cid-r6vroai5> <div class=" flex w-full items-center justify-between" data-astro-cid-r6vroai5> <h5 class="text-xl font-bold" data-astro-cid-r6vroai5>Innovationen, Nachhaltigkeit</h5> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-r6vroai5> <path d="M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-r6vroai5></path> <path d="M8.25 6H18V15.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-r6vroai5></path> </svg> </div> <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 32 32" data-astro-cid-r6vroai5><path fill="currentColor" d="M21.57 27.75A12.9 12.9 0 0 1 16 29C8.832 29 3 23.168 3 16c0-3.075 1.057-5.979 3-8.308V10h2V4H2v2h2.842A14.86 14.86 0 0 0 1 16c0 8.271 6.729 15 15 15a14.9 14.9 0 0 0 6.43-1.444z" data-astro-cid-r6vroai5></path><path fill="currentColor" d="M21 9c-3.16 0-5.751 2.457-5.978 5.56A5.97 5.97 0 0 0 11 13H7v4c0 3.309 2.692 6 6 6h2v4h2v-8h2c3.308 0 6-2.691 6-6V9zm-8 12c-2.206 0-4-1.794-4-4v-2h2c2.206 0 4 1.794 4 4v.586l-2.293-2.293l-1.414 1.414L13.586 21zm10-8c0 2.206-1.794 4-4 4h-.586l2.293-2.293l-1.414-1.414L17 15.586V15c0-2.206 1.794-4 4-4h2z" data-astro-cid-r6vroai5></path><path fill="currentColor" d="M31 16c0-8.271-6.729-15-15-15a14.9 14.9 0 0 0-6.43 1.444l.86 1.806A12.9 12.9 0 0 1 16 3c7.168 0 13 5.832 13 13c0 3.075-1.057 5.979-3 8.308V22h-2v6h6v-2h-2.842A14.86 14.86 0 0 0 31 16" data-astro-cid-r6vroai5></path></svg> </a> <!-- Item --> <a href="/unsere-zertifizierungen" class="rounded-3xl hover-gradient bg-white flex-col flex items-start justify-between border border-black p-10 h-72 hover:bg-red-600 hover:text-white transition" data-astro-cid-r6vroai5> <div class=" flex w-full items-center justify-between" data-astro-cid-r6vroai5> <h5 class="text-xl font-bold" data-astro-cid-r6vroai5>Unsere Zertifizierungen</h5> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-r6vroai5> <path d="M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-r6vroai5></path> <path d="M8.25 6H18V15.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-r6vroai5></path> </svg> </div> <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24" data-astro-cid-r6vroai5><g fill="none" data-astro-cid-r6vroai5><path fill="currentColor" d="m15 22l-.555.832A1 1 0 0 0 16 22zm-3-2l.555-.832a1 1 0 0 0-1.11 0zm-3 2H8a1 1 0 0 0 1.555.832zM8.75 3.537l-.08.997zm1.685-.697l-.762-.648zM6.532 5.686l-.997.08zm2.154-2.154l.08-.997zM5.84 7.435l.648.761zm.697-1.684l.997-.08zm-.747 4.772l-.648.762zm0-3.046l-.648-.762zm.747 4.772l-.997-.08zm-.697-1.684l.648-.761zm2.846 3.903l.08.997zm-2.154-2.154l.997.08zm3.903 2.846l.761-.648zm-1.684-.697l-.08-.997zm4.772.747l.762.648zm-3.046 0l-.762.648zm4.772-.747l.08-.997zm-1.684.697l-.761-.648zm3.903-2.846l.997-.08zm-2.154 2.154l-.08.997zm2.846-3.903l.648.762zm-.697 1.684l-.997.08zm.747-4.772l.648-.762zm0 3.046l-.648-.761zm-.747-4.772l-.997-.08zm.697 1.684l-.648.761zm-2.846-3.903l-.08-.997zm2.154 2.154l.997.08zM13.565 2.84l.762-.648zm1.684.697l.08.997zm-1.726-.747l-.761.648zm-3.046 0l.761.648zM9 14.458l.044-.999zm6.555 6.71l-3-2l-1.11 1.664l3 2zm-4.11-2l-3 2l1.11 1.664l3-2zm1.317-15.73l.042.05l1.523-1.296l-.042-.05zm2.567 1.096l.065-.005l-.16-1.994l-.065.005zm1.142 1.072l-.005.065l1.994.16l.005-.065zm1.041 2.59l.05.042l1.296-1.523l-.05-.042zm.05 1.566l-.05.042l1.296 1.523l.05-.042zm-1.096 2.567l.005.065l1.994-.16l-.005-.065zm-1.072 1.142l-.065-.005l-.16 1.994l.065.005zm-2.59 1.041l-.042.05l1.523 1.296l.042-.05zm-1.566.05l-.042-.05l-1.523 1.296l.042.05zm-2.567-1.096l-.065.005l.16 1.994l.065-.005zm-1.142-1.072l.005-.065l-1.994-.16l-.005.065zm-1.041-2.59l-.05-.042l-1.296 1.523l.05.042zm-.05-1.566l.05-.042l-1.296-1.523l-.05.042zm1.096-2.567l-.005-.065l-1.994.16l.005.065zm1.072-1.142l.065.005l.16-1.994l-.065-.005zm2.59-1.041l.042-.05l-1.523-1.296l-.042.05zM8.671 4.534a3 3 0 0 0 2.525-1.046L9.673 2.192a1 1 0 0 1-.842.348zM7.529 5.606a1 1 0 0 1 1.077-1.077l.16-1.994a3 3 0 0 0-3.23 3.231zm-1.041 2.59a3 3 0 0 0 1.046-2.525l-1.994.16a1 1 0 0 1-.348.842zm-.05 1.566a1 1 0 0 1 0-1.524L5.142 6.715a3 3 0 0 0 0 4.57zm1.096 2.567a3 3 0 0 0-1.046-2.525l-1.296 1.523a1 1 0 0 1 .348.842zm1.072 1.142a1 1 0 0 1-1.077-1.077l-1.994-.16a3 3 0 0 0 3.231 3.23zm4.156 1.09a1 1 0 0 1-1.524 0l-1.523 1.297a3 3 0 0 0 4.57 0zm3.71-2.167a1 1 0 0 1-1.078 1.077l-.16 1.994a3 3 0 0 0 3.23-3.231zm1.04-2.59a3 3 0 0 0-1.046 2.525l1.994-.16a1 1 0 0 1 .348-.842zm.05-1.566a1 1 0 0 1 0 1.524l1.296 1.523a3 3 0 0 0 0-4.57zm-1.096-2.567a3 3 0 0 0 1.046 2.525l1.296-1.523a1 1 0 0 1-.348-.842zm-1.072-1.142a1 1 0 0 1 1.077 1.077l1.994.16a3 3 0 0 0-3.231-3.23zm-2.59-1.041a3 3 0 0 0 2.525 1.046l-.16-1.994a1 1 0 0 1-.842-.348zm1.48-1.346a3 3 0 0 0-4.569 0l1.523 1.296a1 1 0 0 1 1.524 0zm-3.088 12.37a3 3 0 0 0-2.152-1.053l-.088 1.998a1 1 0 0 1 .717.351zM9.044 13.46a3 3 0 0 0-.373.007l.16 1.994a1 1 0 0 1 .125-.003zM10 22v-7.542H8V22zm5.33-8.534a3 3 0 0 0-.374-.007l.088 1.998a1 1 0 0 1 .125.003zm-.374-.007a3 3 0 0 0-2.152 1.053l1.523 1.296a1 1 0 0 1 .717-.35zm-.956 1V22h2v-7.542z" data-astro-cid-r6vroai5></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 8l-3 3l-1-1" data-astro-cid-r6vroai5></path></g></svg> </a> <!-- Item --> <a href="/ds-at-als-arbeitsgeber" class="rounded-3xl hover-gradient-bottom bg-white flex-col flex items-start justify-between border border-black p-10 h-72 hover:bg-red-600 hover:text-white transition" data-astro-cid-r6vroai5> <div class=" flex w-full items-center justify-between" data-astro-cid-r6vroai5> <h5 class="text-xl font-bold" data-astro-cid-r6vroai5>DS-AT als Arbeitgeber</h5> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-r6vroai5> <path d="M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-r6vroai5></path> <path d="M8.25 6H18V15.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-r6vroai5></path> </svg> </div> <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24" data-astro-cid-r6vroai5><g fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-r6vroai5><path stroke-linecap="round" stroke-linejoin="round" d="m16.719 19.752l-.64-5.124A3 3 0 0 0 13.101 12h-2.204a3 3 0 0 0-2.976 2.628l-.641 5.124A2 2 0 0 0 9.266 22h5.468a2 2 0 0 0 1.985-2.248" data-astro-cid-r6vroai5></path><circle cx="12" cy="5" r="3" data-astro-cid-r6vroai5></circle><circle cx="4" cy="9" r="2" data-astro-cid-r6vroai5></circle><circle cx="20" cy="9" r="2" data-astro-cid-r6vroai5></circle><path stroke-linecap="round" stroke-linejoin="round" d="M4 14h-.306a2 2 0 0 0-1.973 1.671l-.333 2A2 2 0 0 0 3.361 20H7m13-6h.306a2 2 0 0 1 1.973 1.671l.333 2A2 2 0 0 1 20.639 20H17" data-astro-cid-r6vroai5></path></g></svg> </a> <!-- Item --> <a href="/unsere-zusaetzlichen-benefits" class="rounded-3xl hover-gradient-bottom bg-white flex-col flex items-start justify-between border border-black p-10 h-72 hover:bg-red-600 hover:text-white transition" data-astro-cid-r6vroai5> <div class=" flex w-full items-center justify-between" data-astro-cid-r6vroai5> <h5 class="text-xl font-bold" data-astro-cid-r6vroai5>Unsere zusätzlichen Benefits</h5> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-r6vroai5> <path d="M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-r6vroai5></path> <path d="M8.25 6H18V15.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-r6vroai5></path> </svg> </div> <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24" data-astro-cid-r6vroai5><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.635 14.415l1.039-2.203a.357.357 0 0 1 .652 0l1.04 2.203l2.323.356c.298.045.416.429.2.649l-1.68 1.713l.396 2.421c.051.311-.26.548-.527.401L6 18.812l-2.078 1.143c-.267.147-.578-.09-.527-.4l.396-2.422l-1.68-1.713c-.217-.22-.098-.604.2-.65zm12 0l1.039-2.203a.357.357 0 0 1 .652 0l1.04 2.203l2.323.356c.298.045.416.429.2.649l-1.68 1.713l.396 2.421c.051.311-.26.548-.527.401L18 18.812l-2.078 1.143c-.267.147-.578-.09-.527-.4l.396-2.422l-1.68-1.713c-.216-.22-.098-.604.2-.65zm-6-9l1.039-2.203a.357.357 0 0 1 .652 0l1.04 2.203l2.323.356c.298.045.416.429.2.649l-1.68 1.713l.396 2.421c.051.311-.26.548-.527.401L12 9.812l-2.078 1.143c-.267.147-.578-.09-.527-.4l.396-2.422l-1.68-1.713c-.217-.22-.098-.604.2-.65z" data-astro-cid-r6vroai5></path></svg> </a> <!-- Item --> <a href="/oems-und-partner" class="rounded-3xl hover-gradient-bottom bg-white flex-col flex items-start justify-between border border-black p-10  h-72 hover:bg-red-600 hover:text-white transition" data-astro-cid-r6vroai5> <div class=" flex w-full items-center justify-between" data-astro-cid-r6vroai5> <h5 class="text-xl font-bold" data-astro-cid-r6vroai5>OEMs und Partner</h5> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-r6vroai5> <path d="M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-r6vroai5></path> <path d="M8.25 6H18V15.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-r6vroai5></path> </svg> </div> <svg xmlns="http://www.w3.org/2000/svg" width="6.25em" height="5em" viewBox="0 0 640 512" data-astro-cid-r6vroai5><path fill="currentColor" d="m272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9c-10.2 9.1-23.5 14.1-37.2 14.1H96v128c20.4.6 39.8 8.9 54.3 23.4l35.6 35.6l7 7l27 27c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4.6 22.2 6.5l10.8 10.6c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2l30.1 26.8H624c8.8 0 16 7.2 16 16v208c0 17.7-14.3 32-32 32h-32c-11.8 0-22.2-6.4-27.7-16h-84.9c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7l-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3c0 17.6-14.4 31.9-32 31.9H32c-17.7 0-32-14.3-32-32V144c0-8.8 7.2-16 16-16h99.8c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64H259c4.4 0 8.9.2 13.2.6M544 320V176h-48c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8C425 120.9 401.5 112 377.1 112c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3.5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8.8l74.4 74.4c10 10 16.5 22.3 19.4 35.1h74.8zM64 336a16 16 0 1 0-32 0a16 16 0 1 0 32 0m528 16a16 16 0 1 0 0-32a16 16 0 1 0 0 32" data-astro-cid-r6vroai5></path></svg> </a> </div> </section></div> </section> ` })} `;
}, "/home/ferdi/r-ds-at/src/components/OP/OPLinks.astro", void 0);

const $$OemsUndPartner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Unsere Dienstleistung", "data-astro-cid-2inccjat": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "OPNavReact", navbar, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/home/ferdi/r-ds-at/src/components/OP/OPNavReact", "client:component-export": "default", "data-astro-cid-2inccjat": true })} ${maybeRenderHead()}<section class="fulll mt-1 mb-40" data-astro-cid-2inccjat> ${renderComponent($$result2, "OPHero", $$OPHero, { "data-astro-cid-2inccjat": true })} ${renderComponent($$result2, "OPLinks", $$OPLinks, { "data-astro-cid-2inccjat": true })} </section> ${renderComponent($$result2, "OPFooter", $$OPFooter, { "data-astro-cid-2inccjat": true })} ` })} `;
}, "/home/ferdi/r-ds-at/src/pages/oems-und-partner.astro", void 0);

const $$file = "/home/ferdi/r-ds-at/src/pages/oems-und-partner.astro";
const $$url = "/oems-und-partner";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OemsUndPartner,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
