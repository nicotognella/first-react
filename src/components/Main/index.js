import React from 'react';
import GenresInDb from './GenresInDb';
import LastMovie from './LastMovie';
import SideBar from './SideBar';
import NavBar from '../TopBar';
import ContentRowTop from './ContentRowTop';



function Main () {
    return (
    <div className='movie' >
        <SideBar />
        <div>
            <NavBar />
            <ContentRowTop title='App dashboard'/>
            <div className= 'lastGenres'>
                <LastMovie/>
                <GenresInDb/>
            </div>
        </div>
    </div>
    )
}

export default Main