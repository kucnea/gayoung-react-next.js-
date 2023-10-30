import * as func from './functions'

let startOption;
let startValue;
let endOption;
let endValue;
let flag=1;

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
            [허용조건,벨류,종료조건,벨류] [속성, 하위속성, 시작값, 변화량, 최종값, 단위시간, 총 지속시간, 복귀여부]
                                        [속성, 하위속성, 시작값, 변화량, 최종값, 단위시간, 총 지속시간, 반복갯수단위]

            // option : 2500,[],[[['style','opacity',1,0.16,0,16,1000,1]]]  // 해당시간을 주기로 발생할 에니메이션
            // option[2] : [['style','opacity',1,0.16,0,16,1000,1]]         // 여러 옵션이 에니메이트 될 수 있음
            // option[2][0] : ['style','opacity',1,0.16,0,16,1000,1]        // 발생할 하나의 옵션 
            // option[2][0][0] : 'style'                                    // 그 첫번째 필드
                                                                                                0 : 무한, 1 : 복귀
                                                                                                    0 : 무한
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
            if( params.first[i] == 0 ) attrChange(target, params.second[i], params.third[i], params.fourth, params.sixth[i]);// 속성변경
            else if( params.first[i] == 1 ) rslt.push(newWindow(params.second[i], params.third[i], params.fourth, params.fifth[i], params.sixth[i])); // 알림창
            else httpActive(params.first[i], params.second[i], params.third[i], params.fourth[i], params.fifth, params.sixth[i]);// CRUD
        },params.sixth[i][0]);

    }

    return rslt;

}

function animate_control(){

    animate_oneWay(target, rslt, targetAttr, subAttr, option[2][i][0], option[2][i][1], option[2][i][2], option[2][i][3], option[2][i][4], option[2][i][5], option[2][i][6]);

}
           
function attrChange(target, targetAttr, subAttr, rsltAttr, option){
    
    let rslt;

    let rsltAttr_length = rsltAttr.length;
    let cnt = flag % rsltAttr_length;

    if ( !option[2] ) return;
    let option_length = option[2].length;
    
    for( let i = 0 ; i < option_length ; i++ ){
        // animate_oneWay(target, rslt, targetAttr, subAttr  , option[2][i][0], option[2][i][1], option[2][i][2], option[2][i][3], option[2][i][4], option[2][i][5], option[2][i][6], option[2][i][7]);
        // animate_oneWay(target, rslt, tgAttr    , tgSubAttr, attr           , subAttr        , startValue     , moveValue      , endValue       , unitTime       , duration       , isBack ){
        
        let tmp = option[2][i][2];
        if( option[2][i][2] > option[2][i][4] && option[2][i][3] > 0 ) option[2][i][3] = -option[2][i][3];
        
        if( typeof option[2][i][2] === 'number' && !isNaN(option[2][i][2]) ){

            if( option[2][i][6] != -1 )
                for( let u = 0 ; u < (option[2][i][6]/option[2][i][5]) ; u++ ){
                    setTimeout(function(){
                        tmp += (option[2][i][3]);
                        func.styleChange_each(target,option[2][i][1],tmp,option[2][i][2]);
    
                        if( u == Math.floor(option[2][i][6]/option[2][i][5]) ){
                            // 먼저 에니메이션 처리 후 변경. 이후 복귀에니메이션
                            if( targetAttr == 'style' ){
                                let origin = target.getAttribute(targetAttr);
                                rslt = styleChange(origin,  subAttr, rsltAttr, cnt);
                            } else 
                                rslt = rsltAttr[cnt];

                            if( option[2][i][7] == 1 ){
                                target.setAttribute(targetAttr, rslt);
    
                                for( let b = 0 ; b < (option[2][i][6]/option[2][i][5]) ; b++ ){
                                    setTimeout(function(){
                                        tmp -= (option[2][i][3]);
                                        func.styleChange_each(target,option[2][i][1],tmp,option[2][i][2]);
                                    },option[2][i][5] * b);
                                }
                            }

                        }
                        
    
                    },option[2][i][5] * u);
    
                }
            else
                while(true){
                    setTimeout(function(){
                        tmp += (option[2][i][3]);
                        func.styleChange_each(target,option[2][i][1],tmp);
                    },option[2][i][5]);
                }    
    
        } else {
    
            // 변경하는 값이 숫자가 아니면 이거로 fadeOut/In 할지 다른 옵션도 찾아볼것. target.style.opacity
    
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