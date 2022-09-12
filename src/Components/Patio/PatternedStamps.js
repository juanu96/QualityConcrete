import React from 'react'
import ElementPatternedStamps from '../Elements/PatternedStamps/PatternedStamps'
import { gql, useQuery } from "@apollo/client";

const PERGOLAS = gql`
{
    patios {
        nodes {
            patternedStamps {
                contentPatternedStamps {
                    name
                    image {
                        mediaItemUrl
                    }
                    ifYouExceed {
                        cost
                        exceed
                    }
                    stampedData {
                        maximum
                        minimum
                        cost
                    }
                }
                contentPatternedStampsFinish {
                    name
                    image {
                        mediaItemUrl
                    }
                    ifYouExceed {
                        cost
                        exceed
                    }
                    stampedData {
                        maximum
                        minimum
                        cost
                    }
                }
            }
        }
    }
}`

export default function PatternedStamps() {
    const { loading, data, error } = useQuery(PERGOLAS)
    return (
        <>
            <ElementPatternedStamps datastamps={!loading ? data.patios.nodes[0].patternedStamps.contentPatternedStamps : null} datafinish={!loading ? data.patios.nodes[0].patternedStamps.contentPatternedStampsFinish : null} load={loading} />
        </>
    )
}
