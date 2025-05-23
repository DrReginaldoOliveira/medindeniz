# Instruções para Hospedagem no Hostinger

Este documento contém instruções passo a passo para hospedar o projeto MedIndeniz na Hostinger.

## Arquivos Necessários

Os seguintes arquivos e pastas devem ser enviados para o servidor da Hostinger:

- Pasta `dist` (contém o frontend e o servidor compilado)
- Arquivo `package.json` (para instalar as dependências)
- Arquivo `.env.production` (renomeie para `.env` após configurar)
- Arquivo `ecosystem.config.js` (configuração para o PM2)

## 1. Preparação no Hostinger

### Configurar Plano e Domínio

1. Acesse o painel de controle da Hostinger
2. Registre o domínio desejado ou configure um que você já possui
3. Certifique-se de que seu plano suporta Node.js (planos VPS geralmente são recomendados)

### Criar Banco de Dados PostgreSQL

1. No painel da Hostinger, vá para "Banco de dados" > "PostgreSQL"
2. Crie um novo banco de dados
3. Anote as informações de conexão (usuário, senha, host, nome do banco)

## 2. Configuração do Projeto

### Configurar Variáveis de Ambiente

1. Abra o arquivo `.env.production`
2. Substitua as informações de conexão com o banco de dados pelos valores reais do seu banco na Hostinger
3. Renomeie o arquivo para `.env`

## 3. Upload dos Arquivos

### Via FTP

1. Use um cliente FTP como FileZilla para se conectar ao servidor da Hostinger
2. Faça upload de todos os arquivos e pastas necessários para a raiz do seu site

### Via Painel do Hostinger

1. Acesse o Gerenciador de Arquivos no painel da Hostinger
2. Navegue até a pasta raiz do seu site (geralmente `public_html`)
3. Faça upload dos arquivos e pastas necessários

## 4. Instalação das Dependências

1. Acesse o servidor via SSH (se disponível no seu plano)
2. Navegue até a pasta onde você fez upload dos arquivos
3. Execute o comando:
   ```bash
   npm install --production
   ```

## 5. Configuração do PM2

1. Instale o PM2 globalmente (se ainda não estiver instalado):
   ```bash
   npm install -g pm2
   ```

2. Inicie o aplicativo usando o arquivo de configuração:
   ```bash
   pm2 start ecosystem.config.js
   ```

3. Configure o PM2 para iniciar automaticamente quando o servidor reiniciar:
   ```bash
   pm2 startup
   pm2 save
   ```

## 6. Configuração do Domínio

1. No painel da Hostinger, vá para "Domínios" > Seu domínio
2. Configure o DNS para apontar para seu aplicativo Node.js
3. Ative o certificado SSL (HTTPS) para seu domínio

## 7. Testes Finais

1. Acesse seu site pelo domínio registrado
2. Verifique se todas as funcionalidades estão funcionando corretamente
3. Teste o formulário de cálculo de indenização
4. Verifique se os leads estão sendo salvos no banco de dados

## Solução de Problemas

### Logs do Aplicativo

Para verificar os logs do aplicativo:
```bash
pm2 logs medindeniz
```

### Reiniciar o Aplicativo

Se precisar reiniciar o aplicativo:
```bash
pm2 restart medindeniz
```

### Problemas de Conexão com o Banco de Dados

1. Verifique se as credenciais no arquivo `.env` estão corretas
2. Confirme se o IP do seu servidor está na lista de permissões do banco de dados
3. Teste a conexão manualmente usando uma ferramenta como `psql`