import * as serviceWorkerRegistration from '../../serviceWorkerRegistration';

import LandingPage from '../landing';
import { useEffect } from 'react';

export const app_version = require('../../../package.json').version;

const App = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // check version of localStorage
      const localVersion = localStorage.getItem('mys-version');
      if (localVersion !== app_version) {
        setTimeout(() => {
          setTimeout(() => {
            clearAllCaches();
            setTimeout(() => {
              deleteAllCookies();
              setTimeout(() => {
                clearStorage(app_version);
                setTimeout(() => {
                  unregisterServiceWorker();
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 5000);
      } else {
        registerServiceWorker();
      }
    } else {
      // web app in development
      registerServiceWorker();
    }

    return () => {
      // window.removeEventListener('error', () => {});
    };
  }, []);

  const clearAllCaches = () => {
    try {
      // check if there is cache in window and clear it
      if ('caches' in window) {
        caches.keys().then((names) => {
          // Delete all the cache files
          names.forEach((name) => {
            caches.delete(name);
          });
        });
      }
    } catch (err) {}
  };

  const deleteAllCookies = () => {
    try {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf('=');
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
      }
      for (var j = 0; j < cookies.length; j++) {
        var _cookie = cookies[j];
        var _eqPos = _cookie.indexOf('=');
        var _name = _eqPos > -1 ? _cookie.substring(0, _eqPos) : _cookie;
        document.cookie = _name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
      }
      document.cookie.split(';').forEach(function (c) {
        document.cookie = c
          .replace(/^ +/, '')
          .replace(/=.*/, '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/');
      });
      var _cookies = document.cookie.split('; ');
      for (var c = 0; c < _cookies.length; c++) {
        var d = window.location.hostname.split('.');
        while (d.length > 0) {
          var cookieBase =
            encodeURIComponent(_cookies[c].split(';')[0].split('=')[0]) +
            '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' +
            d.join('.') +
            ' ;path=';
          var p = window.location.pathname.split('/');
          document.cookie = cookieBase + '/';
          while (p.length > 0) {
            document.cookie = cookieBase + p.join('/');
            p.pop();
          }
          d.shift();
        }
      }
    } catch (err) {}
  };

  const clearStorage = (app_version: string) => {
    // clear sessionStorage
    localStorage.setItem('mys-version', app_version);
  };

  const unregisterServiceWorker = () => {
    serviceWorkerRegistration.unregister();
  };

  const registerServiceWorker = () => {
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://cra.link/PWA
    serviceWorkerRegistration.register();
  };

  return (
    <div className='app-main'>
      <LandingPage />
    </div>
  );
};

export default App;
