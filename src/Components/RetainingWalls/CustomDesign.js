import React from 'react'
import ElementsCustomDesign from '../Elements/CustomDesign/CustomDesing'
import { gql, useQuery } from "@apollo/client";

const CUSTOMDESIGN = gql`
{
  retainingWalls {
    nodes {
      CustomDesign {
        contentCustomDesign {
          name
          image {
            mediaItemUrl
          }
        }
      }
    }
  }
}`

export default function CustomDesign(props) {
    const { loading, data } = useQuery(CUSTOMDESIGN)
    return (
        <>
            <ElementsCustomDesign data={!loading ? data.retainingWalls.nodes[0].CustomDesign.contentCustomDesign : null} load={loading} id={props.id} />
        </>
    )
}
