
export enum PageStatus {
  DRAFT = "DRAFT",
  LIVE = "LIVE",
  ARCHIVED = "ARCHIVED"
}

export interface PageDataType {
  id: string;
  thumb: string;
  displayName: string;
  status: PageStatus
}