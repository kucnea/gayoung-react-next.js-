export function listenerFunc(params){

    /*
        params Values
        idx   : value
        0     : 적용 객체 id
        1[]   : 0 속성변경                     1 새창 ( 리턴 발생 )                                      Http_method[]
        2[]   : 변경하려는 attribute           , 0 기본 경고창 1 커스텀 창                                , request data// 배열,객체 째로
        3[]   : 변경하려는 하위 attribute[]    , 파라미터[]   // 0번째 : 경로, 홀수 : 파라미터 짝수: 벨류   , response data// 배열,객체 째로
        4[]   : 희망하는 attribute의 value[]   , 종료 후 이동할 페이지 ( 공란 이동없음, -1 창종료 )         , api[동기/비동기, url]
        5[]   :                               , 창의 크기[2]                                             , 콜백함수[코드번호, 동기/비동기] 
        6[]   : 반복조건[시간, 조건[], 효과[]]  , 반복조건[시간, 조건[], 효과[]]                           , 반복조건[시간, 조건[인자,조건값], []]

        ex ) 리스너 함수
             [{target: `Header_wrap_in_group_2_part_pack_2`
               , first: [0]
               , second: ['style']
               , third: [['display']]
               , fourth: [['block']]
               , fifth: ['']
               , sixth: [0,[],[[]]] }]

             인터벌 함수
             [{target: `Index_parts_0_img_inner_0`
               , first: [0]
               , second: ['src']
               , third: [[]]
               , fourth: [['/image/visual2.jpg', '/image/visual3_2.jpg']]
               , fifth: ['']
               , sixth: [2000,[],[[]]] }]   

            * option 규칙
            조건                         효과
            [허용조건,벨류,종료조건,벨류] [속성, 하위속성, 시작값, 변화량, 최종값, 단위시간, 총 지속시간]
    
    */
    
    let rslt=[];
    let target = document.getElementById(params.target);
    let work_cnt = params.first.length;

    for( let i = 0 ; i < work_cnt ; i++ ){
        
        if( params.first[i] == 0 ) attrChange(target, params.second[i], params.third[i], params.fourth[i], params.sixth[i]);// 속성변경
        else if( params.first[i] == 1 ) rslt.push(newWindow(params.second[i], params.third[i], params.fourth[i], params.fifth[i], params.sixth[i])); // 알림창
        else httpActive(params.first[i], params.second[i], params.third[i], params.fourth[i], params.fifth[i], params.sixth[i]);// CRUD
        
    }

    return rslt;

}

function attrChange(target, targetAttr, subAttr, rsltAttr, option){
    
    let rslt;
    
    if( targetAttr == 'style' ){
        let origin = target.getAttribute(targetAttr);
        rslt = styleChange(origin,  subAttr, rsltAttr);
    } else 
        rslt = rsltAttr[0];

    target.setAttribute(targetAttr, rslt);

}

function styleChange(origin, targetStyle, targetValue){
    
    let rslt = origin;

    for( let i = 0 ; i < targetStyle.length ; i++ ){
        let startPoint = origin.indexOf(' '+targetStyle[i]+':')+targetStyle[i].length+2+1; // 양 옆 문자열 + 1
        let removePoint = origin.substring(startPoint).indexOf(';');
        rslt = origin.substring(0,startPoint)+targetValue[i]+origin.substring(startPoint+removePoint);
    }
    
    return rslt;
}

export function styleChange_each(target, targetStyle, targetValue, startValue){
    
    let origin = target.getAttribute('style');

    // if( target.id = 'Index_wrap_in_group_1_part_1'){
    //     console.log("target insert.");
    //     console.log("origin : "+origin);
    // }
  
    if( origin.indexOf(' '+targetStyle+':') == -1 ) origin = origin + " "+targetStyle+": "+startValue+";";
    let rslt = origin;

    let startPoint = origin.indexOf(' '+targetStyle+':')+targetStyle.length+2+1;
    let removePoint = origin.substring(startPoint).indexOf(';');
    
    rslt = origin.substring(0,startPoint)+targetValue+origin.substring(startPoint+removePoint);
    
    // if( target.id = 'Index_wrap_in_group_1_part_1'){
    //     console.log("target outer.");
    //     console.log("rslt : "+rslt);
    // }

    target.setAttribute('style', rslt);
    return;
}

function newWindow(frame, msg, defin, size, option){

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