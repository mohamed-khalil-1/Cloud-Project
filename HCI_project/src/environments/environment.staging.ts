export const environment = {
  production: false,
  apiUrl: 'http://localhost:3501',
  version: '1.0.0',
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
  }
}; 
