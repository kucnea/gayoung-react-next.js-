import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import 감각통합치료실1 from '/public/image/introduce/감각통합치료실1.jpg'
import 감각통합치료실2 from '/public/image/introduce/감각통합치료실2.jpg'
import 그룹치료실1 from '/public/image/introduce/그룹치료실1.jpg'
import 그룹치료실2 from '/public/image/introduce/그룹치료실2.jpg'
import 놀이치료실1 from '/public/image/introduce/놀이치료실1.jpg'
import 놀이치료실2 from '/public/image/introduce/놀이치료실2.jpg'
import 놀이치료실3 from '/public/image/introduce/놀이치료실3.jpg'
import 대기실1 from '/public/image/introduce/대기실1.jpg'
import 대기실2 from '/public/image/introduce/대기실2.jpg'
import 미술치료실 from '/public/image/introduce/미술치료실.jpg'
import 복도 from '/public/image/introduce/복도.jpg'
import 언어치료실1 from '/public/image/introduce/언어치료실1.jpg'
import 인지학습치료실1 from '/public/image/introduce/인지치료학습실1.jpg'
import 인지학습치료실2 from '/public/image/introduce/인지학습치료실2.jpg'
import PageExplain from '../../layouts/PageExplain';



export function Centermore() {

    useEffect(()=>{

    },);

    return (
      <>
      <div className='page'>
          <div className='page_wrap'>
              <div className='page_in'>
                 <div className='pageTitle' style={{float:'left'}}>
                 <br/>
                    센터 둘러보기
                 </div>
                 <hr style={{color:'#e2e2e2', height: '1px', display: 'block', width:'100%', marginTop:'8%'}}/>
                 <br/>
                 <PageExplain msg={process.env.NEXT_PUBLIC_REACT_APP_CENTER_NAME+"의 시설을 소개합니다."}/>
                 <table style={{marginTop:'2%'}}>
                    <tbody>
                        <tr>
                            <th>
                                <Image src={대기실1} alt='시설' style={{width: '50%', height: '30%'}}/><br/>
                                대기실1<br/><br/><br/>
                            </th>
                            <th>
                                <Image src={대기실2} alt='시설' style={{width: '50%', height: '30%'}}/><br/>
                                대기실2<br/><br/><br/>
                            </th>
                            <th>
                                <Image src={복도} alt='시설' style={{width: '50%', height: '30%'}}/><br/>
                                복도<br/><br/><br/>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <Image src={언어치료실1} alt='시설' style={{width: '50%', height: '30%'}}/><br/>
                                언어치료실1<br/><br/><br/>
                            </th>
                            <th>
                                <Image src={인지학습치료실1} alt='시설' style={{width: '50%', height: '30%'}}/><br/>
                                인지학습치료실1<br/><br/><br/>
                            </th>
                            <th>
                                <Image src={인지학습치료실2} alt='시설' style={{width: '50%', height: '30%'}}/><br/>
                                인지학습치료실2<br/><br/><br/>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <Image src={놀이치료실1} alt='시설' style={{width: '50%', height: '30%'}}/><br/>
                                놀이치료실1<br/><br/><br/>
                            </th>
                            <th>
                                <Image src={놀이치료실2} alt='시설' style={{width: '50%', height: '30%'}}/><br/>
                                놀이치료실2<br/><br/><br/>
                            </th>
                            <th>
                                <Image src={놀이치료실3} alt='시설' style={{width: '50%', height: '30%'}}/><br/>
                                놀이치료실3<br/><br/><br/>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <Image src={미술치료실} alt='시설' style={{width: '50%', height: '30%'}}/><br/>
                                미술치료실<br/><br/><br/>
                            </th>
                            <th>
                                <Image src={감각통합치료실1} alt='시설' style={{width: '50%', height: '30%'}}/><br/>
                                감각통합치료실1<br/><br/><br/>
                            </th>
                            <th>
                                <Image src={감각통합치료실2} alt='시설' style={{width: '50%', height: '30%'}}/><br/>
                                감각통합치료실2<br/><br/><br/>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <Image src={그룹치료실1} alt='시설' style={{width: '50%', height: '30%'}}/><br/>
                                그룹치료실1
                                <br/>
                            </th>
                            <th>
                                <Image src={그룹치료실2} alt='시설' style={{width: '50%', height: '30%'}}/><br/>
                                그룹치료실2
                                <br/>
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
  
  export default Centermore
