
import GenresInDb from '../GenresInDb';
import LastMovie from '../LastMovie';
import SideBar from '../SideBar';
import ContentRow from '../ContentRow';
import TopBar from '../TopBar';
import '../../assets/css/movie.css'


function Main () {
    return (
    <div className='movie' >
        <SideBar />
        <div>
            <TopBar />
            <ContentRow/>
            <div className= 'lastGenres'>
                <LastMovie/>
                <GenresInDb/>
             </div>
        </div>
    </div>
    )
}

export default Main