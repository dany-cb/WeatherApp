const fetchURL = (URL, onSuccess, onError) => {
  const data = fetch(URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else throw Error(response.statusText);
    })
    .then(onSuccess)
    .catch((err) => {
      console.error("fetchURL: ", err);
      onError(err);
      return null;
    });

  return data;
};

export default fetchURL;
