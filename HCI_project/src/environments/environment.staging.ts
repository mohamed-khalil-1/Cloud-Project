export const environment = {
  production: false,
  authApiUrl: 'http://localhost:4120',
  productApiUrl: 'http://localhost:4121',
  notificationApiUrl: 'http://localhost:4122',
  wishlistApiUrl: 'http://localhost:4123',
  chatApiUrl: 'http://localhost:4124',
  environmentName: 'Staging',
  environmentColor: '#FFA500', // Orange
  debugMode: true,
  showDebugInfo: true,
  apiTimeout: 15000, // 15 seconds
  enableMockData: false,
  logging: {
    level: 'info',
    enableConsole: true,
    enableFile: true,
    filePath: './logs/staging.log'
  },
  security: {
    enableCors: true,
    enableRateLimit: true,
    enableHttps: false
  },
  version: '1.0.0'
}; 
