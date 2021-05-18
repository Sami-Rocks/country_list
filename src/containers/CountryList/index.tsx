import React from "react"
import useSWR from "swr"
import Card from "../../components/Card"
import './cards.scss'


const CountryList = () =>{
    const fetcher = (url) => fetch(url).then(res => res.json())
    const { data, error} = useSWR('https://restcountries.eu/rest/v2/all', fetcher)

    if(error) return "Error Occured!!"
    return(
        <div className="cards">
            {data?.map((country, index)=>(
                <Card key={index} countries={country} />
            ))}
            </div>
    )
}

export default CountryList