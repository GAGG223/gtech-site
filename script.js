/* =========================================
   Gtech Soluções - Interações
   ========================================= */

(function () {
  "use strict";

  // Número de WhatsApp da Gtech (formato internacional, só dígitos: 55 + DDD + número)
  const WHATSAPP_NUMBER = "5511976764333";

  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");

  // Header muda ao rolar
  const onScroll = () => {
    if (window.scrollY > 20) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Menu mobile
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });

    // Fecha ao clicar em um link
    nav.querySelectorAll(".nav__link").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Ano no rodapé
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // IntersectionObserver para animação de entrada ao rolar
  const revealEls = document.querySelectorAll(
    ".card, .feature, .step, .section__head, .hero__content, .contact__form"
  );
  revealEls.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback sem IntersectionObserver
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  // Envio do formulário via WhatsApp
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const assunto = form.assunto.value;
      const mensagem = form.mensagem.value.trim();
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!nome || !emailOk || !assunto) {
        feedback.textContent = "Preencha nome, um e-mail válido e o serviço desejado.";
        feedback.className = "form__feedback err";
        return;
      }

      // Monta a mensagem que será enviada pelo WhatsApp
      const linhas = [
        "Olá! Vim pelo site da Gtech Soluções.",
        "",
        "*Nome:* " + nome,
        "*E-mail:* " + email,
        "*Serviço desejado:* " + assunto,
      ];
      if (mensagem) {
        linhas.push("*Mensagem:* " + mensagem);
      }

      const texto = encodeURIComponent(linhas.join("\n"));
      const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + texto;

      feedback.textContent = "Abrindo o WhatsApp para você enviar a mensagem...";
      feedback.className = "form__feedback ok";

      // Abre o WhatsApp (app ou web) em uma nova aba
      window.open(url, "_blank", "noopener");

      form.reset();
    });
  }
})();
