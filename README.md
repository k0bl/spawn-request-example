# Spawn Request Example

Illustrate node / childprocess /throng multithreading

In one console
```
node app.js
```
In another console
```
node microservice.js
```

Visit http://localhost:8000 and watch the console on both servers. You will immediate receive a response from app.js while the spawned thread sends a long running request to the microservice.
