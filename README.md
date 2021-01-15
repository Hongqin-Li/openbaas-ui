# OpenBaaS UI

[![CI Status](../../workflows/CI/badge.svg)](../../actions)
[![Deploy Status](../../workflows/Deploy/badge.svg)](../../actions)

This is the repository of the web client of OpenBaaS.

## Development workflow

The corresponding backend serves as an example of [rhymer](https://github.com/Hongqin-Li/rhymer), an open source BaaS library written in Rust.

To start with, make sure you have `nvm`, `yarn`, `docker`, `kubectl`, `kind` installed.

### Backend

- Run `sh scripts/init-kind.sh` to initialize k8s(kind).
- Create another terminal and run `kubectl proxy` so that we can access deployments inside the k8s cluster.
- Clone [rhymer](https://github.com/Hongqin-Li/rhymer) to local and `cd` to it.
- Run `sh scripts/initdb-docker.sh` to initialize MongoDB in Docker.
- Start the server locally by `make serve`.

### Fontend

- Install dependencies: `yarn`
- Start the server locally by `yarn serve`
- Compiles and minifies for production: `yarn build`
- Run unit tests: `yarn test:unit`
- Lints and fixes files: `yarn lint`

## Known issue

- [Deployment doesn't create new replica set nor give any error](https://github.com/kubernetes/kubernetes/issues/36117):
  reinstall kind by `kind delete cluster && sh scripts/init-kind.sh`

