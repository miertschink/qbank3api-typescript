export interface DeploymentFile {
  deploymentSiteId: number;
  remoteFile: string;
  imageTemplateId?: number; // Optional since it might not always be set
  videoTemplateId?: number; // Optional
  audioTemplateId?: number; // Optional
  documentTemplateId?: number; // Optional
  fontTemplateId?: number; // Optional
  templateName?: string; // Optional since it's mentioned "if any"
  created: string; // ISO8601 datetime string
  updated: string; // ISO8601 datetime string
  filename: string;
  filesize: number;
  metadata: {[key: string]: unknown}; // A key-value object
}
