import { c as createAstro, b as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, e as addAttribute, F as Fragment, u as unescapeHTML } from '../astro_G7tX4qtY.mjs';
import { f as fetchAPI, $ as $$Breadcrumbs, d as $$Icon, a as $$Image, b as $$Pricing, c as $$Layout, S as SaleForm$1, e as getImage } from './_slug__YfkBvt2B.mjs';
/* empty css                            */
/* empty css                          */
import { jsxs, Fragment as Fragment$1, jsx } from 'react/jsx-runtime';
import { Transition, Dialog } from '@headlessui/react';
import { useState, Fragment as Fragment$2 } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const $$Astro$b = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Index$3;
  const customCrumbs = [
    {
      text: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
      href: "/"
    },
    {
      text: "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"
    }
  ];
  const data = await fetchAPI({
    query: `
  query projects {
    categories {
      nodes { name slug }
    }
    projects {
      nodes {
        title slug excerpt
        featuredImage {
          node { mediaItemUrl }
        }
        categories {
        nodes {  slug  name  } }
      }
    }
  } 
  `
  });
  const { category } = Astro2.params;
  const projects = data.projects.nodes.filter((item) => item.categories.nodes[0].slug === category);
  const categories = data.categories.nodes.filter((category2) => category2.slug !== "\u0431\u0435\u0437-\u0440\u0443\u0431\u0440\u0438\u043A\u0438");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "title" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#F0F0F0]"> <div class="container pt-9 pb-14 sm:pb-32"> <div class="mb-16 sm:mb-24"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "crumbs": customCrumbs })} </div> <div class="flex-stack items-start mb-14 md:mb-24"> <div> <h2 class="section-title mb-3">Выполненные проекты</h2> <h3 class="text-xl sm:text-3xl uppercase text-[#56585E] font-extrabold flex items-start gap-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "marks", "class": "size-8" })}
Наплавляемая кровля
</h3> </div> <span class="text-[#9EA1AB] font-semibold text-nowrap shrink-0 hidden md:block text-end">[ Работы по всей <br> России ]</span> </div> <nav class="mb-10 sm:mb-14"> <ul class="grid grid-cols-2 gap-2 items-stretch sm:flex flex-wrap"> ${categories.map((item) => renderTemplate`<li> <a${addAttribute(item.slug, "href")}${addAttribute(`py-2 px-3 sm:py-5 sm:px-7 h-full flex items-center gap-2
                  text-[12px] sm:text-base rounded font-bold uppercase hover:bg-primary 
                  hover:text-white transition-colors ${item.slug == category ? "bg-primary text-white" : "bg-white"}`, "class")}> ${item.name} ${item.slug == category && renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "arrow-right", "class": "size-5" })}`} </a> </li>`)} </ul> </nav> <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-5 sm:gap-y-10"> ${projects.length < 1 && "\u041F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0432 \u0431\u0430\u0437\u0435 \u043D\u0435\u0442"} ${projects.map((project) => renderTemplate`<li class="flex flex-col items-center bg-white gap-5 p-5 rounded-lg"> ${renderComponent($$result2, "Image", $$Image, { "src": project.featuredImage.node.mediaItemUrl, "width": 360, "height": 266, "alt": project.title })} <span class="font-bold uppercase text-center">${project.title}</span> <div class="text-[#848898] text-center"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(project.excerpt)}` })} </div> <a${addAttribute(`/projects/${project.slug}`, "href")} class="button text-[#1D1D21] hover:bg-primary mt-auto bg-[#F4F3F4] hover:text-white transition-colors">
подробнее
</a> </li>`)} </ul> </div> ${renderComponent($$result2, "Pricing", $$Pricing, {})} </div> ` })}`;
}, "C:/Users/user/Documents/GitHub/vector-roof/src/pages/projects/category/[category]/index.astro", void 0);

const $$file$3 = "C:/Users/user/Documents/GitHub/vector-roof/src/pages/projects/category/[category]/index.astro";
const $$url$3 = "/projects/category/[category]";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro();
const $$Advantages = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Advantages;
  return renderTemplate`${maybeRenderHead()}<section class="container pb-14 md:pb-28"> <div class="flex flex-col sm:flex-row w-full gap-5"> <div class="card bg-[#E0E2E6] w-full relative overflow-hidden rounded-lg"> <div class="flex flex-row sm:flex-col xl:flex-row items-center sm:items-start xl:items-center gap-3 p-6 sm:p-8 overflow-hidden relative z-20"> <span class="text-6xl font-medium">180</span> <span class="text-[#202228] font-bold">сотрудников <br> в компании</span> </div> <div class="absolute -right-5 z-10 top-0"> <svg xmlns="http://www.w3.org/2000/svg" width="243" height="140" viewBox="0 0 243 140" fill="none" class="h-[120px] sm:h-[140px]"> <g opacity="0.8"> <g clip-path="url(#clip0_1_162)"> <path d="M262.773 0H197.429L100.623 111.038H165.967L262.773 0Z" fill="#E7EAEE"></path> <path d="M365 0H299.656L202.85 111.038H268.194L365 0Z" fill="#E7EAEE"></path> <path d="M160.547 0H95.2029L-1.60312 111.038H63.7409L160.547 0Z" fill="#E7EAEE"></path> <rect width="65.2125" height="29.9625" transform="matrix(-1 0 0 1 63.6094 111.039)" fill="#E7EAEE"></rect> <rect width="65.2125" height="29.9625" transform="matrix(-1 0 0 1 165.836 111.039)" fill="#E7EAEE"></rect> <rect width="65.2125" height="29.9625" transform="matrix(-1 0 0 1 268.062 111.039)" fill="#E7EAEE"></rect> <path d="M269.828 111.039H-2.47815" stroke="#E0E2E6"></path> </g> </g> <defs> <clipPath id="clip0_1_162"> <rect width="243" height="140" rx="8" transform="matrix(-1 0 0 1 243 0)" fill="white"></rect> </clipPath> </defs> </svg> </div> </div> <div class="card bg-[#2E3037] w-full text-white relative overflow-hidden rounded-lg"> <div class="flex flex-row sm:flex-col xl:flex-row items-center sm:items-start xl:items-center gap-3 p-6 sm:p-8 overflow-hidden relative z-20"> <span class="text-6xl font-medium">325</span> <span class="font-bold">проектов <br> реализовано</span> </div> <div class="absolute -right-5 z-10 top-0"> <svg xmlns="http://www.w3.org/2000/svg" width="243" height="140" viewBox="0 0 243 140" fill="none" class="h-[120px] sm:h-[140px]"> <g opacity="0.7"> <g clip-path="url(#clip0_52_59)"> <path d="M262.773 0H197.429L100.623 111.038H165.967L262.773 0Z" fill="#32363F"></path> <path d="M365 0H299.656L202.85 111.038H268.194L365 0Z" fill="#32363F"></path> <path d="M160.547 0H95.2029L-1.60312 111.038H63.7409L160.547 0Z" fill="#32363F"></path> <rect width="65.2125" height="29.9625" transform="matrix(-1 0 0 1 63.6094 111.039)" fill="#32363F"></rect> <rect width="65.2125" height="29.9625" transform="matrix(-1 0 0 1 165.836 111.039)" fill="#32363F"></rect> <rect width="65.2125" height="29.9625" transform="matrix(-1 0 0 1 268.062 111.039)" fill="#32363F"></rect> <path d="M269.828 111.039H-2.47815" stroke="#2E3037"></path> </g> </g> <defs> <clipPath id="clip0_52_59"> <rect width="247" height="126" rx="8" transform="matrix(-1 0 0 1 247 0)" fill="white"></rect> </clipPath> </defs> </svg> </div> </div> <div class="card bg-[#F43333] w-full text-white relative overflow-hidden rounded-lg"> <div class="flex flex-row sm:flex-col xl:flex-row items-center sm:items-start xl:items-center gap-3 p-6 sm:p-8 overflow-hidden relative z-20"> <span class="text-6xl font-medium">20</span> <span class="font-bold">лет <br> на рынке</span> </div> <div class="absolute -right-5 z-10 top-0"> <svg xmlns="http://www.w3.org/2000/svg" width="243" height="140" viewBox="0 0 243 140" fill="none" class="h-[120px] sm:h-[140px]"> <g opacity="0.8"> <g clip-path="url(#clip0_52_73)"> <path d="M262.773 0H197.429L100.623 111.038H165.967L262.773 0Z" fill="#FC3A3A"></path> <path d="M365 0H299.656L202.85 111.038H268.194L365 0Z" fill="#FC3A3A"></path> <path d="M160.547 0H95.2029L-1.60312 111.038H63.7409L160.547 0Z" fill="#FC3A3A"></path> <rect width="65.2125" height="29.9625" transform="matrix(-1 0 0 1 63.6094 111.039)" fill="#FC3A3A"></rect> <rect width="65.2125" height="29.9625" transform="matrix(-1 0 0 1 165.836 111.039)" fill="#FC3A3A"></rect> <rect width="65.2125" height="29.9625" transform="matrix(-1 0 0 1 268.062 111.039)" fill="#FC3A3A"></rect> <path d="M269.828 111.039H-2.47815" stroke="#F43333"></path> </g> </g> <defs> <clipPath id="clip0_52_73"> <rect width="243" height="126" rx="8" transform="matrix(-1 0 0 1 243 0)" fill="white"></rect> </clipPath> </defs> </svg> </div> </div> </div> </section>`;
}, "C:/Users/user/Documents/GitHub/vector-roof/src/components/Advantages.astro", void 0);

const $$Astro$9 = createAstro();
const $$Benefits = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Benefits;
  const benefitsItems = [
    {
      num: "1",
      title: "\u0441\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u0441\u0440\u043E\u043A\u043E\u0432",
      text: "\u0421\u0442\u0440\u043E\u0433\u043E \u043F\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u0441\u044F \u043E\u0433\u043E\u0432\u043E\u0440\u0435\u043D\u043D\u044B\u0445 \u0441\u0440\u043E\u043A\u043E\u0432, \u0441\u043E\u0431\u043B\u044E\u0434\u0430\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443, \u0447\u0442\u043E \u043F\u0440\u0438\u0434\u0430\u0435\u0442 \u044F\u0441\u043D\u043E\u0441\u0442\u044C \u0438 \u0441\u043F\u043E\u043A\u043E\u0439\u0441\u0442\u0432\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0443"
    },
    {
      num: "2",
      title: "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u043D\u043E\u0441\u0442\u044C",
      text: "\u041F\u0440\u044F\u043C\u043E\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\xA0\u0432\u0435\u0434\u0443\u0449\u0438\u043C\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F\u043C\u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0434\u043B\u044F\xA0\u043A\u0440\u043E\u0432\u043B\u0438 \u0438\xA0\u0442\u0435\u043F\u043B\u043E\u0438\u0437\u043E\u043B\u044F\u0446\u0438\u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0442\u044C \u043B\u0443\u0447\u0448\u0438\u0435 \u0446\u0435\u043D\u044B \u043D\u0430\xA0\u0440\u044B\u043D\u043A\u0435"
    },
    {
      title: "",
      text: "",
      visible: false
    },
    {
      num: "3",
      title: "\u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
      text: "\u041F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u0447\u0435\u0442\u043A\u0438\u0439 \u0438 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0439 \u0440\u0430\u0441\u0447\u0435\u0442 \u0434\u043E \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430, \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044F \u0432\u0430\u043C \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0432 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0431\u044E\u0434\u0436\u0435\u0442\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"
    },
    {
      num: "4",
      title: "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F",
      text: "\u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C 3 \u0433\u043E\u0434\u0430 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0438 \u043D\u0430 \u0432\u0441\u0435 \u0440\u0430\u0431\u043E\u0442\u044B \u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u043F\u0440\u0435\u043C\u0438\u0443\u043C-\u043A\u043B\u0430\u0441\u0441\u0430.  \u041F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u044F \u0440\u0438\u0441\u043A\u043E\u0432 \u0438 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u043E\u0435 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u0443\u044E \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u044E \u0434\u043E 15 \u043B\u0435\u0442"
    },
    {
      title: "",
      text: "",
      visible: false
    },
    {
      num: "5",
      title: "\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430",
      text: "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043D\u0430 \u0432\u0441\u0435\u0445 \u044D\u0442\u0430\u043F\u0430\u0445 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043A\u0440\u043E\u0432\u0435\u043B\u044C\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u043C, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u0443\u044E \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443 \u0438 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430\u043C\u0438 \u0441\u043B\u0443\u0436\u0431\u044B \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430"
    },
    {
      num: "6",
      title: "\u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u0438\u0437\u043C",
      text: "\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0432\u043B\u0430\u0434\u0435\u0435\u0442 \u043F\u0435\u0440\u0435\u0434\u043E\u0432\u044B\u043C\u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F\u043C\u0438 \u0438 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435\u043C, \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u0430\u0442\u0442\u0435\u0441\u0442\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432 \u0441 20-\u0442\u0438 \u043B\u0435\u0442\u043D\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u0432 \u043E\u0442\u0440\u0430\u0441\u043B\u0438"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-[#F4F3F4] mb-10 pt-16 sm:pt-32" data-astro-cid-aafkaq3q> <div class="container relative" data-astro-cid-aafkaq3q> ${renderComponent($$result, "Image", $$Image, { "src": import('../benefits-mask_edVdfcSL.mjs'), "class": "absolute max-w-[375px] md:max-w-[770px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", "alt": "benefits", "data-astro-cid-aafkaq3q": true })} <div class="flex-stack items-start sm:items-center mb-5 md:mb-[50px]" data-astro-cid-aafkaq3q> <h2 class="section-title" data-astro-cid-aafkaq3q>Почему выбирают нас?</h2> <span class="text-[#9EA1AB] font-semibold text-nowrap shrink-0" data-astro-cid-aafkaq3q>[ Преимущества ]</span> </div> <div class="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 z-10 relative" data-astro-cid-aafkaq3q> ${benefitsItems.map((item, index) => renderTemplate`<div${addAttribute(`bg-white p-6 rounded-lg 
            ${index === 3 && "mb-40 sm:mb-0"}
            ${item.visible === false && "bg-transparent invisible hidden xl:block"}`, "class")} data-astro-cid-aafkaq3q> <span class="grid w-12 h-12 place-content-center place-items-center rounded-full border border-[#F7CDCD] mb-5 text-[#D50808] font-bold" data-astro-cid-aafkaq3q>
0${item.num} </span> <h3 class="uppercase font-bold mb-3" data-astro-cid-aafkaq3q>${item.title}</h3> <p class="text-[#656A7C] font-semibold" data-astro-cid-aafkaq3q>${item.text}</p> </div>`)} </div> </div> <div class="bg-[#2E3037] clip sm:-mt-[250px]" data-astro-cid-aafkaq3q> <div class="container mt-14 pt-14 pb-10 sm:pb-[120px] sm:pt-[460px]" data-astro-cid-aafkaq3q> <div class="flex-stack flex-col gap-10 sm:flex-row items-start sm:items-end" data-astro-cid-aafkaq3q> <span class="text-white self-end sm:self-auto font-semibold text-nowrap" data-astro-cid-aafkaq3q>[ О нас ]</span> <h2 class="text-white text-lg md:text-3xl max-w-[840px] font-extrabold uppercase" data-astro-cid-aafkaq3q> <span class="before:block before:absolute before:-inset-0.5 px-1 before:rounded-md before:bg-primary relative inline-block" data-astro-cid-aafkaq3q> <span class="relative text-white" data-astro-cid-aafkaq3q>Строительные системы</span> </span> — это компания, объединяющая передовые технологии и эффективное управление строительными проектами.
</h2> </div> </div> ${renderComponent($$result, "Image", $$Image, { "src": import('../benefits-footer-mask_RNFnNp3Z.mjs'), "class": "object-cover h-[40px] sm:h-auto w-full", "alt": "mask", "data-astro-cid-aafkaq3q": true })} </div> </div> `;
}, "C:/Users/user/Documents/GitHub/vector-roof/src/components/Benefits.astro", void 0);

const $$Astro$8 = createAstro();
const $$Company = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Company;
  return renderTemplate`${maybeRenderHead()}<div class="container py-14 sm:py-20"> <div class="flex flex-col lg:flex-row justify-between gap-10"> <div class="flex flex-col gap-5 w-full"> ${renderComponent($$result, "Image", $$Image, { "src": import('../company-poster_jZthKnQ8.mjs'), "quality": 100, "alt": "logo" })} <div class="flex items-center bg-[#F4F3F4] p-3 sm:p-5 rounded-xl"> ${renderComponent($$result, "Image", $$Image, { "src": import('../company-logo_9CAWYOQ7.mjs'), "quality": 100, "class": "max-w-[80px] sm:max-w-full", "alt": "logo" })} <p class="uppercase text-[12px] sm:text-base lg:text-[16px] xl:text-[18px] font-extrabold pl-5 ml-5 lg:ml-7 leading-[21px] border-l border-white">
получен сертификат мастерства, <br> подтверждающий качество работы компании
</p> </div> <a href="/company" class="lg:hidden button mt-auto text-center">Подробнее о компании</a> </div> <div class="-order-1 lg:order-1 lg:max-w-[380px] flex flex-col items-start"> <h2 class="section-title mb-5 lg:mb-10">О компании</h2> <p class="mb-5 text-[#747882] text-lg">
Наша компания работает на строительном ранке с 2003 года и является сертифицированным авторизованным подрядчиком корпорации «ТехноНИКОЛЬ».
</p> <p class="text-[#747882] text-lg lg:mb-5">
За все время работы мы принимали участие в капитальном строительстве жилых домов, вели работы по капитальному ремонту и реконструкции
        производственных зданий, выполняя функцию подрядчика.
</p> <a href="/company" class="hidden lg:block button mt-auto">Подробнее о компании</a> </div> </div> </div>`;
}, "C:/Users/user/Documents/GitHub/vector-roof/src/components/Company.astro", void 0);

const myBackground$1 = new Proxy({"src":"/_astro/hero-background-jpg.vvZTIht2.jpg","width":2880,"height":1050,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/hero-background-jpg.jpg";
							}
							
							return target[name];
						}
					});

function StartWork() {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx("button", { type: "button", onClick: openModal, className: "button", children: "начать работу" }),
    /* @__PURE__ */ jsx(Transition, { show: isOpen, as: Fragment$2, children: /* @__PURE__ */ jsxs(Dialog, { as: "div", className: "relative z-50", onClose: closeModal, children: [
      /* @__PURE__ */ jsx(
        Transition.Child,
        {
          as: Fragment$2,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/25" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 overflow-y-auto", children: /* @__PURE__ */ jsx("div", { className: "flex min-h-full items-center justify-center p-4 text-center", children: /* @__PURE__ */ jsx(
        Transition.Child,
        {
          as: Fragment$2,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0 scale-95",
          enterTo: "opacity-100 scale-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100 scale-100",
          leaveTo: "opacity-0 scale-95",
          children: /* @__PURE__ */ jsxs(Dialog.Panel, { className: "w-full max-w-[473px] transform pt-[80px] pb-[60px] px-[50px] relative overflow-hidden bg-[#F4F3F4] p-6 text-left align-middle shadow-xl transition-all", children: [
            /* @__PURE__ */ jsx(Dialog.Title, { as: "h3", className: "text-2xl lg:text-4xl  font-extrabold uppercase mb-1 text-center text-[#282E35]", children: "Оставить заявку" }),
            /* @__PURE__ */ jsxs("p", { className: "text-[#848896] lg:text-[18px] lg:leading-[21px] text-center mt-2 mb-5", children: [
              "Оставьте ваши контакты и мы ",
              /* @__PURE__ */ jsx("br", {}),
              " свяжемся с вами в ближайшее время"
            ] }),
            /* @__PURE__ */ jsx(SaleForm$1, {}),
            /* @__PURE__ */ jsx("button", { type: "button", className: "absolute right-5 top-5 hover:text-primary transition-colors ", onClick: closeModal, children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M2 2L22 22M22 2L2 22", stroke: "currentColor", strokeWidth: "3" }) }) })
          ] })
        }
      ) }) })
    ] }) })
  ] });
}

const $$Astro$7 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Hero;
  const optimizedBackgroundPC = await getImage({ src: myBackground$1, format: "webp", quality: 90 });
  return renderTemplate`${maybeRenderHead()}<div class="wrapper bg-no-repeat h-[700px] sm:h-[800] bg-cover bg-center mb-12"${addAttribute(`background-image: url(${optimizedBackgroundPC.src});`, "style")}> <div class="container pb-[250px]"> <div class="flex justify-center items-center gap-3 pt-12 pb-12 md:pb-14"> ${renderComponent($$result, "Image", $$Image, { "src": import('../hero-icon_qU9GKhvH.mjs'), "class": "size-20", "quality": 100, "alt": "hero" })} <p class="text-[#3B3C40] font-extrabold max-w-[200px] text-sm">Являемся Корпоративным подрядчиком Технониколь</p> </div> <h1 class="text-3xl md:text-5xl text-[#202228] text-center uppercase font-extrabold max-w-[1024px] mx-auto mb-5">
Профессиональная гидроизоляция.
<br> Монтаж и ремонт кровельных систем
</h1> <p class="text-[#484E5B] text-bold text-lg text-center mb-12">Все виды работ с соблюдением СНиП и ГОСТ с гарантией до 15 лет</p> <div class="text-center"> ${renderComponent($$result, "StartWork", StartWork, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/user/Documents/GitHub/vector-roof/src/components/StartWork", "client:component-export": "default" })} </div> </div> </div>`;
}, "C:/Users/user/Documents/GitHub/vector-roof/src/components/Hero.astro", void 0);

const $$Astro$6 = createAstro();
const $$Partners = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Partners;
  const partners = [
    { url: import('../danone_1LJHDx7T.mjs'), alt: "danone" },
    { url: import('../syberia_YRV7pI7I.mjs'), alt: "\u0421\u0438\u0431\u0438\u0440\u0441\u043A\u0430\u044F \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u044E\u0449\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F" },
    { url: import('../rusal_1lnFjs6m.mjs'), alt: "rusal" },
    { url: import('../smsity_faWlaqLP.mjs'), alt: "\u0441\u043C.\u0441\u0438\u0442\u0438" },
    { url: import('../cult_U5uBFVSC.mjs'), alt: "\u043A\u0443\u043B\u044C\u0442\u0431\u044B\u0442\u0441\u0442\u0440\u043E\u0439" },
    { url: import('../sbis_4tKTd1Ua.mjs'), alt: "\u0441\u0431\u0438\u0441" },
    { url: import('../trans_3SXeJazR.mjs'), alt: "\u0442\u0440\u0430\u043D\u0441\u0432\u0443\u0434 \u0441\u0435\u0440\u0432\u0438\u0441" },
    { url: import('../omega_A1qNj3Wh.mjs'), alt: "\u043E\u043C\u0435\u0433\u0430" }
  ];
  const partnersReviews = [
    { url: import('../1_3M8S2rbN.mjs') },
    { url: import('../2_GKe6uzfW.mjs') },
    { url: import('../3_PCKGSFKq.mjs') },
    { url: import('../4_D9FgeehM.mjs') },
    { url: import('../5_nPViAN82.mjs') }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-[#F0F0F0] py-10 md:py-32" data-astro-cid-s63cuhea> <div class="container" data-astro-cid-s63cuhea> <div class="flex-stack flex-col md:flex-row items-start sm:items-center mb-5 md:mb-[50px] gap-5 scroll-mt-24" id="clients" data-astro-cid-s63cuhea> <p class="font-bold text-lg max-w-[580px] flex items-baseline gap-4" data-astro-cid-s63cuhea> <svg width="34" height="14" viewBox="0 0 34 14" class="shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-s63cuhea> <path d="M33.8359 0H25.652L13.5278 13.9067H21.7116L33.8359 0Z" fill="#F43333" data-astro-cid-s63cuhea></path> <path d="M20.3047 0H12.1208L-0.00349808 13.9067H8.1804L20.3047 0Z" fill="#F43333" data-astro-cid-s63cuhea></path> </svg>
Обращаясь к нам вы получаете качественные услуги в строго оговорённый срок и по приемлемой для вас цене
</p> <span class="-order-1 self-end md:self-center md:order-1 text-[#9EA1AB] font-semibold text-nowrap" data-astro-cid-s63cuhea>[ Некоторые <br data-astro-cid-s63cuhea> наши клиенты ]</span> </div> <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5 sm:bg-white sm:py-5 sm:px-7 rounded-lg mb-14 md:mb-32" data-astro-cid-s63cuhea> ${partners.map((partner) => renderTemplate`<div class="border bg-white sm:bg-transparent border-[#E1E3E6] p-3 sm:p-5 rounded-lg grid place-items-center place-content-center" data-astro-cid-s63cuhea> ${renderComponent($$result, "Image", $$Image, { "src": partner.url, "alt": partner.alt, "quality": 100, "class": "h-[50px] sm:h-auto sm:max-w-[130px] object-contain", "data-astro-cid-s63cuhea": true })} </div>`)} </div> <h2 class="section-title text-center sm:text-start mb-5 sm:mb-10" data-astro-cid-s63cuhea>Отзывы Партнеров</h2> <div class="embla relative" data-astro-cid-s63cuhea> <div class="embla__viewport" data-astro-cid-s63cuhea> <div class="embla__container" data-astro-cid-s63cuhea> ${partnersReviews.map((review) => renderTemplate`<div class="embla__slide" data-astro-cid-s63cuhea> ${renderComponent($$result, "Image", $$Image, { "src": review.url, "alt": "\u041E\u0442\u0437\u044B\u0432", "class": "w-full", "quality": 100, "data-astro-cid-s63cuhea": true })} </div>`)} </div> <button class="hidden embla__prev absolute -left-12 sm:-left-6 lg:-left-14 top-1/2 z-10 shrink-0 rounded-full bg-primary size-11 sm:grid place-items-start place-content-center" data-astro-cid-s63cuhea> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-s63cuhea> <path d="M2 7L7.53516 1.46484M2 7L7.53516 12.5352M2 7H13.5" stroke="white" stroke-width="2" data-astro-cid-s63cuhea></path> </svg> </button> <button class="hidden embla__next absolute -right-12 sm:-right-6 lg:-right-14 top-1/2 z-10 shrink-0 rounded-full bg-primary size-11 sm:grid place-items-start place-content-center" data-astro-cid-s63cuhea> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-s63cuhea> <path d="M12 7L6.46484 1.46484M12 7L6.46484 12.5352M12 7H0.5" stroke="white" stroke-width="2" data-astro-cid-s63cuhea></path> </svg> </button> </div> </div> </div> </div>  `;
}, "C:/Users/user/Documents/GitHub/vector-roof/src/components/Partners.astro", void 0);

const $$Astro$5 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${maybeRenderHead()}<div class="container py-10 sm:py-24" id="projects"> <div class="flex-stack items-start sm:items-center mb-5 md:mb-[50px]"> <h2 class="section-title">вЫПОЛНЕННЫЕ ПРОЕКТЫ</h2> <span class="text-[#9EA1AB] font-semibold text-nowrap shrink-0">[ Наши работы ]</span> </div> <div class="flex flex-col lg:flex-row gap-5 mb-10"> <div class="relative group"> ${renderComponent($$result, "Image", $$Image, { "src": import('../1_tx93lGht.mjs'), "quality": 100, "alt": "image", "class": "object-cover group-hover:brightness-75 transition-all mb-2 lg:mb-0" })} <div class="lg:absolute lg:m-4 drop-shadow bottom-0 left-0 bg-white p-3 flex items-baseline rounded-lg gap-2"> <svg width="27" height="14" class="shrink-0 pt-2 size-5 xl:size-auto" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18 0.949219H12.2582L0 13.9492H5.74177L18 0.949219Z" fill="#F43333"></path> <path d="M27 0.949219H21.2582L9 13.9492H14.7418L27 0.949219Z" fill="#F43333"></path> </svg> <div class="flex flex-col"> <span class="text-[#202228] uppercase font-bold text-sm xl:text-base">ЖК Светлогорский</span> <p class="text-[#848898] text-sm">Красноярск, пер Светлогорский, д 12</p> <a href="#" class="text-sm underline mt-2 sm:hidden">Подробнее</a> </div> </div> <a href="#" class="absolute bg-primary  opacity-0 transition-all group-hover:opacity-100 top-5 right-5 size-12 rounded-full grid place-items-center place-content-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right", "class": "text-white size-5" })} </a> </div> <div class="flex flex-col gap-5"> <div class="relative w-full group"> ${renderComponent($$result, "Image", $$Image, { "src": import('../2_MsoH1chx.mjs'), "quality": 100, "alt": "image", "class": "object-cover group-hover:brightness-75 transition-all mb-2 lg:mb-0" })} <div class="lg:absolute lg:m-4 drop-shadow bottom-0 left-0 bg-white p-3 flex items-baseline rounded-lg gap-2"> <svg width="27" height="14" class="shrink-0 pt-2 size-5 xl:size-auto" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18 0.949219H12.2582L0 13.9492H5.74177L18 0.949219Z" fill="#F43333"></path> <path d="M27 0.949219H21.2582L9 13.9492H14.7418L27 0.949219Z" fill="#F43333"></path> </svg> <div class="flex flex-col"> <span class="text-[#202228] uppercase text-sm xl:text-base font-bold">Академгородок д. 4, секция 6</span> <p class="text-[#848898] text-sm">Красноярск, ул Академгородок, д 54,</p> <a href="#" class="text-sm underline mt-2 sm:hidden">Подробнее</a> </div> </div> <a href="#" class="absolute bg-primary  opacity-0 transition-all group-hover:opacity-100 top-5 right-5 size-12 rounded-full grid place-items-center place-content-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right", "class": "text-white size-5" })} </a> </div> <div class="relative w-full group"> ${renderComponent($$result, "Image", $$Image, { "src": import('../3_cAVz2Y8f.mjs'), "quality": 100, "alt": "image", "class": "object-cover group-hover:brightness-75 mb-2 lg:mb-0 transition-all" })} <div class="lg:absolute lg:m-4 drop-shadow bottom-0 left-0 bg-white p-3 flex items-baseline rounded-lg gap-2"> <svg width="27" height="14" class="shrink-0 pt-2 size-5 xl:size-auto" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18 0.949219H12.2582L0 13.9492H5.74177L18 0.949219Z" fill="#F43333"></path> <path d="M27 0.949219H21.2582L9 13.9492H14.7418L27 0.949219Z" fill="#F43333"></path> </svg> <div class="flex flex-col"> <span class="text-[#202228] uppercase font-bold text-sm xl:text-base">Красноярский краевой онкологический диспансер</span> <p class="text-[#848898] text-sm">Красноярск, ул 1-я Смоленская, д 16,</p> <a href="#" class="text-sm underline mt-2 sm:hidden">Подробнее</a> </div> </div> <a href="#" class="absolute bg-primary  opacity-0 transition-all group-hover:opacity-100 top-5 right-5 size-12 rounded-full grid place-items-center place-content-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right", "class": "text-white size-5" })} </a> </div> </div> </div> <div class="text-end"> <a href="/projects" class="button hover:bg-secondary w-full md:w-auto justify-center inline-flex items-center gap-2 md:justify-end">Все проекты
${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right", "class": "size-5" })} </a> </div> </div>`;
}, "C:/Users/user/Documents/GitHub/vector-roof/src/components/Projects.astro", void 0);

const myBackground = new Proxy({"src":"/_astro/sale-bg.XgWtW3qK.png","width":1920,"height":488,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/vector-roof/src/assets/sale-bg.png";
							}
							
							return target[name];
						}
					});

const SaleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = useForm();
  async function onSubmit(formData, e) {
    try {
      e.preventDefault();
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: "Подана заявка с формы"
        })
      });
      if (!res.ok) {
        toast.error("Упс, что-то пошло не так Попробуйте ещё раз", {
          duration: 3e3,
          position: "bottom-center"
        });
      } else {
        toast.success("Письмо успешно отправлено!", {
          duration: 3e3,
          position: "bottom-center"
        });
      }
    } catch (error) {
      console.log(error);
    }
    reset();
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [
    /* @__PURE__ */ jsxs("fieldset", { className: "flex flex-col w-full lg:flex-row items-center gap-4 mb-5", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          ...register("name", { required: true, maxLength: 30 }),
          placeholder: "Имя",
          className: "input h-[52px] lg:h-[44px] focus:ring-1 focus:ring-[#7AD9A0] rounded border-none w-full lg:w-auto xl:w-[350px]"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          ...register("email", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format"
            }
          }),
          placeholder: "Email",
          className: "input h-[52px] lg:h-[44px] focus:ring-1 focus:ring-[#7AD9A0] rounded border-none w-full lg:w-auto  xl:w-[350px]"
        }
      ),
      /* @__PURE__ */ jsx("button", { className: "button lg:bg-[#2E3037] disabled:bg-gray-500 lg:py-2.5 lg:px-4 w-full lg:w-auto", disabled: isSubmitting, children: "Оставить заявку" })
    ] }),
    /* @__PURE__ */ jsxs("label", { className: "flex items-center text-[#585A5F] lg:text-white gap-2 cursor-pointer", children: [
      /* @__PURE__ */ jsx("input", { type: "checkbox", required: true, className: "form-checkbox rounded border-none text-primary" }),
      /* @__PURE__ */ jsx("span", { className: "text-[12px] sm:text-base", children: "Я согласен с политикой конфиденциальности сайта" })
    ] }),
    /* @__PURE__ */ jsx(Toaster, {})
  ] });
};

const $$Astro$4 = createAstro();
const $$Sale = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Sale;
  const saleBG = await getImage({ src: myBackground, format: "webp", quality: 100 });
  return renderTemplate`${maybeRenderHead()}<div class="bg-cover sale-form bg-no-repeat bg-center min-h-[695px] sm:min-h-0 relative"${addAttribute(`background-image: url(${saleBG.src});`, "style")}> <div class="container relative z-20"> <div class="py-14 lg:py-36"> <h2 class="section-title text-[#0A0B0F] mb-2">Хотите получить скидку на объем работ?</h2> <p class="text-[#848896] text-lg mb-8 sm:mb-10">Оставьте ваши контакты и мы свяжемся с вами в ближайшее время</p> ${renderComponent($$result, "SaleForm", SaleForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/user/Documents/GitHub/vector-roof/src/components/forms/SaleForm", "client:component-export": "default" })} </div> </div> ${renderComponent($$result, "Image", $$Image, { "src": import('../sale-mask_7yCJ2HAR.mjs'), "class": "sm:hidden absolute bottom-0 left-0 w-full h-full z-0", "alt": "mask" })} </div>`;
}, "C:/Users/user/Documents/GitHub/vector-roof/src/components/Sale.astro", void 0);

const $$Astro$3 = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Services;
  const servicesImages = [
    {
      image: import('../membran_xLQ2Q9N7.mjs'),
      imageHover: import('../membran-hover_BVwK3rYC.mjs'),
      title: "\u041A\u0440\u043E\u0432\u043B\u044F \u0438\u0437 \u041F\u0412\u0425 \u043C\u0435\u043C\u0431\u0440\u0430\u043D\u044B",
      link: "/projects/category/pvc_membrane_roofing"
    },
    {
      image: import('../pitched_-D928poU.mjs'),
      imageHover: import('../pitched-hover_FVi_xSMV.mjs'),
      title: "\u0441\u043A\u0430\u0442\u043D\u0430\u044F \u043A\u0440\u043E\u0432\u043B\u044F",
      link: "/projects/category/pitched_roofing"
    },
    {
      image: import('../clad_WepMCiEd.mjs'),
      imageHover: import('../clad-hover_Sx8E39Rl.mjs'),
      title: "\u043D\u0430\u043F\u043B\u0430\u0432\u043B\u044F\u0435\u043C\u0430\u044F \u043A\u0440\u043E\u0432\u043B\u044F",
      link: "/projects/category/torch_applied_roofing"
    },
    {
      image: import('../facade_W6REMEZ8.mjs'),
      imageHover: import('../facade-hover_8MysSA-P.mjs'),
      title: "\u043C\u043E\u043D\u0442\u0430\u0436 \u0444\u0430\u0441\u0430\u0434\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C",
      link: "/projects/category/facade_systems_installation"
    },
    {
      image: import('../waterproofing_kw8BR1ex.mjs'),
      imageHover: import('../waterproofing-hover_oD6cFTNs.mjs'),
      title: "\u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u0430\u044F \u0433\u0438\u0434\u0440\u043E\u0438\u0437\u043E\u043B\u044F\u0446\u0438\u044F",
      link: "/projects/category/engineering_waterproofing"
    },
    {
      image: import('../metal_dtFtBjBn.mjs'),
      imageHover: import('../metal-hover_dpsWzJVR.mjs'),
      title: "\u043C\u043E\u043D\u0442\u0430\u0436 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0439",
      link: "/projects/category/metal_installation"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="container pb-14 md:pb-28 scroll-mt-24" id="services"> <div class="flex-stack items-start sm:items-center mb-5 md:mb-[50px] gap-2"> <h2 class="section-title">Строительные услуги</h2> <span class="text-[#9EA1AB] font-semibold text-nowrap shrink-0">[ Услуги ]</span> </div> <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-5"> ${servicesImages.map((item) => renderTemplate`<a${addAttribute(item.link, "href")} class="relative group rounded-lg h-auto drop-shadow-xl"> ${renderComponent($$result, "Image", $$Image, { "src": item.image, "quality": 100, "class": "group-hover:opacity-0 transition-all h-auto", "alt": "membran" })} ${renderComponent($$result, "Image", $$Image, { "src": item.imageHover, "quality": 100, "class": "opacity-0 absolute top-0 left-0 w-full h-full group-hover:opacity-100 transition-all", "alt": "membran" })} <div class="absolute bottom-5 left-5 flex items-center gap-3"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none"> <path d="M6.26538 1L10.7835 7.02066L6.26538 13.0413" stroke="#F43333" stroke-width="2"></path> <path d="M11.7732 1L16.2913 7.02066L11.7732 13.0413" stroke="#F43333" stroke-width="2"></path> </svg> <h3 class="text-white font-extrabold uppercase group-hover:text-[#202228]">${item.title}</h3> </div> <span class="absolute bg-primary transition-all sm:hidden top-5 right-5 size-8 rounded-full grid place-items-center place-content-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right", "class": "text-white size-5" })} </span> </a>`)} </div> </section>`;
}, "C:/Users/user/Documents/GitHub/vector-roof/src/components/Services.astro", void 0);

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Advantages", $$Advantages, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Benefits", $$Benefits, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Sale", $$Sale, {})} ${renderComponent($$result2, "Company", $$Company, {})} ${renderComponent($$result2, "Partners", $$Partners, {})} ${renderComponent($$result2, "Pricing", $$Pricing, {})} ` })}`;
}, "C:/Users/user/Documents/GitHub/vector-roof/src/pages/index.astro", void 0);

const $$file$2 = "C:/Users/user/Documents/GitHub/vector-roof/src/pages/index.astro";
const $$url$2 = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const customCrumbs = [{ text: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", href: "/" }, { text: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438" }];
  const data = await fetchAPI({
    query: `
  query posts {
    posts {
      nodes {
        slug
        title
        excerpt
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  } 
  `
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "News" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#F0F0F0]"> <div class="container pt-9 pb-14 sm:pb-32"> <div class="mb-16 sm:mb-24"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "crumbs": customCrumbs })} </div> <div class="flex-stack items-start mb-8"> <h2 class="section-title mb-3">Новости</h2> <span class="text-[#9EA1AB] font-semibold text-nowrap shrink-0 hidden md:block">[ О самом важном ]</span> </div> <ul class="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-[60px]"> ${data.posts.nodes.map((item) => renderTemplate`<li class="xs:max-w-[300px] flex flex-col items-start"> ${renderComponent($$result2, "Image", $$Image, { "src": item.featuredImage.node.mediaItemUrl, "alt": item.title, "width": 294, "height": 238, "quality": 100, "class": "mb-[30px] h-[240px] sm:h-auto object-cover rounded-lg w-full" })} <h3 class="text-lg uppercase font-bold text-black mb-2">${item.title}</h3> <div class="text-[#656A7C] text-sm mb-[20px]"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(item.excerpt)}` })} </div> <a${addAttribute(`/news/${item.slug}`, "href")} class="button bg-white transition-colors text-[#1D1D21] hover:bg-primary hover:text-white">
подробнее
</a> </li>`)} </ul> </div> </div> ` })}`;
}, "C:/Users/user/Documents/GitHub/vector-roof/src/pages/news/index.astro", void 0);

const $$file$1 = "C:/Users/user/Documents/GitHub/vector-roof/src/pages/news/index.astro";
const $$url$1 = "/news";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const customCrumbs = [
    {
      text: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
      href: "/"
    },
    {
      text: "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B"
    }
  ];
  const data = await fetchAPI({
    query: `
  query projects {
    categories {
      nodes { name slug }
    }
    projects {
      nodes {
        title slug excerpt
        featuredImage {
          node { mediaItemUrl }
        }
      }
    }
  } 
  `
  });
  const projects = data.projects.nodes;
  const categories = data.categories.nodes.filter((category) => category.slug !== "\u0431\u0435\u0437-\u0440\u0443\u0431\u0440\u0438\u043A\u0438");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "title" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[#F0F0F0]"> <div class="container pt-9 pb-14 sm:pb-32"> <div class="mb-16 sm:mb-24"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "crumbs": customCrumbs })} </div> <div class="flex-stack items-start mb-14 md:mb-24"> <div> <h2 class="section-title mb-3">Выполненные проекты</h2> <h3 class="text-xl sm:text-3xl uppercase text-[#56585E] font-extrabold flex items-start gap-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "marks", "class": "size-8" })}
Наплавляемая кровля
</h3> </div> <span class="text-[#9EA1AB] font-semibold text-nowrap shrink-0 hidden md:block text-end">[ Работы по всей <br> России ]</span> </div> <nav class="mb-10 sm:mb-14"> <ul class="grid grid-cols-2 gap-2 items-stretch sm:flex flex-wrap"> ${categories.map((category) => renderTemplate`<li> <a${addAttribute(`/projects/category/${category.slug}`, "href")} class="py-2 px-3 sm:py-5 sm:px-7 h-full flex items-center place-items-start  text-[12px] sm:text-base bg-white rounded font-bold uppercase hover:bg-primary hover:text-white transition-colors"> ${category.name} </a> </li>`)} </ul> </nav> <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-5 sm:gap-y-10"> ${projects.map((project) => renderTemplate`<li class="flex flex-col items-center bg-white gap-5 p-5 rounded-lg"> ${renderComponent($$result2, "Image", $$Image, { "src": project.featuredImage.node.mediaItemUrl, "width": 360, "height": 266, "alt": project.title })} <span class="font-bold uppercase text-center">${project.title}</span> <div class="text-[#848898] text-center"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(project.excerpt)}` })} </div> <a${addAttribute(`/projects/${project.slug}`, "href")} class="button text-[#1D1D21] hover:bg-primary mt-auto bg-[#F4F3F4] hover:text-white transition-colors">
подробнее
</a> </li>`)} </ul> </div> ${renderComponent($$result2, "Pricing", $$Pricing, {})} </div> ` })}`;
}, "C:/Users/user/Documents/GitHub/vector-roof/src/pages/projects/index.astro", void 0);

const $$file = "C:/Users/user/Documents/GitHub/vector-roof/src/pages/projects/index.astro";
const $$url = "/projects";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$2 as a, index$1 as b, index as c, index$3 as i };
