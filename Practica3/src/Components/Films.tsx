import React, {useState, useEffect} from 'react';
import '../App.css';

export default function Films(){
    let link = 'https://swapi.dev/api/films/?format=json';
    const [films, setFilms] = useState<any>([]);
    const [state, setState] = useState<string>("");

   useEffect(() =>{
    async function fetchFilms(){
        let res = await fetch(link);
        let data = await res.json();
        setFilms(data.results);
      }
      fetchFilms();
   }, [])

    return(
        <div className='buscador'><input placeholder='Buscardor' type="text" onChange={(e) => setState(e.target.value)}/>
         {films.map((r:{name:string}) => (<div>{r.name}</div>))}
        <div className='cardsfilms'>
           {films.map((p:{title:string,director:string,release_date:string}) =>{
               return <div className='incardsfilms'>
               <p><span>Title:        </span>{p.title}</p>
               <p><span>Director:     </span>{p.director}</p>
               <p><span>Release_date: </span>{p.release_date}</p>
           </div>
           })}
       </div>
       </div>
   )
}