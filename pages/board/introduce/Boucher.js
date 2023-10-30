import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import 감각통합치료실1 from '/public/image/introduce/감각통합치료실1.jpg'
import Boucher_0 from './Boucher_0';
import Boucher_1 from './Boucher_1';
import Boucher_2 from './Boucher_2';
import PageExplain from '../../layouts/PageExplain';



export function Boucher() {

    const [backgroundColor1, setBackgroundColor1] = useState('#fbfbfb');
    const [borderColor1, setBorderColor1] = useState('1px solid #eaeaea')
    const [fontColor1, setFontColor1] = useState('gray');
    const [backgroundColor2, setBackgroundColor2] = useState('#fbfbfb');
    const [borderColor2, setBorderColor2] = useState('1px solid #eaeaea')
    const [fontColor2, setFontColor2] = useState('gray');
    const [backgroundColor3, setBackgroundColor3] = useState('#fbfbfb');
    const [borderColor3, setBorderColor3] = useState('1px solid #eaeaea')
    const [fontColor3, setFontColor3] = useState('gray');
    
    const [getPage, setGetPage] = useState(0);

    function changePage(idx){

        switch(idx){
            case 0:
                setGetPage(0);
                break;
            case 1:
                setGetPage(1);
                break;
            case 2:
                setGetPage(2);
                break;
            default:
                setGetPage(0);
                break;
        }

    }

    function giveComponent(){
        
        switch(getPage){
            case 0:
                return <Boucher_0/>;
            case 1:
                return <Boucher_1/>;
            case 2:
                return <Boucher_2/>;        
            default:
                return <Boucher_0/>;
        }

    }

    function mouseOverEnvet1(){
        setBackgroundColor1('white');
        setBorderColor1('1px solid black');
        setFontColor1('black');
    }
    function mouseOverEnvet2(){
        setBackgroundColor2('white');
        setBorderColor2('1px solid black');
        setFontColor2('black');
    }
    function mouseOverEnvet3(){
        setBackgroundColor3('white');
        setBorderColor3('1px solid black');
        setFontColor3('black');
    }
    
    function mouseOutEvent1(){
        setBackgroundColor1('#fbfbfb');
        setBorderColor1('1px solid #eaeaea');
        setFontColor1('gray');
    }
    function mouseOutEvent2(){
        setBackgroundColor2('#fbfbfb');
        setBorderColor2('1px solid #eaeaea');
        setFontColor2('gray');
    }
    function mouseOutEvent3(){
        setBackgroundColor3('#fbfbfb');
        setBorderColor3('1px solid #eaeaea');
        setFontColor3('gray');
    }

    useEffect(()=>{
        giveComponent()
    },);

    return (
      <>
      <div className='page h100'>
          <div className='page_wrap h100'>
              <div className='page_in h100'>
                 <div className='pageTitle h100' style={{float:'left'}}>
                 <br/>
                    바우처 안내
                 </div>
                 <hr style={{color:'#e2e2e2', height: '1px', display: 'block', width:'100%', marginTop:'8%'}}/>
                 <br/>
                 <PageExplain msg={process.env.NEXT_PUBLIC_REACT_APP_CENTER_NAME+"의 제공바우처를 소개합니다."}/>
                 <table style={{marginTop:'2%'}} className='lineTable collapseTable w60 h25'>
                    <tbody>
                        <tr className='lineTable'>
                            <th className='lineTable' style={{backgroundColor:backgroundColor1, border:borderColor1, fontColor:fontColor1}} onMouseOver={()=>mouseOverEnvet1()} onMouseOut={()=>mouseOutEvent1()} onClick={()=>changePage(0)}> 발달재활서비스 </th>
                            <th className='lineTable' style={{backgroundColor:backgroundColor2, border:borderColor2, fontColor:fontColor2}} onMouseOver={()=>mouseOverEnvet2()} onMouseOut={()=>mouseOutEvent2()} onClick={()=>changePage(1)}> 우리아이심리지원 </th>
                            <th className='lineTable' style={{backgroundColor:backgroundColor3, border:borderColor3, fontColor:fontColor3}} onMouseOver={()=>mouseOverEnvet3()} onMouseOut={()=>mouseOutEvent3()} onClick={()=>changePage(2)}> 치료지원서비스 </th>
                        </tr>
                    </tbody>
                 </table>
                 <div style={{marginTop:'5%', height:'100%'}}>
                    {giveComponent()}
                 </div>
              </div>
          </div>
      </div>
      </>
    )
  }
  
  export default Boucher
