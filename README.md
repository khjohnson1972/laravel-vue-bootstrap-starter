## Laravel 7, Vue.js 2, Bootstrap 4, MySQL 8 Starter

This is a starter setup for those looking to get started on a new project.

## Installation

* git clone the repository
* `composer install -o`
* `npm ci`
* setup your .env file with database credentials
* php artisan key:generate
* php artisan migrate
* php artisan db:seed
* php artisan serve

## Features

* Laravel Auth
* EsLint
* Vue-test-utils and Jest
* Vue and Vuelidate
* Sample Vue `<contact></contact>` Component with Tests
* Laravel-mix
* Phpcs and PSR2 Standard
* Phpunit with Code Coverage
* Git hook for pre-commit
* Github Actions for Testing Code on Push to Master Branch and Pull-Requests

## Setup

* `npm install` for development or `npm ci` for production.
* `composer update` or `composer install -o` for development. `composer install -o --no-dev` for production.

## Commands

### PHP
* `composer cs` (php code sniffer using PSR2)
* `composer cs-fix` (php code beautifier using PSR2)
* `phpunit` (to run the unit tests)
* `composer lint` (run php linter on all php files)

### NPM
* `npm run dev` (Laravel mix to build assets)
* `npm run watch` (Laravel mix to watch build assets)
* `npm run production` (Laravel to run production build)
* `npm run test:unit` (Run the unit tests and view the coverage in ./build/jest/coverage/)
* `npm run test:unit-update-snapshots` (Run the unit tests and update the snapshots)
* `npm run test:ci` (Run the unit tests in continuous integration mode)
* `npm run test:unit-watch` (Run the unit tests and watch for changes)

### Github Hook

There is a pre-commit hook in ./.github/hooks/. This is moved to the ./git/hooks/ directory when `composer install` or `composer dump-autoload` is run.
