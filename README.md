# Employee Management System

Este projeto é um sistema de cadastro de funcionários desenvolvido com **React**, **TypeScript**, **Next.js** e **SCSS**. O sistema permite adicionar e remover funcionários, além de listar todos os funcionários cadastrados.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Next.js**: Framework React que possibilita renderização no lado do servidor (SSR) e geração de sites estáticos (SSG).
- **SCSS**: Extensão do CSS que permite o uso de variáveis, aninhamento, mixins, etc.

## Funcionalidades

- **Cadastro de Funcionários**: Adiciona novos funcionários com nome, cargo e email.
- **Listagem de Funcionários**: Exibe todos os funcionários cadastrados em um layout amigável.
- **Responsividade**: O sistema é responsivo e se adapta a diferentes tamanhos de tela.

## Requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## Componentes
1. **EmployeeForm.tsx**
Componente responsável pelo formulário de cadastro de funcionários.
Recebe a função onAddEmployee como prop, que adiciona um novo funcionário à lista.
2. **EmployeeList.tsx**
Exibe a lista de funcionários cadastrados.
Recebe a lista de funcionários como prop e a função onRemoveEmployee para remover um funcionário.
3. **EmployeeCard.tsx**
Exibe os dados de um funcionário individual.
Possui um botão para remover o funcionário, chamando a função onRemove passada via props.
4. **Layout.tsx**
Componente de layout geral que envolve a página principal, utilizando o atributo children para renderizar o conteúdo.

