export type ScheduleMatch = {
  type: "match";
  time: string;
  phase: string;
  battle: string;
};

export type ScheduleBreak = {
  type: "break";
  time: string;
  label: string;
};

export type ScheduleRow = ScheduleMatch | ScheduleBreak;

export type GameDay = {
  id: string;
  title: string;
  /** e.g. "Saturday 14 June 2026" — omit while TBC */
  date?: string;
  rows: ScheduleRow[];
};

/** Set when Mike shares a publishable Google Doc embed URL. */
export const scheduleDocEmbedUrl: string | undefined = undefined;

export const campaign = {
  name: "Path to Glory",
  tracker: {
    href: "https://pathtoglory.lovable.app/",
    title: "Path to Glory — Campaign Tracker",
    description:
      "Damien’s campaign tracking app — rosters, glory, and progression between game days.",
  },
  gameDays: [
    {
      id: "game-day-4",
      title: "Game Day 4",
      rows: [
        {
          type: "match",
          time: "9:00 AM – 11:30 AM",
          phase: "2 (600 pts)",
          battle: "Grand Cathay (Damo) vs Goblins (Rob)",
        },
        {
          type: "match",
          time: "9:00 AM – 11:30 AM",
          phase: "2 (600 pts)",
          battle: "Vampire Coast (Mike) vs Bretonnia (Mark)",
        },
        {
          type: "break",
          time: "12:00 PM – 12:30 PM",
          label: "Break for lunch",
        },
        {
          type: "match",
          time: "12:30 PM – 3:00 PM",
          phase: "2 (600 pts)",
          battle: "Nuln (Damo) vs Orcs (Mike)",
        },
        {
          type: "match",
          time: "12:30 PM – 3:00 PM",
          phase: "2 (600 pts)",
          battle: "Bretonnia (Travis) vs Beastmen (Mark)",
        },
      ],
    },
  ] satisfies GameDay[],
};
