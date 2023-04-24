import getAddressFromCep from "./getAddressFromCep"

describe('Quando a requisição é bem sucedida, ela retorna os dados esperados', () => {

    test('deve retornar os dados quando passamos um cep válido!', async () => {
       const address = await getAddressFromCep('06172-280');
       expect(address.cep).toBe(address);
    })
    
    test('deve aceitar ceps com ou sem hífen', async () => {
        const firstAddress = await getAddressFromCep('06172280');
        expect(firstAddress.cep).toBe('06172-280');

        const secondAddress = await getAddressFromCep('06172-280')
        expect(secondAddress.cep).toBe('06172-280');
    })

})

describe('Quando a requisição é rejeitada, ela deve retornar um erro', () => {

    it('deve lançar um erro quando recebe um cep vazio', async () => {
        const expectedError = new Error('Você precisa passar um CEP');
        await expect(getAddressFromCep('')).rejects.toThrow(expectedError);
    });

    it('deve lançar um erro quando passar o cep no formato inválido', async () => {
        const invalidCep = 'XXXXX-XXX';
        const invalidCepLessDigits = '00000-00';
        const invalidCepMoreDigits = '00000-0000';

        await expect(getAddressFromCep(invalidCep)).rejects.toThrow();
        await expect(getAddressFromCep(invalidCepLessDigits)).rejects.toThrow();
        await expect(getAddressFromCep(invalidCepMoreDigits)).rejects.toThrow();
    })
})