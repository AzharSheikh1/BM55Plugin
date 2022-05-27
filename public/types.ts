import { NavigationPublicPluginStart } from '../../../src/plugins/navigation/public';

export interface Bm55pluginPluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Bm55pluginPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}
