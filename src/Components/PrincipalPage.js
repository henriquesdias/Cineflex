import PostFilm from "./PostFilm";
import { useState , useEffect } from "react";
import axios from "axios";
export default function PrincipalPage(){
  const [listOfFilms , setListOfFilmes] = useState([]);
  useEffect( () => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );
    promise.then( answer => setListOfFilmes(answer.data));
  } , []);

  return listOfFilms.map( (film,index) => (
      <PostFilm URL={film.posterURL} alt={film.title} key={index}/>
    ));
}