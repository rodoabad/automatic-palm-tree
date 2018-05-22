import React from 'react';

const IndexHtml = () => (
  <html>
    <head>
      <title>{'Example'}</title>
      <base href='/'/>
    </head>
    <body>
      <div className='content' />
      <script
        src='dist/app.js'
        type='text/javascript'
      />
    </body>
  </html>
);

export default IndexHtml;
