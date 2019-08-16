describe('Album | Unit', () => {
  const mockAlbum = {
    id: 1,
    title: 'quidem molestiae enim',
    userId: 1
  }

  test('has title', () => {
    expect(typeof mockAlbum.title).toBe('string')
    expect(mockAlbum.title.length).toBeGreaterThan(0)
    expect.assertions(2)
  })

  test('belongs to a user', () => {
    expect(mockAlbum.userId).toBeTruthy()
    expect(typeof mockAlbum.userId).toBe('number')
  })
})
