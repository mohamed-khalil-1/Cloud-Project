export const environment = {
  production: false,
  authApiUrl: 'http://localhost:4140',
  productApiUrl: 'http://localhost:4141',
  notificationApiUrl: 'http://localhost:4142',
  wishlistApiUrl: 'http://localhost:4143',
  chatApiUrl: 'http://localhost:4144',
  environmentName: 'Development',
  environmentColor: '#4CAF50', // Green
  debugMode: true,
  showDebugInfo: true,
  apiTimeout: 15000, // 15 seconds
  enableMockData: false,
  logging: {
    level: 'debug',
    enableConsole: true,
    enableFile: true,
    filePath: './logs/dev.log'
  },
  security: {
    enableCors: true,
    enableRateLimit: false,
    enableHttps: false
  },
  version: '1.0.0'
}; 