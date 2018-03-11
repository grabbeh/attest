import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const styles = flush()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta charset='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>Attest - open source contract management</title>
          <link
            rel='stylesheet'
            href='https://unpkg.com/tachyons@4.9.0/css/tachyons.min.css'
          />
          <link rel='stylesheet' href='/static/datepicker.css' />
          <link
            href='https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
            rel='stylesheet'
          />
          <style jsx global>
            {`

              .example-appear {
                opacity: 0.01;
              }

              .example-appear.example-appear-active {
                opacity: 1;
                transition: opacity .5s ease-in;
              }

            .example-enter {
              opacity: 0.01;
            }

            .example-enter.example-enter-active {
              opacity: 1;
              transition: opacity 500ms ease-in;
            }

            .example-leave {
              opacity: 1;
            }

            .example-leave.example-leave-active {
              opacity: 0.01;
              transition: opacity 500ms ease-in;
            }

            .height {
              height: 100vh;
              top: 0;
              bottom: 0;
            }

            .front {
              z-index: 1000;
            }

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

              html, body {
                height: 100vh;
              }

              body {
                font-family: 'shapefont';
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }

              .font {
                font-family: 'shapefont';
              }

              input {
                font-family: 'shapefont'; 
              }

              .bg--blue {
              background-color: #005baa;
              }

              .bg--blue-gray {
                background-color: #b8d0d8;
              }

              .bg--orange {
                background-color: #f5a871;
              }

              .bb--orange {
                border-bottom-color: #f5a871;
              }

              .bg--peach {
                background-color: #EFADA0;
              }

              .bg-light-peach {
              background-color: #f5c8bf;
              }

              .bg-haus {
                background-color: #f3f4f4;
              }

              .bg-pear {
                background-color: #93DAAB;
              }

              .bb--pear {
                border-bottom-color: #93DAAB;
              }

              .bb--dark-pear {
                border-bottom-color:#2E854B;
              }

              .bg-dark-pear {
                background-color: #2E854B;
              }

              .bg--dark-blue {
                background-color: #132238;
              }

              .bg--dark-peach {
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
                top: 0px;
                left: 0px;
                right:0px;
                bottom: 0px;
                overflow: auto;
                WebkitOverflowScrolling: touch;
                outline: none;
              }

              .fc-blue {
                color: #005baa;
              }

              input, button, submit { border: none; outline: none;}

          `}
          </style>
          {this.props.styleTags}
        </Head>
        <body className='dark-gray'>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
