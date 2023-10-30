import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import teacher from '/public/image/introduce/teacher.png'
import PageExplain from '../../layouts/PageExplain';



export function Teacher() {

    useEffect(()=>{

    },);

    return (
      <>
      <div className='page'>
          <div className='page_wrap'>
              <div className='page_in'>
                 <div className='pageTitle' style={{float:'left'}}>
                 <br/>
                    치료사 소개
                 </div>
                 <hr style={{color:'#e2e2e2', height: '1px', display: 'block', width:'100%', marginTop:'8%'}}/>
                 <br/>
                 <PageExplain msg="영역별 전문 치료사 선생님을 소개합니다."/>
                 <table style={{marginTop:'5%'}}>
                    <tbody>
                        <tr>
                            <th className='w40'>
                                <Image src={teacher} alt='선생님' style={{width: '40%', height: '40%'}}/>
                            </th>
                            <th className='w60'>
                                <div style={{display:'flex'}}>
                                    <span style={{textAlign:'left'}}>
                                        <a style={{fontSize:'2em', fontWeight:'bold'}}><br/>최수연<br/><br/></a>

                                        <a style={{fontSize:'1.1em',fontWeight:'bold', color:'black'}}>심리검사 / 놀이치료 / 청소년상담 / 성인상담<br/><br/></a>

                                        <a style={{fontSize:'0.9em'}}>
                                            이화여자대학교 일반대학원 발달 및 발달임상심리 석사<br/>
                                            이화여자대학교 심리학과<br/>
                                            前) 중구아이존<br/>
                                            前) 이화여자대학교 아동발달센터<br/>
                                            前) 서울시 청소년 정신재활시설 푸른존<br/>
                                            現) 경기도의료원 의정부병원<br/>
                                            現) 인간발달복지연구소<br/>
                                            現) 늘해랑인지심리연구소<br/>
                                            現) 구리언어심리상담센터<br/><br/><br/>
                                        </a>
                                    </span>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className='w40' style={{borderTop:'solid 1px #e2e2e2'}}>
                                <Image src={teacher} alt='선생님' style={{width: '40%', height: '40%'}}/>
                            </th>
                            <th className='w60' style={{borderTop:'solid 1px #e2e2e2'}}>
                                <div style={{display:'flex'}}>
                                    <span style={{textAlign:'left'}}>
                                        <a style={{fontSize:'2em', fontWeight:'bold'}}><br/>김혜진<br/><br/></a>

                                        <a style={{fontSize:'1.1em',fontWeight:'bold', color:'black'}}>언어치료사<br/><br/></a>

                                        <a style={{fontSize:'0.9em'}}>
                                        한림대학교 언어청각학부 언어병리학 학사<br/>
                                        前) 강남구 목련어린이집<br/>
                                        現) 동대문장애인종합복지관<br/>
                                        現) 구리언어심리상담센터<br/><br/><br/>
                                        </a>
                                    </span>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className='w40' style={{borderTop:'solid 1px #e2e2e2'}}>
                                <Image src={teacher} alt='선생님' style={{width: '40%', height: '40%'}}/>
                            </th>
                            <th className='w60' style={{borderTop:'solid 1px #e2e2e2'}}>
                                <div style={{display:'flex'}}>
                                    <span style={{textAlign:'left'}}>
                                        <a style={{fontSize:'2em', fontWeight:'bold'}}><br/>송은경<br/><br/></a>

                                        <a style={{fontSize:'1.1em',fontWeight:'bold', color:'black'}}>언어치료사<br/><br/></a>

                                        <a style={{fontSize:'0.9em'}}>
                                            한림대학교 보건과학대학원 언어병리학 석사<br/>
                                            한림대학교 언어청각학부 언어병리학 학사<br/>
                                            前) 대전다문화가정지원센터 언어지도사<br/>
                                            現) 서울중계사회복지관 아동발달지원센터 언어치료사<br/>
                                            現) 구리언어심리상담센터 언어치료사<br/><br/><br/>
                                        </a>
                                    </span>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className='w40' style={{borderTop:'solid 1px #e2e2e2'}}>
                                <Image src={teacher} alt='선생님' style={{width: '40%', height: '40%'}}/>
                            </th>
                            <th className='w60' style={{borderTop:'solid 1px #e2e2e2'}}>
                                <div style={{display:'flex'}}>
                                    <span style={{textAlign:'left'}}>
                                        <a style={{fontSize:'2em', fontWeight:'bold'}}><br/>심성실<br/><br/></a>

                                        <a style={{fontSize:'1.1em',fontWeight:'bold', color:'black'}}>학습지도 / 가족상담 / 성인상담<br/><br/></a>

                                        <a style={{fontSize:'0.9em'}}>
                                            서울여자대학교 사회복지․기독교대학원 가족상담 석사<br/>
                                            前) 함께하는아동청소년센터<br/>
                                            現) 구리언어심리상담센터<br/>
                                            現) 도봉아동발달센터<br/>
                                            <br/><br/>
                                        </a>
                                    </span>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className='w40' style={{borderTop:'solid 1px #e2e2e2'}}>
                                <Image src={teacher} alt='선생님' style={{width: '40%', height: '40%'}}/>
                            </th>
                            <th className='w60' style={{borderTop:'solid 1px #e2e2e2'}}>
                                <div style={{display:'flex'}}>
                                    <span style={{textAlign:'left'}}>
                                        <a style={{fontSize:'2em', fontWeight:'bold'}}><br/>이혜진<br/><br/></a>

                                        <a style={{fontSize:'1.1em',fontWeight:'bold', color:'black'}}>미술치료사<br/><br/></a>

                                        <a style={{fontSize:'0.9em'}}>
                                            차의과대학교 미술치료대학원 임상미술치료학 석사<br/>
                                            前) 고려대학교 구로병원<br/>
                                            前) 인천 프라임아동발달센터<br/>
                                            現) 남양주 꿈자람 언어심리발달센터<br/>
                                            現) 구리언어심리상담센터<br/><br/><br/>
                                        </a>
                                    </span>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className='w40' style={{borderTop:'solid 1px #e2e2e2'}}>
                                <Image src={teacher} alt='선생님' style={{width: '40%', height: '40%'}}/>
                            </th>
                            <th className='w60' style={{borderTop:'solid 1px #e2e2e2'}}>
                                <div style={{display:'flex'}}>
                                    <span style={{textAlign:'left'}}>
                                        <a style={{fontSize:'2em', fontWeight:'bold'}}><br/>최서라<br/><br/></a>

                                        <a style={{fontSize:'1.1em',fontWeight:'bold', color:'black'}}>언어치료사<br/><br/></a>

                                        <a style={{fontSize:'0.9em'}}>
                                            대구카톨릭대학교 언어청각치료학<br/>
                                            前) 삼성소리샘복지관<br/>
                                            前) 호평언어심리상담센터<br/>
                                            前) 구로아동심리발달센터<br/>
                                            前) 경신언어청각연구소<br/>
                                            前) 카톨릭청각음성재활센터<br/>
                                            前) 두그루아동심리상담센터<br/>
                                            前) 부산광역시장애인복지관<br/>
                                            現) 구리언어심리상담센터<br/><br/><br/>
                                        </a>
                                    </span>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className='w40' style={{borderTop:'solid 1px #e2e2e2'}}>
                                <Image src={teacher} alt='선생님' style={{width: '40%', height: '40%'}}/>
                            </th>
                            <th className='w60' style={{borderTop:'solid 1px #e2e2e2'}}>
                                <div style={{display:'flex'}}>
                                    <span style={{textAlign:'left'}}>
                                        <a style={{fontSize:'2em', fontWeight:'bold'}}><br/>신현영<br/><br/></a>

                                        <a style={{fontSize:'1.1em',fontWeight:'bold', color:'black'}}>ABA 치료사<br/><br/></a>

                                        <a style={{fontSize:'0.9em'}}>
                                            광운대학교 언어치료학 석사 과정<br/>
                                            ABA KOREA ACADEMY – COURSEWORK<br/>
                                            前) 포천시노인복지관<br/>
                                            前) 한국다문화복지협회<br/>
                                            前) 의정부시종합사회복지관<br/>
                                            前) 라솜메디칼의원아동발달클리닉<br/>
                                            前) 강북ABA아동발달연구소 (오전조기, 오후조기, 사회성그룹, 개별기능향상)<br/>
                                            現) 구리언어심리상담센터<br/><br/><br/>
                                        </a>
                                    </span>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                 </table>
              </div>
          </div>
      </div>
      </>
    )
  }
  
  export default Teacher
