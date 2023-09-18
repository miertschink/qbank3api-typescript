import {PropertyType} from './property_type';

export interface PropertyResponse {
  created: string; // ISO8601 datetime string
  createdBy: number;
  updated: string; // ISO8601 datetime string
  updatedBy: number;
  deleted: boolean;
  dirty: boolean;
  propertyType: PropertyType;
  value: string;
}
