import './index.scss';

import { Bm55pluginPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin() {
  return new Bm55pluginPlugin();
}
export { Bm55pluginPluginSetup, Bm55pluginPluginStart } from './types';
