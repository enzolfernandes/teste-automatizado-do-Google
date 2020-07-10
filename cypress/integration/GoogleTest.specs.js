/// <reference types="cypress"/>

describe('Cenário de Sucesso', () =>{
        const produto =
    {
        nome: 'Teclado',
        caracterisiticas:[
            ' Mecânico',
            ' Brown',
            ],
        MaxPreco:300
    };
    const strBusca= produto.nome + produto.caracterisiticas;
   
    it('O usuário faz uma busca no Google',()=>{
        
        cy.visit('https://www.google.com/')
        cy.get('.gLFyf')
        .type(strBusca)
        .type('{enter}')
        .should('have.value',strBusca)
    })

    it('O usuário acha um modelo', ()=>{
        cy.get('#hdtb-msb-vis > :nth-child(2) > .q').click()

        cy.get('.zai3td > .HUZACb > .KQRYIb')
        .type(produto.MaxPreco)
        .type('{enter}')


        cy.get('.xsRiS')
        .contains(produto.caracterisiticas[0]).contains(produto.caracterisiticas[1])
        .click()
    })
})

describe('Cenário de Erro', () =>{
    const produto =
{
    nome: 'Teclado',
    caracterisiticas:[
        ' Mecânico',
        ' Red',
        ],
    MaxPreco:50
};
const strBusca= produto.nome + produto.caracterisiticas;

it('O usuário faz uma busca no Google',()=>{
    
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf')
    .type(strBusca)
    .type('{enter}')
    .should('have.value',strBusca)
})

it('O usuário acha um modelo', ()=>{
    cy.get('#hdtb-msb-vis > :nth-child(2) > .q').click()

    cy.get('.zai3td > .HUZACb > .KQRYIb')
    .type(produto.MaxPreco)
    .type('{enter}')


    cy.get('.xsRiS')
    .contains(produto.caracterisiticas[0]).contains(produto.caracterisiticas[1])
    .click()
})
})