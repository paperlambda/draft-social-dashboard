describe('User | Unit', () => {
  const mockUser = {
    email: 'Sherwood@rosamond.me',
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    phone: '586.493.6943 x140',
    username: 'Maxime_Nienow',
    website: 'jacynthe.com'
  }

  test('has name', () => {
    expect(typeof mockUser.name).toBe('string')
    expect(mockUser.name.length).toBeGreaterThan(0)
    expect.assertions(2)
  })

  test('has valid email', () => {
    const regexValidateEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    expect(regexValidateEmail.test(mockUser.email)).toBe(true)
    expect(regexValidateEmail.test('rbsa@.com')).toBe(false)
    expect.assertions(2)
  })
})
