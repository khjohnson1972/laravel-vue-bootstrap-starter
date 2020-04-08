## Laravel 7, Vue.js 2, Bootstrap 4, MySQL 8 Starter

This is a starter setup for those looking to get started on a new project.

## Features

* EsLint
* Vue-test-utils and Jest
* Vue and Vuelidate
* Laravel-mix
* Phpcs and PSR2 Standard
* Phpunit with Code Coverage
* Git hook for pre-commit
* Github Actions for Testing Code on Push to Master Branch and Pull-Requests

## Commands

### PHP
* composer cs (php code sniffer using PSR2)
* composer cs-fix (php code beautifier using PSR2)
* phpunit (to run the unit tests)
* composer lint (run php linter on all php files)

### NPM
* npm run dev (Laravel mix to build assets)
* npm run watch (Laravel mix to watch build assets)
* npm run production (Laravel to run production build)

### Github Hook

There is a pre-commit hook in ./.github/hooks/. This is moved to the ./git/hooks/ directory when `composer install` or `composer dump-autoload` is run.
