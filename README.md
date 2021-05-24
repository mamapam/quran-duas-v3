# quran-duas-v3 :pray:

This is version 3 of the [QuranDuas](https://github.com/mamapam/QuranDuas) application remade in Vue.js 3. It is meant to display specific duas from the Quran and provides an option to filter the list.

## Getting Started

Follow the below instructions to get setup locally.

### Prerequisites

- [Node JS](https://nodejs.org/en/) - Version 15 and above is recommended.
- [Redis](https://redis.io/download) - Install the latest stable version.

### Installing

1. Clone the repo locally.
2. In the server directory, create a `.env` file and add the parameters found in the `.env.sample` file.
   - Specify the entire path for the log file
   - If the other values are left blank, it will use default values.
3. In the server directory, run `npm install`.
4. In the client directory, run `npm install`.
5. Ensure the redis server is running.
6. In the server directory, run `npm run dev`.
7. In the client directory, run `npm run serve`.

## Built With

- [Node JS](https://nodejs.org/en/)
- [Vue.js 3](https://v3.vuejs.org/)
