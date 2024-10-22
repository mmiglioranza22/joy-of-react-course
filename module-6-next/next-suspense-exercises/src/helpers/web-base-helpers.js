import React from "react";

export async function getLinks() {
  console.info("Requesting navigation links from CMS");
  await delay(1800);

  return LINKS;
}

export const getNavLinks = React.cache(getLinks);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const LINKS = [
  {
    slug: "platform",
    label: "Platform",
    href: "/platform",
    type: "primary",
  },
  {
    slug: "solutions",
    label: "Solutions",
    href: "/solutions",
  },
  {
    slug: "integrations",
    label: "Integrations",
    href: "/integrations",
  },
  {
    slug: "docs",
    label: "Docs",
    href: "/documentation/start-here",
  },
  {
    slug: "pricing",
    label: "Pricing",
    href: "/pricing",
  },
];
