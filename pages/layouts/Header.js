import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import toplogo from '/public/image/logo_1.png'
import Navi from './Navi.js'
import menuBtn from '/public/image/menuBtn.png'

function Header() {

    const [introduceDisplay, setIntroduceDisplay] = useState('none');
    const [isMobile, setIsMobile] = useState(false);
    const [isNaviOn, setIsNavOn] = useState('none');
    // 네비, 모바일 여기서 다 조절할지, 네비 여기서하고 모바일만 저기서할지 
    const showIntroduceMenu = () => {
        if(!isMobile)
        setIntroduceDisplay('flex');
    }

    const shutIntroduceMenu = async () => {
        setIntroduceDisplay('none');
    }

    const [programDisplay, setProgramDisplay] = useState('none');

    const showProgramMenu = () => {
        if(!isMobile)
        setProgramDisplay('flex');
    }

    const shutProgramMenu = async () => {
        setProgramDisplay('none');
    }

    function addFavorite(){
        var url = process.env.NEXT_PUBLIC_REACT_APP_REAL_URL;
        var title = process.env.NEXT_PUBLIC_REACT_APP_CENTER_NAME;

        if(document.all) {
            window.external.AddFavorite(url, title);
        } else if(window.chrome) {
            var message = title+'를 즐겨찾기에 추가하시겠습니까?';
            window.prompt(message, url);
        } else if (window.sidebar)  {
            window.sidebar.addPanel(title, url, "");
        }
    }

    function alertReady(){
        alert('준비중입니다. 조금만 기다려주세요.');
    }

    function onNavi(){
        if(isMobile){
            setIsNavOn('block');
        }
    }

    const handleNaviClose = () => {
        setIsNavOn('none');
    }

    useEffect(()=>{
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600)
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        }
       
    },[]);

    return (
    <>
    <div id="header_line"></div>
    <div style={{display:isNaviOn}}>
        <Navi onClose={handleNaviClose}/>
    </div>
    <div id="header" className='page'>
        <div id="header_wrap" className='page_wrap'>
            <div id="header_in" className='page_in'>
                <div id="header_top_navi">
                    <div id="header_top_navi_1">
                        <Link href='/'>
                            Home
                        </Link>
                    </div>
                    <div className='seperate'>
                        |
                    </div>
                    <div id="header_top_navi_2">
                        <a onClick={()=>addFavorite()}>
                            ☆ 즐겨찾기
                        </a>
                    </div>
                    <div className='seperate'>
                        |
                    </div>
                    <div id="header_top_avi_3">
                        <a onClick={()=>alertReady()}>
                            관리자
                        </a>
                    </div>
                </div>
                <div id="header_navi">
                    <div id="header_logo" className='logo'>
                        {/* {isMobile && (
                            <div style={{display:'inline'}}>
                                <Image src={menuBtn} alt="logo" style={{width: '100%', height: '50%'}} />
                            </div>
                        )} */}
                        <Link href='/'>
                            <Image src={toplogo} alt="logo" style={{width: '85%', height: '70%'}} />
                        </Link>
                    </div>
                    <div className="blank_space" width={10}></div>
                    <div id="header_navi_list_pack">
                        <ul id="header_navi_list">
                        <li onMouseOver={showIntroduceMenu} onMouseOut={shutIntroduceMenu}>
                            {/* <Link href="/board/introduce/Center" className="navi_list_comp" >센터 소개</Link> */}
                            <a className='navi_list_comp' onClick={()=>onNavi()}>센터 소개</a>
                            <ul id='floatMenu_1' className='basicList floatMenu w50' style={{display: introduceDisplay, border:'solid 1px #e5e5e5', width: '58%'}}>
                                <Link href="/board/introduce/Center" style={{marginTop: "2%", marginBottom: "2%"}}>
                                    <li>
                                        치료실소개
                                    </li>
                                </Link>
                                <Link href="/board/introduce/Advisor" style={{marginTop: "2%", marginBottom: "2%", marginLeft: '4%'}}>
                                    <li>
                                        자문의원 소개
                                    </li>
                                </Link>
                                <Link href="/board/introduce/Ceo" style={{marginTop: "2%", marginBottom: "2%", marginLeft: '4%'}}>
                                    <li>
                                        원장/부원장 소개
                                    </li>
                                </Link>
                                <Link href="/board/introduce/Teacher" style={{marginTop: "2%", marginBottom: "2%", marginLeft: '4%'}}>
                                    <li>
                                        치료사 소개
                                    </li>
                                </Link>
                                <Link href="/board/introduce/Centermore" style={{marginTop: "2%", marginBottom: "2%", marginLeft: '4%'}}>
                                    <li>
                                        센터 둘러보기
                                    </li>
                                </Link>
                                <Link href="/board/introduce/Boucher" style={{marginTop: "2%", marginBottom: "2%", marginLeft: '4%'}}>
                                    <li>
                                        바우처안내
                                    </li>
                                </Link>
                            </ul>
                        </li>

                        <li onMouseOver={showProgramMenu} onMouseOut={shutProgramMenu}>
                            {/* <Link href="/board/program/cure/Curetotal" className="navi_list_comp">치료/검사프로그램</Link> */}
                            <a className='navi_list_comp' onClick={()=>onNavi()}>치료/검사프로그램</a>
                            <ul className='basicList floatMenu w50' style={{display: programDisplay, border:'solid 1px #e5e5e5', width: '20%'}}>
                                <Link href="/board/program/cure/Curetotal" style={{marginTop: "2%", marginBottom: "2%"}}>
                                    <li>
                                        치료프로그램
                                    </li>
                                </Link>
                                <Link href="/board/program/check/Checktotal" style={{marginTop: "2%", marginBottom: "2%", marginLeft: '6%'}}>
                                    <li>
                                        검사프로그램
                                    </li>
                                </Link>
                            </ul>
                        </li>
                        <li id='menuAsk' ><Link href="/board/Schedule" className="navi_list_comp">상담/문의</Link></li>
                        <li id='menuCommu'><Link href="/" className="navi_list_comp">커뮤니티</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
    )
  }
  
  export default Header