# napisp

[![generator-api](https://img.shields.io/badge/built%20with-generator--api-green.svg)](https://github.com/ndelvalle/generator-api)

node api service producer

Accquire backend service for deploy
```
  mongodb
  redis
  kafka
```


## dependencies

[Docker](https://docs.docker.com/engine/installation/) :whale: & [docker-compose](https://docs.docker.com/compose/install/).

## developing

run locally run using docker-compose:

```bash
sudo docker-compose up
```

the app runs on `localhost:8080`

## production

build the Docker :whale: container and run it:

_you'll likely be consuming mongodb as a service, so make sure you set the env var to connect to it._

```bash
sudo docker build -t <image-name> .
sudo docker run \
  -p <host-port>:8080 \
  -d <image-name> \
  -e MONGO_DB_URI=mongodb://<username>:<password>@<host>:<port> \
  npm run start
```



--------------------------------------------------------------------------------
### STARTING DEMO 
- Change file ```config.js``` bind to your kafka cluster , mongodb , redis infastructure 
- Start producer service following by running ```npm run start```
- Start consumer service following by running ```npm run c1```
- Using curl to post the request to producer service following by:
```
curl -X POST -d '' http://localhost:8080/producer/request
```
you will see on console log of producer service something like this
```
"{\"error\":\"sucessful\", \"request-id\": \"58271746-d4b3-4346-bb7a-c1954f347e65\", \"msg\": \"\"}"
```
then if you check on console log of consumer service something like this will appear
```
[ { value: '{"time":"18:54:22 GMT+0900 (JST)","uuid":"a0efcf90-a0c1-4d80-be72-596f5a7938a5"}',
    size: 80,
    key: <Buffer 66 39 65 31 63 62 61 39 2d 38 64 34 63 2d 34 66 34 63 2d 38 63 34 33 2d 65 33 66 31 61 34 38 36 31 37 62 37>,
    topic: 'napisp',
    offset: 259,
    partition: 0,
    timestamp: 1562320462626 } ]
```
### NOTE
You can using following repo and docker-compose to build an environment for ```fast-data-dev``` lab 
```https://github.com/kevinnguyenai/workshop-fast-data-dev```