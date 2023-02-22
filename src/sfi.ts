import {configure} from '@snek-at/function'
import express from 'express'

const test = () => {
  return 'Hello world!'
}

class Resource {
  name: string

  constructor(name: string){
    this.name = name
  }
}

const resources = [
  new Resource("DB"),
  new Resource("Ballon"),
  new Resource("Jaen")
]


class User {
  name: string
  fullName: string

  constructor(name: string){
    this.name = name
    this.fullName = name + ' ' + 'Test'
  }

  resources(name: string): Resource[] {
    if(name){
      return [
        new Resource("name")
      ]
    }

    return [        new Resource("name")
  ]
  }
}



export default configure(
  {
    Query: {test, user: (name: string) => new User(name)}
  },
  {
    configureApp(app) {
      app.get('/voyager', (req, res) => {
        res.setHeader('Content-Type', 'text/html')

        res.send(`
        
        <!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/react@16/umd/react.production.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@16/umd/react-dom.production.min.js"></script>

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/graphql-voyager/dist/voyager.css"
    />
    <script src="https://cdn.jsdelivr.net/npm/graphql-voyager/dist/voyager.min.js"></script>
  </head>
  <body>
    <div id="voyager">Loading...</div>
    <script>
      function introspectionProvider(introspectionQuery) {
        // ... do a call to server using introspectionQuery provided
        // or just return pre-fetched introspection

        return fetch('/graphql', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({query: introspectionQuery}),
        })
          .then(response => response.json());
      }

      // Render <Voyager />
      GraphQLVoyager.init(document.getElementById('voyager'), {
        introspection: introspectionProvider,
      });
    </script>
  </body>
</html>
        `)
      })

      app.get('/hello', (req, res) => {
        res.send('Hello world!')
      })

      return app
    }
  }
)
