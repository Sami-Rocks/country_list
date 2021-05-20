import React, { useEffect, useState } from "react"
import useSWR from "swr"
import Card from "../../components/Card"
import './cards.scss'


const CountryList = () =>{
    // const fetcher = (url) => fetch(url).then(res => res.json())
    // const { data, error} = useSWR('https://restcountries.eu/rest/v2/all', fetcher)

    const [countryList, setCountryList] = useState([])
    
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(data => data.json())
        .then(res => {setCountryList(res)})        
    }, [])

    const reverseOrder = () =>{
        const reversed = countryList.reverse()
        setCountryList([...reversed])
    }

    const sort = (e) => {
        let sort = e.target.value
        if(sort === 'alphabetically'){
            let sorted = countryList.sort((a,b)=>{
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {return -1;}
                if (nameA > nameB) {return 1;}
                return 0;            
            })
            setCountryList([...sorted])
        }else{
            let sorted = countryList.sort((a, b) => a.population - b.population )
            setCountryList([...sorted])
        }
    }

    return(
        <>
            <div className="options">
                <div className="sort">
                    <label>Sort: </label>
                    <select name="sort" id="sort" onChange={sort} >
                        <option value="alphabetically">alphabetically</option>
                        <option value="population">population</option>
                    </select>
                </div>
                <div className="order">
                    <button onClick={reverseOrder} >Reverse</button>
                </div>
            </div>
            <div className="cards">
                {countryList.map((country, index)=>(
                    <Card key={index} countries={country} />
                ))}
            </div>
        </>
    )
}

export default CountryList