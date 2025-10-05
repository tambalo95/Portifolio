/* ===================== MENU MOBILE ===================== */
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        navToggle.classList.toggle('active'); // animação do botão
    });
}

/* ===================== SCROLL SUAVE ===================== */
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if(targetSection){
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });

            // Fecha menu mobile ao clicar
            if(navMenu.classList.contains('show')){
                navMenu.classList.remove('show');
                navToggle.classList.remove('active');
            }
        }
    });
});

/* ===================== FILTRO PORTFÓLIO/LOJA ===================== */
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        // ativa/desativa botão
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // filtra itens
        portfolioItems.forEach(item => {
            if(filter === 'all' || item.dataset.category === filter){
                item.style.display = 'flex'; // agora usa flex, já que cada item tem mais conteúdo
            } else {
                item.style.display = 'none';
            }
        });
    });
});

/* ===================== PORTFÓLIO LIGHTBOX ===================== */
portfolioItems.forEach(item => {
    const img = item.querySelector('img');
    img.addEventListener('click', () => {
        const src = img.getAttribute('src');
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="close">&times;</span>
                <img src="${src}" alt="Imagem do portfólio">
            </div>
        `;
        document.body.appendChild(lightbox);

        lightbox.querySelector('.close').addEventListener('click', () => lightbox.remove());
        lightbox.addEventListener('click', e => {
            if(e.target === lightbox) lightbox.remove();
        });
    });
});

/* ===================== CARD HOVER ANIMADO ===================== */
const cards = document.querySelectorAll('.portfolio-item, .loja-item');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.transition = 'transform 0.3s';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

/* ===================== ALERTA FORMULÁRIO ===================== */
function enviarMensagem(){
    alert("Mensagem enviada com sucesso!");
}