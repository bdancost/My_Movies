# 🎥 Lista de Filmes com OMDB API

Bem-vindo ao projeto **Lista de Filmes**, uma aplicação que permite buscar informações sobre filmes usando a API do OMDB, adicionar filmes favoritos a uma lista e armazenar essas informações localmente usando o `localStorage` do navegador.

## 🛠️ Ferramentas e Tecnologias Utilizadas

- **HTML5**: Estrutura do layout da aplicação.
- **CSS3**: Estilização e design responsivo.
- **JavaScript (ES6+)**: Lógica da aplicação.
- **OMDB API**: Fonte de dados dos filmes.
- **Notie.js**: Biblioteca para exibição de notificações.

## 🚀 Funcionalidades

- **Busca de Filmes**:
  - Insira o nome do filme e, opcionalmente, o ano para obter informações detalhadas.
- **Modal com Detalhes**:
  - Exibição de um modal com as informações completas do filme, como título, ano, gênero, atores, e mais.
- **Adicionar e Remover Filmes da Lista**:
  - Salve seus filmes favoritos na lista e remova quando desejar.
- **Armazenamento Local**:
  - Use o `localStorage` para manter sua lista de filmes mesmo após fechar o navegador.

## 📦 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/bdancost/My_Movies.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd lista-de-filmes
   ```
3. Abra o arquivo `index.html` no navegador para usar a aplicação.

## 🔧 Estrutura do Projeto

```
📂 lista-de-filmes
├── 📁 css
│   └── styles.css
├── 📁 js
│   └── script.js
├── 📄 index.html
└── 📄 README.md
```

## 🌐 API Utilizada

A aplicação utiliza a [OMDB API](http://www.omdbapi.com/) para buscar informações sobre filmes. Para usar a aplicação, você precisa de uma chave de API.

### Como Obter uma Chave de API

1. Acesse o site [OMDB API](http://www.omdbapi.com/apikey.aspx).
2. Cadastre-se para obter uma chave de API gratuita ou paga.
3. Substitua `YOUR_API_KEY` no código pela sua chave de API.

```javascript
const API_KEY = "YOUR_API_KEY";
```

## 📖 Como Usar

1. **Buscar Filme**:

   - Digite o nome do filme e clique em "Buscar".
   - Adicione o ano opcionalmente para refinar sua busca.

2. **Adicionar Filme à Lista**:

   - Clique no botão "Adicionar à Lista" para salvar um filme como favorito.

3. **Visualizar Informações Detalhadas**:

   - Clique no botão "Detalhes" para abrir um modal com informações completas do filme.

4. **Remover Filme da Lista**:
   - Clique no botão "Remover" ao lado do filme na lista para excluí-lo.

## 💡 Recursos Futuramente Implementados

- **Sistema de Login** para salvar listas personalizadas na nuvem.
- **Busca Avançada** com mais filtros, como classificação por gênero ou notas.
- **Tema Escuro** para melhorar a experiência do usuário.

## 🖥️ Pré-visualização

Hospede a aplicação localmente ou use um serviço como [GitHub Pages](https://pages.github.com/) para disponibilizar a aplicação na web.

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça o commit das mudanças:
   ```bash
   git commit -m 'Adiciona minha feature'
   ```
4. Faça um push para a branch:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.
