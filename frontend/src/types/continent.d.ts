import { Country } from "./country";

export interface Continent {
    id: number;
    name: string;
    countries: Country[]
}