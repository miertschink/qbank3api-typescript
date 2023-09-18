import {PropertyDefinition} from './property_definition';

export interface PropertyType {
  created: string; // ISO8601 datetime string
  createdBy: number;
  updated: string; // ISO8601 datetime string
  updatedBy: number;
  deleted: boolean;
  name: string;
  systemName: string;
  description: string;
  dataTypeId: 1 | 2 | 3 | 4 | 5 | 6; // Enumerated the known values
  definition: PropertyDefinition;
}
