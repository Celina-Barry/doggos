## Doggos username generator for use in Workato

To build:

```
browserify . -o bundle.js --node --im -s index.js
```

install bundle.js into workato.

`main` function yields an object like:

```
{
    username: 'angel-the-kuri',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/ChiefsWithKuri1828.jpg'
}
```

Which is composed of an `imageURL` (which may be blank) and a username constructed of a random dog name 
followed by `the` followed by a random dog breed.