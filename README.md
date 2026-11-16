# OpporTime

## 🇧🇷 Português (PT-BR)

**Sua agenda de oportunidades.**

O OpporTime é uma aplicação web desenvolvida com o objetivo de facilitar o cadastro, a organização e o gerenciamento de oportunidades, como cursos, eventos, estágios e workshops. A plataforma oferece uma interface intuitiva e dinâmica, permitindo que os usuários adicionem, visualizem e removam oportunidades de maneira simples e eficiente. Cada oportunidade é registrada com título, descrição, categoria e data.

O projeto utiliza recursos do JavaScript para manipulação dinâmica dos elementos da página, além do armazenamento local do navegador para garantir a persistência das informações, mesmo após atualizar ou fechar a página.

### Tecnologias utilizadas

- **HTML5:** Estruturação e organização semântica do conteúdo da aplicação.
- **CSS3:** Estilização, em `STYLES/style.css`, dos elementos criados dinamicamente pelo JavaScript (itens da lista e modal de aviso).
- **Tailwind CSS (v4, via CDN):** Estilização do restante da interface (formulário e estrutura da página) e desenvolvimento de um layout moderno, organizado e responsivo.
- **JavaScript (DOM):** Manipulação dinâmica dos elementos da interface e gerenciamento das interações do usuário.
- **JavaScript (Web Storage):** Armazenamento de informações no navegador com `localStorage` e `sessionStorage`, permitindo a persistência dos dados.
- **JavaScript (Audio):** Efeitos sonoros de interação (hover, clique e nova oportunidade), localizados em `ASSETS/SOUNDS`.
- **Roboto Condensed:** Fonte carregada localmente a partir de `ASSETS/FONTS`.

### Persistência de Dados

- **localStorage ("oportunidade"):** Armazena a lista de oportunidades (título, descrição, categoria e data) em formato JSON de forma persistente (mantida mesmo após fechar o navegador).
- **sessionStorage ("rascunho"):** Salva em tempo real o rascunho digitado no formulário (oportunidade, descrição, categoria e data) enquanto a aba estiver aberta, restaurando os campos caso a página seja atualizada e limpando-o após o envio.
- **Integridade:** O carregamento inicial das oportunidades utiliza `try/catch` e validação de array para prevenir falhas caso haja dados corrompidos.

### Funcionalidades

- Cadastro de novas oportunidades com título, descrição, categoria e data.
- Organização de oportunidades por categoria (Geral, Tecnologia, Negócios e Educação).
- Exibição dinâmica das informações cadastradas, com a data no formato dia/mês/ano.
- Descrição de cada oportunidade expansível e recolhível pelo botão "Descrição".
- Remoção individual de oportunidades.
- Contador de oportunidades cadastradas.
- Modal de aviso, que desaparece sozinho, quando não há oportunidades cadastradas.
- Efeitos sonoros ao passar o mouse, clicar e adicionar uma oportunidade.
- Armazenamento dos dados e do rascunho do formulário no navegador.
- Interface intuitiva e responsiva: a partir de 1024px de largura o conteúdo se limita à largura do título, e em telas menores ocupa toda a largura disponível.

### Objetivo do projeto

O OpporTime foi desenvolvido como projeto acadêmico da disciplina de Desenvolvimento Front-End para Web, com o propósito de aplicar conhecimentos de JavaScript, manipulação do DOM, eventos e armazenamento local, desenvolvendo uma aplicação funcional e de fácil utilização.

---

## 🇺🇸 English (EN-US)

**Your opportunity manager.**

OpporTime is a web application designed to simplify the registration, organization, and management of opportunities such as courses, events, internships, and workshops. The platform provides an intuitive and dynamic interface, allowing users to add, view, and remove opportunities in a simple and efficient way. Each opportunity is registered with a title, description, category, and date.

The project uses JavaScript features to dynamically manipulate page elements, along with local browser storage to ensure data persistence, even after refreshing or closing the page.

### Technologies Used

- **HTML5:** Structuring and semantic organization of the application's content.
- **CSS3:** Styling, in `STYLES/style.css`, of the elements created dynamically by JavaScript (list items and warning modal).
- **Tailwind CSS (v4, via CDN):** Styling of the rest of the interface (form and page structure) and development of a modern, organized, and responsive layout.
- **JavaScript (DOM):** Dynamic manipulation of interface elements and management of user interactions.
- **JavaScript (Web Storage):** Browser-based data storage using `localStorage` and `sessionStorage`, allowing information persistence.
- **JavaScript (Audio):** Interaction sound effects (hover, click, and new opportunity), located in `ASSETS/SOUNDS`.
- **Roboto Condensed:** Font loaded locally from `ASSETS/FONTS`.

### Data Persistence

- **localStorage ("oportunidade"):** Stores the list of opportunities (title, description, category, and date) in JSON format persistently (retained even after closing the browser).
- **sessionStorage ("rascunho"):** Saves in real time the draft entered into the form (opportunity, description, category, and date) while the tab remains open; it restores the fields if the page is refreshed and clears them upon submission.
- **Integrity:** The initial loading of the opportunities employs `try/catch` blocks and array validation to prevent errors in the event of corrupted data.

### Features

- Registration of new opportunities with a title, description, category, and date.
- Organization of opportunities by category (General, Technology, Business, and Education).
- Dynamic display of registered information, with the date shown as day/month/year.
- Each opportunity's description can be expanded and collapsed with the "Description" button.
- Individual removal of opportunities.
- Counter displaying the number of registered opportunities.
- Warning modal, which disappears on its own, when there are no registered opportunities.
- Sound effects on hover, click, and when adding an opportunity.
- Browser-based storage of the data and of the form draft.
- Intuitive and responsive interface: from 1024px wide upwards the content is limited to the width of the title, and on smaller screens it takes up the full available width.

### Project Objective

OpporTime was developed as an academic project for the Web Front-End Development course. Its purpose is to apply knowledge of JavaScript, DOM manipulation, events, and local storage while building a functional and user-friendly web application.
