# plugin-coffee
SystemJS plugin for compiling CoffeeScript

```
jspm install coffee
```

In config.js:

``` javascript
System.config({
  map: {
    coffee: "plugin-coffee"
  }
});
```

In your app:

``` javascript
System.import('./test.coffee!')
  .then(function (test) {
    var t = new test('Test');
    console.log(t);
  })
```
