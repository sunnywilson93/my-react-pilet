import * as React from 'react';
import { PiletApi } from 'my-app';
import { NCButton } from 'nc-components-ui';
import Page from './Page';
import { Link } from 'react-router-dom';

export function setup(app: PiletApi) {
  app.registerTile(
    'first tile',
    () => (
      <Link to='/components'>
        <div
          style={{
            height: '100%',
            backgroundColor: '#c1c1c1',
            width: '100%'
          }}
        >
          Hello to Piral!
        </div>
      </Link>
    ),
    {
      initialColumns: 2,
      initialRows: 2
    }
  );
  app.registerTile(
    () => (
      <button onClick={() => app.unregisterTile('first tile')}>
        Bye to Piral!
      </button>
    ),
    {
      initialColumns: 2,
      initialRows: 1
    }
  );
  app.registerPage('/components', Page);
}
