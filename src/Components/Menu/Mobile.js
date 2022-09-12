import React, { useState, useContext } from 'react'
import { Store } from '../../App';
import './Mobile.css'

export default function Mobile() {
    const store = useContext(Store);
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="w-full bg-[white] shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center lg:flex md:px-8">
                <div>
                    <div className="flex flex-row items-center justify-between py-3 md:py-5">
                        <a href="/">
                            <img className='img-logo-mobile' src='https://qualityconcreteconstructionllc.com/wp-content/uploads/2022/06/Logo.svg' />
                        </a>
                        <div className="lg:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8 md:w-12 md:h-12"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8 md:w-12 md:h-12"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`panelmobilemenu flex-1 justify-self-center pb-3 mt-8 lg:hidden md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                        <ul className='menu-items'>
                            <li onClick={() => store.setCurrentService('PATIO')} className={store.CurrentService === 'PATIO' ? 'item-menu menu-active' : 'item-menu'}><p>PATIO</p></li>
                            <li onClick={() => store.setCurrentService('RETAINING WALLS')} className={store.CurrentService === 'RETAINING WALLS' ? 'item-menu menu-active' : 'item-menu'}><p>RETAINING WALLS</p></li>
                            <li onClick={() => store.setCurrentService('DRIVEWAYS')} className={store.CurrentService === 'DRIVEWAYS' ? 'item-menu menu-active' : 'item-menu'}><p>DRIVEWAYS</p></li>
                            <li onClick={() => store.setCurrentService('CALCULATOR')} className={store.CurrentService === 'CALCULATOR' ? 'item-menu menu-active' : 'item-menu'}><p>CALCULATOR</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
