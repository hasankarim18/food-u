import React, { useEffect } from 'react';
import classes from './Navigation.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            isSticky: false
        };
    }

    stickyHandler = () => {
        const header = document.querySelector('.main_header')
        const scrollTop = window.scrollY



        if (scrollTop >= 100) {
            this.setState({
                isSticky: true
            })

            header.classList.add('is-sticky')
            header.classList.remove('non-sticky')
        } else {

            this.setState({
                isSticky: false
            })
            header.classList.remove('is-sticky')
            header.classList.add('non-sticky')
        }
        //  return scrollTop >= 150 ?  : 

    }

    componentDidMount() {
        window.addEventListener('scroll', this.stickyHandler)
        //   Window.addEventListener('scroll', this.stickyHandler)

    }

    componentDidUpdate() {

    }



    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {


        return (
            <div className="bg-dark main_header" >
                <Navbar className="container" color="dark" dark expand="md">
                    <NavbarBrand href="/">Food U</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse className="justify-content-end" isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}