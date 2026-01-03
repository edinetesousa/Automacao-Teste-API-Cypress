Cypress.Commands.add('cria_user', () => {
    cy.api('POST', 'https://serverest.dev/usuarios', {
        "nome": "João João",
        "email": "joaojoao@qa.com.br",
        "password": "teste",
        "administrador": "true"
    }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.message).to.eq('Cadastro realizado com sucesso')
        Cypress.env('Id', response.body._id)
    })
})