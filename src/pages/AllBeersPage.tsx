import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'

interface Beer{
attenuation_level:number;
brewers_tips: string;
contributed_by:string;
description:string;
expireAt:string;
first_brewed:string;
image_url:string;
name:string;
tagline:string;
_id:string;
}

export const AllBeersPage = () => {
  const [beers,setBeers] = useState<Array<Beer>>([])
  useEffect(()=>{
    axios.get("https://f5-beers-065cad3017be.herokuapp.com/beers")
      .then((result:AxiosResponse) => {
        console.log(result.data);
        setBeers(result.data as Beer[])})
        .catch(error => console.error);

  },[])
  return (<ul>
    {beers!==undefined && beers.map((beer:Beer)=>
    <li key={beer._id}>
      <a href={"/beers/".concat(beer._id)}>{beer.name}</a>
      <img src={beer.image_url} alt={beer.name} style={{width:'20px'}}/>
      <p>{beer.tagline}</p>
      <p>Created by: {beer.contributed_by}</p>
    </li>)}
    </ul>
  )
}
