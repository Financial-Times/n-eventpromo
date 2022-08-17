# n-eventpromo

Eventpromo is used to promote content from [live.ft.com](http://live.ft.com).

This module is used by [n-magnet](https://github.com/Financial-Times/n-magnet).

## Installation

This module is compatible with Node 12+ and is distributed on npm.

```bash
npm install --save @financial-times/n-eventpromo @financial-times/x-engine
```

This module also requires [`x-engine`][engine] as a peer dependency. The Engine module is used to inject your chosen
runtime into the component. Please read the `x-engine` documentation first if you are consuming `x-` components for the
first time in your application.

[engine]: https://github.com/Financial-Times/x-dash/tree/main/packages/x-engine

## Eventpromo

### Usage

With react

```jsx
import React from 'react';
import { Eventpromo } from '@financial-times/x-eventpromo';

// A == B == C
const a = Eventpromo(props);
const b = <Eventpromo {...props} />;
const c = React.createElement(Eventpromo, props);
```
All `x-` components are designed to be compatible with a variety of runtimes, not just React. 
Check out the [`x-engine`][engine] documentation for a list of recommended libraries and frameworks.

[jsx-wtf]: https://jasonformat.com/wtf-is-jsx/

### Properties

**If not marked optional, fields require non-empty values.**

Property             | Type         | Default   | Notes
---------------------|--------------|-----------|--------------------------------
`dates`              | String       |           | Free text, can be either a specific date or a date range
`id`                 | String       |           | Eventpromo id, 32 chars
`imageUrl`           | String       |           | An image url, will be processed via origami image service
`link`               | String       |           | Eventpromo url, should include segmentId
`location`           | String       |           | No set format: "London", "New York", "ExCeL London", etc
`strapline`          | String       |           |
`title`              | String       |           |
`brand`              | String       | `ft-live` | One of `ft-live`, `ft-forums`, `ft-bdp:workshop`, `ft-bdp:diploma` or `ft-bdp:masterclass`
`ctaText`            | String       | various   | Allows changing of the ctaText where desired

## Development

```sh
git clone git@github.com:Financial-Times/n-eventpromo.git
cd n-eventpromo
npm install
npm run build-project
```

### Linking to an application

This package does not have a demonstration application, so to test we can link to [`n-magnet` repostiory](https://github.com/Financial-Times/n-magnet) which consumes this.

Complete the installation for `n-magnet` locally then link `n-eventpromo` by running:

```sh
cd ../n-magnet
npm link ../n-eventpromo
npm run build-dev && npm run demo
```

When making changes after first linking `n-eventpromo` run:

```sh
# in ./n-eventpromo
npm run build-project
# in ./n-magnet
npm run build-dev && npm run demo
```
