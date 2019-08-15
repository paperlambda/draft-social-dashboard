import React from 'react'
import {connect} from "react-redux";
import userService from "../../../services/userService";
import Pictures from "@/pages/User/containers/Pictures";

const Albums = (props) => {
  const [isLoading, setLoading] = React.useState(true)
  const [albums, setAlbums] = React.useState(null)
  const [activeAlbum, setActiveAlbum] = React.useState(null)

  React.useEffect(() => {
    const { user } = props
    _getAlbums(user.id)
  }, [])

  const _getAlbums = (id) => {
    setLoading(true)
    return userService.getUserAlbums(id).subscribe({
      next: (res) => {
        setAlbums(res)
        setLoading(false)
      }
    })
  }

  const _didClickAlbum = (album) => {
    setActiveAlbum(album)
  }

  if(isLoading) {
    return <p>Loading...</p>
  }

  if(activeAlbum) {
    return (
      <Pictures didBack={() => setActiveAlbum(null)} album={activeAlbum} />
    )
  }

  return (
    <>
      <h4>Albums</h4>
      <ul>
        {
          albums.map((album) => (
            <li key={album.id}>
              <a onClick={() => _didClickAlbum(album)}>{album.title}</a>
            </li>
          ))
        }
      </ul>
    </>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.selectedUser
})

export default connect(mapStateToProps)(Albums)
