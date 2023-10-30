import * as func from './functions'

let startOption;
let startValue;
let endOption;
let endValue;
let flag=0;
let carryCheck = [];
let carryOpsForward = [];     // 연관되는 속성있으면 같이 적용.
let carryOpsReverse = [];     // 연관되는 속성있으면 같이 적용.
let targetTags = [];          // 적용될 태그들.
let subChild = [];
let subChildValue;

export function timeListenerFunc(params){
    // setInterval(function(){
    //     console.log('hi');
    // },3000);

    /*
        params Values
        idx   : value
        0     : 적용 객체 id
        1[]   : 0 속성변경                      1 새창 ( 리턴 발생 )                                      Http_method[]
        2[]   : 변경하려는 attribute            , 0 기본 경고창 1 커스텀 창 2 새 태그                                , request data// 배열,객체 째로
        3[]   : 변경하려는 하위 attribute[]     , 파라미터[]   // 0번째 : 경로, 홀수 : 파라미터 짝수: 벨류   , response data// 배열,객체 째로
        4[]   : 희망하는 attribute의 value[]    , 종료 후 이동할 페이지 ( 공란 이동없음, -1 창종료 )         , api[동기/비동기, url]
        5[]   :                                , 창의 크기[2]                                             , 콜백함수[코드번호, 동기/비동기] 
        6[]   : 반복조건[시간, 조건[], 효과[]]   , 반복조건[시간, 조건[], 효과[]] // 시간 : '' 조건따라       , 반복조건[시간, 조건[인자,조건값], []]

             ex) 인터벌 함수
             [{target: `Index_parts_0_img_inner_0`
               , first: [0]
               , second: ['src']
               , third: [[]]
               , fourth: [['/image/visual2.jpg', '/image/visual3_2.jpg']]
               , fifth: ['']
               , sixth: [2000,[],[['style','opacity',1,0.16,0,16,1000,1]]] }]   

            * option 규칙
            조건                         효과
            [허용조건,벨류,종료조건,벨류] [속성, 하위속성, 시작값, 변화량      , 최종값, 단위시간, 총 지속시간, 복귀여부]
                                        [속성, 하위속성, 시작값, 변화량      , 최종값, 단위시간, 총 지속시간, 복귀여부, 반복갯수단위]
                                        [tag , 속성   , 시작값, overlay y/n , 최종값, 가로간격, 세로간격   , 반복갯수단위]

            // option : 2500,[],[[['style','opacity',1,0.16,0,16,1000,1]]]  // 해당시간을 주기로 발생할 에니메이션
            // option[2] : [['style','opacity',1,0.16,0,16,1000,1]]         // 여러 옵션이 에니메이트 될 수 있음
            // option[2][0] : ['style','opacity',1,0.16,0,16,1000,1]        // 발생할 하나의 옵션 
            // option[2][0][0] : 'style'                                    // 그 첫번째 필드
                                                                                                0 : 무한, 1 : 복귀
    */
    
    let rslt=[];
    let target;
    let work_cnt = params.first.length;

    for( let i = 0 ; i < work_cnt ; i++ ){
        /*
            조건의 종류가 워낙 다양하므로 이건 백단과 연결하면서 고려
            로그인, 특정 태그의 값, 마우스 커서 위치등?
            종료될지 set될지 여기서 판단.
        */
        // if( option[1][1] )
        setInterval(function(){
            target = document.getElementById(params.target);    
            if( params.first[i] == 0 ) attrChange(target, params.second[i], params.third[i], params.fourth, params.sixth);// 속성변경
            else if( params.first[i] == 1 ) rslt.push(newWindow(params.second[i], params.third[i], params.fourth, params.fifth[i], params.sixth[i])); // 알림창
            else httpActive(params.first[i], params.second[i], params.third[i], params.fourth[i], params.fifth, params.sixth[i]);// CRUD
        },params.sixth[i][0]);

    }

    return rslt;

}

function animate_control(){

    animate_oneWay(target, rslt, targetAttr, subAttr, option[2][i][0], option[2][i][1], option[2][i][2], option[2][i][3], option[2][i][4], option[2][i][5], option[2][i][6]);

}
           
function attrChange(target, tgAttr, tgSubAttr, rsltAttr, option){
    
    let rslt;

    let rsltAttr_length = rsltAttr.length;
    let cnt = flag % rsltAttr_length;

    if ( !option ) return;
    let option_length = option.length;
    
    for( let i = 0 ; i < option_length ; i++ ){
        // animate_oneWay(target, rslt, targetAttr, subAttr  , option[2][i][0], option[2][i][1], option[2][i][2], option[2][i][3], option[2][i][4], option[2][i][5], option[2][i][6], option[2][i][7]);
        // animate_oneWay(target, rslt, tgAttr    , tgSubAttr, attr           , subAttr        , startValue     , moveValue      , endValue       , unitTime       , duration       , isBack ){
        
        let attr = option[i][2][0];         // 에니메이트 될 어트리뷰트
        let subAttr = option[i][2][1];      // 에니메이트 될 하부 어트리뷰트
        let startValue = option[i][2][2];   // 에니메이트 시작값
        let moveValue = option[i][2][3];    // 이동값 ( 색깔등으로 여러개일떄 배열로 변경. ), ( tag : overlay y/n )
        let endValue = option[i][2][4];     // 에니메이트 종료값
        let unitTime = option[i][2][5];     // 단위시간, tag : 가로간격
        let duration = option[i][2][6];     // 지속시간, tag : 세로간격
        let isBack = option[i][2][7];       // 반복갯수
        
        // 변경하려는 시작값. ( startValue )
        // tah space 추가하면서 원래 속성만 바꾸던것도 같은 형식으로 변경해야함.
        let tmp = startValue;
        let subTg;
        if( attr.indexOf('tag=') == 0 ){
            
            let childPrefix = attr.substring(4).substring(0,attr.substring(4).length-1);
            subTg = document.getElementById(childPrefix+'1');
            if( subChild.length < 1 ) subChild.push(subTg);
            // rsltAttr_length 개수에 영향받음
            for( let c = 2 ; c <= rsltAttr_length ; c++ ){
                if( document.getElementById(childPrefix+c) ) break;
                subTg = document.createElement('div');
                subTg.id = childPrefix+c;
                // subTg.style = subChild[0].style;
                subTg.style.width = subChild[0].style.width;
                subTg.style.height = subChild[0].style.height;
                subTg.style.position = subChild[0].style.position;
                subTg.style.backgroundColor = subChild[0].style.backgroundColor;
                subTg.style.zIndex = subChild[0].style.zIndex;
                subTg.style.display = subChild[0].style.display;
                // px 일떄 고려
                let oriLeft = subChild[0].style.left.indexOf('px') == -1 ? 
                                    subChild[0].style.left.substring(0, subChild[0].style.left.length-1)
                                    : subChild[0].style.left.substring(0, subChild[0].style.left.length-2);
                let oriwidth = subChild[0].style.width.indexOf('px') == -1 ?
                                    subChild[0].style.width.substring(0, subChild[0].style.width.length-1)
                                    : subChild[0].style.width.substring(0, subChild[0].style.width.length-2);
                let oriTop = subChild[0].style.top.indexOf('px') == -1 ?
                                    subChild[0].style.top.substring(0, subChild[0].style.top.length -1)
                                    : subChild[0].style.top.substring(0, subChild[0].style.top.length -2);
                let oriMarginTop = subChild[0].style.marginTop.indexOf('px') == -1 ?
                                    subChild[0].style.marginTop.substring(0, subChild[0].style.marginTop.length-1)          
                                    : subChild[0].style.marginTop.substring(0, subChild[0].style.marginTop.length-2);
                let oriheight = subChild[0].style.height.indexOf('px') == -1 ?
                                    subChild[0].style.height.substring(0, subChild[0].style.height.length-1)    
                                    : subChild[0].style.height.substring(0, subChild[0].style.height.length-2);

                subTg.style.left       = ( Number( oriLeft )
                                            + ( unitTime == 0 ? Number(0) : ( Number( oriwidth ) + Number( unitTime ) ) ) * Number( (c -1) ) )
                                            +"%";
                // overlay시 화면 기준위치
                if( moveValue == 'y' ) 
                subTg.style.marginTop  = ( Number( oriMarginTop )
                                            + ( duration == 0 ? Number(0) : ( Number( oriheight ) + Number( duration ) ) ) * Number( (c -1) ) )
                                            +"%";    
                else 
                subTg.style.top        = ( Number( oriTop )
                                            + ( duration == 0 ? Number(0) : ( Number( oriheight ) + Number( duration ) ) ) * Number( (c -1) ) )
                                            +"%"; 

                func.styleChange_each( subTg, subAttr, startValue, startValue);
                document.getElementById(childPrefix.substring(0, childPrefix.length-6)).appendChild(subTg);
                subChild.push(subTg);
            }

        } else {

            // attrChange(target, tgAttr, tgSubAttr, rsltAttr, option)
            // tag가 아닌건 tag들에도 적용돼야 할 효과니까 같이 넣을 수 있도록.
            let option_tmp_forward = JSON.parse(JSON.stringify(option[i]));
            let option_tmp_reverse = JSON.parse(JSON.stringify(option[i]));
            let carry_option = [];
            let little_option = [];
            
            // tag가 하부 조건으로 에니메이트 된다는건 여러개이기 때문에 단방향
            // 이거 옵션까서 넣어야함.
            option_tmp_forward[2][7] = 0;
            option_tmp_reverse[2][7] = 0;

            option_tmp_reverse[2][2] = option[i][2][4];
            option_tmp_reverse[2][4] = option[i][2][2];

            // little_option.push(option_tmp_forward);
            // carry_option.push( attr, subAttr, `rsltAttr`, little_option );
            
            if( carryCheck.length == i ) {
                carryCheck.push(true);
                carryOpsForward.push(option_tmp_forward);
                carryOpsReverse.push(option_tmp_reverse);
            }
            

        }
        
        if( typeof startValue === 'number' && !isNaN(startValue) ){

            // 시작값이 더 큰데 변화량이 음수가 아닐경우 조정
            if( startValue > endValue && moveValue > 0 ) moveValue = -moveValue;

            if( duration != -1 )
                for( let u = 0 ; u < (duration/unitTime) ; u++ ){
                    setTimeout(function(){
                        tmp += (moveValue);
                        func.styleChange_each(target, subAttr, tmp, startValue);
    
                        if( u == Math.floor(duration/unitTime) ){
                            // 먼저 에니메이션 처리 후 변경. 이후 복귀에니메이션
                            if( tgAttr == 'style' ){
                                let origin = target.getAttribute(tgAttr);
                                rslt = styleChange(origin,  tgSubAttr, rsltAttr, cnt);
                                target.setAttribute(tgAttr, rslt);
                            } else if( tgAttr.length > 0 ){
                                rslt = rsltAttr[cnt];
                                target.setAttribute(tgAttr, rslt);
                            }
                            
                            // isBack = 1 복귀  
                            if( isBack == 1 ){
    
                                for( let b = 0 ; b < (duration/unitTime) ; b++ ){
                                    setTimeout(function(){
                                        tmp -= (moveValue);
                                        func.styleChange_each(target, subAttr, tmp, startValue);
                                    },unitTime * b);
                                }
                            }

                        }
                        
    
                    },unitTime * u);
    
                }
            else
                while(true){
                    setTimeout(function(){
                        tmp += (moveValue);
                        func.styleChange_each(target, subAttr, tmp);
                    },unitTime);
                }    
    
        } else {
    
            // 변경하는 값이 숫자가 아니면 이거로 fadeOut/In 할지 다른 옵션도 찾아볼것. target.style.opacity
            for( let n = 0 ; n < subChild.length ; n++ ){

                // attrChange(target, tgAttr, tgSubAttr, rsltAttr, option)
                
                // little_option.push(option[i]);
                // carry_option.push('tgAttr', 'tgSubAttr', `rsltAttr`, little_option);
                // carryOpsForward.push(carry_option);
                // console.log("isit? : "+carryOpsForward);
                if( n != cnt ) {

                    for( let carryCnt = 0 ; carryCnt < carryOpsForward.length ; carryCnt++ ){
                        attrChange( subChild[n], '', '', '', carryOpsForward );
                    }  

                    func.styleChange_each( subChild[n], subAttr, startValue, startValue);

                                      

                } else {
                    func.styleChange_each( subChild[n], subAttr, endValue, startValue);
                    
                    for( let carryCnt = 0 ; carryCnt < carryOpsReverse.length ; carryCnt++ ){
                        attrChange( subChild[n], '', '', '', carryOpsReverse );
                    }
                    
                }

            }

        }
    }

    // if( targetAttr == 'style' ){
    //     let origin = target.getAttribute(targetAttr);
    //     rslt = styleChange(origin,  subAttr, rsltAttr, cnt);
    // } else 
    //     rslt = rsltAttr[cnt];
    
    // target.setAttribute(targetAttr, rslt);
    
    flag++;

}

function styleChange(origin, targetStyle, targetValue, cnt){
    
    let rslt = origin;

    for( let i = 0 ; i < targetStyle.length ; i++ ){
        let startPoint = origin.indexOf(' '+targetStyle[i]+':')+targetStyle[i].length+2+1; // 양 옆 문자열 + 1
        let removePoint = origin.substring(startPoint).indexOf(';');
        rslt = origin.substring(0,startPoint)+targetValue[i][cnt]+origin.substring(startPoint+removePoint);
    }
    
    return rslt;
}
           
function newWindow(frame, msg, defin, size, option){

    // 값을 따로 가져오지 않는 이상 아직은 수정하기 애매함.

    if( frame == 0 ) {
        alert(msg[2]);
        if( defin.length > 0 ) location.href = defin;
        return;
    } else {

        let par = [];
        let msg_length = msg.length;
        j = 1;
        par.push([0]);
        par.push('?');
        for( let i = 1 ; i < msg_length ; i++ ){
            par.push(msg[i]);
            par.push('=')
            j++;
            par.push(msg[i]);
            if( j != msg_length -1 ) par.push('&');
        }
        if( size.length != 0 ){
            size.push('width=');
            size.push(size[0]);
            size.push(',height=');
            size.push(size[1]);
        }

    }

    if( defin.length > 0 ) location.href = defin;
    
    return window.open(par.join(''), "_blank", size.join(''));

}
           
function httpActive(httpMethod, req, res, s_api, s_callback, option){
    
    // let api = s_api[i];             // 배열 ( 동기/비동기, api )
    // let callback = s_callback[i];   // 배열 ( 함수코드번호, 동기/비동기)

    /*
    if( api.asny == 'y' ) sendAsny();
    else sendUnAsny();

    콜백 배열 넣어서 보내기.
    함수목록을 어디에 넣을지 고민할것.

    */

}

function animate_oneWay( target, rslt, tgAttr, tgSubAttr, attr, subAttr, startValue, moveValue, endValue, unitTime, duration, isBack ){
    
    let tmp = startValue;
    let attr_list = []
    if( startValue > endValue && moveValue > 0 ) moveValue = -moveValue;

    if( typeof startValue === 'number' && !isNaN(startValue) ){

        if( duration != -1 )
            for( let u = 0 ; u < (duration/unitTime) ; u++ ){
                setTimeout(function(){
                    tmp += (moveValue);
                    func.styleChange_each(target,subAttr,tmp,startValue);

                    if( (u == Math.floor(duration/unitTime)) && ( isBack == 1 ) ){
                        for( let b = 0 ; b < (duration/unitTime) ; b++ ){
                            setTimeout(function(){
                                tmp -= (moveValue);
                                func.styleChange_each(target,subAttr,tmp,startValue);
                            },unitTime * b);
                        }
                    }

                },unitTime * u);

            }
        else
            while(true){
                setTimeout(function(){
                    tmp += (moveValue);
                    func.styleChange_each(target,subAttr,tmp);
                },unitTime);
            }    

    } else {

        // 변경하는 값이 숫자가 아니면 이거로 fadeOut/In 할지 다른 옵션도 찾아볼것. target.style.opacity

    }

}

// function animate_oneWayBack( target, rslt, tgAttr, tgSubAttr, attr, subAttr, startValue, moveValue, endValue, unitTime, duration ){
    
//     let tmp = startValue;

//     if( typeof startValue === 'number' && !isNaN(startValue) ){

//         if( duration != -1 )
//             setTimeout(function(){
//                 attrChange(target, tgAttr, tgSubAttr, rslt, []);
//                 for( let u = 0 ; u < (duration/unitTime) ; u++ ){
//                     setTimeout(function(){
//                         tmp -= (moveValue);
//                         func.styleChange_each(target,subAttr,tmp);
//                     },duration * u);
//                 }
//             },duration*duration/unitTime);
//         else
//             while(true){
//                 setTimeout(function(){
//                     tmp -= (moveValue);
//                     func.styleChange_each(target,subAttr,tmp);
//                 },duration);
//             }    

//     } else {

//         // 변경하는 값이 숫자가 아니면 이거로 fadeOut/In 할지 다른 옵션도 찾아볼것. target.style.opacity  

//     }

// }

// function animate_roundTrip( target, rslt, tgAttr, tgSubAttr, attr, subAttr, startValue, moveValue, endValue, unitTime, duration ){

//     attrChange(target, attr, subAttr, startValue, []);
//     /*
//     [{target: `Header_wrap_in_group_2_part_pack_2`
//                , first: [0]
//                , second: ['style']
//                , third: [['display']]
//                , fourth: [['block']]
//                , fifth: ['']
//                , sixth: [0,[],[[]]] }]
//     */
//     let tmp = startValue;
//     for( let u = 0 ; u < (duration/unitTime) ; u++ ){
//         setTimeout(function(){
//             tmp += moveValue;
//             func.styleChange_each(target,subAttr,tmp);
//         },duration * u);
//     }

//     for( let u = 0 ; u < (duration/unitTime) ; u++ ){
//         attrChange(target, tgAttr, tgSubAttr, rslt, []);
//         setTimeout(function(){
//             tmp -= moveValue;
//             func.styleChange_each(target,subAttr,tmp);
//         },duration * u);
//     }

// }