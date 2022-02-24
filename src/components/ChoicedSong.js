
import React from "react";
import { Link } from "react-router-dom";

function ChoicedSong({isMobile, data, num, onChnageCur }){

    return(
        <ul className={isMobile ? 'm_choicedSong' : 'choicedSong'}>
            {data[num].songArr.map((a, i)=>{
                return(
                    <Link to='/CurrentMusic' key={i} className='choicedSong_item'
                        
                        >
                        <li key={i}
                            onClick={()=>{
                                onChnageCur(i);
                            }}
                        >
                            <img alt="/"src={a.songImg}
                                style={{
                                    boxShadow: `0px 0px 10px 5px ${a.songImgShadow}`
                                }} />
                            <div className="choicedSong_desc">
                                <span>{a.songName}</span>
                                <span>{data[num].singerName}</span>
                            </div>
                            <div className="choicedSong_Count">
                                <span>
                                    {`${a.songLikeCount} ♥`}
                                </span>
                            </div>
                        </li>
                    </Link>
                    
                );
            })}
        </ul>
    );
}

export default ChoicedSong;