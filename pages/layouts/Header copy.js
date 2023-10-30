import React, {useEffect} from 'react'
import * as logic from '../logics/drawScreen'

function Header() {

    useEffect(()=>{
        logic.setting(ScreenName);
    },[]);

    const ScreenName = "Header";

    return (
    <>
    <div id={ScreenName}>

    </div>
    </>
    )
  }
  
  export default Header