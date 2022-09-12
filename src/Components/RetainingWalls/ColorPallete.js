import React from 'react'
import ElementColorPallete from '../Elements/ColorPallete/ColorPallete'
import { gql, useQuery } from "@apollo/client";

const COLORPALLETE = gql`
{
  retainingWalls {
    nodes {
      colorPallete {
        contentColor {
          name
          item {
            name
            color
          }
        }
      }
    }
  }
}`

export default function ColorPallete(props) {
    const { loading, data } = useQuery(COLORPALLETE)
  return (
    <div>
        <ElementColorPallete data={!loading ? data.retainingWalls.nodes[0].colorPallete.contentColor : null} load={loading} />
    </div>
  )
}
