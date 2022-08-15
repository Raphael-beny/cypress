let id = "";

describe('Testes de endpoints', () => {
  it('busca todos', () => {
    cy.request('GET', '/banco').then((response) =>{
      expect(response).property('status').to.equal(200);
      expect(response.body.length).eq(0);
    })
  })

  it('cadastra banco', () => {
    cy.request({
      method: 'POST',
      url: '/banco',
      form: false,
      body: {
        codigo: 999,
        nome: 'Teste',
        tipo: 'MULTIPLO'
      }
    }).then((response) => {
      id = response.body.id;
      expect(response).property('status').to.equal(200);
      expect(response.body).to.have.property('codigo', 999);
      expect(response.body).to.have.property('nome', 'Teste');
    })
  })

  it('busca unico', () => {
    cy.request('GET', '/banco/'+ id).then((response) =>{
      expect(response).property('status').to.equal(200);
      expect(response.body.id).eq(id);
    })
  })

  it('altera banco', () => {
    cy.request({
      method: 'PUT',
      url: '/banco/'+ id,
      form: false,
      body: {
        codigo: 998,
        nome: 'Teste aLTERADO',
        tipo: 'MULTIPLO'
      }
    }).then((response) => {
      expect(response).property('status').to.equal(200);
      expect(response.body).to.have.property('codigo', 998);
      expect(response.body).to.have.property('nome', 'Teste aLTERADO');
    })
  })

  it('deleta banco', () => {
    cy.request({
      method: 'DELETE',
      url: '/banco/'+ id,
      form: false
    }).then((response) => {
      expect(response).property('status').to.equal(200);
    })
  })

})