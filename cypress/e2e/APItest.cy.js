describe('API de Severest', () => {

  it('Criar usuario', () => {
    cy.fixture('usuario').then(function (usuario) {
      const user = usuario.cria_usuario
      cy.cria_user(user)
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('Cadastro realizado com sucesso')
      Cypress.env('Id', response.body._id)
    })
  })

  it('Listar usuarios', () => {
    const id = ''
    cy.busca_user(id)
      .then((response) => {
        expect(response.status).to.eq(200)

      })
  })

  it('Buscar usuario por ID', () => {
    const id = Cypress.env('Id')
    cy.busca_user(id)
      .then((response) => {
        expect(response.status).to.eq(200)

      })
  })

  it('Atualiza usuario', () => {
    cy.fixture('usuario').then(function (usuario) {
      const user = usuario.atualiza_usuario
      cy.atualiza_user(user)
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Registro alterado com sucesso')
    })
  })

  it('Realiza login no sistema', () => {
    cy.fixture('usuario').then(function (usuario) {
      const email = usuario.cria_usuario.email
      const senha = usuario.cria_usuario.password
      cy.login(email, senha)

    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Login realizado com sucesso')
      Cypress.env('token', response.body.authentication)
    })
  })

  it('Excluir usuario', () => {
    cy.deletar_user()
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq('Registro excluído com sucesso')
      })
  })
})