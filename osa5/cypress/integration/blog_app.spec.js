describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      name: 'Max Mustermann',
      username: 'mustermann',
      password: 'salasana'
    }
    cy.request('POST', 'http://localhost:3001/api/users/',user)
    cy.visit('http://localhost:3000')
  })

  //   it('Login form is shown', function() {
  //     cy.get('#username')
  //     cy.get('#password')
  //     cy.get('#login-button')
  //   })
  //   describe('Login',function() {
  //     it('succeeds with correct credentials', function() {
  //       cy.get('#username').type('mustermann')
  //       cy.get('#password').type('salasana')
  //       cy.get('#login-button').click()

  //     })
  //     it.only('fails with wrong credentials', function() {
  //       cy.get('#username').type('fail')
  //       cy.get('#password').type('rejected')
  //       cy.get('#login-button').click()
  //       cy.get('.error').should('contain','Invalid username or password')
  //     })
  //   })
  // })
  describe.only('When logged in', function() {
    beforeEach(function() {
      cy.login({ username: 'mustermann', password:'salasana' })

    })

    it('A blog can be created', function() {
    //   cy.createBlog( { title:'testetst',author:'testauthor',url:'testurl',likes:'15' } )
      cy.contains('new blog').click()
      cy.get('#title').type('test title')
      cy.get('#author').type('testAuthor')
      cy.get('#url').type('testURL')
      cy.get('#savebutton').click()



    })


  })

})