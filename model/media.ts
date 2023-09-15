export interface Media {
  categoryId: number;
  filename: string;
  parentId?: number; // Optional since it's only set when the Media is grouped
  replacedBy?: number; // Optional since it's only set when the Media has been replaced
  name: string;
  deleted: boolean;
  properties: {[systemName: string]: string}; // A map of systemName to value
  typeId: number;
}
