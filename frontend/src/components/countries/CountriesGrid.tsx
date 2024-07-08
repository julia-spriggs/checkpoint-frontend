import CountryCard from "./CountryCard"

function CountriesGrid({ countries }: { countries: CountryCard["countries"] }) {
    return (
        <div>
            {countries.map((country) => (
                <CountryCard key={country.id} country={country} />
            ))}
        </div>
    );
}

export default CountriesGrid;