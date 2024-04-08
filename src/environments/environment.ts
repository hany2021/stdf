import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'stdf',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44399/',
    redirectUri: baseUrl,
    clientId: 'stdf_App',
    responseType: 'code',
    scope: 'offline_access stdf',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44399',
      rootNamespace: 'stdf',
    },
  },
} as Environment;
