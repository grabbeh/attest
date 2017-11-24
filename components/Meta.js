import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <meta name='theme-color' content='#005baa' />
      <meta name='msapplication-navbutton-color' content='#005baa' />
      <meta name='apple-mobile-web-app-status-bar-style' content='#005baa' />
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width' />
      <title>Attest - open source contract management</title>
      <link
        rel='stylesheet'
        href='https://unpkg.com/tachyons@4.9.0/css/tachyons.min.css'
      />
      <link rel='stylesheet' href='/static/datepicker.css' />
      <link
        href='https://fonts.googleapis.com/css?family=Open+Sans:400,700'
        rel='stylesheet'
      />

      <link
        href='https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
        rel='stylesheet'
      />

    </Head>
    <style jsx global>
      {`

      body {
        font-family: Open Sans, sans-serif;
      }

      .bg-darkest-gray {
        background-color: #383636;
      }

      .bg--dark-gray {
        background-color: #2a2727;
      }

      .bg--blue {
        background-color: #005baa;
      }

      .bg--dark-blue {
        background-color: #132238;
      }
      
      .bg-mid-gray {
        background-color: #595656;
      }

      .bg--light-gray {
        background-color: #e5e5e5;
      }

      input, button, submit { border:none; } 

      .light-gray {
        color: #dbd7d7;
      }

      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(31, 30, 30, 0.75);
      }

  
        .content {
          position: absoute;
          top: 40px;
          left: 40px;
          right: 40px;
          bottom: 40px;

   
          overflow: auto;
          WebkitOverflowScrolling: touch;
      
          outline: none;
     
        }
      

      input, textarea, select {
        font-family: Open Sans, sans-serif;
        outline: none;
        outline: 0;
        outline-style:none;
        box-shadow:none;
        border-color:transparent;
      }

      input:focus {
        outline:none;
      }

      .fc-blue {
        color: #005baa;
      }

    `}
    </style>
  </div>
)
