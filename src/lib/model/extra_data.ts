export interface ExtraData {
  id: number;
  dirty: boolean;
  deleted: boolean;
  created: string; // ISO8601 datetime string
  createdBy: number;
  updated: string; // ISO8601 datetime string
  updatedBy: number;
  key: string;
  keyId: number;
  value: string;
}
