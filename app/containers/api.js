const fetchJSON = (url) => {
  return new Promise(resolve => {
    fetch(url)
    .then(res => res.json())
    .then(data => resolve({ data }))
  })
}

const url = 'https://api-datastore.appiaries.com/v1/dat/_sandbox/pecolog/shop/-'
export default {
  getShop: () => fetchJSON(url),
}
