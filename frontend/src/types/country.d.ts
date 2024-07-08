import { Continent } from "./continent";

export interface Country {
    id: number;
    code: string;
    name: string;
    emoji: string
    continent: Continent;
}