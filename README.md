# StringTemp

Inject an array of items in to a string replacing selected values.

## Install

```shell
bun add stringtemp
```

## Setup

```ts
import StringTemp from "stringtemp";

const str = new StringTemp("{", "}");

const hello = srt.inject("Hello {name}", { name: "Kevin" });

console.log(hello);
```
