import { domainToASCII } from 'node:url';
import React, {useState, useEffect} from 'react';
import '../App.css';

export default function People() {
    let link = 'https://swapi.dev/api/people/?format=json';
    const [people, setPeople] = useState<any[]>([]);
    const [state, setState] = useState<string>("");

   useEffect(() =>{
    async function fetchPeople(){
        let res = await fetch(link);
        let data = await res.json();
        link = data.next;
        if(data.next != null){
            console.log(data.results)
            setPeople((e) => [...e, data.results]);
            fetchPeople();
        }
      }
      fetchPeople();
   }, [])
   
    return (
        <div className='buscador'><input placeholder='Buscardor' type="text" onChange={(e) => setState(e.target.value)}/>
         {people.map((r:{name:string}) => (<div>{r.name}</div>))}
        <div className='cards'>
        {people.map((elem) => elem.map((p:{name:string,height:string,gender:string}) => {
            return <div className='incards'>
                    <p><span>Name:     </span>{p.name}</p>
                    <p><span>Height:   </span>{p.height}</p>
                    <p><span>Gender:   </span>{p.gender}</p>
                </div>
        }))}
    </div>
    </div>
    )
}
