import React, {useEffect} from 'react'
import * as logic from './logics/drawScreen'

export function Board() {

    useEffect(()=>{
      logic.setting(ScreenName);
    },[]);

    const ScreenName = "Baord";

    return (
      <>
      <div id={ScreenName}>
  
      </div>
      </>
    )
  }
  
  export default Index