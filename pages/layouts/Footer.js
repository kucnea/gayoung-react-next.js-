import React, {useEffect} from 'react'
import Image from 'next/image'
import toplogo from '/public/image/logo_1.png'
import comp from '/public/image/guri_logo.jpg'
import github from '/public/image/githubIcon.png'

// posts가 없으면 빈배열 사용
function Footer({ posts = [] }) {

    useEffect(()=>{
        
    },[]);

    

    return (
    <>
    <div id="footer" className='page'>
        <div id="footer_wrap" className='page_wrap'>
            <div id="footer_in" className='page_in'>
                <div id="footer_logo" className='logo'>
                    <Image src={toplogo} alt="logo" style={{width: '85%', height: '10%'}} />
                </div>
                <div id="footer_intro">
                    <span>
                        <b>구리언어심리상담센터</b>
                        <br/>
                        주소 : {process.env.NEXT_PUBLIC_REACT_APP_CENTER_ADR_1} | 대표 : {process.env.NEXT_PUBLIC_REACT_APP_CENTER_CEO} <br/>
                        전화 : {process.env.NEXT_PUBLIC_REACT_APP_CENTER_TEL} | 팩스 : {process.env.NEXT_PUBLIC_REACT_APP_CENTER_FAX} | 사업자등록번호 : {process.env.NEXT_PUBLIC_REACT_APP_CENTER_CODE}<br/>
                        <br/>
                        COPYRIGHT © 2023 ALL RIGHTS RESERVED BY 이민호. &nbsp;&nbsp;&nbsp;
                        <div id="github_icon">
                            <Image src={github} alt="이민호" style={{width: '15%', height: '20%'}}/>
                        </div>                        
                        <br/>COPYRIGHT © 2023 ICONS RIGHTS RESERVED BY icons8 https://icons8.com
                    </span>
                </div>
                <div id="footer_comp">
                    <Image src={comp} alt="comp" style={{width: '40%', height: '20%'}}/>
                </div>
            </div>
        </div>
    </div>
    </>
    )
  }
  
  export default Footer