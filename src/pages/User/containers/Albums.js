import React from 'react'
import {connect} from "react-redux";
import userService from "../../../services/userService";
import Pictures from "@/pages/User/containers/Pictures";
import styled from "styled-components";
import Button from "@/components/Button";
import Flex from "@/components/Flex";
import Text from "@/components/Text";

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
      {
        albums.map((album) => (
          <AlbumCard jc="flex-start" key={album.id}>
            <Button onClick={() => _didClickAlbum(album)}>View</Button>
            <div>
              <Text variant="title-sm" bold>{album.title}</Text>
            </div>
          </AlbumCard>
        ))
      }
    </>
  )
}

const AlbumCard = styled(Flex)`
  padding: 15px 20px;

  button{
    margin-right: 20px;
  }
  
  > div{
    margin-bottom: 8px;
    &:last-child{
      text-transform: capitalize;
    }
  }
  
  & + div {
    border-top: 1px solid #f8f8f8;
  }
`

const mapStateToProps = (state) => ({
  user: state.user.selectedUser
})

export default connect(mapStateToProps)(Albums)
