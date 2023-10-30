import * as data from '../data'
import * as func from './functions'
import * as timeFunc from './timeListenerFunc'
import * as options from './options.js'


export function setting(ScreenName){
        
    let pages;
    let parts = [];
    let parts_breaker = false;

    // 페이지는 하나 이므로 찾으면 루프 탈출.
    let pages_length = data.pages.length;
    for( let i = 0 ; i < pages_length ; i++ ){
        if( data.pages[i].pageName == ScreenName )  {
            if( document.getElementById(ScreenName+'_wrap') != undefined ) return;
            pages = data.pages[i];
            break;
        }
        
        if( i == pages_length -1 ) if( data.pages[i].pageName != ScreenName ) return;   // 없는 페이지 만들려고 하다가 에러나지 않도록 추가.
    }

    // 정렬된 데이터를 보낼 것이므로 해당하는 파츠 리스트가 끝나면 루프 탈출.
    let parts_length = data.parts.length;
    for( let i = 0 ; i < parts_length ; i++ ){
        
        if( data.parts[i].pageName == ScreenName ) {
            parts.push(data.parts[i]);
            parts_breaker = true;
            continue;
        }
        if( parts_breaker ) break;

    }
    
    // declare component
    let wrap_pack=[];                           // wrap, in을 makeWrap()으로 리턴받되, 둘 다 접근용이해야함.
    let wrap;
    let wrap_in;
    let wrap_in_group;

    let target_index=[];                        // 생성한 태그가 들어갈 곳
    let partPack_num_index=[];                     // 파트팩 관리위한 변수
    let pack_idx = -1;
    
    // create page component
    /*

        -- functions
        makeWrap();         // in은 wrap안에서의 틀을 만들고 재사용되지 않아 분리하지않음.
        makeGroup();
        makePartPack();
        makePart();
        addTextAndImg();
    
    */
    wrap_pack = makeWrap(ScreenName, pages);
    wrap = wrap_pack[0];
    wrap_in = wrap_pack[1];
    
    wrap.appendChild(wrap_in);
    document.getElementById(ScreenName).appendChild(wrap);
    target_index.push(wrap_in);

    let targetDepth = target_index.length;   // 뎁스 계산용

    let packCnt = 0;                        // 파트팩 내부의 파트갯수
    let inSideCnt = 0;                      // inSide 내부 갯수
    let inSide_parent;                      // inSide 종속시킬 li 태그 지정.
    let part_cnt = 0;                       // 대소비교 구문에서 분기예측 사유인지 이 방식이 미세하게 빨랐음
    let parts_lenght = parts.length;        // for문 length 재호출 방지
    
    for( ; parts_lenght > 0 ; parts_lenght-- ){

        let part = parts[part_cnt];
        let tmp;
        let tmp_list=[];
        let idx = target_index.length-1;

        if( part.hr == 'y' ) {          // hr 태그
            tmp = makeHr(part);
            part_cnt++;
            target_index[idx].appendChild(tmp);
            continue;
        }

        // 그룹번호 변경시 초기화
        if(  wrap_in_group != undefined && wrap_in_group.id != ScreenName+'_wrap_in_group_'+part.grouping_num ){
            wrap_in_group = null;
            while( targetDepth > 0 ){
                target_index.pop();
                idx--;
                targetDepth--;
            }
        } 
            

        // 새 그룹 생성
        // 그룹 생성시 파트팩 초기화
        if( wrap_in_group == undefined ) {
            wrap_in_group = makeGroup(ScreenName, part);
            target_index[idx].appendChild(wrap_in_group);
            target_index.push(wrap_in_group);
            idx++;
            targetDepth = 1; // 그룹별로 뎁스 별도 관리
        }

        // 뎁스를 낮춘다면 원하는 뎁스까지 pop()
        while( targetDepth > part.partDepth ) {
            target_index.pop();
            idx--;
            targetDepth--;
        }
        
        // 파트팩 이동
        while( partPack_num_index[pack_idx] > part.partPack_num ){
            partPack_num_index.pop();
            pack_idx--;
        }
        
        // 파트팩 번호가 바뀌고, 파트팩이라면 파트팩 생성
        if( part.isPack == 'y' ){

            // 신규 파트팩 추가
            if( partPack_num_index[pack_idx] != part.partPack_num ){
                packCnt = 1;
                inSideCnt = 0;
                
                // 파트팩 번호 뎁스 추가
                tmp_list = makePartPack(ScreenName, part);
                partPack_num_index.push(part.partPack_num);
                pack_idx++;
                
                // 파트팩의 첫 li
                tmp = makePart_li(ScreenName, part, part_cnt, packCnt);

                // 순서에 맞게 주입.
                tmp_list[1].appendChild(tmp);
                tmp_list[0].appendChild(tmp_list[1]);
                target_index[idx].appendChild(tmp_list[0]);

                // ul 태그 주입
                target_index.push(tmp_list[1]);
                idx++;
                targetDepth++;

                // 추가 뎁스가 있다면 li 태그 주입
                if( part.hasPack == 'y' ) {
                    target_index.push(tmp);
                    inSide_parent = tmp;
                    idx++;
                    targetDepth++;
                }
        
                part_cnt++; 
                continue;
            }else{
                
                // 기존 파트팩이 있다면 항목추가
                
                if( part.inSide == 'y' ) {
                    inSideCnt++;
                    tmp = makeInSide(ScreenName, part, part_cnt, packCnt, inSideCnt);
                    inSide_parent.appendChild(tmp);
                    part_cnt++;
                    continue;
                } else {
                    packCnt++;
                    tmp = makePart_li(ScreenName, part, part_cnt, packCnt);
                    inSide_parent = tmp;
                    
                }

            }

        }else{

            // 파트팩과 관련이 없다면 일반 파트 추가
            tmp = makePart(ScreenName, part, part_cnt);

        }

        // 해당 뎁스에 생성한 것 추가.
        target_index[idx].appendChild(tmp);
        
        part_cnt++;
    }
    
    
}

function makeWrap(ScreenName, pages){

    let return_tmp = [];
    let wrap;
    let wrap_in;

    wrap = document.createElement('div');
    wrap.id = ScreenName+'_wrap';
    wrap.className = ScreenName+'_wrap';
    wrap.style.width = pages.pageWidth+'%';
    wrap.style.height = pages.pageHeight+'%';
    wrap.style.display = pages.pageDisplay;
    wrap.style.backgroundColor = pages.bGColor;
    wrap.style.textAlign = pages.text_align;
    wrap.style.border = pages.pageBorder;
    wrap.style.borderTopStyle = pages.borderTopStyle;
    wrap.style.borderRightStyle = pages.borderRightStyle;
    wrap.style.borderBottomStyle = pages.borderBottomStyle;
    wrap.style.borderLeftStyle = pages.borderLeftStyle;
    wrap.style.borderTopColor = pages.borderTopColor;
    wrap.style.borderRightColor = pages.borderRightColor;
    wrap.style.borderBottomColor = pages.borderBottomColor;
    wrap.style.borderLeftColor = pages.borderLeftColor;
    wrap.style.marginTop = pages.marginTop+'%';
    wrap.style.marginRight = pages.marginRight+'%';
    wrap.style.marginBottom = pages.marginBottom+'%';
    wrap.style.marginLeft = pages.marginLeft+'%';
    wrap.style.paddingTop = pages.paddingTop+'%';
    wrap.style.paddingRight = pages.paddingRight+'%';
    wrap.style.paddingBottom = pages.paddingBottom+'%';
    wrap.style.paddingLeft = pages.paddingLeft+'%';
    if( pages.onLoad.length > 0 ) wrap.onload = listener(pages.onLoad);

    wrap_in = document.createElement('div');
    wrap_in.id = ScreenName+'_wrap_in';
    wrap_in.className = ScreenName+'_wrap_in';
    wrap_in.style.width = pages.innerWidth+'%';
    wrap_in.style.height = pages.innerHeight+'%';
    wrap_in.style.display = pages.innerDisplay;
    wrap_in.style.marginTop = pages.innerMarginTop+'%';
    wrap_in.style.marginRight = pages.innerMarginRight+'%';
    wrap_in.style.marginBottom = pages.innerMarginBottom+'%';
    wrap_in.style.marginLeft = pages.innerMarginLeft+'%';
    wrap_in.style.paddingTop = pages.innerPaddingTop+'%';
    wrap_in.style.paddingRight = pages.innerPaddingRight+'%';
    wrap_in.style.paddingBottom = pages.innerPaddingBottom+'%';
    wrap_in.style.paddingLeft = pages.innerPaddingLeft+'%';
    wrap_in.style.alignItems = pages.align_items;
    wrap_in.style.flexWrap = 'wrap';
    wrap_in.style.backgroundColor = pages.innerBGColor;
    
    return_tmp.push(wrap, wrap_in)

    return return_tmp;

}        


function makeGroup(ScreenName, part){

    let wrap_in_group;

    wrap_in_group = document.createElement('div');
    wrap_in_group.id = ScreenName+'_wrap_in_group_'+part.grouping_num;
    wrap_in_group.style.width = '100%';         // group은 div내에서 줄(block)단위 관리하고자 만듬.
    wrap_in_group.style.height = part.group_height+'%';
    wrap_in_group.style.marginTop = part.group_margin_top+'%';
    wrap_in_group.style.marginRight = part.group_margin_right+'%';
    wrap_in_group.style.marginBottom = part.group_margin_bottom+'%';
    wrap_in_group.style.marginLeft = part.group_margin_left+'%';
    wrap_in_group.style.display = 'flex';
    part.group_item_align == '' ? wrap_in_group.style.alignItems = 'center' : wrap_in_group.style.alignItems = part.group_item_align;
    wrap_in_group.style.justifyContent = part.justifyContent;

    return wrap_in_group;

}


function makePartPack(ScreenName, part){

    let rslt=[];
    let wrap_in_group_part_pack;
    let wrap_in_group_part_pack_ul;

    wrap_in_group_part_pack = document.createElement('div');
    wrap_in_group_part_pack.id = ScreenName+'_wrap_in_group_'+part.grouping_num+"_part_pack_"+part.partPack_num;
    wrap_in_group_part_pack.style.width = part.packWidth+"%";
    wrap_in_group_part_pack.style.height = part.heightFix == 'n' ? part.height+'%' : part.height+'px';
    wrap_in_group_part_pack.style.marginTop = part.partPack_margin_top+"%";
    wrap_in_group_part_pack.style.marginRight = part.partPack_margin_right+"%";
    wrap_in_group_part_pack.style.marginBottom = part.partPack_margin_bottom+"%";
    wrap_in_group_part_pack.style.marginLeft = part.partPack_margin_left+"%";
    wrap_in_group_part_pack.style.paddingTop = part.partPack_padding_top+"%";
    wrap_in_group_part_pack.style.paddingRight = part.partPack_padding_right+"%";
    wrap_in_group_part_pack.style.paddingBottom = part.partPack_padding_bottom+"%";
    wrap_in_group_part_pack.style.paddingLeft = part.partPack_padding_left+"%";
    if( part.overlay == 'y1') {
        wrap_in_group_part_pack.style.position = 'absolute';
        wrap_in_group_part_pack.style.zIndex = part.overlayNum;
    } else if ( part.overlay == 'y2' ){
        wrap_in_group_part_pack.style.position = 'relative';
        wrap_in_group_part_pack.style.zIndex = part.overlayNum;
        wrap_in_group_part_pack.style.left = part.overlayLeft+"%";
        wrap_in_group_part_pack.style.marginTop = part.overlayTop+"%";
    }
    wrap_in_group_part_pack.style.display = part.packDisplay

    wrap_in_group_part_pack_ul = document.createElement('ul');
    wrap_in_group_part_pack_ul.id = ScreenName+'_wrap_in_group_'+part.grouping_num+"_part_pack_"+part.partPack_num+"_ul";
    wrap_in_group_part_pack_ul.style.width = "100%";
    wrap_in_group_part_pack_ul.style.height = "100%";
    wrap_in_group_part_pack_ul.style.margin = '0 0 0 0';
    wrap_in_group_part_pack_ul.style.padding = '0 0 0 0';
    wrap_in_group_part_pack_ul.style.listStyle = part.partPack_listStyle;
    wrap_in_group_part_pack_ul.style.backgroundColor = part.packBackgrountColor;
    wrap_in_group_part_pack_ul.style.display = 'flex';
    wrap_in_group_part_pack_ul.style.alignItems = part.packAlign;
    wrap_in_group_part_pack_ul.style.textAlign = part.text_align;
    wrap_in_group_part_pack_ul.style.justifyContent = part.justifyContent;
    if( part.pack_v_h = 'v' ) wrap_in_group_part_pack_ul.style.float = 'left';

    rslt.push(wrap_in_group_part_pack, wrap_in_group_part_pack_ul);
    
    return rslt;
}

function makePart(ScreenName, part, part_cnt){

    let wrap_in_group_part;
    let text;

    wrap_in_group_part = document.createElement('div');
    wrap_in_group_part.id = ScreenName+'_wrap_in_group_'+part.grouping_num+"_part_"+part_cnt;
    wrap_in_group_part.style.display = part.display == '' ? 'inline-block' : part.display;
    wrap_in_group_part.style.float = part.float;
    // wrap_in_group_part.style.display = 'inline-block';
    wrap_in_group_part.style.width = part.width+'%';
    wrap_in_group_part.style.height = part.heightFix == 'n' ? part.height+'%' : part.height+'px';
    wrap_in_group_part.style.textAlign = part.text_align;
    wrap_in_group_part.style.backgroundColor = part.backGroundColor;
    wrap_in_group_part.style.border = part.border;
    wrap_in_group_part.style.borderTopStyle = part.borderTopStyle;
    wrap_in_group_part.style.borderRightStyle = part.borderRightStyle;
    wrap_in_group_part.style.borderBottomStyle = part.borderBottomStyle;
    wrap_in_group_part.style.borderLefttStyle = part.borderLeftStyle;
    wrap_in_group_part.style.borderTopColor = part.borderTopColor;
    wrap_in_group_part.style.borderRightolor = part.borderRightolor;
    wrap_in_group_part.style.borderBottomColor = part.borderBottomColor;
    wrap_in_group_part.style.borderLeftColor = part.borderLeftColor;
    wrap_in_group_part.style.lineHeight = part.line_height == -1 ? '' : part.line_height +'%';
    if( part.overlay == 'y1') {
        wrap_in_group_part.style.position = 'absolute';
        wrap_in_group_part.style.zIndex = part.overlayNum;
    } else if ( part.overlay == 'y2' ){
        wrap_in_group_part.style.position = 'relative';
        wrap_in_group_part.style.zIndex = part.overlayNum;
        wrap_in_group_part.style.left = part.overlayLeft+"%";
        wrap_in_group_part.style.marginTop = part.overlayTop+"%";
    }
    addTextAndImg(ScreenName, part, part_cnt, 0, wrap_in_group_part);

    if( part.onmouseover.length > 0 )
        wrap_in_group_part.onmouseover = listener(part.onmouseover);
    if( part.onmouseout.length > 0 )
        wrap_in_group_part.onmouseout = listener(part.onmouseout);
    if( part.onClick.length > 0 )
        wrap_in_group_part.onclick = listener(part.onClick);            
    if( part.timesGone.length > 0 )
        timeListener(part.timesGone);

    return wrap_in_group_part;

}

function makePart_li(ScreenName, part, part_cnt, packCnt){
    
    let wrap_in_group_part_li;

    wrap_in_group_part_li = document.createElement('li');
    wrap_in_group_part_li.id = ScreenName+'_wrap_in_group_'+part.grouping_num+"_part_"+part_cnt+"_packnum_"+packCnt+"_li";
    wrap_in_group_part_li.style.width = part.width+'%';
    wrap_in_group_part_li.style.height = part.height+'%';
    wrap_in_group_part_li.style.margin = '0 0 0 0';
    wrap_in_group_part_li.style.padding = '0 0 0 0';
    wrap_in_group_part_li.style.border = part.border;
    wrap_in_group_part_li.style.borderTopStyle = part.borderTopStyle;
    wrap_in_group_part_li.style.borderRightStyle = part.borderRightStyle;
    wrap_in_group_part_li.style.borderBottomStyle = part.borderBottomStyle;
    wrap_in_group_part_li.style.borderLefttStyle = part.borderLeftStyle;
    wrap_in_group_part_li.style.borderTopColor = part.borderTopColor;
    wrap_in_group_part_li.style.borderRightolor = part.borderRightolor;
    wrap_in_group_part_li.style.borderBottomColor = part.borderBottomColor;
    wrap_in_group_part_li.style.borderLeftColor = part.borderLeftColor;
    wrap_in_group_part_li.style.marginTop = part.inPack_margin_top+"%";
    wrap_in_group_part_li.style.marginRight = part.inPack_margin_right+"%";
    wrap_in_group_part_li.style.marginBottom = part.inPack_margin_bottom+"%";
    wrap_in_group_part_li.style.marginLeft = part.inPack_margin_left+"%";
    wrap_in_group_part_li.style.paddingTop = part.inPack_padding_top+"%";
    wrap_in_group_part_li.style.paddingRight = part.inPack_padding_right+"%";
    wrap_in_group_part_li.style.paddingBottom = part.inPack_padding_bottom+"%";
    wrap_in_group_part_li.style.paddingLeft = part.inPack_padding_left+"%";
    wrap_in_group_part_li.style.textAlign = part.text_align;
    wrap_in_group_part_li.style.alignItems = part.align_items;
    wrap_in_group_part_li.style.display = part.display;
    wrap_in_group_part_li.style.float = part.float;
    wrap_in_group_part_li.style.lineHeight = part.line_height+'%';
    
    addTextAndImg(ScreenName, part, part_cnt, 0, wrap_in_group_part_li);
    
    if( part.onmouseover.length > 0 )
        wrap_in_group_part_li.onmouseover = listener(part.onmouseover);
    if( part.onmouseout.length > 0 )
        wrap_in_group_part_li.onmouseout = listener(part.onmouseout);
    if( part.onClick.length > 0 )
        wrap_in_group_part_li.onclick = listener(part.onClick);
    if( part.timesGone.length > 0 )
        timeListener(part.timesGone);
    
    return wrap_in_group_part_li;

}

function makeInSide(ScreenName, part, part_cnt, packCnt, inSideCnt){

    let wrap_in_group_part_inSide = document.createElement('div');
    wrap_in_group_part_inSide.id = ScreenName+'_wrap_in_group_'+part.grouping_num+"_part_"+part_cnt+"_packnum_"+packCnt+"_li_inside_"+inSideCnt;
    wrap_in_group_part_inSide.style.width = part.width+'%';
    wrap_in_group_part_inSide.style.height = part.height+'%';
    wrap_in_group_part_inSide.style.margin = '0 0 0 0';
    wrap_in_group_part_inSide.style.padding = '0 0 0 0';
    wrap_in_group_part_inSide.style.border = part.border;
    wrap_in_group_part_inSide.style.borderTopStyle = part.borderTopStyle;
    wrap_in_group_part_inSide.style.borderRightStyle = part.borderRightStyle;
    wrap_in_group_part_inSide.style.borderBottomStyle = part.borderBottomStyle;
    wrap_in_group_part_inSide.style.borderLefttStyle = part.borderLeftStyle;
    wrap_in_group_part_inSide.style.borderTopColor = part.borderTopColor;
    wrap_in_group_part_inSide.style.borderRightolor = part.borderRightolor;
    wrap_in_group_part_inSide.style.borderBottomColor = part.borderBottomColor;
    wrap_in_group_part_inSide.style.borderLeftColor = part.borderLeftColor;
    wrap_in_group_part_inSide.style.marginTop = part.inPack_margin_top+"%";
    wrap_in_group_part_inSide.style.marginRight = part.inPack_margin_right+"%";
    wrap_in_group_part_inSide.style.marginBottom = part.inPack_margin_bottom+"%";
    wrap_in_group_part_inSide.style.marginLeft = part.inPack_margin_left+"%";
    wrap_in_group_part_inSide.style.paddingTop = part.inPack_padding_top+"%";
    wrap_in_group_part_inSide.style.paddingRight = part.inPack_padding_right+"%";
    wrap_in_group_part_inSide.style.paddingBottom = part.inPack_padding_bottom+"%";
    wrap_in_group_part_inSide.style.paddingLeft = part.inPack_padding_left+"%";
    wrap_in_group_part_inSide.style.textAlign = part.text_align;
    wrap_in_group_part_inSide.style.alignItems = part.align_items;
    wrap_in_group_part_inSide.style.display = part.display;
    wrap_in_group_part_inSide.style.float = part.float;

    addTextAndImg(ScreenName, part, part_cnt, inSideCnt, wrap_in_group_part_inSide);
    
    if( part.onmouseover.length > 0 )
        wrap_in_group_part_inSide.onmouseover = listener(part.onmouseover);
    if( part.onmouseout.length > 0 )
        wrap_in_group_part_inSide.onmouseout = listener(part.onmouseout);
    if( part.onClick.length > 0 )
        wrap_in_group_part_inSide.onclick = listener(part.onClick);
    if( part.timesGone.length > 0 )
        timeListener(part.timesGone);

    return wrap_in_group_part_inSide;
}

function makeHr(part){

    let tmp = document.createElement('hr');
    tmp.style.width = part.width+'%';
    tmp.style.height = part.heightFix == 'y' ? part.height+'px' : part.height+'%' ;
    tmp.style.display = part.display;
    tmp.style.backgroundColor = part.backGroundColor;

    return tmp;
}

function addTextAndImg(ScreenName, part, part_cnt, inSideCnt, target_tag){

    let tmp_text = [];
    let tmp_img;
    let img_cnt = 0;
    let img_inner;
    let blank_flag = false;
    let blank_size = [];
    let blank_cnt = 0;

    for (let char of part.text) {

        if( char == "　" ) { // ㄱ한자 1로 만든 공백. ( 이미지 위치 )
            if( tmp_text.length > 0 )  {
                target_tag.innerHTML += tmp_text.join('');
                tmp_text = [];
            }
            tmp_img = document.createElement('div');
            if( inSideCnt == 0 ) tmp_img.id = ScreenName+'_parts_'+part_cnt+"_inSide_"+inSideCnt+"_img_"+img_cnt;
            else tmp_img.id = ScreenName+'_parts_'+part_cnt+"_img_"+img_cnt;
            let image = part.image_file[img_cnt];
            tmp_img.style.position = 'relative';
            tmp_img.style.display = image.i_inline_block;
            tmp_img.style.width = image.i_width+'%';
            tmp_img.style.height = image.i_height+'%';
            tmp_img.onclick = image.i_clickable == 'y' ? image.i_newWindow == 'y' ? function(){ window.open(image.i_href,"_blank") } : image.i_working == 'y' ? image.i_href : function(){ location.href = image.i_href } : '';
            
            img_inner = document.createElement('img');
            img_inner.id = ScreenName+'_parts_'+part_cnt+"_img_inner_"+img_cnt;
            let img_inner_style = img_inner.style;
            img_inner.alt = image.i_alt;
            img_inner.src = '/image/'+image.i_file;
            img_inner_style.width = '100%';
            img_inner_style.height = '100%';

            tmp_img.appendChild(img_inner);
            target_tag.appendChild(tmp_img);
            img_cnt++;
            continue;

        }

        if( char.charCodeAt(0) == 92 || blank_flag == true ){

            if(char.charCodeAt(0) != 92 ) blank_size.push(char);

            if( char.charCodeAt(0) == 92 && blank_flag == true ){
                blank_flag = false;
                let tmp_blank = document.createElement('div');
                tmp_blank.id = ScreenName+'_parts_'+part_cnt+"_blank_"+blank_cnt;
                tmp_blank.style.width = blank_size.join('')+'%';
                tmp_blank.style.height = 0;
                tmp_blank.style.display = 'inline-block';
                target_tag.appendChild(tmp_blank);
                blank_size = [];
                blank_cnt++;
            } else {
                if( blank_flag == false ) blank_flag = true;
            }

            continue;

        }
        tmp_text.push(char);

    }

    if( tmp_text.length > 0 )  {
        target_tag.innerHTML += tmp_text.join('');
    }

}

function listener(detail){

    return function(){ 
        let detail_length = detail.length;
        for( let i = 0 ; i < detail_length ; i++ ){
            
            let data = detail[i];
            func.listenerFunc(data);

        }

    }

}

function timeListener(detail){    
    
    return (() => {
        
        let detail_length = detail.length;
        for( let i = 0 ; i < detail_length ; i++ ){
            
            let data = detail[i];
            timeFunc.timeListenerFunc(data);

        }
    })();

}

function location_overlay(tartget_id, left, top){

    return (() => {

    })();

}