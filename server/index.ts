import { PluginInitializerContext } from '../../../src/core/server';
import { Bm55pluginPlugin } from './plugin';

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new Bm55pluginPlugin(initializerContext);
}

export { Bm55pluginPluginSetup, Bm55pluginPluginStart } from './types';
