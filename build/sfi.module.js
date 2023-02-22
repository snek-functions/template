import{configure as s}from"@snek-at/function";const o=()=>"Hello world!";class n{constructor(e){this.name=e}}class i{constructor(e){this.name=e,this.fullName=e+" Test"}resources(e){return e?[new n("name")]:[new n("name")]}}var c=s({Query:{test:o,user:r=>new i(r)}},{configureApp(r){return r.get("/voyager",(e,t)=>{t.setHeader("Content-Type","text/html"),t.send(`
        
        <!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/react@16/umd/react.production.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@16/umd/react-dom.production.min.js"><\/script>

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/graphql-voyager/dist/voyager.css"
    />
    <script src="https://cdn.jsdelivr.net/npm/graphql-voyager/dist/voyager.min.js"><\/script>
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
    <\/script>
  </body>
</html>
        `)}),r.get("/hello",(e,t)=>{t.send("Hello world!")}),r}});export{c as default};
export const typeDefs = "type Query {\n\ttest: String!\n\tuser(name: String!): User!\n}\ntype User {\n\tname: String!\n\tfullName: String!\n\tresources(name: String!): [Resource!]!\n}\ntype Resource {\n\tname: String!\n}\nscalar Number\nscalar Any\n";