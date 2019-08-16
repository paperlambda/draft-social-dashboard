describe('Post | Unit', () => {
  const mockPost = {
    body:
      'ut aspernatur corporis harum nihil quis provident sequi↵mollitia nobis aliquid molestiae↵perspiciatis et ea nemo ab reprehenderit accusantium quas↵voluptate dolores velit et doloremque molestiae',
    id: 6,
    title: 'dolorem eum magni eos aperiam quia',
    userId: 1
  }

  test('has title', () => {
    expect(typeof mockPost.title).toBe('string')
    expect(mockPost.title.length).toBeGreaterThan(0)
    expect.assertions(2)
  })

  test('has body', () => {
    expect(typeof mockPost.body).toBe('string')
    expect(mockPost.body.length).toBeGreaterThan(0)
    expect.assertions(2)
  })

  test('belongs to an user', () => {
    expect(mockPost.userId).toBeTruthy()
    expect(typeof mockPost.userId).toBe('number')
  })
})
