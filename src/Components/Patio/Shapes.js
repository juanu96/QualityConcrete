import React from 'react'
import ElementShapes from "../Elements/Shapes/Shapes";
import { gql, useQuery } from "@apollo/client";

const SHAPES = gql`
{
    patios {
        nodes {
            shape {
                contentShape {
                    name
                    image {
                        mediaItemUrl
                    }
                }
            }
        }
    }
}`

export default function Shapes() {
    const { loading, data, error } = useQuery(SHAPES)
    return (
        <>
            <ElementShapes data={!loading ? data.patios.nodes[0].shape.contentShape : null} load={loading} />
        </>
    )
}
