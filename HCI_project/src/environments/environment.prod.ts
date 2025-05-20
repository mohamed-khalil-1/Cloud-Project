export const environment = {
  production: true,
  authApiUrl: 'http://localhost:4130',
  productApiUrl: 'http://localhost:4131',
  notificationApiUrl: 'http://localhost:4132',
  wishlistApiUrl: 'http://localhost:4133',
  chatApiUrl: 'http://localhost:4134',
  environmentName: 'Production',
  environmentColor: '#FF0000', // Red
  debugMode: true,
  showDebugInfo: true,
  apiTimeout: 15000, // 15 seconds
  enableMockData: false,
  logging: {
    level: 'info',
    enableConsole: true,
    enableFile: true,
    filePath: './logs/production.log'
  },
  security: {
    enableCors: true,
    enableRateLimit: true,
    enableHttps: false
  },
  version: '1.0.0'
}; 