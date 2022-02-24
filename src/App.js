import './App.css';
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { singerArr } from './SingerData';
import { Route, useHistory } from 'react-router-dom';


import TopNavBar from './components/TopNavBar';
import ChoicedSinger from './components/ChoicedSinger';
import ChoicedSong from './components/ChoicedSong';
import CurrentSong from './components/CurrentSong';
function App() {

  let data = singerArr;
  let [isMusicClick, setmusicClick] = useState(false);
  let [num, setNum] = useState(0);
  let [curMusicNum, setCurMusicNum] = useState(0);
  let history = useHistory();
  // function setScreenSize() {
  //   let vh = window.innerHeight * 0.01;
  //   let vw = window.innerWidth * 0.01;
  //   document.documentElement.style.setProperty("--vh", `${vh}px`);
  //   document.documentElement.style.setProperty("--vw", `${vw}px`);
  // }
  const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    doc.style.setProperty('--app-height-cur', `${window.innerHeight}px`)
  }
  window.addEventListener('resize', appHeight)
  appHeight()
  // useEffect(() => {
  //   setScreenSize();
  // });
  function onChnageCur(num){
    setCurMusicNum(num);
    setmusicClick(true);
  }
  function returnPage(){
    history.goBack();
    setmusicClick(false);
  }
  return (
    <div className={isMobile ? 'm_App' : 'App'}
    >
      {isMobile //모바일
      ? isMusicClick //모바일, 모달 
        ? 
        <Route exact path='/CurrentMusic'>
            <CurrentSong 
              isMobile={isMobile}
              num={num}
              data={data}
              curMusicNum={curMusicNum}
              returnPage={returnPage}
            >
            </CurrentSong>
          
        </Route>
        : 
        <Route exact path='/music_player_test'>
          <div className='mContainer'>
          <TopNavBar isMobile={isMobile} />
          <ChoicedSinger 
            isMobile={isMobile} 
            data={data}
            num={num}
            setNum={setNum}
          />
          <ChoicedSong
            isMobile={isMobile}
            setmusicClick={setmusicClick}
            setNum={setNum}
            data={data}
            num={num}
            curMusicNum={curMusicNum}
            onChnageCur={onChnageCur}
          >
          </ChoicedSong>
        </div>
        </Route>
      : (isMusicClick ? null : <div></div>) //pc
      }
    </div>
  );
}

export default App;
