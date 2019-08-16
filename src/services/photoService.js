import http from '@/helpers/http'
import { map } from 'rxjs/operators'

const getPhotosByAlbum = albumId => {
  return http({
    url: `/albums/${albumId}/photos?_page=1`
  }).pipe(map(res => res))
}

const photoService = {
  getPhotosByAlbum
}

export default photoService
