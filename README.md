# Kubernetes submissions

## Exercises

### Chapter 2
* [1.1](https://github.com/iritmaximus/devops-with-kubernetes/tree/1.1.0)
* [1.2](https://github.com/iritmaximus/devops-with-kubernetes/tree/1.2.0)
* [1.3](https://github.com/iritmaximus/devops-with-kubernetes/tree/1.3.0)
* [1.4](https://github.com/iritmaximus/devops-with-kubernetes/tree/1.4.0)
* [1.5](https://github.com/iritmaximus/devops-with-kubernetes/tree/1.5.0)
* [1.6](https://github.com/iritmaximus/devops-with-kubernetes/tree/1.6.0)
* [1.7](https://github.com/iritmaximus/devops-with-kubernetes/tree/1.7.0)
* [1.8](https://github.com/iritmaximus/devops-with-kubernetes/tree/1.8.0)
* [1.9](https://github.com/iritmaximus/devops-with-kubernetes/tree/1.9.0)
* [1.10](https://github.com/iritmaximus/devops-with-kubernetes/tree/1.10.0)
* [1.11](https://github.com/iritmaximus/devops-with-kubernetes/tree/1.11.0)
* [1.12](https://github.com/iritmaximus/devops-with-kubernetes/tree/1.12.0)
* [1.13](https://github.com/iritmaximus/devops-with-kubernetes/tree/1.13.0)

## Image tags
`latest` points to the latest github release, `main` points to the main branch currently on github and 
`<SEMVER>` points to the corresponding github release.

## Building
### Docker
#### Log output
Build Log output app by 
```bash
docker build . -t log-output
```

and run it with

```bash
docker run -it log-output
```

#### Todo app
Build Todo app by 
```bash
docker build . -t todo
```

and run it with

```bash
docker run -it todo
```

#### Ping pong
Build PingPong app by 
```bash
docker build . -t ping-pong
```

and run it with

```bash
docker run -it ping-pong
```



### Kubernetes
#### Log output
Deploy it to kubernetes with 
```bash
kubectl apply -f ./log_output/manifests
```

#### Todo
Deploy it to kubernetes with 
```bash
kubectl apply -f ./todo/manifests
```

#### Ping Pong
Deploy it to kubernetes with 
```bash
kubectl apply -f ./ping-pong/manifests
```

Notice that it has a shared ingress witt log-output.
