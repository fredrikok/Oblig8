import client from '../client'

const MovieFields = `
  title,
  _id,
  fullname,
  name,
  'actor': slug.current,
`

const ActorFields = `
fullname,
name,
'slug': slug.current,
_id,
`

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${MovieFields}}`);
  return data;
};

export const getActors = async () => {
  const data = await client.fetch(`*[_type == "actor"]{${ActorFields}}`);
  return data;
};

export const getActorName = async (actor) => {
  const data = await client.fetch(`*[_type == "actor" && name.current == $actor]{${ActorFields}}`, { actor });
  return data;
};

export const getMovie = async (Movieactor) => {
  console.log("test", Movieactor)
  const data = await client.fetch(`*[_type == "movie" && actor->fullname == $Movieactor]{${MovieFields}}`, {Movieactor});
  return data;
};