import http from "@/helpers/http";
import {map} from "rxjs/operators";


const getPhotos = (id) => {
  return http({
    url: `/albums/${id}/photos?_page=1`
  }).pipe(
    map((res) => res)
  )
}

const albumService = {
  getPhotos
}

export default albumService
