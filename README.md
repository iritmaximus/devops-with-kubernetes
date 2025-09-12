# Kubernetes submissions

## Exercises

### Chapter 2
* [1.1](https://github.com/iritmaximus/devops-with-kubernetes/tree/1.1.0)

## Building
### Docker
Build Log output app by 
```bash
docker build . -t log-output
```

and run it with

```bash
docker run -it log-output
```

### Kubernetes
Deploy it to kubernetes with 
```bash
kubectl create deployment --image=iritmaximus/log-output
```

### Image tags
`latest` points to the latest github release, `main` points to the main branch currently on github and 
`<SEMVER>` points to the corresponding github release.
