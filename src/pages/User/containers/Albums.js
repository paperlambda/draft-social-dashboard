import React from 'react'
import {connect} from "react-redux";
import userService from "../../../services/userService";

const Albums = (props) => {
  const [isLoading, setLoading] = React.useState(true)
  const [albums, setAlbums] = React.useState(null)

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

  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h4>Albums</h4>
      <ul>
        {
          albums.map((album) => (
            <li key={album.id}>{album.title}</li>
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
