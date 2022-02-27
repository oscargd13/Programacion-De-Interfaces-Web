import React, {useState, useEffect} from 'react';
import '../App.css';

export default function Planets(){
    let link = 'https://swapi.dev/api/planets/?format=json';
    const [planets, setPlanets] = useState<any[]>([]);
    const [state, setState] = useState<string>("");

   useEffect(() =>{
    async function fetchPlanets(){
        let res = await fetch(link);
        let data = await res.json();
        link = data.next;
        if(data.next != null){
            setPlanets((e) =>[...e, data.results]);
            fetchPlanets();
        }
      }
      fetchPlanets();
   }, [])

   return(
        <div className='buscador'><input placeholder='Buscardor' type="text" onChange={(e) => setState(e.target.value)}/>
         {planets.map((r:{name:string}) => (<div>{r.name}</div>))}
        <div className='cards'>
        {planets.map((elem) => elem.map((p:{name:string,climate:string,population:string}) => {
          return <div className='incards'>
                <p><span>Name:        </span>{p.name}</p>
                <p><span>Climate:     </span>{p.climate}</p>
                <p><span>Population:  </span>{p.population}</p>
            </div>
        }))}
        </div>
        </div>
    )
}