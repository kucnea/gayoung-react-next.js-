import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import PageExplain from '../../../layouts/PageExplain';



export function Checktotal() {

    const [hoverItem,setHoverItem] = useState();
    const mouseoverBackgroundColor = 'white';
    const mouseoverBorderColor = 'black';
    const mouseoverFontColor = 'black';
    const mouseoutBackgroundColor = '#fbfbfb';
    const mouseoutBorderColor = '1px solid #eaeaea';
    const mouseoutFontColor = 'gray';
    
    const [clickItem,setClickItem] = useState('검사프로그램전체');

    function clickEvent(item){
        if(item == '치료프로그램'){
            location.href='/board/program/check/Curetotal';
        } else {
            setClickItem(item);
        }

    }

    const cuerProgramList = [
        '검사프로그램전체',
        '심리평가',
        '발달평가',
        '자폐검사',
        '기질검사',
        '성격검사',
        '부모양육스트레스검사',
        'mim검사',
        '애착유형검사',
        '행동평가',
        '언어평가',
        '놀이평가',
        // '치료프로그램'
    ]

    useEffect(()=>{

    },);

    return (
      <>
      <div className='page h100'>
          <div className='page_wrap h100'>
              <div className='page_in h100'>
                 <div className='pageTitle h100' style={{float:'left'}}>
                 <br/>
                    검사프로그램
                 </div>
                 <hr style={{color:'#e2e2e2', height: '1px', display: 'block', width:'100%', marginTop:'8%'}}/>
                 <br/>
                 <PageExplain msg={process.env.NEXT_PUBLIC_REACT_APP_CENTER_NAME+"의 검사프로그램을 소개합니다."}/>
                 <ul className='listTable' id="checkList">
                    {cuerProgramList.map((item, index) => (
                        <li className='listTable_li' 
                            key={index} 
                            itemID={"checklist_"+index}
                            style={{backgroundColor : item == hoverItem ? mouseoverBackgroundColor : mouseoutBackgroundColor,
                                    border : item == hoverItem ? mouseoverBorderColor : mouseoutBorderColor,
                                    color : item == hoverItem ? mouseoverFontColor : mouseoutFontColor
                            }}
                            onMouseOver={()=>setHoverItem(item)}
                            onMouseOut={()=>setHoverItem(null)}
                            onClick={()=>setClickItem(item)}>{item}</li>
                    ))}
                 </ul>
                 <table style={{marginTop:'5%'}}>
                    <tbody>
                        <tr style={{display:'심리평가' == clickItem ? 'flex' : clickItem == '검사프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>심리평가<br/></a>
                                <br/>
                                적응에 어려움을 겪는 아동 및 청소년, 성인을 대상으로  <br/>
                                인지적 능력과 정서 상태, 성격 특성, 사회성, 가족관계 등  <br/>
                                전반적인 영역에 대한 객관적인 평가를 실시하여  <br/>
                                부적응에 대한 원인을 밝혀내고, 개인의 강점과 약점을 파악하여  <br/>
                                가장 적합하고 효율적인 상담방법을 모색하는 과정입니다. <br/>
                                <br/>
                                심리평가는 현재 적응에 특별한 어려움을 보이지 않더라도  <br/>
                                자기 이해 및 잠재력 개발, 진로 탐색, 부적응 행동의 예방을 위하여서도 실시됩니다. <br/>
                                특히 아동 및 청소년에게 인지적, 사회적, 심리적으로  <br/>
                                중요한 변화가 일어나는 시기(초등학교 취학 전, 초등학교 4~5학년, 중학교 3학년, 고등학교 1학년) <br/>
                                에는 원만한 학교생활 적응과 학업능력의 향상, 잠재력 개발, 진로 선택 등을 위해  <br/>
                                심리평가를 받아 보는 것이 바람직합니다. <br/>
                            </span>
                        </th>
                        </tr>
                        <tr style={{display:'발달평가' == clickItem ? 'flex' : clickItem == '검사프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>발달평가 (K-Bayley-Ⅲ)<br/></a>
                                <br/>
                                영유아의 발달 수준을 각 영역(인지, 언어, 정서, 사회성)별로 평가하는 과정으로, <br/>
                                실제 발달 연령 및 영역별 세부 특성을 객관적인 지표로 알려주어 <br/>
                                아동의 발달적 강점과 약점을 파악할 수 있도록 합니다.<br/>
                                특히 발달이 지연되거나 이상이 의심되는 아동을 조기에 발견하여, <br/>
                                이를 예방하거나 최소화하는데 도움을 줄 수 있습니다.<br/>
                                <br/>
                                발달평가는 아동에 대한 정보 뿐 아니라 부모 및 부모-자녀 관계, <br/>
                                적절한 양육 방법에 대한 정보도 제공합니다. <br/>
                            </span>
                        </th>
                        </tr>
                        <tr style={{display:'자폐검사' == clickItem ? 'flex' : clickItem == '검사프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>자폐검사 (ADOS-2)<br/></a>
                                <br/>
                                의사소통, 사회적 상호작용, 놀이, 그리고 제한되고 상동적인 행동을 검사하는 <br/>
                                표준화된 검사 도구입니다. <br/>
                                ADOS-2는 자폐로 인해 나타나는 행동들을 이끌어낼 수 있는 다양한 활동으로 구성되어 있습니다. <br/>
                                검사 대상자의 치료 계획 그리고 교육적 배치와 관련된 정보를 얻을 수 있습니다.<br/>
                            </span>
                        </th>
                        </tr>
                        <tr style={{display:'기질검사' == clickItem ? 'flex' : clickItem == '검사프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>기질검사<br/></a>
                                <br/>
                                자세한 내용은 전화문의 바랍니다.<br/>
                            </span>
                        </th>
                        </tr>
                        <tr style={{display:'성격검사' == clickItem ? 'flex' : clickItem == '검사프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>성격검사<br/></a>
                                <br/>
                                자세한 내용은 전화문의 바랍니다.<br/>
                            </span>
                        </th>
                        </tr>
                        <tr style={{display:'부모양육스트레스검사' == clickItem ? 'flex' : clickItem == '검사프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>부모양육스트레스검사<br/></a>
                                <br/>
                                자세한 내용은 전화문의 바랍니다.<br/>
                            </span>
                        </th>
                        </tr>
                        <tr style={{display:'mim검사' == clickItem ? 'flex' : clickItem == '검사프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>mim검사<br/></a>
                                <br/>
                                자세한 내용은 전화문의 바랍니다.<br/>
                            </span>
                        </th>
                        </tr>
                        <tr style={{display:'애착유형검사' == clickItem ? 'flex' : clickItem == '검사프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>애착유형검사<br/></a>
                                <br/>
                                자세한 내용은 전화문의 바랍니다.<br/>
                            </span>
                        </th>
                        </tr>
                        <tr style={{display:'행동평가' == clickItem ? 'flex' : clickItem == '검사프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>행동평가<br/></a>
                                <br/>
                                자세한 내용은 전화문의 바랍니다.<br/> 
                            </span>
                        </th>
                        </tr>
                        <tr style={{display:'언어평가' == clickItem ? 'flex' : clickItem == '검사프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>언어평가<br/></a>
                                <br/>
                                자세한 내용은 전화문의 바랍니다.<br/>
                            </span>
                        </th>
                        </tr>
                        <tr style={{display:'놀이평가' == clickItem ? 'flex' : clickItem == '검사프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>놀이평가<br/></a>
                                <br/>
                                자세한 내용은 전화문의 바랍니다.<br/>
                            </span>
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
  
  export default Checktotal
