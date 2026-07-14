(function () {
  const isGastosPage = window.location.pathname.includes('/gastos/');
  const currentPage = isGastosPage ? 'gastos' : 'overview';

  const menuItems = [
    { id: 'overview', label: 'Visão geral', href: isGastosPage ? '../index.html' : './index.html' },
    { id: 'gastos', label: 'Gastos', href: isGastosPage ? './index.html' : './gastos/index.html' },
    { id: 'campaigns', label: 'Campanhas', href: '#' },
    { id: 'leads', label: 'Leads', href: '#' },
    { id: 'revenue', label: 'Receita', href: '#' }
  ];

  const menuMarkup = `
    <div class="navt">Navegação</div>
    <div class="nav">
      ${menuItems.map(item => {
    const isActive = item.id === currentPage ? 'active' : '';
    return `<a class="${isActive}" href="${item.href}">${item.label}</a>`;
  }).join('')}
    </div>
  `;

  document.querySelectorAll('[data-shared-nav]').forEach((container) => {
    container.innerHTML = menuMarkup;
  });
})();
