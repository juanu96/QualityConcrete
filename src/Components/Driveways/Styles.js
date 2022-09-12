import React from 'react'
import ElementStyle from '../Elements/Styles/Styles'
import { gql, useQuery } from "@apollo/client";

const STYLES = gql`
{
    driveways {
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
            <ElementStyle data={!loading ? data.driveways.nodes[0].styles.contentStyles : null} load={loading} id={props.id} />
        </>
    )
}
