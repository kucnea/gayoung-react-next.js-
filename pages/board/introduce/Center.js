import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import center from '/public/image/introduce/center.jpg'



export function Center() {

    useEffect(()=>{

    },);

    return (
      <>
      <div className='page'>
          <div className='page_wrap'>
              <div className='page_in'>
                 <div className='pageTitle' style={{float:'left'}}>
                 <br/>
                    센터소개
                 </div>
                 <hr style={{color:'#e2e2e2', height: '1px', display: 'block', width:'100%', marginTop:'8%'}}/>
                 <br/>
                 <div id='centerMsgPack' style={{display:'flex'}}>
                    <span style={{textAlign:'left', fontSize:'2.8em'}}>
                        <b id='centerMsg' style={{textAlign:'left'}}>
                            <a style={{color:'lightblue'}}>마음으로 함께합니다,</a><a style={{color:'#1358a2'}}>{process.env.NEXT_PUBLIC_REACT_APP_CENTER_NAME}</a>
                        </b>
                    </span>
                 </div>
                 <div style={{backgroundColor:'lightblue', display:'flex',alignItems:'center',justifyContent:'space-between', marginTop:'1%'}}>
                    <span style={{textAlign:'left', marginLeft:'1%'}}>
                        <b id='centerMsgTime' style={{fontSize:'2em'}}>상담시간</b><br/><br/>
                        <b id='centerMstTimeDetail'>
                            평일 : {process.env.NEXT_PUBLIC_REACT_APP_CENTER_NORMAL_TIME} / 
                            토 : {process.env.NEXT_PUBLIC_REACT_APP_CENTER_SATURDAY_TIME}<br/>
                            일, 공휴일 휴무
                        </b>
                    </span>
                    <Image src={center} alt='center' style={{width: '50%', height: '50%'}}/>
                 </div>
                 <div style={{display:'flex', marginTop:'2%', justifyContent:'space-between'}}>
                    <div style={{display:'flex'}} className='w40'>
                        <span className='centerMsgBottom' style={{textAlign:'left', fontSize:'1.2em'}}>
                            <b>
                                하나. 문제해결을 위한 노력<br/>
                            </b>
                            <a>
                                아이들의 발달과정 중 나타날 수 있는 다양한 문제를 함께 고민하고 해결 해 나가도록 노력 하겠습니다.
                            </a>
                        </span>
                    </div>
                    <div style={{display:'flex'}} className='w40'>
                        <span style={{textAlign:'left', fontSize:'1.2em'}}>
                            <b>
                                하나. 잠재능력 극대화<br/>
                            </b>
                            <a>
                                아이의 미래 가능성을 바탕으로 아이 눈높이에 맞춰 아이의 잠재능력을 최대한 이끌어 내어 치료실 뿐 아니라 가정 및 사회활동으로 이어지도록 하는데 최선을 다하겠습니다.
                            </a>
                        </span>
                    </div>
                 </div>
                 <div style={{display:'flex', marginTop:'2%', justifyContent:'space-between'}}>
                    <div style={{display:'flex'}} className='w40'>
                        <span style={{textAlign:'left', fontSize:'1.2em'}}>
                            <b>
                                하나. 체계적인 치료교육<br/>
                            </b>
                            <a>
                                아이와의 인격적 관계를 바탕으로, 적절한 상호작용을 통해 올바른 운동기능 습득뿐만 아니라 언어, 인지, 사회성 발달 등 포괄적인 발달과정을 고려하여 재활치료교육을 해 나가겠습니다.
                            </a>
                        </span>
                    </div>
                    <div style={{display:'flex'}} className='w40'>
                        <span style={{textAlign:'left', fontSize:'1.2em'}}>
                            <b>
                                하나. 밝은 웃음이 넘치는 센터<br/>
                            </b>
                            <a>
                                부모님의 입장에서 부모님의 마음으로, 아이의 행복과 성장을 위하여 최선을 다하겠습니다.
                            </a>
                        </span>
                    </div>
                 </div>
                 <div style={{display:'flex', marginTop:'2%', justifyContent:'space-between'}}>
                    <div style={{display:'flex'}} className='w40'>
                        <span style={{textAlign:'left', fontSize:'1.2em'}}>
                            <b>
                                아이는 건강한 미래의 주인입니다!<br/>
                            </b>
                            <a>
                                아이들의 마음 속에 더 크고 아름다운 세상을 꿈꿀 수 있도록 항상 노력할 것을 약속 드립니다.
                            </a>
                        </span>
                    </div>
                 </div>
              </div>
          </div>
      </div>
      </>
    )
  }
  
  export default Center
