# CrudApp - Gerenciamento de pessoas

## Descrição do Projeto

Trata-se de um aplicativo mobile para o gerenciamento e cadastro de pessoas desenvolvido em **React Native** com **Expo**, consumindo uma **API REST fake** criada com o **Json-Server**. O projeto implementa as operações **CRUD** (Create, Read, Update e Delete) e faz parte da disciplina de **PAM** (Programação de Aplicativos Mobile).

---

## Tecnologias utilizadas:
## [![My Skills](https://skillicons.dev/icons?i=react)](https://skillicons.dev) 

- React Native - Framework mobile
- Expo - Ambiente de desenvolvimento
- React Navigation - Navegação entre telas 
- Json-Server - API REST simulada 
- Cloudflared - Túnel para expor a API localmente 

---

## ⚙️ Instalação

### Passos

**1. Clone o repositório:**

```bash
git clone https://github.com/luanagreys7/API-REST-PAM.git
cd CrudApp
```

**2. Instale as dependências do app:**

```bash
npm install
```

**3. Instale o Json-Server:**

```bash
npm install -g json-server
```

**4. Instale o Cloudflared:**

```bash
npm install cloudflared
```

---

## 🛠️ Execução 

É necessário, simultaneamente, rodar o servidor fake (backend) e o aplicativo (frontend).

**1. Iniciar o servidor Json-Server**

Na raiz do projeto, acesse a pasta `backend`, dentro de `src`, e execute:

```bash
cd src
cd backend
npx json-server --watch database.json --port 3000
```

A API ficará disponível em: `http://localhost:3000/people`

**2. Criar o túnel com CloudFlared**

Em um **novo terminal**, execute:

```bash
npx cloudflared tunnel --url http://localhost:3000
```

A API ganhará uma nova porta segura.

**3. Iniciar o aplicativo**

Em um **novo terminal**, na raiz do projeto:

```bash
npx expo start
```

Aperte a tecla 'w' para utilizar a versão web do aplicativo ou copie o link web e utilize a extensão MobileView.

---

## 📁 Funcionamento do projeto

### Arquitetura

```
CrudApp/
├── assets/                        # Imagens e recursos estáticos
├── src/
│   ├── Backend/
│   │   ├──database.json           # Banco de dados do Json-Server
│   │   └──servers/                
│   │       ├──configApi.js        # URL da API
│   │       └──peopleCrud.js       # Funções CRUD
│   ├── Frontend/
│   │   ├──Screens/
│   │   │   ├── HomeScreen.js      # Tela principal com a lista
│   │   │   └── AddEditScreen.js   # Tela de cadastro e edição
│   │   └──Styles
│   │        └── styles.js         # Estilos centralizados
│   └── components/
│       └── CardPersonal.js        # Componente de card para exibir pessoa
└── App.js                         # Configuração de navegação
```

### Navegação

A navegação entre telas é gerenciada pelo **React Navigation** (`native-stack`), configurado no `App.js`, com as rotas `Home` e `AddEdit`.

---

## 🎥 Vídeo Demonstrativo

[![Assista ao vídeo](https://img.shields.io/badge/YouTube-Vídeo%20Demonstrativo-red?style=for-the-badge&logo=youtube)](SEU_LINK_DO_VIDEO_AQUI)
