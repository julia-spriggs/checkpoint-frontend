import { gql } from "@apollo/client";

export const CREATE_COUNTRY = gql`
    mutation CreateCountry($info: NewCountryInput!) {
        createCountry(info: $info) {
            continent {
                id
                name
                code
                emoji
            }
        }
    }
`;