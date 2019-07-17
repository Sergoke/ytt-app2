export interface Video {
  readonly id: string;
  readonly isDemo: boolean;
  readonly timeKeys?: number[];
  readonly subts?: Subtitles;
}

export interface Subtitles {
    en: string[];
    ua?: string[];
    ru?: string[];
}
