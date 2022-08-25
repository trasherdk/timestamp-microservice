# This is a fork of [lukePeavey's timestamp-microservice](https://github.com/lukePeavey/timestamp-microservice) stale repository.

## API Project: Timestamp Microservice

This project is part of the [freeCodeCamp](http://freecodecamp.org)  APIs and Microservices certification.

---

## Project requirements

1. The API endpoint is:

```http
GET https://peavey-timestamp-ms.glitch.me/API/timestamp/:date_string?
```

2.  A date string is valid if can be successfully parsed by new Date(date_string) (JS) . Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds. In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.

3. If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.

4.  If the date string is valid the API returns a JSON object with the following structure:

```json
{
  "unix": <date.getTime()>,      // 1479663089000
  "utc" : <date.toUTCString()>   // "Sun, 20 Nov 2016 17:31:29 GMT"
}
```

5.  If the date string is invalid the API returns a JSON object with the following the structure:

```json
{
  "unix": null,
  "utc": "Invalid Date"
}
```

### Example usage:

Request:
```http
https://peavey-timestamp-ms.glitch.me/API/timestamp/2015-12-15
```
Response:
```json
{
  "unix": 1450137600,
  "natural": "December 15, 2015"
}
```

### Project Links
[Github Repo](https://github.com/lukepeavey/timestamp-microservice)

[Glitch Project](https://glitch.com/edit/#!/peavey-timestamp-ms)

[Live demo](https://peavey-timestamp-ms.glitch.me)
