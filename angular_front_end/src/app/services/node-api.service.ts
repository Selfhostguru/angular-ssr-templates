import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

// replace this with your Node API URL
const NODE_API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class NodeAPIService {

  constructor(
    private httpClient: HttpClient
  ) { }

  async helloWorld() {
    return await firstValueFrom(this.httpClient.get(`${NODE_API_URL}/hello`));
  }
}
