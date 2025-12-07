# Projeto Hamburgueria

Este projeto é uma aplicação web desenvolvida em React para simular uma hamburgueria, permitindo aos usuários visualizar o cardápio, adicionar itens ao carrinho e outras funcionalidades relacionadas a um e-commerce de alimentos.

## Tecnologias Utilizadas

*   **React**: Biblioteca JavaScript para construção de interfaces de usuário.
*   **Vite**: Ferramenta de build de frontend que oferece uma experiência de desenvolvimento extremamente rápida.
*   **React Icons**: Biblioteca que fornece ícones populares.
*   **ESLint**: Ferramenta para identificar e reportar padrões encontrados em código JavaScript.

## Instalação

Siga os passos abaixo para configurar e rodar o projeto em sua máquina local:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd Hamburgueria
    ```
    *(Nota: Substitua `https://github.com/seu-usuario/seu-repositorio.git` pelo URL correto do seu repositório, se aplicável.)*

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

## Uso

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em `http://localhost:5173` (ou outra porta, se 5173 estiver em uso).

Para construir a aplicação para produção:

```bash
npm run build
# ou
yarn build
```

Os arquivos de build serão gerados na pasta `dist/`.

## Estrutura do Projeto

A estrutura principal do projeto é organizada da seguinte forma:

```
.
├── public/
├── src/
│   ├── assets/
│   │   ├── img/          # Imagens dos produtos e do hero
│   │   └── react.svg
│   ├── components/     # Componentes reutilizáveis (e.g., Cart, Footer, Header, ProductCard, HeroSection)
│   ├── App.css
│   ├── App.jsx         # Componente principal da aplicação
│   ├── index.css
│   └── main.jsx        # Ponto de entrada da aplicação
├── .gitignore
├── eslint.config.js
├── index.html          # Arquivo HTML principal
├── package.json        # Dependências e scripts do projeto
├── README.md           # Este arquivo
└── vite.config.js      # Configuração do Vite
```

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou correções de bugs, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.