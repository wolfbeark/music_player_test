
import React from "react";

function ChoicedSinger({data, num, isMobile}){
    
    function SingerGenre({data, num}){
        return(
            <div>
            {
                data[num].genre.map((a, i)=>{
                    return(
                        <span key={i}>{a}</span>
                    );
                })
            }
            </div>
        );
    }
    
    return(
        <div className={isMobile ? 'm_choicedSinger' : 'choicedSinger'}>
            <div className={isMobile ? 'm_singerImg' : 'singerImg'}>

            </div>
            <div className={isMobile ? 'm_singerIntro' : 'singerIntro'}>
                <div>name</div>
                <span>like</span>
                <div>
                    <SingerGenre data={data} num={num}></SingerGenre>
                </div>
            </div>
        </div>
    );
}

export default ChoicedSinger;