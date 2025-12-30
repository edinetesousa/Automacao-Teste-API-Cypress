const { expect } = require("chai")

describe('API de Severest', () => {

  it('Criar usuario', () => {
    cy.request('POST', 'https://serverest.dev/usuarios', {
      "nome": "João da Silva Bel",
      "email": "joaodasilvabel@qa.com.br",
      "password": "teste",
      "administrador": "true"
    }
    ).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso')
      Cypress.env('Id', response.body._id)
    })
  })
  it('Listar usuarios', () => {
    cy.request('GET', 'https://serverest.dev/usuarios')
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })
  it('Buscar usuario por ID', () => {
    cy.request('GET', `https://serverest.dev/usuarios/${Cypress.env('Id')}`)
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Atualiza usuario', () => {
    cy.request('PUT', `https://serverest.dev/usuarios/${Cypress.env('Id')}`, {
      "nome": "João Luiz da Silva Beltrano",
      "email": "joaoluizdasilvabel@qa.com.br",
      "password": "teste",
      "administrador": "true"
    })
  }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body.message).to.eq('Registro alterado com sucesso')
  })
})