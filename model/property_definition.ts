export interface PropertyDefinition {
  mandatory: boolean;
  mandatoryupload: boolean;
  readonly: boolean;
  hidden: boolean;
  array: boolean;
  link: boolean;
  multiplechoice: boolean;
  multiline: boolean;
  minlength: string;
  maxlength: string;
  structure: string;
  pattern: string;
  options: string[];
  custom_settings: string;
  ignoreInSuggestions: boolean;
  defaultvalue: string;
}
