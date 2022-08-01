import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import PostFilm from "./PostFilm";

export default function PrincipalPage(){
  const [listOfFilms , setListOfFilmes] = useState([]);
  useEffect( () => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v7/cineflex/movies"
    );
    promise.then( answer => setListOfFilmes(answer.data));
  } , []);

  return (
    <>
      <h1 className="title">Selecione o filme</h1>
      <div className="films">
        {listOfFilms.map((film, index) => (
          <Link to={`/filme/:${film.id}`} key={index}>
            <PostFilm URL={film.posterURL} alt={film.title} key={index} />
          </Link>
        ))}
      </div>
    </>
  );
}