// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Episodes extends APIResource {
  /**
   * Retrieve the transcription for a specific podcast episode
   */
  retrieveTranscription(
    episodeID: string,
    options?: RequestOptions,
  ): APIPromise<EpisodeRetrieveTranscriptionResponse> {
    return this._client.get(path`/episodes/${episodeID}/transcription`, options);
  }

  /**
   * Search for podcast episodes by title or other criteria
   */
  search(query: EpisodeSearchParams, options?: RequestOptions): APIPromise<EpisodeSearchResponse> {
    return this._client.get('/episodes/search', { query, ...options });
  }
}

export interface EpisodeRetrieveTranscriptionResponse {
  /**
   * Full text transcription of the episode
   */
  content: string;

  /**
   * ID of the transcribed episode
   */
  episodeId: string;

  /**
   * Overall confidence score of the transcription
   */
  confidence?: number;

  /**
   * Language code of the transcription
   */
  language?: string;

  /**
   * Time-coded transcription segments
   */
  segments?: Array<EpisodeRetrieveTranscriptionResponse.Segment>;
}

export namespace EpisodeRetrieveTranscriptionResponse {
  export interface Segment {
    /**
     * End time in seconds
     */
    endTime?: number;

    /**
     * Start time in seconds
     */
    startTime?: number;

    /**
     * Text for this segment
     */
    text?: string;
  }
}

export interface EpisodeSearchResponse {
  /**
   * Applied result limit
   */
  limit?: number;

  /**
   * Applied result offset
   */
  offset?: number;

  results?: Array<EpisodeSearchResponse.Result>;

  /**
   * Total number of matching episodes
   */
  total?: number;
}

export namespace EpisodeSearchResponse {
  export interface Result {
    /**
     * Unique identifier for the episode
     */
    id: string;

    /**
     * URL to the audio file
     */
    audioUrl: string;

    /**
     * Brief description of the episode content
     */
    description: string;

    /**
     * Episode title
     */
    title: string;

    /**
     * Episode duration in seconds
     */
    duration?: number;

    /**
     * Name of the podcast series
     */
    podcastName?: string;

    /**
     * Publication date and time
     */
    publishedAt?: string;
  }
}

export interface EpisodeSearchParams {
  /**
   * Search query (searches in title, description, etc.)
   */
  q: string;

  /**
   * Maximum number of results to return
   */
  limit?: number;

  /**
   * Number of results to skip for pagination
   */
  offset?: number;
}

export declare namespace Episodes {
  export {
    type EpisodeRetrieveTranscriptionResponse as EpisodeRetrieveTranscriptionResponse,
    type EpisodeSearchResponse as EpisodeSearchResponse,
    type EpisodeSearchParams as EpisodeSearchParams,
  };
}
