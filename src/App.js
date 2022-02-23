import './App.css';
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { singerArr } from './SingerData';

import TopNavBar from './components/TopNavBar';
import ChoicedSinger from './components/ChoicedSinger';
function App() {

  let [data, setData] = useState(singerArr);
  let [modalClick, setModalClick] = useState(false);
  let [num, setNum] = useState(0);
  // function setScreenSize() {
  //   let vh = window.innerHeight * 0.01;
  //   let vw = window.innerWidth * 0.01;
  //   document.documentElement.style.setProperty("--vh", `${vh}px`);
  //   document.documentElement.style.setProperty("--vw", `${vw}px`);
  // }
  const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  }
  window.addEventListener('resize', appHeight)
  appHeight()
  console.log(window.innerHeight);
  // useEffect(() => {
  //   setScreenSize();
  // });
  console.log(isMobile);
  return (
    <div className={isMobile ? 'm_App' : 'App'}>
      {isMobile //모바일
      ? modalClick //모바일, 모달 
        ? null 
        : 
        <div className='mContainer'>
          <TopNavBar isMobile={isMobile} />
          <ChoicedSinger 
          isMobile={isMobile} 
          data={data}
          num={num}
          />
        </div>
        
      : (modalClick ? null : <div></div>) //pc
      }
    </div>
  );
}

export default App;
