import getAddressFromCep from './getAddressFromCep.js';

document.querySelector('button').addEventListener('click', handleClick());

export async function handleClick() {
    const cep = document.querySelector('input').value;
    console.log(cep);
    try {
        const addressData = await getAddressFromCep(cep);
        document.querySelector('pre').innerHTML = JSON.stringify(addressData.cep);
        console.log(addressData);
    } catch (error) {
        alert(error.message);
    }
}
