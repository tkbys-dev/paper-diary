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
  service?: Array<DiaryInfo>;
}

export interface DiaryInfo {
  id: string;
  image: {
    url: string;
    width?: string;
    height?: string;
  };
  body?: string;
}
