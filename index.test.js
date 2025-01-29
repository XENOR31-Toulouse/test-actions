// ecrire un test qui fonctionne et un test qui echoue pour la function sum grace a jest mock

const sum = require('./index');




test('adds 1 + 2 to equal 3', () => {
    expect((1 + 2)).toBe(3); // Ce test doit réussir
});

// test('adds 1 + 2 to equal 4', () => {
//     expect((1 + 2)).toBe(4); // Ce test doit échouer
// });

//test the sum function

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3); // Ce test doit réussir
});

// test('adds 1 + 2 to equal 4', () => {
//     expect(sum(1, 2)).toBe(4); // Ce test doit échouer
// });
