export interface NavItem {
  label: string;
  href: string;
}

export interface LinkItem {
  label: string;
  href: string;
  note: string;
}

export interface NewsItem {
  date: string;
  text: string;
}

export interface Pair {
  label: string;
  value: string;
}

export interface Badge {
  label: string;
  bg: string;
  fg: string;
}

export interface GuestbookEntry {
  name: string;
  date: string;
  message: string;
}

export type Pattern =
  | 'stars'
  | 'grid'
  | 'sakura'
  | 'checker'
  | 'feathers'
  | 'circuit';

export interface Theme {
  bg: string;
  panel: string;
  panel2: string;
  ink: string;
  accent: string;
  accent2: string;
  link: string;
  visited: string;
  headerBg: string;
  headerBg2: string;
  headerInk: string;
  heading: string;
  pattern: Pattern;
}

export interface SiteConfig {
  slug: string;
  kind: 'member' | 'character';
  handle: string;
  displayName: string;
  title: string;
  tagline: string;
  description: string;
  since: number;
  updated: string;
  copyright: string;
  email: string;
  marquee: string;
  asciiTitle: string;
  ascii: string;
  theme: Theme;
  nav: NavItem[];
  home: {
    welcomeTitle: string;
    welcome: string[];
    news: NewsItem[];
    favorites: Pair[];
    links: LinkItem[];
    nowPlaying?: string;
  };
  about: {
    intro: string[];
    specs: Pair[];
    favorites: Pair[];
    quote: string;
    friends: LinkItem[];
  };
  badges: Badge[];
  webring: {
    name: string;
    prev: string;
    next: string;
    random: string;
  };
  guestbook: {
    entries: GuestbookEntry[];
  };
  hitBase: number;
}
