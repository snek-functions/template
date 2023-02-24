import {defineService} from '@snek-at/function'

const helloWorld = () => {
  return 'Hello world!'
}

export default defineService(
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
