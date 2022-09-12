import React from 'react'
import ElementsCustomDesign from '../Elements/DriveShape/Shape'
import { gql, useQuery } from "@apollo/client";

const CUSTOMDESIGN = gql`
{
  driveways {
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

export default function Shapes(props) {
    const { loading, data } = useQuery(CUSTOMDESIGN)
    return (
        <>
            <ElementsCustomDesign data={!loading ? data.driveways.nodes[0].shape.contentShape : null} load={loading} id={props.id} />
        </>
    )
}
