import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import front_img1 from '/public/image/front_img1.png'
import front_img2 from '/public/image/front_img2.jpg'
import front_img3 from '/public/image/front_img3.png'
import navi_icon_1 from '/public/image/item_01.png'
import navi_icon_2 from '/public/image/item_02.png'
import navi_icon_3 from '/public/image/item_03.png'
import navi_icon_4 from '/public/image/item_04.png'
import navi_icon_5 from '/public/image/item_05.png'
import navi_icon_6 from '/public/image/item_06.png'
import navi_icon_7 from '/public/image/item_07.png'
import book from '/public/image/book.png'
import preConsult from '/public/image/preConsult.png'
import cure from '/public/image/cure.png'
import arrow from '/public/image/arrow.png'
import express from '/public/image/express.jpg'
import tel from '/public/image/tel.png'

export function Index() {

   const [currentImage, setCurrentImage] = useState(0);
   const images = [
      { src: front_img1, alt: "구리언어심리상담센터" },
      { src: front_img2, alt: "구리언어심리상담센터_팜플렛" },
      { src: front_img3, alt: "구리언어심리상담센터_협약기관" },
   ];

   function moveIndexImg(){
      if(currentImage==0){
         window.location.href='/board/introduce/Ceo';
      }
   }

    useEffect(()=>{

       const interval = setInterval(() => {
          setCurrentImage((prevImage) => (prevImage + 1) % images.length);
       }, 2500);
   
       return () => clearInterval(interval);
      

    },);

    return (
      <>
      <div id="index" className='page'>
          <div id="index_wrap" className='page_wrap'>
              <div id="index_in" className='page_in'>
                 <div id="index_animate_img" 
                      className='borderLine' 
                      style={{ position: 'relative', width: '100%', height: '50vh' }}
                      onClick={()=>moveIndexImg()}>
                     <Image 
                     src={images[currentImage].src}
                     alt={images[currentImage].alt}
                     layout="fill"
                     objectFit="contain"
                     />
                 </div>
                 <div id="index_add_msg">
                     <ul id='index_detail_1' className='nolist justify_end'>
                        <li style={{fontSize:"1.2em"}}>
                           <span>
                              ㆍ 구리언어심리상담센터는 <b>발달재활바우처, 우리아이심리지원, 교육청 바우처</b> 제공기관입니다.
                           </span>
                        </li>
                        <li>
                           <span>
                              <Link href={"/"}>바우처 안내 바로가기</Link>
                           </span>
                        </li>
                     </ul>
                 </div>
                 <div id="index_navi_icon_pack">
                     <div className='index_navi_icon'>
                        <Image src={navi_icon_1} alt='치료실소개' style={{width: '70%', height: '30%'}}/>
                        <div className='index_navi_label'>치료실소개</div> 
                     </div>
                     <div className='index_navi_icon'>
                        <Image src={navi_icon_2} alt='치료실소개' style={{width: '70%', height: '30%'}}/>
                        <div className='index_navi_label'>센터둘러보기</div> 
                     </div>
                     <div className='index_navi_icon'>
                        <Image src={navi_icon_3} alt='치료실소개' style={{width: '70%', height: '30%'}}/>
                        <div className='index_navi_label'>치료/검사프로그램</div> 
                     </div>
                     <div className='index_navi_icon'>
                        <Image src={navi_icon_4} alt='치료실소개' style={{width: '70%', height: '30%'}}/>
                        <div className='index_navi_label'>치료사소개</div> 
                     </div>
                     <div className='index_navi_icon'>
                        <Image src={navi_icon_5} alt='치료실소개' style={{width: '70%', height: '30%'}}/>
                        <div className='index_navi_label'>찾아오시는길</div> 
                     </div>
                     <div className='index_navi_icon'>
                        <Image src={navi_icon_6} alt='치료실소개' style={{width: '70%', height: '30%'}}/>
                        <div className='index_navi_label'>온라인상담</div> 
                     </div>
                     <div className='index_navi_icon'>
                        <Image src={navi_icon_7} alt='치료실소개' style={{width: '70%', height: '30%'}}/>
                        <div className='index_navi_label'>바우처안내</div> 
                     </div>
                 </div>
                 
                 
                 <div id="index_info_pack w100">
                     <div className='index_info w100'>
                           <div id='contact_pack' className='contact_pack'>
                              <div id='order_cure' className='w40' style={{display:'flex', alignItems:'center', justifyContent:'space-around', flexDirection:'column', height:'100%'}}>
                                 <div style={{display:'block'}}>
                                    <b style={{fontSize:'2em'}}>치료교육과정<br/></b>
                                    <hr style={{color:'#e5e5e5', width:'100%', display:'block'}}/>
                                 </div>
                                 <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                                 <div>
                                    <Image src={book} alt='예약하기' style={{width: '100%', height: '100%'}}/><br/>
                                    <span className='explainTitle'>&nbsp;예약하기</span>
                                 </div>
                                 <Image src={arrow} alt='화살표' style={{width: '3%', height: '5%'}}/><br/>
                                 <div>
                                    <Image src={preConsult} alt='초기상담' style={{width: '100%', height: '100%'}}/><br/>
                                    <span className='explainTitle'>&nbsp;초기상담</span>
                                 </div>
                                 <Image src={arrow} alt='화살표' style={{width: '3%', height: '5%'}}/><br/>
                                 <div>
                                    <Image src={cure} alt='치료교육 및 평가' style={{width: '100%', height: '100%'}}/><br/>
                                    <span className='explainTitle'>&nbsp;치료교육</span>
                                 </div>
                                 </div>
                              </div>
                              <div id='contact_box' className='w60' style={{display:'flex'}}>
                                 <Image id='contactImg' src={express} alt='프로필' style={{width: '25%', height: '25%', border:'solid 3px #f5e042'}}/>
                                 <span style={{textAlign:'left', marginLeft:'2%'}}>
                                    <b style={{fontSize:'2em'}}>상담/문의<br/></b>
                                    <hr style={{color:'#e5e5e5', width:'100%', display:'block'}}/>
                                    연락주시면 친절히 상담해드립니다.<br/>
                                    평일 10:00 ~ 20:00 / 토 10:00 ~ 18:00 (일,공휴일 휴무)<br/><br/>
                                    <a style={{color:'#1358a2', fontSize:'1.2em'}}>* 본 센터는 예약제로 운영됩니다.</a><br/>
                                    <div style={{display:'flex', alignItems:'center'}}>
                                       <Image src={tel} alt='전화' style={{width: '20%', height: '5%'}}/>
                                       <b style={{fontSize:'2em'}}>{process.env.NEXT_PUBLIC_REACT_APP_CENTER_TEL}</b>
                                    </div>
                                 </span>
                              </div>
                           </div>
                     </div>
                 </div>

                 {/* <div className='contact_pack'>
                     <span style={{textAlign:'left', marginLeft:'2%'}}>
                        <b style={{fontSize:'2em'}}>상담/문의<br/></b>
                        <hr style={{color:'#e5e5e5', width:'100%', display:'block'}}/>
                        연락주시면 친절히 상담해드립니다.<br/>
                        평일 10:00 ~ 20:00 / 토 10:00 ~ 18:00 (일,공휴일 휴무)<br/><br/>
                        <a style={{color:'#1358a2', fontSize:'1.2em'}}>* 본 센터는 예약제로 운영됩니다.</a><br/>
                        <div style={{display:'flex', alignItems:'center'}}>
                           <Image src={tel} alt='전화' style={{width: '20%', height: '5%'}}/>
                           <b style={{fontSize:'2em'}}>{process.env.NEXT_PUBLIC_REACT_APP_CENTER_TEL}</b>
                        </div>
                     </span>
                     <Image src={express} alt='프로필' style={{width: '25%', height: '25%', border:'solid 3px #f5e042'}}/>
                 </div> */}
              </div>
          </div>
      </div>
      </>
    )
  }
  
  export default Index
