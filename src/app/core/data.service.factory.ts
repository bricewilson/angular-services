import { LoggerService } from './logger.service';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

export function dataServiceFactory(logger: LoggerService, http: HttpClient) {
  let dataService: DataService = new DataService(logger, http);

  // do more stuff to configure the service if necessary

  logger.log('Creating a new data service with a factory function.');

  return dataService;
  
}