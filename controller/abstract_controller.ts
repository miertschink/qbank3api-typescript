import {AxiosInstance} from 'axios/index';
import {Controller} from './types';

export abstract class AbstractController implements Controller {
  abstract getName(): string;

  constructor(protected readonly client: AxiosInstance) {}
}
