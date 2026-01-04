describe('API de Severest', () => {

  it('Criar usuario', () => {
    cy.fixture('usuario').then(function (usuario) {
      const user = usuario.cria_usuario
      cy.cria_user(user)
    })
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

  // it('Atualiza usuario', () => {
  //   cy.fixture('usuario').then(function (usuario) {
  //     const user_alter = usuario.user_alter

  //     cy.cria_user(user)
  //   }).then((response) => {
  //     expect(response.status).to.eq(200)
  //     expect(response.body.message).to.eq('Registro alterado com sucesso')
  //   })
  // })


  it('Excluir usuario', () => {
    cy.api('DELETE', `https://serverest.dev/usuarios/${Cypress.env('Id')}`

    ).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Registro excluído com sucesso')
    })
  })
})