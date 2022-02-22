import React, { memo, useEffect, useState } from "react";

function TopNavBar(props){
    let [time, setTime] = useState(new Date());
    useEffect(()=>{
        const timeUpdate = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return ()=>{
            clearInterval(timeUpdate);
        };
    }, [])
    return(
        <div 
            className={props.isMobile
                ? 'm_TopNavBar'
                : 'TopNavBar' }
        >
            <span>TEST PAGE</span>
            <span>
                {time.toLocaleTimeString(
                    'en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }
                )}
            </span>
        </div>
    );
}

export default memo(TopNavBar);