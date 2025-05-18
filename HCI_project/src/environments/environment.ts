export const environment = {
  production: false,
  apiUrl: 'http://localhost:3500',
  version: '1.0.0',
  environmentName: 'Development',
  environmentColor: '#4CAF50', // Green
  debugMode: true,
  showDebugInfo: true,
  apiTimeout: 30000, // 30 seconds
  enableMockData: true,
  // Development specific settings
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
  }
}; 