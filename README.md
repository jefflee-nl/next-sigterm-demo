# NextJS SIGTERM Demo

NextJS project to demonstrate handling SIGTERM/SIGINT signals.

## Usage
Run `npm run dev` and navigate to http://localhost:3000/. 

The page will show the PID. You can use the command to send a SIGTERM signal. If you see the following in your terminal, it means SIGTERM recieved and process exited.

```shell
Received SIGTERM: cleaning up
```

## Note
(1) Setting env variables in any `.env` files will not work because the server does not support loading variables from `.env` files into the node server (ie. they do not use packages like dotenv). Please set it in Dockerfile.

```Dockerfile
# Dockerfile
ENV NEXT_MANUAL_SIG_HANDLE true
```

(2) We have updated npm scripts in `package.json` to set the variable `NEXT_MANUAL_SIG_HANDLE` when you run it. Therefore, you can handle termination signals manually in production/development mode. However, if you are not using these commands in your deployment, please set `NEXT_MANUAL_SIG_HANDLE` separate. (ie. Your Dockerfile uses `node_modules/.bin/next start`, please follow note (1))

```json
{
  // ...
  "scripts": {
    "dev": "NEXT_MANUAL_SIG_HANDLE=true next dev",
    "start": "NEXT_MANUAL_SIG_HANDLE=true next start",
    //...
  },
  //...
}
```
