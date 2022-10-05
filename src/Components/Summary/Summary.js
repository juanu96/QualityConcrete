import React, { useState, useContext } from 'react'
import { Store } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScrewdriverWrench, faGear, faMoneyCheck, faArchway, faShapes, faSwatchbook } from '@fortawesome/free-solid-svg-icons';
import './Summary.css'

export default function Summary() {
    const store = useContext(Store);
    console.log(store.Doptions)
    return (
        <div className='summary-content'>
            <div className='inner-summary-content'>
                <div className='flex-icon-content'>
                    <FontAwesomeIcon icon={faScrewdriverWrench} className='stepIcon' />
                    <div className='summary-text-content'>
                        <h3>{store.CurrentService === 'PATIO' ? 'Pergolas' : 'Styles'}</h3>
                        <img src={store.CurrentService === 'PATIO' ? store.Ppergolas.image.mediaItemUrl : store.CurrentService === 'RETAINING WALLS' ? store.Rstyle.image.mediaItemUrl : store.CurrentService === 'DRIVEWAYS' ? store.Dstyles.image.mediaItemUrl : null} />
                        <p>{store.CurrentService === 'PATIO' ? store.Ppergolas.name : store.CurrentService === 'RETAINING WALLS' ? store.Rstyle.name : store.CurrentService === 'DRIVEWAYS' ? store.Dstyles.name : null}</p>
                    </div>
                </div>
                <div className='flex-icon-content'>
                    <FontAwesomeIcon icon={faShapes} className='stepIcon' />
                    <div className='summary-text-content'>
                        <h3>{store.CurrentService === 'PATIO' ? 'Shapes' : store.CurrentService === 'RETAINING WALLS' ? 'Custom Design' : null}</h3>
                        <img src={store.CurrentService === 'PATIO' ? store.Pshapes.image.mediaItemUrl : store.CurrentService === 'RETAINING WALLS' ? store.RcustomDesign.image.mediaItemUrl : store.CurrentService === 'DRIVEWAYS' ? store.Dshapes.image.mediaItemUrl : null} />
                        <p>{store.CurrentService === 'PATIO' ? store.Pshapes.name : store.CurrentService === 'RETAINING WALLS' ? store.RcustomDesign.name : store.CurrentService === 'DRIVEWAYS' ? store.Dshapes.name : null}</p>
                    </div>
                </div>
                <div className='flex-icon-content'>
                    <FontAwesomeIcon icon={faArchway} className='stepIcon' />
                    <div className='summary-text-content'>
                        <h3>{store.CurrentService === 'PATIO' ? 'Patterned Stamps' : store.CurrentService === 'RETAINING WALLS' ? 'Type Of Brick' : store.CurrentService === 'DRIVEWAYS' ? 'Advantages' : null}</h3>
                        {store.CurrentService === 'PATIO' ?
                            <div className='stamped-finish'>
                                {store.PpatterndStampsstamped ? <div>
                                    <h4>Stamped</h4>
                                    <img src={store.PpatterndStampsstamped.image.mediaItemUrl} />
                                    <p>{store.PpatterndStampsstamped.name}</p>
                                </div> : null}
                                {store.PpatterndStampsfinish ? <div>
                                    <h4>Finish</h4>
                                    <img src={store.PpatterndStampsfinish.image.mediaItemUrl} />
                                    <p>{store.PpatterndStampsfinish.name}</p>
                                </div> : null}
                            </div> :
                            store.CurrentService === 'RETAINING WALLS' ?
                                <div className='brick'>
                                    <img src={store.Rtypebrick.image.mediaItemUrl} />
                                    <p>{store.Rtypebrick.name}</p>
                                </div> :
                                store.CurrentService === 'DRIVEWAYS' ? <div>
                                    <p>{store.Dadvantages.title}</p>
                                </div>
                                    : null
                        }

                    </div>
                </div>
                <div className='flex-icon-content'>
                    <FontAwesomeIcon icon={faSwatchbook} className='stepIcon' />
                    <div className='summary-text-content'>
                        <h3>{store.CurrentService === 'DRIVEWAYS' ? 'Options & Costs' : 'Color Selected'}</h3>
                        <h5>{store.PcolorPallete.type}</h5>
                        {
                            store.CurrentService === 'DRIVEWAYS' ?
                                <>
                                    <img src={store.Doptions.image.mediaItemUrl} />
                                    <p>{store.Doptions.name}</p>
                                </>
                                : null
                        }
                        <div style={
                            store.CurrentService === 'PATIO' ? { backgroundColor: store.PcolorPallete.color.color, height: '4rem', borderRadius: '0.25rem' }
                                : store.CurrentService === 'RETAINING WALLS' ? { backgroundColor: store.RcolorPallete.color.color, height: '4rem', borderRadius: '0.25rem' }
                                    : null
                        }></div>
                        <p>{store.CurrentService === 'PATIO' ? store.PcolorPallete.color.name : store.CurrentService === 'RETAINING WALLS' ? store.RcolorPallete.color.name : null}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
