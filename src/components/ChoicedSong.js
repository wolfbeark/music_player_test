
import React from "react";

function ChoicedSong({isMobile, data, num}){
    return(
        <ul className={isMobile ? 'm_choicedSong' : 'choicedSong'}>
            {data[num].songArr.map((a, i)=>{
                return(
                    <li 
                        key={i}
                        className='choicedSong_item'    
                    >
                        <img alt="/"src={a.songImg}
                            style={{
                                boxShadow: `0px 0px 30rem 10rem ${a.songImgShadow}`
                            }} />
                        <div className="choicedSong_desc">
                            <span>{a.songName}</span>
                            <span>{data[num].singerName}</span>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default ChoicedSong;