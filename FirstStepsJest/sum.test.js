const {sum, numeros} = require('./sum');

// test - recebe três argumentos
// 1- Nome do teste
// 2- Função que será rodado os testes
// 3- timeout - tempo que o Jest deve esperar que o teste execute antes de abortá-lo
test('Verifica se a Soma de 1 e 2 é 3', () => {
    // machers - toBe
    expect(sum(1, 2)).toBe(3);
})

// MATCHERS 
// .toBe() - igualdade estrita - confere o tipo e o valor do resultado retornado
// .toEqual - testar igualdade de objetos e arrays 
// Variáveis do Tipo Primitivo - atribuição por valor
// Objetos - atribuição por referência


// describe - serve para agrupar vários testes
describe('Requisito 1', () => {
    it('A função recebe [1, 2, 3, 4, 5, 6] e retorna true', () => {
        expect(true).toEqual(numeros([1, 2, 3, 4, 5, 6]));
    })

    it('A função recebe [a, b, c, d, e, f] e retorna false', () => {
        expect(false).toEqual(numeros(['a', 'b', 'c', 'd', 'e', 'f']));
    })
})