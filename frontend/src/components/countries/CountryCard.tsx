import { Country } from "@/types/country";
import Link from "next/link";

function CountryCard({ country }: { country: Country }) {
    return (
        <div key={country.id}>
            <div>{country.name}</div>
            <div>{country.emoji}</div>
            <Link href={`/countries/view/${country.id}`}>
                See the country details
            </Link>
        </div>
    );
}

export default CountryCard;