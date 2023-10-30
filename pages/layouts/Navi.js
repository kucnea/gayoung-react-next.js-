import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import toplogo from '/public/image/logo_1.png'

export function Navi({onClose}) {

    const [naviDisplay, setNaviDisplay] = useState();

    const introduceList = [
        {name : '치료실 소개', path : '/board/introduce/Center'},
        {name : '자문의원 소개', path : '/board/introduce/Advisor'},
        {name : '원장/부원장 소개', path : '/board/introduce/Ceo'},
        {name : '치료사 소개', path : '/board/introduce/Teacher'},
        {name : '센터 둘러보기', path : '/board/introduce/Centermore'},
        {name : '바우처 안내', path : '/board/introduce/Boucher'},
    ]

    const programList = [
        {name : '치료프로그램', path : '/board/program/cure/Curetotal'},
        {name : '검사프로그램', path : '/board/program/cure/Checktotal'},
    ]

    useEffect(()=>{
        
    },);

    return (
      <>
        <div className='overlay'></div>
        <div id='navi' style={{textAlign:'left', width:'50%', height:'100%', position:'absolute', backgroundColor:'white',zIndex:'3', display:naviDisplay}}>
            <ul className='nolist w100' style={{paddingLeft:0, marginLeft: 0}}>
                <li style={{width:'90%', marginTop:'20%', marginLeft:'5%', borderBottom:'2px solid #c9daf8'}}>
                    <Image src={toplogo} alt="logo" style={{width: '40%', height: '10%'}} />
                    <a style={{fontSize:'2em', fontWeight:'bold', float:'right', marginRight:'10%', marginTop: '5%'}}
                        onClick={()=>{onClose()}}>X</a>
                </li>
                <li className='naviSubMenu'>
                    센터소개
                    <ul id='DetailMenuIntroduce'>
                        {introduceList.map((item, index) => (
                            <li className='naviDetailMenu' 
                                key={index}>
                                    <Link href={item.path} onClick={onClose}>
                                        {item.name}
                                    </Link>
                                </li>
                        ))}
                    </ul>
                </li>
                <li className='naviSubMenu'>
                    치료/검사프로그램
                    <ul>
                        {programList.map((item, index) => (
                            <li className='naviDetailMenu' 
                                key={index}>
                                <Link href={item.path} onClick={onClose}>
                                        {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
      </>
    )
  }
  
  export default Navi
