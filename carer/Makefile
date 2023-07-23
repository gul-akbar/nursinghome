.PHONY: clean
clean: ## Clean the local filesystem for all the automated items
	rm -fr node_modules
	rm -fr build/
	git clean -fX || true

.PHONY: install
install: ## Install all the dependencies we need
	npm install

.PHONY: serve
serve: ## Serve the application and the mock API
	npm start

.PHONY: build
build: ## Build the application
	npm run build --prod

.PHONY: test
test: ## Test the application
	npm run test

.PHONY: deploy
deploy: ## upload the website to hosting
	cd deploy && ./upload.sh #
