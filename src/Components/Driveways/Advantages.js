import React from 'react'
import ElementAdvantages from '../Elements/Advantages/Advantages'
import { gql, useQuery } from "@apollo/client";

const STYLES = gql`
{
    driveways {
        nodes {
            advantages {
                contentAdvantages {
                    items {
                        title
                        content
                    }
                }
            }
        }
    }
}`

export default function Advantages(props) {
    const { loading, data } = useQuery(STYLES)
    return (
        <>
            <ElementAdvantages data={!loading ? data.driveways.nodes[0].advantages.contentAdvantages.items : null} load={loading} id={props.id} />
        </>
    )
}
