# Kubernetes submissions

## Exercises

### Chapter 2
* [1.1](https://github.com/iritmaximus/devops-with-kubernetes/tree/1.1.0)
* [1.2](https://github.com/iritmaximus/devops-with-kubernetes/tree/1.2.0)
* [1.3](https://github.com/iritmaximus/devops-with-kubernetes/tree/1.3.0)
* [1.4](https://github.com/iritmaximus/devops-with-kubernetes/tree/1.4.0)

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
Build Log output app by 
```bash
docker build . -t todo
```

and run it with

```bash
docker run -it todo
```


### Kubernetes
#### Log output
Deploy it to kubernetes with 
```bash
kubectl apply -f ./log_output/manifests/deployment.yaml
```

#### Todo
Deploy it to kubernetes with 
```bash
kubectl apply -f ./todo/manifests/deployment.yaml
```
