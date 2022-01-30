# Integration of WebSocket (WS) with Redux Saga

### Task description

- Start a WebSocket server: you don't have to create your own server you can just start a Node server which broadcasts random data (e.g.: https://github.com/heroku-examples/node-ws-test).
- Create two different reducers with Redux: "User" and "Logs".
- Start listening WebSocket server with Redux Saga.
- Increase the user's "total logs count" with each WS response and keep that data in the state by message passing through User Reducer and keep that "total logs count" in the Local Storage.
- Keep each broadcast data (each log) in the state by message passing through Logs Reducer and DO NOT keep that array of logs in the Local Storage.
- Visualize list and user's total logs count using React in the main page.

### Installation & Build

```bash
# install dependencies
$ npm install

# hot development
$ npm run dev

# build for production
$ npm run build
```
