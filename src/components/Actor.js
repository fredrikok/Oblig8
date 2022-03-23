import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { getActors, getActorName } from "../lib/services/movieService";
import ActorName from "./ActorName";

export default function Actor(){
  const [actor, setActor] = useState([])

  const getActorData = async () => {
    const actor = await getActors([])
      setActor(actor)
  }

  useEffect(() => {
    getActorData();
  },[])


  return (
    <div>
      {actor.map((actor) => (
        <Link to={actor.name.current} key={actor._id}>{actor.fullname}</Link>
      ))}
    </div>
  )
}