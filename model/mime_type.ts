export interface MimeType {
  id: number;
  mimetype: string;
  description: string;
  imagetemplate: boolean;
  videotemplate: boolean;
  defaultextension: string;
  // If there are specific known values,
  // consider using a union type like "image" | "video" | "document"
  classification: string;
}
