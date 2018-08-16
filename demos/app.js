'use strict';

const {Eventpromo} = require('@financial-times/x-eventpromo');
const {Teaser} = require('@financial-times/x-teaser');

const express = require('@financial-times/n-internal-tool');
const fixtures = require('./conceptFixtures.json');
const eventFixture = require('./fixtures.json');
const template = require('./src/template.js');

const chalk = require('chalk');
const errorHighlight = chalk.bold.red;
const highlight = chalk.bold.green;

const app = module.exports = express({
	name: 'public',
	systemCode: 'n-eventpromo',
	withFlags: false,
	withHandlebars: true,
	withNavigation: false,
	withAnonMiddleware: false,
	hasHeadCss: false,
	viewsDirectory: '/demos/src',
	partialsDirectory: process.cwd(),
	directory: process.cwd(),
	demo: true,
	s3o: false
});

app.use('/assets', express.static('dist'));
app.use('/dist', express.static('dist'));
app.use('/demos', express.static('demos/src'));

app.get('/test', (req, res) => {
	const properties = {
		title: 'express test rendering'
	};
	res.send(Eventpromo(properties));
});
app.get('/teaser', (req, res) => {
	const properties = {
		title: 'express test rendering'
	};
	res.send(Teaser(properties));
});
app.get('/', (req, res) => {
	res.send(template({
		title: 'Test App',
		fixtures: JSON.stringify(fixtures)
	}));
});
//Mock api request
app.post('/eventpromo/api/', (req, res) => {
	res.send(eventFixture);
});

app.post('/eventpromo/api/get-one', (req, res) => {
	res.send(eventFixture);
});

function runPa11yTests () {
	const spawn = require('child_process').spawn;
	const pa11y = spawn('pa11y-ci');

	pa11y.stdout.on('data', (data) => {
		console.log(highlight(`${data}`)); //eslint-disable-line
	});

	pa11y.stderr.on('data', (error) => {
		console.log(errorHighlight(`${error}`)); //eslint-disable-line
	});

	pa11y.on('close', (code) => {
		process.exit(code);
	});
}

const listen = app.listen(5005);

if (process.env.PA11Y === 'true') {
	listen.then(runPa11yTests);
}
