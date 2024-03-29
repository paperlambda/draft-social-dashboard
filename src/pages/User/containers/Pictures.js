import React from 'react'
import photoService from '@/services/photoService'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button, Text, Modal } from '@/components'

const Pictures = props => {
  const { didBack, album } = props
  const [photos, setPhotos] = React.useState(null)
  const [isLoading, setLoading] = React.useState(true)
  const [showModal, setModal] = React.useState(false)
  const [activePhoto, setActivePhoto] = React.useState(null)

  React.useEffect(() => {
    _getPhotos(album.id)
  }, [])

  const _getPhotos = id => {
    return photoService.getPhotosByAlbum(id).subscribe({
      next: res => {
        setPhotos(res)
        setLoading(false)
      }
    })
  }

  const _didSelectPhoto = photo => {
    setActivePhoto(photo)
    setModal(true)
  }

  const willCloseModal = () => {
    setModal(false)
    setActivePhoto(null)
  }

  return (
    <>
      <Button color="inverted" onClick={() => didBack()}>
        Back to Albums
      </Button>
      <Text variant="title-sm" bold>
        {album.title}&apos;s photos
      </Text>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <>
          {photos.map(photo => (
            <Thumbnail key={photo.id} onClick={() => _didSelectPhoto(photo)}>
              <img
                title="Click to preview"
                src={photo.thumbnailUrl}
                alt={photo.title}
              />
            </Thumbnail>
          ))}
        </>
      )}
      <Modal show={showModal} willClose={() => willCloseModal()}>
        {activePhoto && (
          <img
            style={{ maxWidth: '100%', height: 'auto' }}
            src={activePhoto.url}
            alt={activePhoto.title}
          />
        )}
      </Modal>
    </>
  )
}

Pictures.propTypes = {
  album: PropTypes.object.isRequired,
  didBack: PropTypes.func.isRequired
}

const Thumbnail = styled('div')`
  width: 150px;
  height: 150px;
  display: inline-block;
  cursor: pointer;
`

export default Pictures
