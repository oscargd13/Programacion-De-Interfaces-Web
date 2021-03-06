import React from 'react';
import {Menu, Container} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default function Navbar(){
    return(
        <div>
            <Menu inverted>
                <Container>
                    <Link to = '/'>
                        <Menu.Item name = "STAR WARS API" />
                    </Link>
                    <Link to = '/'>
                        <Menu.Item name = "Home" />
                    </Link>
                    <Link to = '/people'>
                        <Menu.Item name = "people" /> 
                    </Link>
                    <Link to = '/planets'>
                        <Menu.Item name = "planets" /> 
                    </Link>
                    <Link to = '/films'>
                        <Menu.Item name = "films" /> 
                    </Link>
                </Container>
            </Menu>
        </div>
    )
}