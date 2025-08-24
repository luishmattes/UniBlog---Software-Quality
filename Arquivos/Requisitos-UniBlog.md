# 📑 Documento de Requisitos (DR) – UniBlog

## 1. INTRODUÇÃO

### 1.1 Objetivo
Este documento tem como objetivo especificar os requisitos funcionais e não funcionais do UniBlog, um blog universitário digital voltado para a comunidade acadêmica. Ele servirá de base para o desenvolvimento, acompanhamento e validação do sistema, garantindo que o software atenda às necessidades do cliente e dos usuários finais.

### 1.2 Escopo resumido
O UniBlog é uma plataforma digital destinada a estudantes, professores e demais membros da comunidade universitária. Seu objetivo é centralizar informações acadêmicas e extracurriculares em um único ambiente, permitindo a publicação de postagens, eventos, artigos e oportunidades, além de facilitar a interação entre usuários por meio de perfis, comentários e grupos acadêmicos. O sistema será web responsivo, intuitivo e seguro, visando fortalecer a comunicação no ambiente universitário.

---

## 2. DESCRIÇÃO GERAL

### 2.1 Usuários do sistema
- Estudantes universitários (graduação, tecnólogos e pós-graduação).  
- Professores e pesquisadores.  
- Comunidades acadêmicas (grupos de estudo, atléticas, projetos, eventos).  
- Administradores do sistema (para moderação e gerenciamento de conteúdo).  

### 2.2 Funcionalidades gerais
- Cadastro e login de usuários com autenticação segura.  
- Publicação de posts (texto, imagem, vídeo e anexos).  
- Feed em formato de timeline.  
- Sistema de comentários e curtidas.  
- Perfis de usuários personalizados (foto, biografia, histórico).  
- Busca e filtros por palavras-chave, categorias e autores.  
- Gerenciamento de eventos e comunidades acadêmicas.  
- Painel administrativo para controle de usuários e postagens.  
- Notificações internas de interações e novos conteúdos.  

### 2.3 Restrições e premissas
- O sistema deve rodar em navegadores modernos (Chrome, Firefox, Edge, Safari).  
- O sistema deve ser responsivo (desktop, tablet e mobile).  
- O sistema deve estar em conformidade com a **LGPD** (Lei Geral de Proteção de Dados).  
- O sistema deve utilizar infraestrutura em nuvem para hospedagem.  
- Escopo inicial limitado às funcionalidades essenciais (cadastro/login, feed, perfis e interações).  
- Equipe reduzida de até **4 colaboradores**.  
- Prazo de entrega: **MVP em 90 dias**; versão final (v1.0) em até **150 dias**.  

---

## 3. REQUISITOS ESPECÍFICOS

### 3.1 Requisitos Funcionais (RF)
- **RF01** – O sistema deve permitir o cadastro e login de usuários com autenticação segura.  
- **RF02** – O sistema deve permitir a publicação de posts com título, conteúdo, imagens e anexos.  
- **RF03** – O sistema deve permitir adicionar comentários em cada postagem.  
- **RF04** – O sistema deve permitir que usuários curtam e compartilhem publicações.  
- **RF05** – O sistema deve disponibilizar perfis personalizados com foto, descrição e histórico de postagens.  
- **RF06** – O sistema deve disponibilizar um painel administrativo para gerenciamento de usuários e conteúdos.  
- **RF07** – O sistema deve permitir busca e filtragem de publicações por palavras-chave, categorias e autores.  
- **RF08** – O sistema deve enviar notificações internas sobre novos posts e interações.  
- **RF09** – O sistema deve permitir o gerenciamento de eventos e grupos acadêmicos.  

### 3.2 Requisitos Não Funcionais (RNF)
- **RNF01** – O sistema deve ter interface responsiva, adaptável a desktop, tablet e mobile.  
- **RNF02** – O tempo de resposta para carregamento de páginas deve ser inferior a 2 segundos.  
- **RNF03** – O sistema deve ser compatível com múltiplos navegadores (Chrome, Firefox, Edge, Safari).  
- **RNF04** – O sistema deve ser compatível com múltiplas plataformas (Windows, Linux, macOS).  
- **RNF05** – O sistema deve criptografar dados sensíveis (senhas e informações pessoais).  

---

 ## 4. CASOS DE USO

### UC01 – Cadastro/Login de Usuário
- **Ator**: Usuário  
- **Fluxo principal**:  
  1. O usuário acessa a página de login.  
  2. Informa e-mail e senha.  
  3. O sistema autentica e redireciona para o feed.  

---

### UC02 – Publicação de Postagem
- **Ator**: Usuário  
- **Fluxo principal**:  
  1. O usuário acessa a área de publicação.  
  2. Insere título, conteúdo, anexos e/ou imagens.  
  3. O sistema salva e exibe a postagem no feed.  
- **Fluxo alternativo**:  
  - O usuário pode marcar outros perfis na postagem ou associá-la a uma categoria (ex.: eventos, estudos, oportunidades).  

---

### UC03 – Interação com Postagem
- **Ator**: Usuário  
- **Fluxo principal**:  
  1. O usuário acessa uma postagem no feed.  
  2. Pode curtir, comentar ou compartilhar.  
  3. O sistema registra a interação e atualiza em tempo real.  
- **Fluxo alternativo**:  
  - O usuário pode mencionar outro perfil nos comentários.  
  - O autor da postagem recebe uma notificação da interação.  

---

### UC04 – Conexão entre Perfis
- **Ator**: Usuário  
- **Fluxo principal**:  
  1. O usuário acessa o perfil de outro usuário.  
  2. Pode seguir o perfil ou enviar solicitação de conexão.  
  3. O sistema atualiza a lista de conexões e sugere interações futuras.  
- **Fluxo alternativo**:  
  - O usuário pode enviar mensagens privadas após a conexão ser aceita.  

---

### UC05 – Gerenciamento Administrativo
- **Ator**: Administrador  
- **Fluxo principal**:  
  1. O administrador acessa o painel de administração.  
  2. Consulta lista de usuários e postagens.  
  3. Pode editar, aprovar ou excluir conteúdos.  
  4. Pode suspender perfis em caso de violação das regras.  

---
**Inserir diagrama**

---


## 5. RASTREABILIDADE

| ID Requisito | Caso de Uso                        |
|--------------|------------------------------------|
| RF01         | UC01 – Cadastro/Login de Usuário   |
| RF02         | UC02 – Publicação de Postagem      |
| RF03         | UC03 – Interação com Postagem      |
| RF04         | UC03 – Interação com Postagem      |
| RF05         | UC01 – Cadastro/Login de Usuário   |
| RF06         | UC04 – Gerenciamento Administrativo|
| RF07         | UC02 – Publicação de Postagem      |
| RF08         | UC03 – Interação com Postagem      |
| RF09         | UC02 – Publicação de Postagem      |
