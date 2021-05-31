# DateSince

## Installation
Using npm:
```shell
$ npm i @rasi2661/datesince
```

Using yarn:
```shell
$ yarn add @rasi2661/datesince
```

## Examples
```js
const dateSince = require("@rasi2661/datesince");

let longAgo = new Date("11/21/1987 16:00:00");
console.log(dateSince(longAgo));
/*{
    years: 33.54719849955606,
    days: 12244.727452337964,
    hours: 293873.4588561111,
    seconds: 17632407.531366665,
    milliseconds: 1057944451.882
  }*/
```
