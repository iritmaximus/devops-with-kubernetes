# Kubernetes submissions

## Exercises

### Chapter 2
* [1.1](https://github.com/iritmaximus/devops-with-kubernetes/tree/1.1.0)
* [1.2](https://github.com/iritmaximus/devops-with-kubernetes/tree/1.2.0)

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
kubectl create deployment --image=iritmaximus/log-output
```

#### Todo
Deploy it to kubernetes with 
```bash
kubectl create deployment --image=iritmaximus/todo
```

### Image tags
`latest` points to the latest github release, `main` points to the main branch currently on github and 
`<SEMVER>` points to the corresponding github release.
