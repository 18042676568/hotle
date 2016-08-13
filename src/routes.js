export default function getRoutes(store) {
  return {
    path: '/',
    component: require('./containers/Application/Application'),
    indexRoute: [
      {
        getComponent(nextState, cb) {
          require.ensure([], require => cb(null, require('./containers/HomePage/HomePage')));
        },
      },
    ],
  };
}
