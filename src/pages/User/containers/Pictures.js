import React from 'react'
import photoService from "@/services/photoService";
import Modal from "@/components/Modal";

const Pictures = (props) => {
  const { didBack, album } = props
  const [photos, setPhotos] = React.useState(null)
  const [isLoading, setLoading] = React.useState(true)
  const [showModal, setModal] = React.useState(false)
  const [activePhoto, setActivePhoto] = React.useState(null)

  React.useEffect(() => {
    _getPhotos(album.id)
  }, [])

  const _getPhotos = (id) => {
    return photoService.getPhotosByAlbum(id).subscribe({
      next: (res) => {
        setPhotos(res)
        setLoading(false)
      }
    })
  }

  const _didSelectPhoto = (photo) => {
    setActivePhoto(photo)
    setModal(true)
  }

  const willCloseModal = () => {
    setModal(false)
    setActivePhoto(null)
  }

  return (
    <>
      <a onClick={() => didBack()}>Back</a> <a>{album.title}'s photos</a>
      {
        isLoading && (<p>Loading...</p>)
      }
      {
        !isLoading && (
          <ul>
            {
              photos.map((photo) => (
                <img onClick={() => _didSelectPhoto(photo)} src={photo.thumbnailUrl} alt={photo.title}/>
              ))
            }
          </ul>
        )
      }
      <Modal show={showModal} willClose={() => willCloseModal()}>
        {
          activePhoto && (<img style={{ maxWidth: '100%', height: 'auto'}} src={activePhoto.url} alt={activePhoto.title}/>)
        }
      </Modal>
    </>
  )
}

export default Pictures
