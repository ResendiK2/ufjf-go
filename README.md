# UFJF Go

![React Native](https://img.shields.io/badge/React%20Native-0.64-blue)
![Expo](https://img.shields.io/badge/Expo-48.0.18-blue)
![Native Base](https://img.shields.io/badge/Native_Base-3.4.28-blue)
![Axios](https://img.shields.io/badge/Axios-0.21.4-blue)


<!-- add native base flag -->


UFJF Go é um aplicativo desenvolvido como parte do projeto final para a disciplina de Modelagem de Software na Universidade Federal de Juiz de Fora (UFJF). O objetivo do aplicativo é facilitar o compartilhamento de caronas entre os estudantes da UFJF, proporcionando uma forma econômica e sustentável de locomoção pelo campus e áreas próximas.

## Equipe

- Arthur Moreira
- Gabriel Resende
- Igor Westerman
- Larissa Faza

Professor: Pedro Henrique Dias Valle

## Funcionalidades Principais

- Cadastro de usuários: Os usuários podem se cadastrar no aplicativo fornecendo informações como nome, idade, sexo, comprovante de matrícula, CNH (caso seja motorista), e-mail e senha.
- Login: Usuários registrados podem fazer login no aplicativo usando seu e-mail e senha.
- Busca de caronas: Os usuários podem pesquisar por caronas disponíveis com base em critérios como data, horário, locais de partida e chegada e número de vagas disponíveis.
- Histórico de caronas: Os usuários podem visualizar o histórico de caronas que participaram, incluindo informações como data, horário, locais de partida e chegada e detalhes da carona.
- Chat: Os usuários podem se comunicar diretamente através de um chat integrado, permitindo coordenar detalhes da viagem ou fazer perguntas.
- Perfil do usuário: Os usuários têm um perfil onde podem visualizar suas informações, como nome, idade, foto, e-mail e avaliações recebidas, além de editar os dados do perfil.
- Recuperação de senha: Os usuários podem redefinir sua senha caso a esqueçam, fornecendo seu e-mail para receber instruções de recuperação.
- Avaliação de caronas: Os usuários podem encerrar uma carona e fornecer feedback, dando uma pontuação e deixando comentários sobre sua experiência.

## Tecnologias Utilizadas

- React Native: Framework para desenvolvimento de aplicativos móveis multiplataforma.
- Expo: Plataforma que simplifica o desenvolvimento e teste de aplicativos React Native.
- Firebase: Plataforma de desenvolvimento móvel do Google usada para autenticação, armazenamento de dados em tempo real e notificações push.
- Amazon Web Services (AWS): Conjunto de serviços em nuvem da Amazon usado para hospedagem do backend, armazenamento de arquivos estáticos e escalabilidade.
- MySQL: Sistema de gerenciamento de banco de dados relacional.

## Pré-requisitos

- Node.js
- Expo CLI
- Conta no Firebase (com as configurações apropriadas)
- Conta na AWS (com os serviços EC2, RDS, S3 e CloudFront configurados)

## Instalação e Execução

1. Clone o repositório:

```bash
git clone https://github.com/your-username/ufjf-go.git
