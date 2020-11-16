const dev = process.env.NODE_ENV !== 'production'

const server = dev ? 'http://localhost:3000' : 'http://attest.mbg.codes'

export default server
