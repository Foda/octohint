import * as Raven from 'raven-js'

if (process.env.NODE_ENV === 'production') {
  Raven.config('https://41a463b022ae413fae845af2f660dbb9@sentry.io/157641').install()
}

// export default Raven
// window.Raven = Raven
