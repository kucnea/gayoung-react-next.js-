import * as data from '../data'

export function setting(ScreenName){
        
    let pages;
    let parts = [];
    for( let i = 0 ; i < data.pages.length ; i++ ){
        if( data.pages[i].pageName == ScreenName )  pages = data.pages[i];
    }
    for( let i = 0 ; i < data.parts.length ; i++ ){
        if( data.parts[i].pageName == ScreenName ) parts.push(data.parts[i]);
    }
    
    if( document.getElementById(ScreenName+'_wrap') != undefined ) return false;
    let wrap = document.createElement('div');
    wrap.id = ScreenName+'_wrap';
    wrap.className = ScreenName+'_wrap';
    let wrap_style = wrap.style;
    wrap_style.width = pages.pageWidth+'%';
    wrap_style.height = pages.pageHeight+'%';
    wrap_style.display = pages.pageDisplay;
    wrap_style.textAlign = pages.text_align;
    wrap_style.border = pages.pageBorder;
    wrap_style.borderTopStyle = pages.borderTopStyle;
    wrap_style.borderRightStyle = pages.borderRightStyle;
    wrap_style.borderBottomStyle = pages.borderBottomStyle;
    wrap_style.borderLeftStyle = pages.borderLeftStyle;
    wrap_style.borderTopColor = pages.borderTopColor;
    wrap_style.borderRightColor = pages.borderRightColor;
    wrap_style.borderBottomColor = pages.borderBottomColor;
    wrap_style.borderLeftColor = pages.borderLeftColor;

    let wrap_in = document.createElement('div');
    wrap_in.id = ScreenName+'_in';
    wrap_in.className = ScreenName+'_in';
    let wrap_in_style = wrap_in.style;
    wrap_in_style.width = pages.innerWidth+'%';
    wrap_in_style.height = pages.innerHeight+'%';
    wrap_in_style.display = pages.inenrDisplay;
    wrap_in_style.alignItems = pages.align_items;
    wrap_in_style.flexWrap = 'wrap';

    wrap.appendChild(wrap_in);
    document.getElementById(ScreenName).appendChild(wrap);    

    let part_cnt = 0;
    let part_width_sum = 0;
    let target_height;
    let tmp_group;
    let tmp_group_num;

    for( let i = 0 ; i < parts.length ; i++ ){
        
        let part = parts[i];
        let tmp = document.createElement('div');
        let tmp_img;
        let img_inner;
        let tmp_blank;
        
        if( tmp_group_num != part.grouping_num ) {
            tmp_group_num = part.grouping_num;
            part_width_sum = 0;
        } else tmp_group_num = part.grouping_num;

        if( tmp_group != null && tmp_group.id != ScreenName+'_group_'+part.grouping_num ) tmp_group = null;

        if( part.grouping_num != 0 && tmp_group == undefined ){

            tmp_group = document.createElement('div');
            tmp_group.id = ScreenName+'_group_'+part.grouping_num;
            tmp_group.style.width = '100%';
            tmp_group.style.height = part.group_height+'%';
            tmp_group.style.display = 'flex';
            tmp_group.style.alignItems = 'center'
            if( part.content_r_l_b == 'r' ) tmp_group.style.justifyContent = 'flex-end';
            if( part.content_r_l_b == 'b' ) tmp_group.style.justifyContent = 'space-between';
            
            tmp_group.appendChild(tmp);

        } else if ( part.grouping_num != 0 && tmp_group.id == ScreenName+'_group_'+part.grouping_num ){
            
            tmp_group.appendChild(tmp);

        }


        if( document.getElementById(ScreenName+'_parts_'+part_cnt) != undefined ) continue;
        tmp.id = ScreenName+'_parts_'+part_cnt;
        let tmp_style = tmp.style;
        tmp_style.display = 'inline-block';
        tmp_style.width = part.width+'%';
        tmp_style.height = part.heightFix == 'n' ? part.height+'%' : part.height+'px';
        tmp_style.textAlign = part.text_align;
        tmp_style.backgroundColor = part.backGroundColor;
        
        if( (part_width_sum + part.width) > 100 ) {
            alert("설정의 가로비율이 맞지 않아 초과되는 단락은 나오지 않습니다.");
            continue;
        }
        part_width_sum += part.width;
    
        let tmp_text = [];
        let img_cnt = 0;
        let blank_flag = false;
        let blank_size = [];

        for (let char of part.text) {

            if( char == "　" ) { // ㄱ한자 1로 만든 공백. ( 이미지 위치 )
                if( tmp_text.length > 0 )  {
                    tmp.innerHTML += tmp_text.join('');
                    tmp_text = [];
                }
                tmp_img = document.createElement('div');
                tmp_img.id = ScreenName+'_parts_img_'+part_cnt+"_"+img_cnt;
                let tmp_img_style = tmp_img.style;
                let image = part.image_file[img_cnt];
                tmp_img_style.position = 'relative';
                tmp_img_style.display = image.i_inline_block;
                tmp_img_style.width = image.i_width+'%';
                tmp_img_style.height = image.i_height+'%';
                tmp_img.onclick = image.i_clickable == 'y' ? image.i_href : '';

                img_inner = document.createElement('img');
                img_inner.id = ScreenName+'_parts_img_inner_'+part_cnt+"_"+img_cnt;
                let img_inner_style = img_inner.style;
                img_inner.alt = image.i_alt;
                img_inner.src = '/image/'+image.i_file;
                img_inner_style.width = '100%';
                img_inner_style.height = '100%';

                tmp_img.appendChild(img_inner);
                tmp.appendChild(tmp_img);
                img_cnt++;
                continue;

            }

            if( char.charCodeAt(0) == 92 || blank_flag == true ){

                if(char.charCodeAt(0) != 92 ) blank_size.push(char);

                if( char.charCodeAt(0) == 92 && blank_flag == true ){
                    blank_flag = false;
                    tmp_blank = document.createElement('div');
                    tmp_blank.id = ScreenName+'_parts_blank_'+part_cnt+"_"+img_cnt;
                    tmp_blank.style.width = blank_size.join('')+'%';
                    tmp_blank.style.height = 0;
                    tmp_blank.style.display = 'inline-block';
                    tmp.appendChild(tmp_blank);
                    blank_size = [];
                }

                if( blank_flag == false ) blank_flag = true;

                continue;

            }
            tmp_text.push(char);

        }

        if( tmp_text.length > 0 )  {
            tmp.innerHTML += tmp_text.join('');
            tmp_text = [];
        }
        
        if( tmp.style.height > target_height ) target_height = tmp.style.height;
        else tmp.style.height = target_height;
        
        let tmp_piece = document.createElement('div');
        tmp_piece.id = ScreenName+'_group_'+part.grouping_num+"_piece";
        tmp_piece.style.display = 'none';
        tmp_piece.style.width = part.piece_width+'%';
        tmp_piece.style.height = part.piece_height+'%';
        tmp_piece.style.backgroundColor = part.piece_backgroundColor;
        // tmp_piece.style.top = 10+'%';

        let piece_width_tmp = 0;

        let ul_piece = document.createElement('ul');
        ul_piece.style.listStyle = 'none';
        ul_piece.style.margin = 0;
        ul_piece.style.padding = 0;
        ul_piece.style.display = 'flex';


        for(let j = 0 ; j < part.pieces.length ; j++){
   
            let piece = part.pieces[j];
            
            let li_piece = document.createElement('li');
            li_piece.style.margin = '0 0 0 0';
            li_piece.style.padding = '0 0 0 0';
            li_piece.style.border = 0;
            li_piece.style.display = 'inline-block';
            li_piece.style.paddingRight = 1.5+'%';
            li_piece.style.paddingLeft = 1.5+'%';

            let piece_tmp_text = [];
            let piece_img_tmp;
            let piece_img_inner;
            let piece_img_cnt = 0;

            for (let char of piece.p_text) {

                if( char == "　" ) {
                    if( piece_tmp_text.length > 0 )  {
                        li_piece.innerHTML += piece_tmp_text.join('');
                        piece_tmp_text = [];
                    }
                    piece_img_tmp = document.createElement('div');
                    piece_img_tmp.id = ScreenName+'_group_'+part.grouping_num+"_piece_"+j+"_img_"+piece_img_cnt;
                    let piece_img_style = piece_img_tmp.style;
                    let piece_image = part.pieces.p_image_file[piece_img_cnt];
                    piece_img_style.position = 'relative';
                    piece_img_style.display = piece_image.i_inline_block;
                    piece_img_style.width = piece_image.i_width+'%';
                    piece_img_style.height = piece_image.i_height+'%';
                    piece_img_tmp.onclick = piece_image.i_clickable == 'y' ? piece_image.i_href : '';
    
                    piece_img_inner = document.createElement('img');
                    piece_img_inner.id = ScreenName+'_parts_'+part_cnt+"_piece_"+j+"inner_img_"+piece_img_cnt;
                    let piece_img_inner_style = piece_img_inner.style;
                    piece_img_inner_style.alt = piece_image.i_alt;
                    piece_img_inner_style.src = '/image/'+piece_image.i_file;
                    piece_img_inner_style.width = '100%';
                    piece_img_inner_style.height = '100%';
    
                    piece_img_tmp.appendChild(piece_img_inner);
                    li_piece.appendChild(piece_img_tmp);
                    piece_img_cnt++;
                    continue;
    
                }

                piece_tmp_text.push(char);

            }

            if( piece_tmp_text.length > 0 )  {
                li_piece.innerHTML += piece_tmp_text.join('');
                piece_tmp_text = [];
            }

            ul_piece.appendChild(li_piece);

        }

        tmp_piece.appendChild(ul_piece);
        tmp.appendChild(tmp_piece);

        tmp.onmouseover = function(){ tmp_piece.style.display = 'block'; };
        tmp.onmouseout = function(){ tmp_piece.style.display = 'none'; };

        if( part.grouping_num != 0 && tmp_group != undefined ) wrap_in.appendChild(tmp_group);
        else wrap_in.appendChild(tmp);
        
        part_cnt++;
    }


    return true;
}