
export enum PageStatus {
  DRAFT = "DRAFT",
  LIVE = "LIVE",
  ARCHIVED = "ARCHIVED"
}

export interface AnalyticsDataType {
  id: string;
  pageId: string;
  createdAt: string;
  event: PageEvent
}

export enum PageEvent {
  CLICK = "CLICK",
  PAGE_VIEW = "PAGE_VIEW"
}

export interface AnalyticsDataByPage {
  [key: string]: AnalyticsDataType[]
}