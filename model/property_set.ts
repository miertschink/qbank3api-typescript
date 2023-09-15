import {PropertyResponse} from './property_response';

export interface PropertySet {
  id: number;
  name: string;
  created: string; // ISO8601 datetime string
  createdBy: number;
  updated: string; // ISO8601 datetime string
  updatedBy: number;
  deleted: boolean;
  dirty: boolean;
  system: boolean;
  properties: PropertyResponse[];
}
