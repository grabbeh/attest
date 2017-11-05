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
      <link rel='stylesheet' href='/static/tachyons.css' />
      <link rel='stylesheet' href='/static/datepicker.css' />
      <link
        href='https://fonts.googleapis.com/css?family=Montserrat:400,700'
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
        font-family: Montserrat, sans-serif;
      }

      .bg--blue {
        background-color: #005baa;
      }

      .bg--dark-blue {
        background-color: #132238
      }

      input, textarea {
        font-family: Montserrat, sans-serif;
      }

      .fc-blue {
        color: #005baa;
      }

    `}
    </style>
  </div>
)
