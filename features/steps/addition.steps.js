const { Given, When, Then } = require('@cucumber/cucumber');
const sum = require('../../index').default;
const assert = require('assert'); // Utilisation de l'assertion de Node.js

Given('I have two numbers {int} and {int}', function (a, b) {
    this.a = a;
    this.b = b;
});

When('I add the two numbers', function () {
    this.result = sum(this.a, this.b);
});

Then('the result should be {int}', function (expectedResult) {
    assert.strictEqual(this.result, expectedResult); // Assertion correcte en Node.js
});
