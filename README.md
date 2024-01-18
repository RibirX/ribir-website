# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

If you want to debug with the production Ribir docs, you can run the following command to link the Ribir docs to the website:

```
./link-docs.sh ../Ribir
```

This command assumes that you have cloned the Ribir in the same directory as this repo:

```
|..
|-- Ribir
|-- ribir-website
```

You should know that this command creates symbolic links from the docs of the Ribir repo to the website. This means that any changes you make to the docs will be reflected in the Ribir repo. And remember not to commit the symbolic links to the website repo.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Manual Deployment

All the docs sync and deploy are finished automatically by the CI/CD pipeline. You should not need to manually deploy the website. For test and debug purposes, you can manually deploy the website by running the following commands.

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
