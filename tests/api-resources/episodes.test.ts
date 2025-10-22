// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Podify from 'podify';

const client = new Podify({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource episodes', () => {
  // Prism tests are disabled
  test.skip('retrieveTranscription', async () => {
    const responsePromise = client.episodes.retrieveTranscription('ep-12345-abc');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.episodes.search({ q: 'technology trends' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('search: required and optional params', async () => {
    const response = await client.episodes.search({ q: 'technology trends', limit: 1, offset: 0 });
  });
});
