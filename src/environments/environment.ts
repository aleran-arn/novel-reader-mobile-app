// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyC-PuOtESBk11EoXTp9qnnMSZA8ivrjoEo',
    authDomain: 'novel-reader-5769d.firebaseapp.com',
    databaseURL: 'https://novel-reader-5769d.firebaseio.com',
    projectId: 'novel-reader-5769d',
    storageBucket: 'novel-reader-5769d.appspot.com',
    messagingSenderId: '343964099503',
    appId: '1:343964099503:web:a806f81b9b1362d9f8c55a',
    measurementId: 'G-1Y284D3V37',
  },
  novelBackendConfig: {
    url: 'http://192.168.1.183:3000',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
