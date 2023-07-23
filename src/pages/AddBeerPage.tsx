import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Beer } from "../interfaces/Beer";

// type Beer = {
//       name?: string,
//       tagline?: string,
//       description?: string,
//       first_brewed?: string,
//       brewers_tips?: string,
//       attenuation_level?: number,
//       contributed_by?: string,
// }
export const AddBeerPage = () => {
  const [formData, setFormData] =useState<Partial<Beer>>(
    {
      name:'',
      tagline:'',
      description:'',
      first_brewed:'',
      brewers_tips:'',
      attenuation_level:0,
      contributed_by:'',
}
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);

    const response = await axios.post("https://f5-beers-065cad3017be.herokuapp.com/beers", formData)
    console.log(response.data);


  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  setFormData({
      ...formData,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      [event.target.name]: event.target.value,
    })

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <input
        onChange={handleChange}
        value={formData?.name}
        name="name"
        aria-label="name"
        type="text" />
      </label>
      <label htmlFor="tagline">
        <input onChange={handleChange}
        value={formData?.tagline}
        name="tagline"
        aria-label="tagline"
        type="text" />
      </label>
      <label htmlFor="description"><textarea onChange={handleChange} value={formData?.description}  name="description"aria-label="description"/></label>
      <label htmlFor="first_brewed"><input onChange={handleChange} value={formData?.first_brewed} name="first_brewed" aria-label="first_brewed" type="text" /></label>
      <label htmlFor="contributed_by"><input onChange={handleChange} value={formData?.contributed_by} name="contributed_by" aria-label="contributed_by" type="text" /></label>
      <label htmlFor="attenuation_level"><input onChange={handleChange} value={formData?.attenuation_level} name="attenuation_level" aria-label="attenuation_level" type="number" /></label>
      <label htmlFor="brewers_tips"><input onChange={handleChange} value={formData?.brewers_tips} name="brewers_tips" aria-label="brewers_tips" type="text" /></label>
      <button type="submit">Add Beer</button>
    </form>
  )
}
