import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import advisor from '/public/image/advisor.png'
import PageExplain from '../../layouts/PageExplain';



export function Advisor() {

    useEffect(()=>{

    },);

    return (
      <>
      <div className='page'>
          <div className='page_wrap'>
              <div className='page_in'>
                 <div className='pageTitle' style={{float:'left'}}>
                 <br/>
                    자문의원 소개
                 </div>
                 <hr style={{color:'#e2e2e2', height: '1px', display: 'block', width:'100%', marginTop:'8%'}}/>
                 <br/>
                 <PageExplain msg={process.env.NEXT_PUBLIC_REACT_APP_CENTER_NAME+"의 자문의원을 소개합니다."}/>
                 {/* <div style={{backgroundColor:'lightblue', padding: '1% 1% 1% 1%', textAlign:'left'}}>
                    {process.env.NEXT_PUBLIC_REACT_APP_CENTER_NAME}의 자문의원을 소개합니다.
                 </div> */}
                 <div style={{display:'flex', marginTop:'3%', marginLeft:'3%'}}>
                    <span style={{textAlign:'left'}}>
                        <a style={{fontSize:'2.5em', fontWeight:'bold'}}>이지혜 교수<br/></a>
                        국제대학교 상담심리치료과 교수<br/><br/><br/>
                        
                        <a style={{fontSize:'1.1em', fontWeight:'bold'}}>학력<br/><br/></a>
                        국민대학교 교육심리, 상담 및 특수교육학 박사<br/>
                        국민대학교 상담심리학 석사<br/><br/><br/>
                        
                        <a style={{fontSize:'1.1em', fontWeight:'bold'}}>경력<br/><br/></a>
                        국민대학교 학생생활상담센터 총괄업무<br/>
                        한국청소년상담학회 상담전문가 1급<br/>
                        한국교육심리학회 학습컨설턴트<br/>
                        한국상담심리학회 상담심리사<br/>
                        한국상담학회 전문상담사<br/>
                        한국사진치료학회 부학회장, 수련감독<br/>
                        한국영상영화치료학회 서울경기지회장, 전문수련감독<br/>
                        한국독서치료학회 대외교류위원장, 수련감독<br/><br/><br/>
                    </span>
                 </div>

                 <div style={{display:'flex', marginTop:'3%', marginLeft:'3%'}}>
                    <Image src={advisor} alt='자문의원' style={{width: '70%', height: '30%'}}/>
                 </div>
              </div>
          </div>
      </div>
      </>
    )
  }
  
  export default Advisor
