import {Functionality} from './functionality';
import {ExtraData} from './extra_data';
import {User} from './user';
import {Role} from './role';

export interface Group {
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
  roles: Role[];
  extraData: ExtraData[];
  users: User[];
}
