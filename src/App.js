//Samarbeid mellom Liv Ingrid Andersen, Fredrik Kapoun Olsen, Yvonne Nielsen og Anna Marita Meum THE KINGS AND QUEENS.

import {Route, Routes} from 'react-router-dom'
import Actor from './components/Actor'
import ActorName from './components/ActorName'
import Movies from './components/Movies'
import Navigation from './components/Navigation'


export default function App() {
  // Write JavaScript, use Hooks, add state and more

  return (
    <>
    <main className="m-auto h-screen w-full bg-cyan-400">
      <Navigation />
      <Routes>
        <Route path="Movies" element={<Movies />}/>
        <Route path="Actor" element={<Actor />}/>
        <Route path="Actor/:slug" element={<ActorName />}/>
      </Routes>
    </main>
    </>
  )
}