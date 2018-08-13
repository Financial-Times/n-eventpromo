node_modules/@financial-times/n-gage/index.mk:
	npm install --no-save --no-package-lock @financial-times/n-gage
	touch $@

-include node_modules/@financial-times/n-gage/index.mk

unit-test:
	#mocha --recursive --reporter spec tests
	jest tests --coverage

test:
	# TODO: don't ignore a11y but don't block releasing it in it's current state
	export IGNORE_A11Y=true; \
	make verify
	make unit-test

test-debug:
	jest tests --coverage --debug

demo-build:
	@rm -rf bower_components/n-eventpromo
	@mkdir bower_components/n-eventpromo
	@cp -r templates/ bower_components/n-eventpromo/templates/
	@node-sass demos/src/demo.scss dist/css/demo.css --include-path bower_components
	@webpack --config demos/webpack.config.js
	@$(DONE)

demo: demo-build
	node demos/app

a11y: demo-build
	@node .pa11yci.js
	@PA11Y=true node demos/app
	@$(DONE)

test: verify unit-test
	make a11y
