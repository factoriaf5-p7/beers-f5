import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Beer } from '../interfaces/Beer';


export const BeersDetailPage = () => {
  const [beer, setBeer] = useState<Beer>();
  const { beerId } = useParams();
  useEffect(() => {
    console.log(beerId);
    
    if (!beerId) return
    axios.get(`https://f5-beers-065cad3017be.herokuapp.com/beers/${beerId}`)
      .then((result: AxiosResponse) => {
        console.log(result.data);
        setBeer(result.data as Beer)
      })
      .catch(error => console.error);

  }, [])
  return (
    <>
      <img src={beer?.image_url} alt={beer?.name}/>
      <p>{beer?.name}</p>
      <p>{beer?.tagline}</p>
      <p>{beer?.first_brewed}</p>
      <p>{beer?.attenuation_level}</p>
      <p>{beer?.description}</p>
      <p>{beer?.contributed_by}</p>
    </>
  )
}
