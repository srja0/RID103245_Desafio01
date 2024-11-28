const scriptURL = 'https://script.google.com/macros/s/AKfycbyzudRT2vsFUJdbM0lSmL755QiyTmkQBobJRzEWJMfc_58z8GAL7OkNSij9urWRU1Je/exec';

document.getElementById('emailForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita o recarregamento da página
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      alert('Dados enviados com sucesso!');
      document.getElementById('emailForm').reset(); // Limpa o formulário
    } else {
      alert('Erro ao enviar os dados.');
    }
  } catch (err) {
    console.error('Erro:', err);
    alert('Houve um problema na conexão.');
  }
});
