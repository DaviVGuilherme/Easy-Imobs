
function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}


document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    if(name && dob && email && phone) {
        console.log(`Nome: ${name}, Data de Nascimento: ${dob}, E-mail: ${email}, Telefone: ${phone}`);
        alert('Obrigado por se cadastrar! Seus dados foram enviados com sucesso.');
        closeModal();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
