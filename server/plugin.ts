import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '../../../src/core/server';

import { Bm55pluginPluginSetup, Bm55pluginPluginStart } from './types';
import { defineRoutes } from './routes';

export class Bm55pluginPlugin implements Plugin<Bm55pluginPluginSetup, Bm55pluginPluginStart> {
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('BM55plugin: Setup');
    const router = core.http.createRouter();

    // Register server side APIs
    defineRoutes(router);

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('BM55plugin: Started');
    return {};
  }

  public stop() {}
}
