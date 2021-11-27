// import useFetchData from "./useFetchData";

// const URL = `https://animechan.vercel.app/api/random`;

const RandomQuote = () => {
  // const response = useFetchData(URL);

  /* Test Purposes */
  const response = {
    loading: false,
    data: {
      anime: "Ore No Imouto Ga Konna Ni Kawaii Wake Ga Nai",
      character: "Kousaka Kirino",
      quote:
        "Cheer up. No matter how hopeless you are, even if everyone else abandons you, I’ll always be here for you.",
    },
    error: null,
  };

  return !response.loading && !response.error ? (
    <figure className="random-quote">
      <blockquote className="random-quote__quote">
        {response.data.quote}
      </blockquote>
      <figcaption>
        <p className="random-quote__char">{response.data.character}</p>
        <cite className="random-quote__anime">{response.data.anime}</cite>
      </figcaption>
    </figure>
  ) : (
    <h1>Loading...</h1>
  );
};

export default RandomQuote;
