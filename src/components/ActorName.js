import { NavLink } from "react-router-dom";
import Actor from "./Actor";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getActorName, getMovie } from "../lib/services/movieService";

export default function ActorName() {

  const [data, setData] = useState(null)
  const [movieData, setMovieData] = useState(null)
  const [fultNavn, setFultNavn] = useState(null)

  const { slug } = useParams()
  const getActorNameData = async () => {
    const ActorDetails = await getActorName(slug)
    setData(ActorDetails)
    ActorDetails?.map((person) => {
      setFultNavn(person.fullname);
      console.log(fultNavn)
    })
  }

  const getMovieData = async () => {
    const MovieDetails = await getMovie(slug)
    setMovieData(MovieDetails)
  }

  useEffect(() => {
    getActorNameData(slug);
    getMovieData("Fredrik Kapoun");
  },[slug, fultNavn])

  console.log(movieData)

  return (
    <>
      {data?.map((actorDetail) => (
        <article key={actorDetail._id}>
          <h1>Navn: {actorDetail.fullname}</h1>
          <p>Kallenavn: {slug}</p>
          {movieData?.map((movieDetail) => (
            <h2>Film: {movieDetail.title}</h2>
            ))}
        </article>
      ))}
    </>
  )
}