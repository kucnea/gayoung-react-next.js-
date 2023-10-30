import React, {useEffect, useState} from 'react'

export function PageExplain(props) {

    useEffect(()=>{

    },);

    return (
      <>
        <div style={{backgroundColor:'lightblue', padding: '1% 1% 1% 1%', textAlign:'left'}}>
            {props.msg}
        </div>
      </>
    )
  }
  
  export default PageExplain
