# Calculadora React Native

Uma calculadora simples e funcional construída com React Native. Este projeto implementa uma calculadora básica com operações aritméticas padrão e uma interface limpa e intuitiva.

## 📱 Funcionalidades

- Operações aritméticas básicas (+, -, *, /)
- Funcionalidade de ponto decimal
- Função de limpar memória
- Operações contínuas
- Design responsivo
- Tratamento de erros para operações inválidas

## 🛠️ Tecnologias Utilizadas

- React Native
- TypeScript
- React Native StyleSheet
- React Native Dimensions

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:
- Node.js
- npm ou yarn
- React Native CLI
- Android Studio (para desenvolvimento Android)
- Xcode (para desenvolvimento iOS - apenas Mac)

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Rafa1a/calculadoraRN
cd calculadoraRN
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie a aplicação:
```bash
# Para iOS
npx react-native run-ios

# Para Android
npx react-native run-android
```

## 🏗️ Estrutura do Projeto

```
src/
├── App.tsx              # Componente principal da aplicação
├── components/
│   ├── Button.tsx      # Componente de botão da calculadora
│   └── Display.tsx     # Componente do display da calculadora
```

## 💻 Visão Geral dos Componentes

### Componente App
- Gerencia o estado da calculadora
- Manipula operações aritméticas
- Controla o valor do display
- Gerencia operações de memória

### Componente Button
- Botão personalizável com suporte para:
  - Botões regulares
  - Botões de largura dupla
  - Botões de largura tripla
  - Botões de operação
- Dimensionamento responsivo baseado no tamanho da tela

### Componente Display
- Mostra o valor atual do cálculo
- Tamanho de texto responsivo
- Design com tema escuro

## 🎯 Implementação das Funcionalidades

### Gerenciamento de Estado
A calculadora utiliza um objeto de estado com a seguinte estrutura:
```typescript
{
  displayValue: string;
  cleardisplay: boolean;
  operation: string | null;
  values: number[];
  current: number;
}
```

### Operações
- Adição (+)
- Subtração (-)
- Multiplicação (*)
- Divisão (/)
- Tratamento de ponto decimal
- Limpar memória

## 🎨 Estilização

A aplicação utiliza o StyleSheet do React Native para estilização com:
- Layouts responsivos usando Dimensions
- Design flexível que se adapta a diferentes tamanhos de tela
- Estilização personalizada para botões de operação
- Tema escuro para o display
- Interface limpa e moderna

## 🤝 Como Contribuir

1. Faça um fork do repositório
2. Crie sua branch de feature (`git checkout -b feature/NovaFuncionalidade`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## ⚖️ Licença

Este projeto está sob a licença MIT - veja o arquivo LICENSE para detalhes.

## 👤 Autores

- Rafa1a

## 🤔 Como Usar

1. Números:
   - Toque nos dígitos para inserir números
   - Use o ponto para números decimais

2. Operações:
   - Toque em +, -, * ou / para realizar operações
   - Pressione = para ver o resultado
   - Pressione AC para limpar

## 🐛 Resolução de Problemas

### Problemas Comuns

1. Se a aplicação não iniciar:
   - Verifique se todas as dependências foram instaladas
   - Execute `npm start --reset-cache`

2. Se os botões não responderem:
   - Verifique se não há erros no console
   - Reinicie a aplicação

## 📝 Notas de Desenvolvimento

- A calculadora utiliza o método `eval()` para cálculos, com tratamento de erros apropriado
- O layout é totalmente responsivo e se adapta a diferentes tamanhos de tela
- As operações são realizadas em tempo real
