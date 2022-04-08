export interface PageProps {
  meta?: MetaInfo;
}

export interface MetaInfo {
  title: string;
  description: string;
  keywords: string;
  url?: string;
}

export interface DiaryApi {
  diary?: Array<DiaryInfo>;
}

export interface DiaryInfo {
  id: string;
  title: string;
  date: string;
  day: string;
  image: {
    url: string;
    width?: string;
    height?: string;
  };
  body?: string;
}
