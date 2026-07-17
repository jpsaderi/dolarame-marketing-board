(function () {
  const pathname = window.location.pathname;
  const isGastosPage = pathname.includes('/gastos/');
  const isAndamentoPage = pathname.includes('/andamento/');
  const currentPage = isGastosPage ? 'gastos' : isAndamentoPage ? 'andamento' : 'overview';

  const menuItems = [
    { id: 'overview', label: 'Visão geral', href: isGastosPage ? '../index.html' : isAndamentoPage ? '../index.html' : './index.html' },
    { id: 'andamento', label: 'Andamento', href: isGastosPage ? '../andamento/index.html' : isAndamentoPage ? './index.html' : './andamento/index.html' },
    { id: 'gastos', label: 'Gastos', href: isGastosPage ? './index.html' : isAndamentoPage ? '../gastos/index.html' : './gastos/index.html' }
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