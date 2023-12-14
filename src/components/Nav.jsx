import React from 'react'
import { NavLink } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go"
import { FaToolbox } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai"

const Nav = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <NavLink to='/'>
                        <GoHomeFill />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/projects'>
                        <FaToolbox />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/tech-stacks'>
                        <FaCode />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>
                        <AiFillMessage />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav