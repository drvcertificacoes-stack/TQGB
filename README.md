# Total Quality Group Brasil

Site institucional da Total Quality Group Brasil, com arquivos de produção e código formatado para leitura.

## Conteúdo

- As páginas HTML ficam na raiz e nas pastas de serviços.
- A pasta assets contém JavaScript, CSS e imagens.
- A pasta fonts contém as fontes locais.
- O arquivo lead.php recebe os formulários.
- O arquivo .htaccess configura as rotas, o HTTPS e o cache no Apache.

Esta versão contém o site compilado em React, com os arquivos de produção organizados. O projeto-fonte React + Vite foi entregue separadamente em TQGB-REACT-FONTE.zip.

## Enviar ao GitHub

1. Crie um repositório vazio no GitHub.
2. Extraia este ZIP no seu computador.
3. Envie o conteúdo extraído para a raiz do repositório, incluindo os arquivos ocultos .htaccess e .gitignore.
4. Confirme o envio com um commit.

Também é possível usar Git no diretório extraído.

```sh
git init
git add .
git commit -m "Adiciona site Total Quality Group Brasil"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

Substitua URL_DO_REPOSITORIO pela URL do repositório criado.

## Hospedagem

A publicação completa usa Apache com PHP, como em uma hospedagem cPanel. Copie o conteúdo para o document root do domínio, incluindo .htaccess. O envio de formulários depende da configuração de e-mail do PHP no servidor.

GitHub Pages serve arquivos estáticos. O processamento de lead.php e as regras de .htaccess exigem hospedagem compatível.

O envio ao repositório armazena os arquivos. A publicação depende da configuração de hospedagem ou de uma integração de deploy.
