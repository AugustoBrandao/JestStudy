const { myRemove, myFizzBuzz, encode, decode, techList} = require('./script');

describe('Exercício 01', () => {

    it('Verificar se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

describe('Exercício 02', () => {
    it('Verificar se o retorno é igual à fizzbuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    })

    it('Verificar se o retorno é igual à fizz', () => {
        expect(myFizzBuzz(3)).toBe('fizz');
    })

    it('Verificar se o retorno é igual à buzz', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    })

    it('Verificar se o retorno é igual à 4', () => {
        expect(myFizzBuzz(4)).toBe(4);
    });

    it('Verificar se o retorno é igual à false', () => {
        expect(myFizzBuzz('4')).toBeFalsy();
    });
})

describe('Exercício 03', () => {
    it('Verificar se se encode e decode são funções', () => {
        //Para verificar se uma variável é uma função no Jest, você pode usar o método toBeInstanceOf(). 
        //Esse método verifica se um objeto é uma instância de uma determinada classe ou função construtora.
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    });

    it('A função encode e decode funcionam corretamente', () => {
        expect(encode('aeiou')).toEqual('12345');
        expect(decode('12345')).toEqual('aeiou')
    })

    it('Teste se as demais letras/números não são convertidos para cada caso', () => {
        expect(encode('aeiouz')).toEqual('12345z');
        expect(decode('12345z')).toEqual('aeiouz');
    })

    it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () =>{
        const wordEncode = 'aeiou';
        const stringDecode = '12345';
        expect(encode(wordEncode).length).toEqual(wordEncode.length);
        expect(encode(stringDecode).length).toEqual(stringDecode.length);
    })
})

describe('Exercício 04', () => {
    it('Testa se a função techList é definida', () => {
      expect(techList).toBeDefined();
    });
    it('Testa se techList é uma função', () => {
      expect(typeof techList).toBe('function');
    });
    it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
      expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
        {
          tech: 'CSS',
          name: 'Lucas'
        },
        {
          tech: 'HTML',
          name: 'Lucas'
        },
        {
          tech: 'JavaScript',
          name: 'Lucas'
        },
        {
          tech: 'Jest',
          name: 'Lucas'
        },
        {
          tech: 'React',
          name: 'Lucas'
        }
      ]);
    });
    it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
      expect(techList([], 'Lucas')).toBe('Vazio!');
    });
  });
  