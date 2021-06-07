# gohugo


## Deployed-Site can be accessed with URL below:

[https://yogeshjain96.github.io/gohugo/](https://yogeshjain96.github.io/gohugo/)

### Add gh-pages

`$ npm install gh-pages`

### Update the package.json

```
{
  "name": "gohugo",
  "version": "1.0.0",
  "description": "Play with Hugo",
  "main": "index.js",
  "scripts": {
    "deploy": "gh-pages -d public",
    "build": "rm -rf public && hugo"
  },
  "keywords": [],
  "homepage": "https://yogeshjain96.io/gohugo",
  "author": "Yogesh Jain",
  "license": "ISC",
  "dependencies": {
    "gh-pages": "^3.2.0"
  }
}
```

> Static Pages from Hugo Build exists in branch **gh-page**
