import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';

export function Boucher_1() {

    useEffect(()=>{

    },);

    return (
      <>
        <div>
            <table className='w100' style={{backgroundColor:'#fbfbfb'}}>
                <tbody>
                    <th className='w30'>
                    우리아이심리지원
                    </th>
                    <th className='w70' style={{textAlign:'left'}}>
                        <br/><br/>
                        문제행동의 조기 발견과 개입을 통하여 문제행동을 감소시키고, <br/>
                        정서행동장애로의 발전을 막아 정상적 성장을 지원 합니다.
                        <br/><br/><br/>
                    </th>
                </tbody>
            </table>

            <div style={{display:'flex'}}>
                <span style={{textAlign:'left'}}>
                    <a style={{fontSize:'1.5em', fontWeight:'blod'}}><br/>▶ 지원대상 <br/><br/></a>
                    <a style={{fontSize:'1.2em'}}>
                      - 소득 및 연령 : 기준 중위소득 140% 이하 가정의 만 18세 이하 범위 내에서 지역 여건에 따라 설정<br/>
                      <br/>
                      - 다음 중 어느 하나를 충족하는 문제행동 위험군 아동 중 서비스 지원이 우선적으로 필요하다고 판단되는 아동<br/>
                        (단, 장애아동의 경우 발달재활서비스에서 제외되는 9개 유형)<br/>
                      ㆍ지체, 정신, 신장, 심장, 호흡기, 간장, 안면, 장루 및 요루, 간질만 포함<br/>
                      ㆍ발급일로부터 1년 이내의 의사 진단서·소견서, 임상심리사소견서, 청소년상담사소견서<br/>
                      ㆍ정신보건센터장이 추천한 아동·청소년<br/>
                      ㆍ초·중등교육법에 의한 정교사, 전문상담교사, 보건교사, 유치원 장, 어린이집 원장이 추천한 아동<br/>
                      <br/>
                      - 추천시에는 추천자가「정신보건사업안내」의 아동·청소년 심층사정평가도구 중 <br/>                        
                      어느 하나를 활용하여 검사한 후 절단점 이상인 경우<br/>
                      - 추천서, 검사결과는 3개월 이내 작성된 것만 인정<br/>
                      - 우선순위 : ① 문제행동의 수준,② 다문화·조손·한부모 가정<br/>
                        <br/><br/>
                    </a>
                    <a style={{fontSize:'1.5em', fontWeight:'blod'}}>▶ 지원내용<br/><br/></a>
                    <a style={{fontSize:'1.2em'}}>
                    - 심리상담, 놀이, 언어, 인지, 미술, 심리운동 등 제공<br/>
                    - 부가서비스 : 심리검사, 사회성향상프로그램, 부모훈련 등<br/>
                    <br/>
                    - 지원금액<br/>
                    - 월 112,000원 ~ 144,000원 (본인 부담금 : 월 16,000원~48,000원)<br/>
                    - 등급별상이<br/><br/>
                    </a>
                </span>
            </div>
            <table style={{marginTop:'3%', backgroundColor:'#fbfbfb'}} className='collapseTable w100'>
                    <tbody>
                        <tr>
                            <th className='w60 lineTable' style={{borderTop:'2px solid black'}}>
                                소득기준
                            </th>
                            <th className='w30 lineTable' style={{borderTop:'2px solid black'}}>
                                바우처 지원액
                            </th>
                            <th className='w10 lineTable' style={{borderTop:'2px solid black'}}>
                                본인부담금
                            </th>
                        </tr>
                        <tr>
                            <th className='lineTable'>
                            수급자, 차상위∼평균소득50%이하<br/>
                            (1등급)
                            </th>
                            <th className='lineTable'>
                            월 144,000원
                            </th>
                            <th className='lineTable'>
                            월 16,000원
                            </th>
                        </tr>
                        <tr>
                            <th className='lineTable'>
                            평균소득50%초과∼120%이하<br/>
                            (2등급)
                            </th>
                            <th className='lineTable'>
                            월 128,000원
                            </th>
                            <th className='lineTable'>
                            월 32,000원
                            </th>
                        </tr>
                        <tr>
                            <th className='lineTable'>
                            평균소득100초과∼140%이하<br/>
                            (3등급)
                            </th>
                            <th className='lineTable'>
                            월 112,000원
                            </th>
                            <th className='lineTable'>
                            월 48,000원
                            </th>
                        </tr>
                    </tbody>
                </table>
                <div style={{display:'flex'}}>
                    <span style={{textAlign:'left'}}>
                        <a style={{fontSize:'1.5em', fontWeight:'blod'}}><br/>▶신청방법<br/><br/></a>
                        - 주소지 읍ㆍ면ㆍ동 주민센터<br/>
                        <br/>
                        - 신청기간 : 매월 1일~27일까지 (익월 1일부터 서비스 개시)<br/>
                        <br/>
                        - 제출서류<br/>
                        ㆍ신청서(읍ㆍ면ㆍ동 주민센터 비치)<br/>
                        ㆍ신분증<br/>
                        ㆍ건강보험증, 건강보험료 납부확인서류<br/>
                        ㆍ의사진단서.소견서, 임상심리사 소견서, 청소년상담사 소견서, 학교 교사 또는 학교장 추천서, 정신보건센터 추천의뢰서(택1)<br/>
                        <br/>
                        <a style={{fontSize:'1.5em', fontWeight:'blod'}}>▶문의<br/><br/></a>
                        - 구리언어심리상담센터 ☎ 031-555-5527<br/>
                    </span>
                </div>
        </div>
      </>
    )
  }
  
  export default Boucher_1
