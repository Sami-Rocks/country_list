import './Card.scss'

const Card = (country:any) =>{
    return(
        <div className="card">
            <div className="image">
                <img src={country.countries.flag} alt={country.countries.name} />
            </div>
            <div className="text">
                <div className="country-name">
                    <p><b>{country.countries.name}</b></p>
                </div>
                <div className="country-info">
                    <p><b>Population: </b> {country.countries.population} <br/></p>
                    <p><b>Region: </b> {country.countries.region} <br/></p>
                    <p><b>Capital: </b> {country.countries.capital} <br/></p>
                </div>
            </div>
        </div>
    )
}

export default Card