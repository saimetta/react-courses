import {
  DefaultPage,
  Stuff,
} from './';

export default {
  path: 'test-feature',
  name: 'Test feature',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: 'stuff-things', name: 'Stuff', component: Stuff },
  ],
};
