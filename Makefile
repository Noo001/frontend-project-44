install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-runnpm link
lint:
	npx eslint
.PHONY: test
