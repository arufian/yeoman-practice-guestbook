Guestbook app using Yeoman
=========================
A yeoman practice using Backbone and backbone-generator to create guestbook application.
This repository is a reference to [Yeoman, workflow untuk pembuatan aplikasi web modern](http://wp.me/p49lhS-1s) blog.
To check it out, clone the repository, then:

```
# Use `package.json` to pull down the app's dependencies from NPM
$ npm install

# Use `bower.json` to pull down the app's dependencies from Bower
$ bower install

# The (unwritten) tests have Bower dependencies as well. Grab those:
$ cd test
$ bower install
```

Now that you have all of the pieces, try out:

`grunt server` to create a development server, and
`grunt` to test and build the application.