import React from 'react'
import Pergola from '../Elements/Styles/Styles'
import { gql, useQuery } from "@apollo/client";

const PERGOLAS = gql`
{
    patios {
        nodes {
            pergolas {
                contentPergola {
                    customCreation {
                        height
                        lenght
                        wide
                    }
                    image {
                        mediaItemUrl
                    }
                    measure {
                        basicCost
                        basicMeasure
                    }
                    name
                }
            }
        }
    }
}`

export default function Pergolas(props) {
    const { loading, data } = useQuery(PERGOLAS)
    return (
        <>
            <Pergola data={!loading ? data.patios.nodes[0].pergolas.contentPergola : null} load={loading} id={props.id} />
        </>
    )
}
