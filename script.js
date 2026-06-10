// Manipulador para enviar via Email
document.getElementById('submitEmail')?.addEventListener('click', function () {
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

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, insira um email válido');
    return;
  }

  // Construir o corpo do email
  const emailBody = `Nome: ${name}%0DEmail: ${email}%0DPhone: ${phone || 'Não informado'}%0D%0DMensagem:%0D${message}`;

  // Abrir cliente de email
  window.location.href = `mailto:mateusantunesbelo.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`;
});

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
