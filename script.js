// Manipulador para enviar via WhatsApp
document.getElementById('submitWhatsApp')?.addEventListener('click', function () {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validar campos obrigatórios
  if (!name || !email || !subject || !message) {
    alert('Por favor, preencha todos os campos obrigatórios (Nome, Email, Assunto e Mensagem)');
    return;
  }

  // Construir a mensagem para WhatsApp
  const whatsappMessage = `Olá! Meu nome é ${name}%0A%0AAssunto: ${subject}%0A%0AMensagem: ${message}%0A%0AMeu email: ${email}${phone ? '%0A%0AMeu telefone: ' + phone : ''}`;
  // Abrir WhatsApp
  window.open(`https://wa.me/5545988379622?text=${whatsappMessage}`, '_blank');
});

// Efeito de hover interativo letra por letra no título do Hero
document.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.hero-left h1');
  if (heroTitle) {
    const words = heroTitle.textContent.trim().split(/\s+/);
    heroTitle.innerHTML = words
      .map(word => {
        const letters = word
          .split('')
          .map(char => `<span class="hover-char">${char}</span>`)
          .join('');
        return `<span class="word">${letters}</span>`;
      })
      .join(' ');
  }
});
