import {configure} from '@snek-at/function'

const helloWorld = () => {
  return 'Hello world!'
}

export default configure(
  {
    Query: {
      helloWorld
    }
  },
  {
    configureApp(app) {
      return app
    }
  }
)
