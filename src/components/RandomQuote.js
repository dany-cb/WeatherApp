// import useFetch from "../customHooks/useFetch";

// const URL = `https://animechan.vercel.app/api/random`;

const RandomQuote = () => {
  // const response = useFetch(URL);

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
    <figure className="quote -span-9">
      <blockquote className="quote-content">{response.data.quote}</blockquote>
      <figcaption>
        <p className="quote-char -span-4-p">- {response.data.character}</p>
        <cite className="quote-anime -span-7-p">{response.data.anime}</cite>
      </figcaption>
    </figure>
  ) : (
    <h1>Loading...</h1>
  );
};

export default RandomQuote;
