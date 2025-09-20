# QR Code Generator para Cardápio

Uma aplicação React que gera QR codes que direcionam para imagens de cardápio.

## Funcionalidades

- ✅ Geração de QR Code a partir de URL
- ✅ Download do QR Code em formato PNG
- ✅ Interface responsiva e moderna
- ✅ Validação de URL
- ✅ Instruções de uso

## Como usar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar o projeto:**
   ```bash
   npm start
   ```

3. **Usar a aplicação:**
   - Cole a URL da imagem do seu cardápio
   - Clique em "Gerar QR Code"
   - Baixe o QR Code gerado
   - Imprima e coloque nas mesas

## Exemplo de URLs válidas

- `https://exemplo.com/cardapio.jpg`
- `https://meusite.com/images/menu.png`
- `https://drive.google.com/file/d/123456789/view`

## Tecnologias utilizadas

- React 18
- react-qr-code
- CSS3 com gradientes e animações
- HTML5 Canvas para download

## Estrutura do projeto

```
src/
├── App.js              # Componente principal
├── App.css             # Estilos globais
├── QRCodeGenerator.js  # Componente do gerador
├── QRCodeGenerator.css # Estilos do gerador
├── index.js            # Ponto de entrada
└── index.css           # Reset CSS
```

## 🚀 Deploy no GitHub

### 1. Inicializar repositório Git
```bash
git init
git add .
git commit -m "Initial commit: QR Code Generator para Cardápio"
```

### 2. Conectar ao GitHub
```bash
# Criar repositório no GitHub primeiro, depois:
git remote add origin https://github.com/SEU_USUARIO/qr-code-cardapio.git
git branch -M main
git push -u origin main
```

### 3. Deploy no Vercel (Recomendado)
1. Acesse [vercel.com](https://vercel.com)
2. Conecte sua conta do GitHub
3. Importe o repositório
4. Deploy automático!

### 4. Deploy no Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Conecte sua conta do GitHub
3. Selecione o repositório
4. Build command: `npm run build`
5. Publish directory: `build`

## 📝 Comandos úteis

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm start

# Build para produção
npm run build

# Verificar build localmente
npx serve -s build
```
