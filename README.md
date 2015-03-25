Asynchronous Visualization
==========================

This repo contains a build chain and the beginning of a browser application. Use it to create a quick visualization of the sample data contained in `public/data.json`.

Developing
----------

Clone this repo, then `npm i`.
After the install completes, running `gulp` will stand up the default development build chain.

All source files for the browser app are contained inside of `src`. except for `./index.js`, which is the entry point to the application. These files are compiled and placed inside `public` and served by a static express server.


Objective
---------

- Build a visualization of the data represented in by `public/data.json`.
- Users should be able to compare when events begin and end relative to each other.
- All timestamps are displayed in ms, by default your visualization should represent 1ms as 1 px
