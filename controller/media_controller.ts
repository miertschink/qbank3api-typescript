import {AbstractController} from './abstract_controller';
import {MediaResponse} from '../model/mediaResponse';

export class MediaController extends AbstractController {
  getName(): string {
    return 'media';
  }

  async updateProperties(id: number, $properties: unknown[]): Promise<MediaResponse> {
    try {
      const response = await this.client.put(`media/${id}/properties`, $properties);
      return response.data as MediaResponse;
    } catch (error) {
      console.error('Error updating asset:', error);
      throw error;
    }
  }
}
