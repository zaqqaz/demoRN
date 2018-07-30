## Development 🏃‍

* Run `yarn start` to launch react-native cli.
* Run `yarn test` to execute tests.

## Add ./node_modules/.bin to your PATH

It is convenient to have `node_modules/.bin` added to your PATH so that you can run binaries installed by yarn without typing full path and you don't have to install packages globally.

NB! Do it after other directories so that standard executables will have priority over executables in `node_modules/.bin` in your current working directory

```sh
export PATH="$PATH:./node_modules/.bin"
```
