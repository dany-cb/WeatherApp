import { useEffect, useState } from "react";
import fetchURL from "../customHooks/fetchURL";
import { animeQuote } from "../data/API";

export const RandomQuote = () => {
  /* TESTING PURPOSES */
  // const response = {
  //     loading: false,
  //     data: {
  //         anime: "Ore No Imouto Ga Konna Ni Kawaii Wake Ga Nai",
  //         character: "Kousaka Kirino",
  //         quote:
  //           "Cheer up. No matter how hopeless you are, even if everyone else abandons you, I’ll always be here for you.",
  //       },
  //       error: null,
  //     };

  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetchURL(animeQuote(), (data) => setData(data));
  }, []);

  return data ? (
    <figure className="quote -span-9">
      <blockquote className="quote-content">{data.quote}</blockquote>
      <figcaption>
        <p className="quote-char -span-4-p">- {data.character}</p>
        <cite className="quote-anime -span-7-p">{data.anime}</cite>
      </figcaption>
    </figure>
  ) : (
    //Add a good loading screen or placeholder here
    <h1>Loading...</h1>
  );
};
