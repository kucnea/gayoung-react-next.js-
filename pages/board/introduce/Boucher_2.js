import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';

export function Boucher_2() {

    useEffect(()=>{

    },);

    return (
      <>
        <div>
            <table className='w100' style={{backgroundColor:'#fbfbfb'}}>
                <tbody>
                    <th className='w30'>
                    치료지원서비스
                    </th>
                    <th className='w70' style={{textAlign:'left'}}>
                        <br/><br/>
                        특수교육대상자의 장애 교정, 장애 경감 및<br/>
                        2차 장애 예방과 장애 개선을 통한 사회적응력 향상.<br/>
                        교육을 효율적으로 실시 하기 위한 서비스
                        <br/><br/><br/>
                    </th>
                </tbody>
            </table>

            <div style={{display:'flex'}}>
                <span style={{textAlign:'left'}}>
                    <a style={{fontSize:'1.5em', fontWeight:'blod'}}><br/>▶ 지원대상 <br/><br/></a>
                    <a style={{fontSize:'1.2em'}}>
                    - 유,초,중,고 교육과정에 재학하는 특수교육대상자 중, 치료지원이 필요한 학생 및 만 3세 미만의 장애 영아<br/>
                    &nbsp;&nbsp;* 특수교육기관이 아닌 어린이집 등의 기관에 재원 중인 원아 및 취악 연기.유예자는 제외<br/>
                    - 경기도교육청 소속 특수교육대상자 중 치료지원, 방과후 서비스 대상 학생<br/>
                        <br/><br/>
                    </a>
                    <a style={{fontSize:'1.5em', fontWeight:'blod'}}>▶ 지원내용<br/><br/></a>
                    <a style={{fontSize:'1.2em'}}>
                    - 물리, 작업, 언어, 청능, 음악, 미술, 행동, 감각통합, 심리운동 (수영, 승마 불가)<br/>
                    <br/>
                    - 지원금액<br/>
                    - 월 150,000원<br/><br/>
                    </a>
                </span>
            </div>
        
            <div style={{display:'flex'}}>
                <span style={{textAlign:'left'}}>
                    <a style={{fontSize:'1.5em', fontWeight:'blod'}}><br/>▶신청방법<br/><br/></a>
                    - 교육청, 특수교육지원센터(031-334-7552), 특수학교 학생은 해당 학교
                    <br/>
                    <br/>
                    <a style={{fontSize:'1.5em', fontWeight:'blod'}}>▶문의<br/><br/></a>
                    - 구리언어심리상담센터 ☎ 031-555-5527<br/>
                </span>
            </div>
        </div>
      </>
    )
  }
  
  export default Boucher_2
