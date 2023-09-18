import {ExtraData} from './extra_data';
import {Functionality} from './functionality';
import {Group} from './group';

export interface User {
  id: number;
  name: string;
  email: string;
  endDate?: string; // ISO8601 datetime string, Optional since it's mentioned "Optional"
  startDate?: string; // ISO8601 datetime string, Optional
  firstName: string;
  lastName: string;
  userName: string;
  lastLogin: string; // ISO8601 datetime string
  groups?: Group[]; // Optional since it's mentioned "this will be left as null when listing Users"
  dirty: boolean;
  deleted: boolean;
  created: string; // ISO8601 datetime string
  createdBy: number;
  updated: string; // ISO8601 datetime string
  updatedBy: number;
  functionalities: Functionality[];
  extraData: ExtraData[];
  userType: string;
}
