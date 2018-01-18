import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />

          <title>Attest - open source contract management</title>
          <link
            rel='stylesheet'
            href='https://unpkg.com/tachyons@4.9.0/css/tachyons.min.css'
          />
          <link rel='stylesheet' href='/static/datepicker.css' />
          <link
            href='https://fonts.googleapis.com/css?family=Roboto:400,700'
            rel='stylesheet'
          />

          <link
            href='https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
            rel='stylesheet'
          />
          <style jsx global>
            {`

              @font-face {
                font-family: 'shapefont';
                src: 
                  url('/static/fonts/font-bold.otf');
                font-weight: bold;
              }

              @font-face {
                font-family: 'shapefont';
                src: 
                  url('/static/fonts/font.otf');
              }

              body {
                font-family: 'Roboto';
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                background-color: rgb(243, 244, 245);
              }

              .bg--blue {
              background-color: #005baa;
              }

              .bg--blue-gray {
                background-color: #b8d0d8;
              }

              .bg-orange {
                background-color: #f5a871;
              }

              .bb--orange {
                border-bottom-color: #f5a871;
              }

              .bg-peach {
                background-color: #EFADA0;
              }

              .bg-light-peach {
              background-color: #f5c8bf;
              }

              .bg-haus {
                background-color: #ffffff;
              }

              .bg-pear {
                background-color: #93DAAB;
              }

              .bb--pear {
                border-bottom-color: #93DAAB;
              }

              .bg-dark-pear {
                background-color: #2E854B;
              }

              .bb--dark-pear {
                border-bottom-color:#2E854B;
              }

              .bg--dark-blue {
                background-color: #132238;
              }

              .bg-dark-peach {
                background-color: #E37059;
              }

              .bg-sur {
                background-color: #96DBE4;
              }

              .bg-dark-sur {
                background-color: #24828F;
              }

              .bg--light-gray {
                background-color: #e5e5e5;
              }

              input, button, submit { border:none; } 

              .light--gray {
                color: #f7f4f4;
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
                position: absolute;
                top: 40px;
                left: 40px;
                right: 40px;
                bottom: 40px;
                overflow: auto;
                WebkitOverflowScrolling: touch;
                outline: none;

              }


              input, textarea, select {
                font-family: shapefont, sans-serif;
                background: white;
              }



              .fc-blue {
                color: #005baa;
              }

          `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
