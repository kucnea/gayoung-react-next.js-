import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import detailCEO from '/public/image/detailCEO.jpg'



export function Ceo() {

    useEffect(()=>{

    },);

    return (
      <>
      <div className='page'>
          <div className='page_wrap'>
              <div className='page_in'>
                 <div className='pageTitle' style={{float:'left'}}>
                 <br/>
                    원장/부원장 소개
                 </div>
                 <hr style={{color:'#e2e2e2', height: '1px', display: 'block', width:'100%', marginTop:'8%'}}/>
                 <br/>
                 <div style={{backgroundColor:'lightblue', padding: '1% 1% 1% 1%', textAlign:'left'}}>
                    {process.env.NEXT_PUBLIC_REACT_APP_CENTER_NAME}의 원장/부원장을 소개합니다.
                 </div>
                 <div style={{display:'flex', marginTop:'3%', marginLeft:'3%'}}>
                    <span style={{textAlign:'left'}}>
                        <a style={{fontSize:'2.5em', fontWeight:'bold'}}>이가영 원장<br/><br/></a>
                        <a style={{fontSize:'1.1em', fontWeight:'bold'}}>치료분야<br/><br/></a>
                        ABA / ESDM<br/><br/><br/>

                        <a style={{fontSize:'1.1em', fontWeight:'bold'}}>학력<br/><br/></a>
                        서울대학교 아동학 박사과정<br/>
                        가톨릭대학교 일반대학원 발달심리학 석사<br/>
                        가톨릭대학교 심리학사, 아동학사<br/>
                        연세대학교 미래교육원 응용행동분석<br/>
                        University of California Santa Barbara Applied Behavior Analysis<br/><br/><br/>
                        
                        <a style={{fontSize:'1.1em', fontWeight:'bold'}}>강의<br/><br/></a>
                        국제대학교 상담심리치료학과 외래교수<br/>
                        AMAZON 임직원 대상 - Coping with critical illness<br/>
                        화이자 임직원 강의 - 마음의 병에 대처하는 방법<br/>
                        Emerson 임직원 강의 - 아이를 위한 회복탄력성<br/>
                        시립동구어린이집 - 부모교육<br/><br/><br/>

                        <a style={{fontSize:'1.1em', fontWeight:'bold'}}>자격사항<br/><br/></a>
                        BCBA(국제응용행동분석전문가자격) [BACB]<br/>
                        임상심리사(보건복지부 산업인력공단)<br/>
                        청소년상담사(여성가족부)<br/>
                        놀이심리상담사(한국발달지원학회)<br/><br/><br/>

                        <a style={{fontSize:'1.1em', fontWeight:'bold'}}>교육사항<br/><br/></a>
                        ADOS-2 Introductory Workshop<br/>
                        ESDM Advanced Workshop, University of Wollongong, Australia<br/>
                        ESDM Introductory Workshop, University of California Davis<br/>
                        PECS LEVEL 1 Training Workshop<br/>
                        PECS LEVEL 2 Training Workshop<br/>
                        DIR FloorTime 101 Workshop<br/>
                        K-WPPSI-V 한국웩슬러 유아지능검사 워크샵<br/>
                        K-WISC-V 한국웩슬러 아동 지능검사 워크샵<br/>
                        K-WAIS-IV 한국웩슬러 성인 지능검사 워크샵<br/>
                        K-CBCL 아동청소년 행동평가척도 워크샵<br/>
                        베일리 영유아 발달검사 워크샵<br/>
                        치료놀이 워크샵<br/>
                        정신약물학 워크샵<br/>
                        놀이평가 워크샵<br/>
                        아동심리평가 워크샵<br/><br/><br/>

                        <a style={{fontSize:'1.1em', fontWeight:'bold'}}>경력사항<br/><br/></a>
                        前) 강북aba아동발달연구소 부원장<br/>
                        前) 늘해랑 인지심리연구소<br/>
                        前) 가톨릭대학교 아동심리치료연구실<br/>
                        前) 동작아이존<br/>
                        前) 파란aba언어행동연구소<br/>
                        前) 한국aba행동발달연구소 수련<br/>
                        前) 인천 WEE센터<br/>
                        前) 행복정신건강센터<br/>
                        前) 서울발달심리상담센터<br/>
                        前) 행복정신건강센터<br/>
                        前) 다정한지역아동센터<br/>
                        現) 구리언어심리상담센터<br/><br/><br/>
                    </span>
                 </div>


                 <div style={{display:'flex', marginTop:'3%', marginLeft:'3%'}}>
                    <span style={{textAlign:'left'}}>
                        <a style={{fontSize:'2.5em', fontWeight:'bold'}}>남원희 부원장<br/><br/></a>
                        <a style={{fontSize:'1.1em', fontWeight:'bold'}}>치료분야<br/><br/></a>
                        ABA / ESDM<br/><br/><br/>

                        <a style={{fontSize:'1.1em', fontWeight:'bold'}}>학력<br/><br/></a>
                        가톨릭대학교 심리학사<br/>
                        가톨릭대학교 일반대학원 발달심리학 석사<br/><br/><br/>
                        
                        <a style={{fontSize:'1.1em', fontWeight:'bold'}}>자격사항<br/><br/></a>
                        QBA(Qualitified Applied Behavior Analysis Credentialing Board) - 국제<br/>
                        응용행동분석전문가 자격<br/>
                        놀이심리상담사<br/>
                        청소년상담사<br/>
                        임상심리사<br/>
                        인지학습심리상담사 2급<br/><br/><br/>

                        <a style={{fontSize:'1.1em', fontWeight:'bold'}}>강의<br/><br/></a>
                        석관초등학교 교사연구 : 교실내 위기학생 이해와 문제행동 대처방법<br/><br/><br/>

                        <a style={{fontSize:'1.1em', fontWeight:'bold'}}>교육사항<br/><br/></a>
                        Early Start Denver Model – Introductory workshop<br/>
                        DIR Floortime 101 cerificate<br/>
                        ABA KOREA ACADEMY – COURSEWORK<br/>
                        K-WISC-Ⅴ 워크샵<br/>
                        K-WPPSI-Ⅳ 워크샵<br/>
                        발달평가 워크샵<br/>
                        놀이평가 워크샵<br/>
                        낯선상황절차(SSP)를 통한 영아애착분류 워크샵<br/>
                        애착증진부모교육 프로그램 워크샵<br/><br/><br/>

                        <a style={{fontSize:'1.1em', fontWeight:'bold'}}>경력사항<br/><br/></a>
                        前) 성북강북 HELP ME 위기학생컨설팅지원단 위원<br/>
                        前) 인천서부WEE센터<br/>
                        前) 가톨릭대학교 아동심리치료연구실<br/>
                        前) 이안아동발달연구소<br/>
                        前) 헬로스마일 목동점<br/>
                        前) 늘해랑인지심리연구소<br/>
                        前) 강북ABA아동발달연구소<br/>
                        現) 구리언어심리상담센터 부원장<br/><br/><br/>
                    </span>
                 </div>
              </div>
          </div>
      </div>
      </>
    )
  }
  
  export default Ceo
