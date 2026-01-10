Cypress.Commands.add('cria_user', (user) => {
    cy.api({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: user
    }).then((response) => { return response })
})

Cypress.Commands.add('busca_user', (id) => {
    cy.api({
        method: 'GET',
        url: `https://serverest.dev/usuarios/` + id
    }).then((response) => {
        expect(response.status).to.eq(200)
    })

})
Cypress.Commands.add('atualiza_user', (user) => {
    cy.api({
        method: 'PUT',
        url: `https://serverest.dev/usuarios/${Cypress.env('Id')}`,
        body: user
    }).then((response) => { return response })
})

Cypress.Commands.add('deletar_user', () => {
    cy.api('DELETE', `https://serverest.dev/usuarios/${Cypress.env('Id')}`
    ).then((response) => {
        expect(response.status).to.eq(200)
    })
})

Cypress.Commands.add('login', (email, senha) => {
    cy.api({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: { email: email, password: senha }
    }).then((response) => { return response })
})