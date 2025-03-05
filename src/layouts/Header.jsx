import React from 'react'
import { Image, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'

const Header = () => {
    return (
        <div className='header'>
            <Container className='d-flex align-items-center justify-content-between'>
                <Link className="navbar-brand">
                    <Image src={Logo} alt='logo' className='img-fluid' />
                </Link>
                <h6> Already have an account. <Link> Sign In now.
                    Owner</Link></h6>
            </Container >
        </div>
    )
}

export default Header