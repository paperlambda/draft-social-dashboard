describe('Photo | Unit', () => {
  const mockPhoto = {
    albumId: 1,
    id: 6,
    thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
    title: 'accusamus ea aliquid et amet sequi nemo',
    url: 'https://via.placeholder.com/600/56a8c2'
  }

  test('has title', () => {
    expect(typeof mockPhoto.title).toBe('string')
    expect(mockPhoto.title.length).toBeGreaterThan(0)
    expect.assertions(2)
  })

  describe('has images', () => {
    test('original image', () => {
      expect(typeof mockPhoto.url).toBe('string')
      expect(mockPhoto.url.length).toBeGreaterThan(0)
      expect.assertions(2)
    })

    test('thumbnail image', () => {
      expect(typeof mockPhoto.thumbnailUrl).toBe('string')
      expect(mockPhoto.thumbnailUrl.length).toBeGreaterThan(0)
      expect.assertions(2)
    })
  })

  test('belongs to an album', () => {
    expect(mockPhoto.albumId).toBeTruthy()
    expect(typeof mockPhoto.albumId).toBe('number')
  })
})
