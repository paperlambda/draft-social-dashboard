import { from, defer } from 'rxjs'

const http = (props) => {
  return defer(() => {
    const baseUrl = 'https://jsonplaceholder.typicode.com​'
    const url = baseUrl + props.url

    const options = {
      method: props.method || 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }

    if(props.body) {
      options['body'] = props.body
    }

    return from(fetch(url, options).then(res => res.json()))
  })
}

export default http
