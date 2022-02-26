
import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";


function CurrentSong({isMobile, num, data, curMusicNum, returnPage}){

    function CurSongTop({isMobile}){
        return(
            <div className={isMobile ? 'm_curSongTop' : 'curSongTop'}>
                <FontAwesomeIcon 
                        icon={faCircleArrowLeft} 
                        className='returnPageBtn'
                        onClick={returnPage} 
                    />
            </div>
        );
    }
    return(
        <div className="mContainer_curSong">
            <CurSongTop isMobile={isMobile}></CurSongTop>
            <div className="curSongInfo">
                <img 
                    src={data[num].songArr[curMusicNum].songImg} 
                    alt='/' 
                    style={{
                        boxShadow: `0px 0px 30px 10px ${data[num].songArr[curMusicNum].songImgShadow}`
                    }}  
                />
                <span className="curSongInfo_title">{data[num].songArr[curMusicNum].songName}</span>
                <span>{data[num].singerName}</span>
            </div>
            <div className="curSongPlayer">
                <div className="curSongPlayerBox">
                    <AudioPlayer className="player"
                        layout="stacked"
                        autoPlay
                        volume='0.5'
                        src={process.env.PUBLIC_URL + data[num].songArr[curMusicNum].song}>
                    </AudioPlayer>
                </div>
            </div>
        </div>
    );
}

export default CurrentSong;