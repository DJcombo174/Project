import React from 'react';
import './MainArea.css';
import {MdHome, MdPlaylistPlay, MdVideoLibrary, MdHistory, MdWatchLater, MdRssFeed} from 'react-icons/md'
import {FaFutbol, FaGripfire, FaMusic, FaNewspaper} from 'react-icons/fa'
import {BsFillCollectionPlayFill} from 'react-icons/bs'
import {GiGamepad} from 'react-icons/gi'
import ReactPlayer from 'react-player'

function MainArea() {
    return (
        <body>
            <div className='MainArea'>
                <div className='Sidebar'>
                    <div className='Home'>
                        <div className='Quick_Icon'>
                            <MdHome color='red' fontSize='3rem'/>
                            <div>Home</div>
                        </div>
                        <div className='Quick_Icon'>
                            <FaGripfire color='gray' fontSize='3rem'/>
                            <div>Trending</div>
                        </div>
                        <div className='Quick_Icon'>
                            <BsFillCollectionPlayFill color='gray' fontSize='3rem'/>
                            <div>subscriptions</div>
                        </div>
                    </div>
                    <div className='Library'>
                        <div className='Quick_Icon'>
                                <MdHome color='gray' fontSize='3rem'/>
                                <div>Home</div>
                        </div>
                        <div className='Quick_Icon'>
                                <MdVideoLibrary color='gray' fontSize='3rem'/>
                                <div>Video Library</div>
                        </div>
                        <div className='Quick_Icon'>
                                <MdHistory color='gray' fontSize='3rem'/>
                                <div>History</div>
                        </div>
                        <div className='Quick_Icon'>
                                <MdWatchLater color='gray' fontSize='3rem'/>
                                <div>Watch Later</div>
                        </div>
                        <div className='Quick_Icon'>
                                <MdPlaylistPlay color='gray' fontSize='3rem'/>
                                <div>YouTube Clone</div>
                        </div>
                    </div>
                    <div className='More_From_Youtube'>
                        <div className='Quick_Icon'>
                                    <GiGamepad color='gray' fontSize='3rem'/>
                                    <div>Gaming</div>
                        </div>
                        <div className='Quick_Icon'>
                                    <MdRssFeed color='gray' fontSize='3rem'/>
                                    <div>Live</div>
                        </div>
                        <div className='Quick_Icon'>
                                    <FaFutbol color='gray' fontSize='3rem'/>
                                    <div>Sports</div>
                        </div>
                        <div className='Quick_Icon'>
                                    <FaMusic color='gray' fontSize='3rem'/>
                                    <div>Musics</div>
                        </div>
                        <div className='Quick_Icon'>
                                    <FaNewspaper color='gray ' fontSize='3rem'/>
                                    <div>News</div>
                        </div>
                    </div>
                </div>

                <div className='Main'>
                    <div className='Videos'>
                        <div className='Video'>
                            <ReactPlayer
                            url='https://www.youtube.com/watch?v=1wDHbOdqjTE'
                            height='170px'
                            width='280px'
                            controls/>
                            <br></br>
                            <div className='Logo'>
                                <img src='/images/dp.jpg' alt='React' 
                                style={{height:'35px', width:"35px",borderRadius:'50%'}}/>
                                <div>hello shamen</div>
                            </div>
                            <br></br>
                            <div className='view'>
                                1,962,947 views | May 23, 2017
                            </div>
                        </div>
                        <div className='Video'>
                            <ReactPlayer
                            url='https://www.youtube.com/watch?v=1wDHbOdqjTE'
                            height='170px'
                            width='280px'
                            controls/>
                            <br></br>
                            <div className='Logo'>
                                <img src='/images/dp.jpg' alt='React' 
                                style={{height:'35px', width:"35px",borderRadius:'50%'}}/>
                                <div>Nice meme</div>
                            </div>
                            <br></br>
                            <div className='view'>
                                1,962,957 views | May 25, 2017
                            </div>
                        </div>
                        <div className='Video'>
                            <ReactPlayer
                            url='https://www.youtube.com/watch?v=1wDHbOdqjTE'
                            height='170px'
                            width='280px'
                            controls/>
                            <br></br>
                            <div className='Logo'>
                                <img src='/images/dp.jpg' alt='React' 
                                style={{height:'35px', width:"35px",borderRadius:'50%'}}/>
                                <div>Nice meme</div>
                            </div>
                            <br></br>
                            <div className='view'>
                                1,962,957 views | May 25, 2017
                            </div>
                        </div>
                        <div className='Video'>
                            <ReactPlayer
                            url='https://www.youtube.com/watch?v=1wDHbOdqjTE'
                            height='170px'
                            width='280px'
                            controls/>
                            <br></br>
                            <div className='Logo'>
                                <img src='/images/dp.jpg' alt='React' 
                                style={{height:'35px', width:"35px",borderRadius:'50%'}}/>
                                <div>Nice meme</div>
                            </div>
                            <br></br>
                            <div className='view'>
                                1,962,957 views | May 25, 2017
                            </div>
                        </div>
                        <div className='Video'>
                            <ReactPlayer
                            url='https://www.youtube.com/watch?v=1wDHbOdqjTE'
                            height='170px'
                            width='280px'
                            controls/>
                            <br></br>
                            <div className='Logo'>
                                <img src='/images/dp.jpg' alt='React' 
                                style={{height:'35px', width:"35px",borderRadius:'50%'}}/>
                                <div>omg this is actually working this is text</div>
                            </div>
                            <br></br>
                            <div className='view'>
                                1,962,957 views | May 25, 2017
                            </div>
                        </div>
                        <div className='Video'>
                            <ReactPlayer
                            url='https://www.youtube.com/watch?v=1wDHbOdqjTE'
                            height='170px'
                            width='280px'
                            controls/>
                            <br></br>
                            <div className='Logo'>
                                <img src='/images/dp.jpg' alt='React' 
                                style={{height:'35px', width:"35px",borderRadius:'50%'}}/>
                                <div>Nice meme</div>
                            </div>
                            <br></br>
                            <div className='view'>
                                1,962,957 views | May 25, 2017
                            </div>
                        </div>
                        <div className='Video'>
                            <ReactPlayer
                            url='https://www.youtube.com/watch?v=1wDHbOdqjTE'
                            height='170px'
                            width='280px'
                            controls/>
                            <br></br>
                            <div className='Logo'>
                                <img src='/images/dp.jpg' alt='React' 
                                style={{height:'35px', width:"35px",borderRadius:'50%'}}/>
                                <div>Nice meme</div>
                            </div>
                            <br></br>
                            <div className='view'>
                                1,962,957 views | May 25, 2017
                            </div>
                        </div>
                        <div className='Video'>
                            <ReactPlayer
                            url='https://www.youtube.com/watch?v=1wDHbOdqjTE'
                            height='170px'
                            width='280px'
                            controls/>
                            <br></br>
                            <div className='Logo'>
                                <img src='/images/dp.jpg' alt='React' 
                                style={{height:'35px', width:"35px",borderRadius:'50%'}}/>
                                <div>Nice meme</div>
                            </div>
                            <br></br>
                            <div className='view'>
                                1,962,957 views | May 25, 2017
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}
export default MainArea