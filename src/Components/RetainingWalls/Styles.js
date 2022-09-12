import React from 'react'
import Pergola from '../Elements/Styles/Styles'
import { gql, useQuery } from "@apollo/client";

const STYLES = gql`
{
    retainingWalls {
        nodes {
            styles {
                contentStyles {
                    name
                    image {
                        mediaItemUrl
                    }
                    measure {
                        basicCost
                        basicMeasure
                    }
                    customCreation {
                        height
                        lenght
                        wide
                    }
                }
            }
        }
    }
}`

export default function Styles(props) {
    const { loading, data } = useQuery(STYLES)
    return (
        <>
            <Pergola data={!loading ? data.retainingWalls.nodes[0].styles.contentStyles : null} load={loading} id={props.id} />
        </>
    )
}
