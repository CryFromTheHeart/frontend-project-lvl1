publish:
	npm publish --dry-run
brain-games:
	node bin/brain-games.js

install: install-deps

install-deps:
	npm ci
