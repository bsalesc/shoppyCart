// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: 'http://localhost:8081/',
  firebase: {
    apiKey: 'AIzaSyAobgCwkY8-yiFsYRfKzLqKQgZsw5Lgo3M',
    authDomain: 'shopping-list-5666c.firebaseapp.com',
    databaseURL: 'https://shopping-list-5666c.firebaseio.com',
    projectId: 'shopping-list-5666c',
    storageBucket: 'shopping-list-5666c.appspot.com',
    messagingSenderId: '679304626110'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
