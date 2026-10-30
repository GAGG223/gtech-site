# Gtech Soluções

Site institucional da **Gtech Soluções**: criação de sites, criação de banners e assistência técnica de notebooks e PCs.

**Acesse o site:** https://gagg223.github.io/gtech-site/

## O que o site tem

- Página única, moderna e responsiva (celular, tablet e computador)
- Seções: início, serviços, diferenciais, como funciona e contato
- Formulário de contato que envia a mensagem pronta para o WhatsApp
- Botão flutuante de WhatsApp
- Visual com as cores da logo (azul, roxo, magenta e laranja)

## Serviços

| Serviço | Descrição |
| --- | --- |
| Criação de sites | Sites modernos, rápidos e responsivos |
| Assistência técnica | Manutenção de notebooks e PCs |
| Criação de banners | Artes para redes sociais, lojas e campanhas |

## Estrutura do projeto

```
.
├── index.html   # estrutura e conteúdo da página
├── styles.css   # estilos e layout responsivo
├── script.js    # menu mobile, animações e formulário
├── logo.png     # logo da empresa (fundo transparente)
└── README.md
```

Não há dependências nem etapa de build: é HTML, CSS e JavaScript puros.

## Como alterar

- **Número do WhatsApp:** em `script.js`, na constante `WHATSAPP_NUMBER` (formato `55` + DDD + número). Os links `https://wa.me/...` no `index.html` também usam o número e precisam ser atualizados juntos.
- **E-mail e endereço:** na seção de contato do `index.html`.
- **Cores:** nas variáveis no início do `styles.css` (bloco `:root`).
- **Logo:** substitua o `logo.png`, mantendo o mesmo nome.

## Rodar no computador

Abra o `index.html` direto no navegador, ou, para simular um servidor:

```
python -m http.server 5500
```

Depois acesse http://localhost:5500.

## Publicação

O site é publicado pelo **GitHub Pages**, a partir da branch `main`. Cada `push` na `main` atualiza o site em cerca de um minuto.

## Contato

- WhatsApp: (11) 97676-4333
- E-mail: gtechsolucoesg@gmail.com
- Macedo, Guarulhos - SP, 07197-140
