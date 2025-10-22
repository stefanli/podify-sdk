// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Podify } from '../client';

export abstract class APIResource {
  protected _client: Podify;

  constructor(client: Podify) {
    this._client = client;
  }
}
