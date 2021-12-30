const fetchURL = async (URL, onErrorHandler) => {
  const data = fetch(URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else throw Error(response.statusText);
    })
    .catch((err) => {
      onErrorHandler();
      console.error("fetchURL: ", err);
      return null;
    });

  return data;
};
export default fetchURL;
