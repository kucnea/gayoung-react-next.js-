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
                        {/* <tr>
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
                        </tr> */}
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
                                            국제응용행동분석전문가QASP-S (=BCaBA)<br/>
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
                        <tr>
                            <th className='w40' style={{borderTop:'solid 1px #e2e2e2'}}>
                                <Image src={teacher} alt='선생님' style={{width: '40%', height: '40%'}}/>
                            </th>
                            <th className='w60' style={{borderTop:'solid 1px #e2e2e2'}}>
                                <div style={{display:'flex'}}>
                                    <span style={{textAlign:'left'}}>
                                        <a style={{fontSize:'2em', fontWeight:'bold'}}><br/>정세인<br/><br/></a>

                                        <a style={{fontSize:'1.1em',fontWeight:'bold', color:'black'}}>작업치료사/감각통합치료사<br/><br/></a>

                                        <a style={{fontSize:'0.9em'}}>
                                        경복대학교 작업치료학과<br/>
                                        前) 로젠 요양병원<br/>
                                        前) 양주 장애인복지관<br/>
                                        前) 구립 곡교 어린이집<br/>
                                        前) 마미정 감각통합연구소<br/>
                                        前) 아주대학교 병원<br/><br/><br/>
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
                                        <a style={{fontSize:'2em', fontWeight:'bold'}}><br/>지은정<br/><br/></a>

                                        <a style={{fontSize:'1.1em',fontWeight:'bold', color:'black'}}>미술치료사<br/><br/></a>

                                        <a style={{fontSize:'0.9em'}}>
                                        명지대학교 예술심리학과 미술심리치료 석사<br/>
                                        대진대학교 서양화과 졸업<br/>
                                        前) 굿네이버스 좋은 마음센터<br/>
                                        前) 홍인초등학교 개별지도반<br/><br/><br/>
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
                                        <a style={{fontSize:'2em', fontWeight:'bold'}}><br/>이소연<br/><br/></a>

                                        <a style={{fontSize:'1.1em',fontWeight:'bold', color:'black'}}>심리평가 / 심리치료 / 놀이치료<br/><br/></a>

                                        <a style={{fontSize:'0.9em'}}>
                                        학력<br/>
                                        가톨릭대학교 일반대학원 발달심리학 석사<br/>
                                        가톨릭대학교 심리학사, 아동학사<br/><br/>

                                        자격<br/>
                                        정신건강임상심리사 2급 (보건복지부)<br/>
                                        청소년상담사 2급 (여성가족부)<br/>
                                        발달심리사 2급 (한국심리학회 산하 한국발달심리학회)<br/>
                                        <br/>
                                        경력사항<br/>
                                        現) 동작아이존 심리치료사<br/>
                                        現) 나래아동발달센터 임상심리사<br/>
                                        現) 이대목동병원 정신건강의학과 수련 임상심리사<br/>
                                        前) 맥학습심리상담센터 임상심리사<br/>
                                        前) 가톨릭대학교 아동심리치료연구실<br/>
                                        前) 인천서부Wee센터<br/><br/><br/>
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
                                        <a style={{fontSize:'2em', fontWeight:'bold'}}><br/>황주영<br/><br/></a>

                                        <a style={{fontSize:'1.1em',fontWeight:'bold', color:'black'}}>언어치료사<br/><br/></a>

                                        <a style={{fontSize:'0.9em'}}>
                                        학력<br/>
                                        한림대학교 언어병리학과 / 청각학<br/>
                                        가톨릭대학교 심리학사, 아동학사<br/><br/>

                                        자격<br/>
                                        언어재활사<br/>

                                        <br/>
                                        경력사항<br/>
                                        前) 한림대학교 언어치료실<br/><br/><br/>
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
                                        <a style={{fontSize:'2em', fontWeight:'bold'}}><br/>강효정<br/><br/></a>

                                        <a style={{fontSize:'1.1em',fontWeight:'bold', color:'black'}}>놀이치료사(Floortime,아동중심)<br/><br/></a>

                                        <a style={{fontSize:'0.9em'}}>
                                        학력<br/>
                                        숙명여자대학교 일반대학원 아동심리치료 전공 박사과정<br/>
                                        숙명여자대학교 심리치료대학원 놀이치료전공 석사<br/><br/>

                                        자격<br/>
                                        놀이심리상담사<br/>
                                        부모교육상담사<br/>
                                        임상심리사<br/>
                                        Emergency first response<br/>
                                        보육교사<br/><br/>

                                        경력사항<br/>
                                        前) 본오복지관<br/>
                                        前) 논현어린이집<br/>
                                        前) 아이앤봄심리성장연구소<br/>
                                        前) 숲 아동청소년상담센터<br/>
                                        前) 연세대학교 세브란스 소아청소년 정신의학과<br/><br/>

                                        교육<br/>
                                        DIR 101, 201, 202 수료 (Floortime)<br/>
                                        놀이평가<br/>
                                        TCI 워크샵<br/><br/><br/>
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
                                        <a style={{fontSize:'2em', fontWeight:'bold'}}><br/>박상순<br/><br/></a>

                                        <a style={{fontSize:'1.1em',fontWeight:'bold', color:'black'}}>미술치료사<br/><br/></a>

                                        <a style={{fontSize:'0.9em'}}>
                                        학력<br/>
                                        평택대학교 상담대학원 미술치료 석사<br/><br/>

                                        자격<br/>
                                        미술심리상담사<br/>
                                        아동미술심리지도사<br/>
                                        아동청소년상담전문가<br/>
                                        인지행동심리상담사<br/><br/>
                                        
                                        경력사항<br/>
                                        前) 이든아이아동발달센터<br/>
                                        前) 오르다코리아<br/><br/><br/> 
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
                                        <a style={{fontSize:'2em', fontWeight:'bold'}}><br/>조예지<br/><br/></a>

                                        <a style={{fontSize:'1.1em',fontWeight:'bold', color:'black'}}>작업치료사<br/><br/></a>

                                        <a style={{fontSize:'0.9em'}}>
                                        학력<br/>
                                        평택대학교 상담대학원 미술치료 석사<br/><br/>

                                        자격<br/>
                                        작업치료사<br/>
                                        인지학습심리상담사<br/>
                                        
                                        경력사항<br/>
                                        現) 구리언어심리상담센터<br/>
                                        前) 신세계중랑장애인자립생활센터 교내지원<br/>
                                        前) 구립곡교어린이집<br/>
                                        前) 강남구보조공학센터<br/>
                                        前) 한스아동발달연구소<br/>
                                        前) 국립정신건강센터<br/>
                                        前) 서울시립어린이병원<br/>
                                        前) 행복나무특수교육원<br/>
                                        前) 어울림아동발달연구소<br/>
                                        前) 정림종합사회복지관<br/>
                                        前) 아화장애아동주간보호센터<br/><br/><br/> 
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
