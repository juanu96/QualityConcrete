import React from 'react'
import ElementTypeOfBrick from '../Elements/TypeOfBrick/TypeOfBrick'
import { gql, useQuery } from "@apollo/client";

const TYPEOFBRICK = gql`
{
  retainingWalls {
    nodes {
      TypeOfBrick {
        contentTypeOfBrick {
          name
          image {
            mediaItemUrl
          }
        }
      }
    }
  }
}`

export default function TypeOfBrick() {
  const { loading, data, error } = useQuery(TYPEOFBRICK)
  return (
    <>
      <ElementTypeOfBrick data={!loading ? data.retainingWalls.nodes[0].TypeOfBrick.contentTypeOfBrick : null} load={loading} />
    </>
  )
}
