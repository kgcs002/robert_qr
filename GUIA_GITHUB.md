# 🚀 Guia Completo: Como subir o projeto para o GitHub

## 📋 Pré-requisitos
- Conta no GitHub (crie em [github.com](https://github.com))
- Git instalado no seu computador
- Terminal/PowerShell aberto na pasta do projeto

## 🔧 Passo a Passo

### 1. **Inicializar o repositório Git**
```bash
# Na pasta do projeto (C:\Users\flish\Downloads\teste\roberto)
git init
```

### 2. **Adicionar todos os arquivos**
```bash
git add .
```

### 3. **Fazer o primeiro commit**
```bash
git commit -m "Initial commit: QR Code Generator para Cardápio"
```

### 4. **Criar repositório no GitHub**
1. Acesse [github.com](https://github.com)
2. Clique em "New repository" (botão verde)
3. Nome: `qr-code-cardapio`
4. Descrição: `Gerador de QR Code para cardápios digitais`
5. Deixe como **Público**
6. **NÃO** marque "Add a README file"
7. Clique em "Create repository"

### 5. **Conectar ao GitHub**
```bash
# Substitua SEU_USUARIO pelo seu nome de usuário do GitHub
git remote add origin https://github.com/SEU_USUARIO/qr-code-cardapio.git
git branch -M main
git push -u origin main
```

## 🌐 Deploy Online (Opcional)

### **Opção 1: Vercel (Mais fácil)**
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign up" e conecte com GitHub
3. Clique em "New Project"
4. Selecione o repositório `qr-code-cardapio`
5. Clique em "Deploy"
6. Pronto! Sua aplicação estará online

### **Opção 2: Netlify**
1. Acesse [netlify.com](https://netlify.com)
2. Clique em "Sign up" e conecte com GitHub
3. Clique em "New site from Git"
4. Selecione o repositório
5. Build command: `npm run build`
6. Publish directory: `build`
7. Clique em "Deploy site"

## 🔄 Comandos para futuras atualizações

```bash
# Adicionar mudanças
git add .

# Fazer commit
git commit -m "Descrição da mudança"

# Enviar para o GitHub
git push origin main
```

## ❓ Problemas comuns

### **Erro: "remote origin already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/SEU_USUARIO/qr-code-cardapio.git
```

### **Erro: "Authentication failed"**
- Use GitHub CLI: `gh auth login`
- Ou configure token de acesso pessoal

### **Erro: "Repository not found"**
- Verifique se o nome do repositório está correto
- Confirme se o repositório foi criado no GitHub

## ✅ Verificação final

Após seguir todos os passos, você deve ter:
- ✅ Repositório no GitHub com todos os arquivos
- ✅ Aplicação funcionando localmente (`npm start`)
- ✅ (Opcional) Aplicação online no Vercel/Netlify

## 🎯 Próximos passos

1. **Teste a aplicação** localmente
2. **Subir para o GitHub** seguindo os passos acima
3. **Fazer deploy** no Vercel para ter online
4. **Compartilhar** o link com clientes/amigos

---

**💡 Dica:** Se tiver dúvidas, me chame que te ajudo com qualquer erro!
