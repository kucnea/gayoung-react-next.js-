import React from 'react';
import { useState, useEffect } from "react";

export function BranchPcMobile() {  
    const [isMobile, setIsMobile] = useState(false); 

    useEffect(() => {        

        const mediaQuery = window.matchMedia('(max-width: 979px)');
        setIsMobile(mediaQuery.matches);

        const handleMediaChange = (e) => setIsMobile(e.matches);
        mediaQuery.addListener(handleMediaChange);

        // if(!document.getElementById('default2')){
        //     var link = document.createElement('link');
        //     link.id = 'default2';
        //     link.rel = 'stylesheet';
        //     link.type = 'text/css';
        //     link.href = '/styles/css/default2.css';
        //     link.media='all';
        //     console.log(link.href);
        //     document.getElementsByTagName('head')[0].appendChild(link);
        // }        

        if(document.getElementById('cssDevice')){
            var link = document.getElementById('cssDevice');
            if(isMobile) link.href= '/styles/css/mobile.css';
            else link.href = '/styles/css/pc.css';
        }else{
            var link = document.createElement('link');
            link.id = 'cssDevice';
            link.rel = 'stylesheet';
            link.type = 'text/css';
            if(isMobile) link.href= '/styles/css/mobile.css';
            else link.href = '/styles/css/pc.css';
            link.media='all';
            // console.log(link.href);
            document.getElementsByTagName('head')[0].appendChild(link);
        }

        if(!document.getElementById('style')){
            var link = document.createElement('link');
            link.id = 'style';
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = '/styles/css/style.css';
            link.media='all';
            // console.log(link.href);
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        if(!document.getElementById('style2')){
            var link = document.createElement('link');
            link.id = 'style2';
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = '/styles/css/style2.css';
            link.media='all';
            // console.log(link.href);
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        if(!document.getElementById('m_bdr')){
            var link = document.createElement('link');
            link.id = 'm_bdr';
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = '/styles/css/m_bdr.css';
            link.media='all';
            // console.log(link.href);
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        if(!document.getElementById('default')){
            var link = document.createElement('link');
            link.id = 'default';
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = '/styles/css/default.css';
            link.media='all';
            // console.log(link.href);
            document.getElementsByTagName('head')[0].appendChild(link);
        }          
        
        return () => mediaQuery.removeListener(handleMediaChange);

        // return () => {};
      },[isMobile]);

      const handleMediaChange = (mediaQuery) => {
        setIsMobile(mediaQuery.matches);
      };
  
  return (
    <>
    </>
  );
}


export default BranchPcMobile;

