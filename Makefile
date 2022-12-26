install:
		npm ci

publish:
		npm publish --dry-run

gendiff:
		node bin/gendiff.js

lint:
		npx eslint

test:
		npx -n --experimental-vm-modules jest

test-coverage:
		npm test -- --coverage --coverageProvider=v8
