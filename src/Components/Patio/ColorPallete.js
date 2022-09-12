import React from 'react'
import ElementColorPallete from '../Elements/ColorPallete/ColorPallete'
import { gql, useQuery } from "@apollo/client";

const COLORPALLETE = gql`
{
    patios {
        nodes {
            colorPallete {
                contentColor {
                    name
                    item {
                        color
                        name
                    }
                }
            }
        }
    }
}`

export default function ColorPallete() {
    const { loading, data } = useQuery(COLORPALLETE)
  return (
    <div>
        <ElementColorPallete data={!loading ? data.patios.nodes[0].colorPallete.contentColor : null} load={loading} />
    </div>
  )
}
