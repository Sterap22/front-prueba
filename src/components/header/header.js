import React from 'react'
import { Link } from 'react-router-dom'
import { closeSession, isActive } from '../../utils/validations'
import LoginModal from '../modals/loginmodal/loginModal'
import Registermodal from '../modals/registermodal/registermodal'

export default function Header() {
    return (
        <nav class={`navbar navbar-expand-lg bg-light`} id="navId">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">MyFront</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        {
                            isActive()?(
                                <li class="nav-item">
                                    <Link class="nav-link" aria-current="page" onClick={closeSession}>Cerrar sesión</Link>
                                </li>
                            ):(
                                <>
                                    <li class="nav-item">
                                        <LoginModal />
                                    </li>
                                    <li class="nav-item">
                                        <Registermodal />
                                    </li>
                                </>
                            )
                        }
                        
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}
