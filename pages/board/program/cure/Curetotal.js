import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import PageExplain from '../../../layouts/PageExplain';



export function Curetotal() {

    const [hoverItem,setHoverItem] = useState();
    const mouseoverBackgroundColor = 'white';
    const mouseoverBorderColor = 'black';
    const mouseoverFontColor = 'black';
    const mouseoutBackgroundColor = '#fbfbfb';
    const mouseoutBorderColor = '1px solid #eaeaea';
    const mouseoutFontColor = 'gray';
    
    const [clickItem,setClickItem] = useState('치료프로그램전체');

    function clickEvent(item){
        if(item == '검사프로그램'){
            window.location.href='/board/program/check/Checktotal';
        } else {
            setClickItem(item);
        }

    }

    const cuerProgramList = [
        '치료프로그램전체',
        'ABA',
        'ESDM',
        '청소년상담',
        '성인상담',
        '언어치료',
        '인지학습',
        '놀이치료',
        '미술치료',
        '감각통합치료',
        '그룹치료',
        '가족상담',
        // '검사프로그램',
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
                    치료프로그램
                 </div>
                 <hr style={{color:'#e2e2e2', height: '1px', display: 'block', width:'100%', marginTop:'8%'}}/>
                 <br/>
                 <PageExplain msg={process.env.NEXT_PUBLIC_REACT_APP_CENTER_NAME+"의 치료프로그램을 소개합니다."}/>
                 <ul className='listTable' id="cureList">
                    {cuerProgramList.map((item, index) => (
                        <li className='listTable_li' 
                            key={index} 
                            itemID={"curelist_"+index}
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
                        <tr style={{display:'ABA' == clickItem ? 'flex' : clickItem == '치료프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>ABA<br/></a>
                                <br/>
                                1. 조기집중 프로그램 - 조기 집중 프로그램은 학령기 이전 아동을 대상으로<br/>
                                EIBI(조기집중 행동적 중재) 모델의 집중적 ABA 접근을 통하여 <br/>
                                발달의 차이를 최소화하고 일반화된 환경에 적응할 수 있도록 개입합니다.<br/>
                                <br/>
                                2. 사회성프로그램 - 사회성 프로그램은 아동이 소그룹 안에서 상호작용, <br/>
                                또래와의 상호작용을 강화하고 이 과정에서 언어확장을 목적으로 합니다. <br/>
                                이를 위해 다양한 그릅활동과 게임등이 이루어 집니다. <br/>
                                궁극적으로 그룹 활동 상황에 필요한 적응 능력 함양을 통해서 <br/>
                                아동이 통합 교육 환경에서 독립적으로 기능할 수 있도록 훈련하는 과정입니다. <br/>
                            </span>
                        </th>
                        </tr>
                        <tr style={{display:'ESDM' == clickItem ? 'flex' : clickItem == '치료프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>ESDM<br/></a>
                                <br/>
                                12~48개월의 자폐 스펙트럼 진단을 받았거나 <br/>
                                발달 지연에 대한 개입이 필요한 영유아를 대상으로 <br/>
                                전반적 발달 영역의 기능향상을 도모합니다. <br/>
                                <br/>
                                부모교육을 통하여 부모가 습득한 ESDM 기술들로 <br/>
                                일상생활에서 아동과의 상호작용을 최대화하여 <br/>
                                습득한 행동들의 일반화 및 새로운 행동을 가르치는 것으로 발달의 증진을 목표로합니다.<br/>
                                <br/>
                                6개월 단위로 진행되며, 프로그램 진행 중 부모교육이 필수적으로 진행됩니다.<br/>
                                주에 2~3회, 한 회기당 80분 개입을 기본으로 합니다.<br/>
                            </span>
                        </th>
                        </tr>
                        <tr style={{display:'청소년상담' == clickItem ? 'flex' : clickItem == '치료프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>청소년상담<br/></a>
                                <br/>
                                청소년기는 아동기에서 성인기에 이르는 과도기로서, <br/>
                                신체적 변화에 따른 심리적 변화가 두드러지고, 자아정체감을 형성하고, <br/>
                                부모로부터의 독립을 준비하는 시기입니다.<br/>
                                <br/>
                                이에 청소년들은 학업이나 진로에 대한 고민이 깊어지고, 부모와의 갈등이 더욱 빈번해집니다.<br/>
                                또한 외모나 신체에 대한 고민이 많아지고, <br/>
                                친구 관계에 더욱 많이 몰두하고 갈등을 경험합니다.<br/>
                                더불어 아직 자기 조절력이나 도덕성이 충분히 발달 되지 않아 <br/>
                                약물이나 중독, 폭력, 가출, 비행 행동에 쉽게 영향을 받습니다.<br/>
                                <br/>
                                이에 청소년 상담은 청소년이 학업 및 진로, 친구 관계, 부모 관계를 잘 세우고, <br/>
                                비행 행동을 예방하고, 자신의 잠재 가능성을 최대한 실현할 수 있도록 돕기 위한 과정입니다.<br/>
                                청소년 상담은 일대일로 진행되며, 언어 및 상호작용을 통하여 이루어집니다.<br/>
                                상담 과정을 통하여 청소년은 자신의 발달 과업을 성공적으로 달성하고, <br/>
                                건강한 성인으로 성장하기 위한 밑거름을 단단히 다지게 됩니다.<br/>
                            </span>
                        </th>
                        </tr>
                        <tr style={{display:'성인상담' == clickItem ? 'flex' : clickItem == '치료프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>성인상담<br/></a>
                                <br/>
                                성인 상담은 자녀 양육, 부부 관계, 가족 갈등, 개인의 성격 특성으로 <br/>
                                힘들어하는 성인들을 대상으로 심리·정서적 어려움의 해결, <br/>
                                효율적인 대인 관계와 사회 적응 능력의 향상, <br/>
                                자녀에 대한 올바른 이해와 자녀 양육태도 개선 등을 목표로 <br/>
                                상담자와의 일대일 관계에서 진행되는 과정입니다.<br/>
                            </span>
                        </th>
                        </tr>
                        <tr style={{display:'언어치료' == clickItem ? 'flex' : clickItem == '치료프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>언어치료<br/></a>
                                <br/>
                                또래에 비해 언어 발달이 느린 아동, 단어 의미 이해가 부족한 아동,<br/>
                                조음 문제 또는 말더듬 문제를 가진 아동, 기타 말ㆍ언어 문제를 가진 아동을 대상으로 하며,<br/>
                                <br/>
                                아동의 현재 언어수준에 관한 자세한 평가를 바탕으로<br/>
                                아동에게 맞는 체계적인 언어치료 프로그램을 제공합니다.<br/>
                                또한 부모님 상담을 통해 아동의 언어치료가 치료실 내의 상황에서 뿐만 아니라<br/>
                                가정 환경에서도 연장될 수 있도록 하여<br/>
                                일상생활에서 보다 능률적인 의사소통이 이루어질 수 있도록 도움을 주는 프로그램입니다.<br/>
                            </span>
                        </th>
                        </tr>
                        <tr style={{display:'놀이치료' == clickItem ? 'flex' : clickItem == '치료프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>놀이치료<br/></a>
                                <br/>
                                자신의 생각이나 느낌을 언어로 전달하는데 제한이 있는 아동들에게 행동표현을 통해서<br/>
                                정서,행동,발달상의 문제를 해결합니다.<br/>
                                아동의 불안감을 완화시키고 안정적으로 애착이 형성되도록 도우며<br/>
                                사회적 상호작용 욕구와 자신감을 증진시켜 타인과 적절한 상호작용이 가능하도록<br/>
                                전반적 발달을 가속화시키는 치료프로그램입니다.<br/>
                            </span>
                        </th>
                        </tr>
                        <tr style={{display:'미술치료' == clickItem ? 'flex' : clickItem == '치료프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>미술치료<br/></a>
                                <br/>
                                말로 자신을 충분히 표현하기에 어려움이 있는 아이들의 잠재력을<br/>
                                최대한 발휘할 수 있도록 도와주는 프로그램입니다.<br/>
                            </span>
                        </th>
                        </tr>
                        <tr style={{display:'감각치료' == clickItem ? 'flex' : clickItem == '치료프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>감각치료<br/></a>
                                <br/>
                                아동의 감각통합기능, 놀이수준, 발달연령 등에 따라<br/>
                                적절하게 조절된 전정감각, 고유수용성 감각, 촉각을 제공하며<br/>
                                이러한 감각들을 통합하여 아동이 자발적으로 적응반응을 만들 수 있도록 돕습니다.<br/>
                            </span>
                        </th>
                        </tr>
                        <tr style={{display:'인지학습' == clickItem ? 'flex' : clickItem == '치료프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>인지학습<br/></a>
                                <br/>
                                친구들과 함께 학습에 참여하고 잠재력을 최대한 발휘할 수 있도록 도와줍니다.<br/>
                                인지발달과 학습능력 면에서 부진이나 지체를 보이는 아동 및 청소년의<br/>
                                인지학습 수준과 개별 특성을 평가하여<br/>
                                어려움을 보이는 인지영역 및 학습능력의 발달을 돕는 치료프로그램입니다.<br/> 
                            </span>
                        </th>
                        </tr>
                        <tr style={{display:'그룹치료' == clickItem ? 'flex' : clickItem == '치료프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>그룹치료<br/></a>
                                <br/>
                                사회성 그룹 훈련 프로그램은 또래 및 타인과의 자연스러운 관계 맺기와<br/>
                                다양한 상황에 적절하게 대처하는 기술이 부족하여 학교생활에 어려움이 있는<br/>
                                아동 및 청소년들에게 대인 관계 능력을 향상시켜주는 프로그램입니다.<br/>
                            </span>
                        </th>
                        </tr>
                        <tr style={{display:'가족상담' == clickItem ? 'flex' : clickItem == '치료프로그램전체' ? 'flex' : 'none', marginTop:'3%', borderTop:'1px solid #eaeaea'}}>
                        <th style={{display:'flex', marginTop:'3%'}}>
                            <span style={{textAlign:'left'}}>
                                <a style={{fontSize:'1.5em', fontWeight:'bold'}}>가족상담<br/></a>
                                <br/>
                                가족 구성원 간의 관계구조와 상호작용을 변화시켜<br/>
                                대인관계 기술과 적응능력을 향상시킴으로써 개인과 가족이 건강하고<br/>
                                기능적인 생활을 하도록 도움을 주는 치료입니다.<br/>
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
  
  export default Curetotal
