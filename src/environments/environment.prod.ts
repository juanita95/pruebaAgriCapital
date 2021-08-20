import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: false,
  webApiBase :'http://localhost:3000/',
  graficoUrl:  'http://localhost:3000/Grafico',
  agentesUrl:  'http://localhost:3000/Agentes',
  menuUrl: 'http://localhost:3000/Menu',
  signalRLogEnabled: false,
  logLevel: NgxLoggerLevel.DEBUG,
  serverLogLevel: NgxLoggerLevel.ERROR,
  forcedTenant: 'localhost',
};
