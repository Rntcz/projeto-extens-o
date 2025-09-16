function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Esconde todos os conteúdos das abas
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove a classe 'active' das abas
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Mostra a aba clicada
    document.getElementById(tabName).style.display = "block";

    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add("active");
    } else {
        // Se chamado por script, ativa o botão correspondente
        const tabButton = document.querySelector(`.tablinks[onclick*="'${tabName}'"]`);
        if (tabButton) {
            tabButton.classList.add("active");
        }
    }
}
window.onload = function () {
  // Detecta se foi um refresh (recarregamento da página)
  const navEntries = performance.getEntriesByType("navigation");
  const isReload = navEntries.length > 0 && navEntries[0].type === "reload";

  if (isReload) {
    // Se for um refresh, ignora o hash e abre aba padrão
    openTab(null, 'Introducao');
    history.replaceState(null, null, ' '); // Limpa o hash da URL
  } else {
    // Se não for refresh (acesso normal ou navegação por botão), respeita o hash
    let hash = window.location.hash;

    if (hash) {
      const aba = hash.replace('#', '');
      openTab(null, aba);
    } else {
      openTab(null, 'Introducao');
    }
  }
};
