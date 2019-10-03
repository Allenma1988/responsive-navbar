import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './toolbar.css';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><a href="/">Allen Ma's Portfolio</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
               
                
            </div>
        </nav>
    </header>

);

export default Toolbar;