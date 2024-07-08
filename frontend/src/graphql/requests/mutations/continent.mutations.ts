import { gql } from "@apollo/client";

export const CREATE_CONTINENT = gql`
    mutation CreateContinent($infos: NewContinentInput!) {
        createContinent(info: $info) {
            id
            name
            countries
        }
    }
`