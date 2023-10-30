import React, {useEffect} from 'react'
import * as logic from '../logics/drawScreen'

// posts가 없으면 빈배열 사용
function Footer({ posts = [] }) {

    useEffect(()=>{
        logic.setting(ScreenName);
    },[]);

    const ScreenName = "Footer";

    return (
    <>
    <div id={ScreenName}>

    </div>
    </>
    )
  }
  
  export default Footer