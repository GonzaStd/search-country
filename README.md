# Country Search
This simple project shows data from a country, fetching restcountries.com/v3.1 api.

Things I've learned:
* How to create tables and its styles
* How to make API requests
* How to handle and clean received data,
* How to use Object.entries, forEach, substring, lastIndexOf, etc.

## Object.entries
Returns an array of arrays, each array in it, is a property-value pair. For example:

```js
[
  [
    "name",
    {
      "common": "Argentina",
      "official": "Argentine Republic",
      "nativeName": {
        "grn": {
          "official": "Argentine Republic",
          "common": "Argentina"
        },
        "spa": {
          "official": "República Argentina",
          "common": "Argentina"
        }
      }
    }
  ],
  [
    "capital",
    [
      "Buenos Aires"
    ]
  ],
  [
    "continents",
    [
      "South America"
    ]
  ],
  [
    "currencies",
    {
      "ARS": {
        "symbol": "$",
        "name": "Argentine peso"
      }
    }
  ],
  [
    "languages",
    {
      "grn": "Guaraní",
      "spa": "Spanish"
    }
  ],
  [
    "timezones",
    [
      "UTC-03:00"
    ]
  ],
  [
    "tld",
    [
      ".ar"
    ]
  ],
  [
    "area",
    2780400
  ]
]
```

## For each
Iterates an object and executes the function passed as an argument. In this case, I used it to delete tables. You can use an [arrow function](https://javascript.info/arrow-functions) so you don't leave the context. Here's the example:
```js
document.querySelectorAll("table").forEach(element => element.remove())
```

## lastIndexOf and .substring
substring is a string method that returns another string, between two indexes (inclusive). lastIndexOf is an array or string method that returns the last index on given array or string, where appears the string passed out as an argument. Example:
```js
    let str = "Hello, World, "
    let lastComma=str.lastIndexOf(", "); // 12
    str = str.substring(0, lastComma); // "Hello, World"
```