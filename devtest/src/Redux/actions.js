
export function allItems(id) {
    return function (dispatch) {
      return fetch('https://api.flickr.com/services/feeds/photos_public.gne?method=flickr.photos.getRecent&api_key=9d5c1b8ca02f4f5fff3c5a74c6c0a0a4&format=json&nojsoncallback=1')
        .then((response) => response.json())
        .then((json) => {
        dispatch({ type: 'ALL_ITEMS', payload: json.items});
        }).catch((err)=>console.log(err))
    };
}

