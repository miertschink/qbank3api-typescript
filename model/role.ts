import {Functionality} from './functionality';

export interface Role {
  id: number;
  name: string;
  description: string;
  dirty: boolean;
  deleted: boolean;
  created: string; // ISO8601 datetime string
  createdBy: number;
  updated: string; // ISO8601 datetime string
  updatedBy: number;
  functionalities: Functionality[];
}
