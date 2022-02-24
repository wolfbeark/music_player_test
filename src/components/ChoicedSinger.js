
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

function ChoicedSinger({data, num, isMobile, setNum}){
    
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
    function increaseNum(){
        let _num = num;
        if(_num != 3){
             _num++;
             setNum(_num);
        }
    }
    function decreaseNum(){
        let _num = num;
        if(_num != 0){
             _num--;
             setNum(_num);
        }
    }
    
    return(
        <div className={isMobile ? 'm_choicedSinger' : 'choicedSinger'}>
            <div className={isMobile ? 'm_singerImg' : 'singerImg'}>
                <div className="preSinger"
                    style={num === 0 
                        ? {visibility: 'hidden'}
                        : {visibility: 'visible'}}    
                >
                    <FontAwesomeIcon 
                        icon={faCircleArrowLeft} 
                        className='preSingerBtn'
                        onClick={decreaseNum} 
                    />
                </div>
                <img 
                    alt="/" 
                    src={data[num].singerImg}
                    style={{
                        boxShadow: `0px 0px 30px 10px ${data[num].imgShadow}`,
                        
                    }}  
                />
                <div className="nextSinger"
                    style={num === 3 
                        ? {visibility: 'hidden'}
                        : {visibility: 'visible'}}
                    >
                    <FontAwesomeIcon 
                        icon={faCircleArrowRight} 
                        className='nextSingerBtn'
                        onClick={increaseNum}
                        />
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