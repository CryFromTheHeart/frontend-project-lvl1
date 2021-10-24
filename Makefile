brain-even: 
	node bin/brain-even.js
lint:
	npx eslint .

publish:
	npm publish --dry-run
brain-games:
	node bin/brain-games.js

install: install-deps

install-deps:
	npm ci
