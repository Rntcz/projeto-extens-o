function corrigir(formId) {
  const respostasCorretas = {
    simulado1: {
    q1: 'c',  // Chrome
    q2: 'd',   // Um atalho que leva a outra página ou parte de uma página na internet
    q3: 'c', // Manter o navegador e o antivírus atualizados
    q4: 'a', // Uniform Resource Locator
    q5: 'c', // Você será redirecionado para o site de buscas do Google
    q6: 'd', // Ajudar o usuári a encontrar informações na internet
    q7: 'b', // Um recruso que armazena as páginas vistadas pelo usuário
    q8: 'a', // Que o site é criptografado e mais seguro
    q9: 'c', // Utilizar uma VPN para proteção adicional
    q10: 'b', // Se possui certificados de segurança e URL confiável
    },
    simulado2: {
      q1: 'c', // mouse
      q2: 'a', // O programa que faz o computador funcionar  
      q3: 'b', // Smartphones são portáteis e com tela sensível ao toque 
      q4: 'd', // Antivírus 
      q5: 'c', // Fazer uma cópia de segurança dos dados 
      q6: 'b', // Para acessar sites e fazer pesquisas 
      q7: 'a', // Assistir vídeos, enviar mensagens e usar redes sociais 
      q8: 'c', // Um sistema operacional de celulares 
      q9: 'c', // Estar conectado ao Wi-Fi ou dados móveis 
      q10: 'd', // Manter o antivírus ativo e fazer backups 
    },
    simulado3: {
      q1: 'c', 
      q2: 'c',  
      q3: 'b',  
      q4: 'c',  
      q5: 'b',  
      q6: 'b',  
      q7: 'c', 
      q8: 'c',  
      q9: 'b', 
      q10: 'a', 
    },
    simulado4: {
    q1: 'b',
    q2: 'c',
    q3: 'c',
    q4: 'c',
    q5: 'b',
    q6: 'b',
    q7: 'a',
    q8: 'c',
    q9: 'b',
    q10: 'b',
    }
  };

    let acertos = 0;
    let total = Object.keys(respostasCorretas[formId]).length;
    for (let pergunta in respostasCorretas[formId]) {
      let selecionada = document.querySelector(`input[name="${pergunta}"]:checked`);
      if (selecionada && selecionada.value === respostasCorretas[formId][pergunta]) {
        acertos++;
      }
    }
    document.querySelector(".result").style.display = "block";
    document.querySelector(`#${formId}`).style.display = "none";
    document.getElementById('resultado').textContent =
      `Você acertou ${acertos} de ${total} questões.`;
}
function voltar() {
  window.location.href = "index.html";
}

function ajustarTextoResponsivo() {
  const titulo = document.getElementById('titulo');
  const textoOriginal = titulo.getAttribute('data-original-text') || titulo.textContent;
  const textoMobile = titulo.getAttribute('data-mobile-text');

  // Salva o texto original na primeira vez
  if (!titulo.getAttribute('data-original-text')) {
    titulo.setAttribute('data-original-text', textoOriginal);
  }

  if (window.innerWidth <= 768) {
    if (textoMobile) {
      titulo.textContent = textoMobile;
    }
  } else {
    titulo.textContent = textoOriginal;
  }
}

window.addEventListener('resize', ajustarTextoResponsivo);
window.addEventListener('load', ajustarTextoResponsivo);
