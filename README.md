## Basic app bootstrap with express, gulp and angular

#### This boilerplate includes:
```
angular
ui-router
express
json mocks for backend
gulp
karma
jasmine
phantomjs
```

### Installation

```
(sudo) npm install
(sudo) npm install -g karma
(sudo) npm install -g nodemon
(sudo) npm install -g gulp
```

### Run

```
1. Run tests: karma start
2. Run build: gulp app
3. Run server: nodemon server.js (you can use 'node server.js', but autoreload won't work)
```

### Troubleshooting

```
If karma throws an error 'phantomjs not installed' and you're using Windows,
make sure to copy it from '/node_modules/phantomjs/lib/phantom/bin/phantom.exe' into your
'C:\Users\your_user\AppData\Roaming\npm' folder.
```
