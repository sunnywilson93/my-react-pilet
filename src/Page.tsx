import { NCButton } from 'nc-components-ui';
import * as React from 'react';

const Page = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: 'skyblue'
      }}
    >
      <NCButton
        label='Sample React App'
        variant='primary'
        customClasses='w-full'
      />
    </div>
  );
};

export default Page;
