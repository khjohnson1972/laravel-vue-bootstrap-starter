![CI](https://github.com/khjohnson1972/laravel-vue-bootstrap-starter/workflows/CI/badge.svg)

## Laravel 8, Vue.js 2, Bootstrap 4, MySQL 8 Starter

This is a starter template setup for those looking to get started on a new project. To use this template click, "Use this template" near the top of this page.

## Features

* Laravel Auth
* EsLint
* Vue-test-utils and Jest
* Vue and Vuelidate
* Sample Vue `<contact></contact>` Component with Tests and Code Coverage
* Laravel-mix for webpack of assets
* Phpcs and PSR2 Standard
* Phpunit with Code Coverage
* Git hook for pre-commit
* Github Actions for Testing Code on Push to Master Branch and Pull-Requests

## Installation

* git clone the repository
* `composer install -o`
* `npm install` in development or `npm ci` in production
* `npm run dev`
* setup your .env file with database credentials
* `php artisan key:generate`
* `php artisan migrate`
* `php artisan db:seed`
* `php artisan serve` (visit the app at http://127.0.0.1:8000)

## Setup

* Update `![CI](https://github.com/khjohnson1972/laravel-vue-bootstrap-starter/workflows/CI/badge.svg)` at top of README to reflect your local repository for the CI status badge.
* `npm install` for development or `npm ci` for production.
* `composer update` or `composer install -o` for development. `composer install -o --no-dev` for production.

## Commands

### PHP/Composer Scripts
* `composer cs` (php code sniffer using PSR2)
* `composer cs-fix` (php code beautifier using PSR2)
* `composer test` (to run the PhpUnit tests)
* `composer lint` (run php linter on all php files)
* `composer clear-all` (clear caches for config, cache, route and views)
* `composer deploy` (composer install, Laravel artisan migrate and Laravel cache config, routes and views)

### NPM
* `npm run dev` (Laravel mix to build assets)
* `npm run watch` (Laravel mix to watch build assets. Use `npm run watch-poll` instead.)
* `npm run watch-poll` (Laravel mix to watch-poll build assets)
* `npm run production` (Laravel to run production build)
* `npm run test:unit` (Run the unit tests and view the coverage in ./build/jest/coverage/)
* `npm run test:unit-update-snapshots` (Run the unit tests and update the snapshots)
* `npm run test:ci` (Run the unit tests in continuous integration mode)
* `npm run test:unit-watch` (Run the unit tests and watch for changes)

#### Run a single jest test
* `npx cross-env NODE_ENV=test vue-cli-service test:unit --verbose=true resources/js/main/components/Form/Contact.unit.js`

### Github Hook

There is a pre-commit hook in ./.github/hooks/. This is moved to the ./git/hooks/ directory when `composer install` or `composer dump-autoload` is run.

### TESTING

* `composer test` to run the PhpUnit tests. Code coverage is output to build/coverage.
* `npm run test:unit` to run the Vue\Jest tests. Code coverage is output to build/jest/coverage.

