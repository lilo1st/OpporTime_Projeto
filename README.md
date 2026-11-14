# OpporTime

## 🇧🇷 Português (PT-BR)

**Sua agenda de oportunidades.**

O OpporTime é uma aplicação web desenvolvida com o objetivo de facilitar o cadastro, a organização e o gerenciamento de oportunidades, como cursos, eventos, estágios e workshops. A plataforma oferece uma interface intuitiva e dinâmica, permitindo que os usuários adicionem, visualizem e removam oportunidades de maneira simples e eficiente.

O projeto utiliza recursos do JavaScript para manipulação dinâmica dos elementos da página, além do armazenamento local do navegador para garantir a persistência das informações, mesmo após atualizar ou fechar a página.

### Tecnologias utilizadas

- **HTML5:** Estruturação e organização semântica do conteúdo da aplicação.
- **JavaScript (DOM):** Manipulação dinâmica dos elementos da interface e gerenciamento das interações do usuário.
- **JavaScript (LocalStorage):** Armazenamento de informações no navegador, permitindo a persistência dos dados.
- **Tailwind CSS:** Estilização da interface e desenvolvimento de um layout moderno, organizado e responsivo.

### Persistência de Dados

- **localStorage ("afazeres"):** Armazena a lista de tarefas em formato JSON de forma persistente (mantida mesmo após fechar o navegador).
- **sessionStorage ("rascunhoTarefa"):** Salva em tempo real o rascunho digitado no input ("#AddText") enquanto a aba estiver aberta, restaurando o texto caso a página seja atualizada e limpando-o após o envio[cite: 1].
- **Integridade:** O carregamento inicial utiliza "try/catch" e validação de array para prevenir falhas caso haja dados corrompidos.

### Funcionalidades

- Cadastro de novas oportunidades.
- Organização de oportunidades por categoria.
- Exibição dinâmica das informações cadastradas.
- Remoção individual de oportunidades.
- Contador de oportunidades cadastradas.
- Armazenamento de dados no navegador.
- Interface intuitiva e responsiva.

### Objetivo do projeto

O OpporTime foi desenvolvido como projeto acadêmico da disciplina de Desenvolvimento Front-End para Web, com o propósito de aplicar conhecimentos de JavaScript, manipulação do DOM, eventos e armazenamento local, desenvolvendo uma aplicação funcional e de fácil utilização.

---

## 🇺🇸 English (EN-US)

**Your opportunity manager.**

OpporTime is a web application designed to simplify the registration, organization, and management of opportunities such as courses, events, internships, and workshops. The platform provides an intuitive and dynamic interface, allowing users to add, view, and remove opportunities in a simple and efficient way.

The project uses JavaScript features to dynamically manipulate page elements, along with local browser storage to ensure data persistence, even after refreshing or closing the page.

### Technologies Used

- **HTML5:** Structuring and semantic organization of the application's content.
- **JavaScript (DOM):** Dynamic manipulation of interface elements and management of user interactions.
- **JavaScript (LocalStorage):** Browser-based data storage, allowing information persistence.
- **Tailwind CSS:** Interface styling and development of a modern, organized, and responsive layout.

### Data Persistence

- **localStorage ("fazeres"):** Stores the task list in JSON format persistently (retained even after closing the browser).
- **sessionStorage ("rascunhoTarefa"):** Saves the draft text entered into the input field ("#AddText") in real time while the tab remains open; it restores the text if the page is refreshed and clears it upon submission[cite: 1].
- **Integrity:** The initial loading process employs "try/catch" blocks and array validation to prevent errors in the event of corrupted data.

### Features

- Registration of new opportunities.
- Organization of opportunities by category.
- Dynamic display of registered information.
- Individual removal of opportunities.
- Counter displaying the number of registered opportunities.
- Browser-based data storage.
- Intuitive and responsive interface.

### Project Objective

OpporTime was developed as an academic project for the Web Front-End Development course. Its purpose is to apply knowledge of JavaScript, DOM manipulation, events, and local storage while building a functional and user-friendly web application.
