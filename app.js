window.onload = function () {
    const alturaInput = document.querySelector('#alturaInput');
    const pesoInput = document.querySelector('#pesoInput');
    const calcularButton = document.querySelector('#calcularButton');
    const result = document.querySelector('#resul')
    const resultOutput = document.querySelector('#resultOutput');
    const resultCondition = document.querySelector('#condition');

    calcularButton.addEventListener('click', function () {
        const alturaCalcu = Number(alturaInput.value);
        const pesoCalcu = Number(pesoInput.value);

        const resulImc = pesoCalcu / (alturaCalcu ** 2);
        resultOutput.value = resulImc.toFixed(2);

        if (resulImc < 18.5) {
            condition = 'Abaixo do peso'
        } else if (resulImc >= 18.5 && resulImc < 24.9) {
            condition = 'Peso normal'
        } else if (resulImc > 24.9 && resulImc < 29.9) {
            condition = 'Excesso de peso'
        } else if (resulImc > 29.9 && resulImc < 34.9) {
            condition = 'Obesidade classe I'
        } else if (resulImc > 34.9 && resulImc < 39.9) {
            condition = 'Obesidade classe II'
        } else if (resulImc > 39.9) {
            condition = 'Obesidade classe III'
        }

        resultCondition.innerText = condition;

        if (resulImc) {
            result.removeAttribute('hidden');
        } else {
            result.setAttribute('hidden', true);
        }
    });
};
