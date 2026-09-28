import {get} from '@loopback/rest';

/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE = {
  description: 'Ping Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'PingResponse',
        properties: {
          greeting: {type: 'string'},
          date: {type: 'string'},
          url: {type: 'string'},
          headers: {
            type: 'object',
            additionalProperties: true,
          },
        },
      },
    },
  },
};

export class PingController {
  constructor() {}

  // Map to `GET /ping`
  @get('/ping', {
    responses: {
      '200': PING_RESPONSE,
    },
  })
  ping(): object {
    // Reply with a greeting, the current timestamp, the url, and some request headers.
    // Greet the caller
    const greeting = 'Hello from Loopback Backend!';
    // Get the current date
    const now = new Date();
    // Get the url
    const url = process.env.HOSTNAME || 'http://localhost:3001';
    return {
      greeting: greeting,
      date: now,
      url: url,
      timestamp: now.getTime(),
    };
  }

  @get('/api/status', {
    responses: {
      '200': {
        description: 'API Status',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                status: {type: 'string'},
                version: {type: 'string'},
                uptime: {type: 'number'},
              },
            },
          },
        },
      },
    },
  })
  status(): object {
    return {
      status: 'running',
      version: '1.0.0',
      uptime: process.uptime(),
      timestamp: new Date(),
    };
  }
}
