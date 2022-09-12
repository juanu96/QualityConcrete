import React from 'react'
import ElementOptionCost from '../Elements/OptionsCost/OptionCost'
import { gql, useQuery } from "@apollo/client";

const OPTIONCOST = gql`
{
  driveways {
    nodes {
      optionsCosts {
        contentOptionsCosts {
          name
          image {
            mediaItemUrl
          }
          max
          min
        }
      }
    }
  }
}`

export default function OptionsCosts(props) {
  const { loading, data } = useQuery(OPTIONCOST)
    return (
        <>
            <ElementOptionCost data={!loading ? data.driveways.nodes[0].optionsCosts.contentOptionsCosts : null} load={loading} id={props.id} />
        </>
  )
}
