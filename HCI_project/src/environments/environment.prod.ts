export const environment = {
  production: true,
  apiUrl: 'http://localhost:3502',
  version: '1.0.0',
  environmentName: 'Production',
  environmentColor: '#FF0000', // Red
  debugMode: false,
  showDebugInfo: false,
  apiTimeout: 5000, // 5 seconds
  enableMockData: false,
  // Production specific settings
  logging: {
    level: 'error',
    enableConsole: false,
    enableFile: true,
    filePath: './logs/prod.log'
  },
  security: {
    enableCors: true,
    enableRateLimit: true,
    enableHttps: false
  }
}; 