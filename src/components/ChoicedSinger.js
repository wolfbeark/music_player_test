
import React from "react";

function ChoicedSinger({data, num, isMobile}){
    
    function SingerGenre({data, num, isMobile}){
        return(
            <div className={isMobile ? 'm_singerGenre_list' : 'singerGenre_list'}>
            {
                data[num].genre.map((a, i)=>{
                    return(
                        <span 
                        className={isMobile ? 'm_singerGenre_item' : 'singerGenre_item'}
                            key={i}>{`#${String(a).toUpperCase()}`}
                        </span>
                    );
                })
            }
            </div>
        );
    }
    
    return(
        <div className={isMobile ? 'm_choicedSinger' : 'choicedSinger'}>
            <div className={isMobile ? 'm_singerImg' : 'singerImg'}>
                <div className="preSinger">

                </div>
                <img 
                    alt="/" 
                    src={data[num].singerImg}
                    style={{
                        boxShadow: `0px 0px 80rem 30rem ${data[num].imgShadow}`
                    }}  
                />
                <div className="nextSinger">

                </div>
            </div>
            <div className={isMobile ? 'm_singerIntro' : 'singerIntro'}>
                <div className="singerName">
                    <span>{String(data[num].singerName).toUpperCase()}</span>
                </div>
                <div className="singerLikeCount">
                    <span>THIS SINGER'S FAN</span>
                    <span>♥ {data[num].likeCount}</span>
                </div>
                <div className="singerGenre">
                    <SingerGenre isMobile={isMobile} data={data} num={num}></SingerGenre>
                </div>
            </div>
        </div>
    );
}

export default ChoicedSinger;