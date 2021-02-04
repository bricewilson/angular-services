import { LoggerService } from './logger.service';
import { DataService } from './data.service';

export function dataServiceFactory(logger: LoggerService) {
  let dataService: DataService = new DataService(logger);

  // do more stuff to configure the service if necessary

  logger.log('Creating a new data service with a factory function.');

  return dataService;
  
}