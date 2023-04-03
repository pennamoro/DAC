# Bantads

Sistema de Internet Banking usando Angular e Java Spring, baseado na arquitetura de microsserviços.

## Arquitetura

- **Arquitetura de Microsserviços**: para desenvolver o software;
- **Padrão API Gateway**: para expor a API;
- **Padrão Database per Service**: para manter os dados, sendo que cada serviço só tem acesso ao seu SGBD;
- **Padrão CQRS**: no microsserviço de Conta, para todas as consultas. A sincronização dos dois bancos de dados deve ser feita por mensageria;
- **Padrão SAGA Orquestrada**: para transações que abrangem vários serviços;
- **Padrão API Composition**: se você achar necessidade de agregar resultados de consultas (excetuando-se o mecanismo em Conta - CQRS), pode usar o API Composition;
- **Padrão Event Sourcing**: para os microsserviços participantes das SAGAs, CQRS e outras comunicações.

