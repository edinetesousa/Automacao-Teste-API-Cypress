describe('API de Severest', () => {

  it('Criar usuario', () => {
    cy.cria_user()
  })

  it('Listar usuarios', () => {
    cy.api('GET', 'https://serverest.dev/usuarios')
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Buscar usuario por ID', () => {
    cy.api('GET', `https://serverest.dev/usuarios/${Cypress.env('Id')}`)
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })

  it('Atualiza usuario', () => {
    cy.api('PUT', `https://serverest.dev/usuarios/${Cypress.env('Id')}`, {
      "nome": "João beleu",
      "email": "joaobeleu@qa.com.br",
      "password": "teste",
      "administrador": "true"
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Registro alterado com sucesso')
    })
  })


  it('Excluir usuario', () => {
    cy.api('DELETE', `https://serverest.dev/usuarios/${Cypress.env('Id')}`

    ).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Registro excluído com sucesso')
    })
  })
})