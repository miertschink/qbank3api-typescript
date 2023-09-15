import {Media} from './media';
import {MimeType} from './mime_type';
import {MetaData} from './metadata';
import {PropertySet} from './property_set';
import {DeploymentFile} from './deployment_file';

export interface MediaResponse extends Media {
  mediaId: number;
  thumbPreviewStatus: number; // This is a bit field
  extension: string;
  metadata: MetaData[];
  mimetype: MimeType;
  size: number;
  statusId: number;
  uploaded: string; // ISO8601 datetime string
  uploadedBy: number;
  deployedFiles: DeploymentFile[];
  commentCount: number;
  rating: number;
  childMedias: MediaResponse[];
  objectId: number;
  created: string; // ISO8601 datetime string
  createdBy: number;
  updated: string; // ISO8601 datetime string
  updatedBy: number;
  dirty: boolean;
  propertySets: PropertySet[];
  discriminatorId: number;
  dimensions: string; // Dimensions in px
}
