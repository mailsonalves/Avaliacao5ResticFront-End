const mobileMenu = document.getElementById('mobile-menu');
const sidebar = document.getElementById('sidebar');

mobileMenu.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    if (peso && altura) {
        const imc = (peso / (altura * altura)).toFixed(2);
        let classificacao = '';

        if (imc < 18.5) {
            classificacao = 'Baixo Peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
            classificacao = 'Peso normal';
        } else if (imc >= 25 && imc <= 29.9) {
            classificacao = 'Sobrepeso';
        } else {
            classificacao = 'Obesidade';
        }

        document.getElementById('resultado-imc').textContent = `Seu IMC é ${imc} (${classificacao})`;
    } else {
        document.getElementById('resultado-imc').textContent = 'Por favor, preencha todos os campos.';
    }
}
