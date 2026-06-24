export type Project = {
  slug: string;
  title: string;
  description: string;
};

/** Add one entry here and create src/pages/<slug>/index.astro */
export const projects: Project[] = [
  {
    slug: "old-world",
    title: "Warhammer: The Old World",
    description:
      "Community tools and army-list support for Renegade Legacy Pack drafts — magic wrought in JSON and markup.",
  },
];

export type LinkCard = {
  href: string;
  title: string;
  description: string;
  external?: boolean;
};

export type ProjectPage = {
  slug: string;
  title: string;
  description: string;
  ornament: string;
  intro: string;
  sections: {
    heading: string;
    links: LinkCard[];
  }[];
};

export const projectPages: Record<string, ProjectPage> = {
  "old-world": {
    slug: "old-world",
    title: "Warhammer: The Old World",
    description:
      "Warhammer: The Old World tools — Renegade draft army builder and related links.",
    ornament: "⚔",
    intro:
      "Tools and links for Square Based Gaming’s Renegade Legacy Pack drafts. Unofficial fan work — not affiliated with or endorsed by Games Workshop.",
    sections: [
      {
        heading: "Arcane Instruments",
        links: [
          {
            href: "https://roblosapiens.github.io/owb-renegade-drafts/",
            title: "Old World Builder — Renegade Drafts",
            description:
              "Army builder with Renegade factions: Lizardmen, Skaven, Dark Elves, Ogres, Chaos Dwarfs, and Daemons.",
            external: true,
          },
        ],
      },
      {
        heading: "Known Tomes & Portals",
        links: [
          {
            href: "https://github.com/Roblosapiens/owb-renegade-drafts",
            title: "owb-renegade-drafts on GitHub",
            description: "Source code, issues, and release history.",
            external: true,
          },
          {
            href: "https://docs.google.com/document/d/16kAE-p_CWbsH0XatDPuRao6TngSw-KSweUnJa81kOXE/edit?usp=sharing",
            title: "Renegade Legacy Pack — draft index",
            description: "Latest faction drafts from Square Based Gaming.",
            external: true,
          },
          {
            href: "https://old-world-builder.com/",
            title: "Old World Builder (official)",
            description: "Upstream army builder this fork is based on.",
            external: true,
          },
          {
            href: "https://tow.whfb.app/",
            title: "Warhammer Fantasy Online Rules Index Project",
            description:
              "Online rules index for Warhammer: The Old World.",
            external: true,
          },
        ],
      },
    ],
  },
};
