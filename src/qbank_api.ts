import axios from 'axios';
import {AxiosInstance} from 'axios';
import {Controller} from './controller/types';
import {MediaController} from './controller/media_controller';

interface Credentials {
  username: string;
  password: string;
  clientId: string;
}

interface TokenResponse {
  access_token: string;
  expires_in: number;
  token_type: 'Bearer';
  scope: ['default'];
  refresh_token: string;
}

export class QbankApi {
  private client: AxiosInstance;
  private controllers: {[key: string]: Controller} = {};

  constructor(
    private readonly baseURL: string,
    private readonly credentials: Credentials,
    private readonly options: string[] = []
  ) {
    this.client = axios.create({
      baseURL,
    });
  }

  async connect() {
    try {
      const response = (await this.client.post('oauth2/token', {
        grant_type: 'password',
        username: this.credentials.username,
        password: this.credentials.password,
        client_id: this.credentials.clientId,
      })) as unknown as {data: TokenResponse};

      const accessToken = response.data.access_token;
      this.client.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
    } catch (error) {
      console.error('Error connecting to QBank:', error);
      throw error;
    }
  }

  media(): MediaController {
    if (!this.controllers['media']) {
      this.controllers['media'] = new MediaController(this.client);
    }
    return <MediaController>this.controllers['media'];
  }
}
