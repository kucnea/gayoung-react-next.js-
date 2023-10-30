import * as data from '../data'

export function convertQuery(){

    let pagesTmp = [];
    pagesTmp.push(" INSERT INTO pageDetails (                                                                     ");
    pagesTmp.push("     pageName,                                                                                 ");
    pagesTmp.push("     width, height, heightFix, hr, innerWidth, innerHeight,                                    ");
    pagesTmp.push("     cd_onLoad, cd_onmouseover, cd_onmouseout, cd_timesGone, cd_onClick,                       ");
    pagesTmp.push("     border,                                                                                   ");
    pagesTmp.push("     borderTopStyle, borderRightStyle, borderBottomStyle, borderLeftStyle,                     ");
    pagesTmp.push("     borderTopColor, borderRightColor, borderBottomColor, borderLeftColor,                     ");
    pagesTmp.push("     innerBorder,                                                                              ");
    pagesTmp.push("     innerBorderTopStyle, innerBorderRightStyle, innerBorderBottomStyle, innerBorderLeftStyle, ");
    pagesTmp.push("     innerBorderTopColor, innerBorderRightColor, innerBorderBottomColor, innerBorderLeftColor, ");
    pagesTmp.push("     marginTop, marginRight, marginBottom, marginLeft,                                         ");
    pagesTmp.push("     innerMarginTop, innerMarginRight, innerMarginBottom, innerMarginLeft,                     ");
    pagesTmp.push("     paddingTop, paddingRight, paddingBottom, paddingLeft,                                     ");
    pagesTmp.push("     innerpaddingTop, innerpaddingRight, innerpaddingBottom, innerpaddingLeft,                 ");
    pagesTmp.push("     pageDisplay,                                                                              ");
    pagesTmp.push("     bGColor, innerBGColor,                                                                    ");
    pagesTmp.push("     text_align, innerDisplay, line_height, align_items, z_index,                              ");
    pagesTmp.push("     grouping_num, group_height,                                                               ");
    pagesTmp.push("     group_margin_top, group_margin_right, group_margin_bottom, group_margin_left,             ");
    pagesTmp.push("     group_item_align, justifyContent, display, float,                                         ");
    pagesTmp.push("     partPack_num, isPack, hasPack, inSide, packAlign,                                         ");
    pagesTmp.push("     overlay, overlayNum,                                                                      ");
    pagesTmp.push("     packWidth, packHeight, pack_v_h, partDepth, packDisplay,                                  ");
    pagesTmp.push("     packBackgrountColor, partPack_listStyle,                                                  ");
    pagesTmp.push("     partPack_margin_top, partPack_margin_right, partPack_margin_bottom, partPack_margin_left, ");
    pagesTmp.push("     partPack_padding_top, partPack_padding_right, partPack_padding_bottom, partPack_padding_left, ");
    pagesTmp.push("     inPack_margin_top, inPack_margin_right, inPack_margin_bottom, inPack_margin_left,         ");
    pagesTmp.push("     inPack_padding_top, inPack_padding_right, inPack_padding_bottom, inPack_padding_left,     ");
    pagesTmp.push("     text, cd_img");
    pagesTmp.push(" ) VALUES");

    
    let datas = data;   // 48
    for( let i = 0 ; i < data.pages.length ; i++ ){
        let p = data.pages[i];

        let pageName = p.pageName && p.pageName.length != 0 ? p.pageName : '';
        let width = p.width || 0;
        let height = p.height || 0;
        let heightFix = p.heightFix && p.heightFix.length != 0 ? p.heightFix : '';
        let hr = p.hr && p.hr.length != 0 ? p.hr : '';
        let innerWidth = p.innerWidth || 0;
        let innerHeight = p.innerHeight || 0;
        let border = p.border && p.border.length != 0 ? p.border : '';
        let cd_onLoad = p.cd_onLoad && p.cd_onLoad.length != 0 ? p.cd_onLoad : '';
        let cd_onmouseover = p.cd_onmouseover && p.cd_onmouseover.length != 0 ? p.cd_onmouseover : '';
        let cd_onmouseout = p.cd_onmouseout && p.cd_onmouseout.length != 0 ? p.cd_onmouseout : '';
        let cd_timesGone = p.cd_timesGone && p.cd_timesGone.length != 0 ? p.cd_timesGone : '';
        let cd_onClick = p.cd_onClick && p.cd_onClick.length != 0 ? p.cd_onClick : '';
        let borderTopStyle = p.borderTopStyle && p.borderTopStyle.length != 0 ? p.borderTopStyle : '';
        let borderRightStyle = p.borderRightStyle && p.borderRightStyle.length != 0 ? p.borderRightStyle : '';
        let borderBottomStyle = p.borderBottomStyle && p.borderBottomStyle.length != 0 ? p.borderBottomStyle : '';
        let borderLeftStyle = p.borderLeftStyle && p.borderLeftStyle.length != 0 ? p.borderLeftStyle : '';
        let borderTopColor = p.borderTopColor && p.borderTopColor.length != 0 ? p.borderTopColor : '';
        let borderRightColor = p.borderRightColor && p.borderRightColor.length != 0 ? p.borderRightColor : '';
        let borderBottomColor = p.borderBottomColor && p.borderBottomColor.length != 0 ? p.borderBottomColor : '';
        let borderLeftColor = p.borderLeftColor && p.borderLeftColor.length != 0 ? p.borderLeftColor : '';
        let innerBorder = p.innerBorder && p.innerBorder.length != 0 ? p.innerBorder : '';
        let innerBorderTopStyle = p.innerBorderTopStyle && p.innerBorderTopStyle.length != 0 ? p.innerBorderTopStyle : '';
        let innerBorderRightStyle = p.innerBorderRightStyle && p.innerBorderRightStyle.length != 0 ? p.innerBorderRightStyle : '';
        let innerBorderBottomStyle = p.innerBorderBottomStyle && p.innerBorderBottomStyle.length != 0 ? p.innerBorderBottomStyle : '';
        let innerBorderLeftStyle = p.innerBorderLeftStyle && p.innerBorderLeftStyle.length != 0 ? p.innerBorderLeftStyle : '';
        let innerBorderTopColor = p.innerBorderTopColor && p.innerBorderTopColor.length != 0 ? p.innerBorderTopColor : '';
        let innerBorderRightColor = p.innerBorderRightColor && p.innerBorderRightColor.length != 0 ? p.innerBorderRightColor : '';
        let innerBorderBottomColor = p.innerBorderBottomColor && p.innerBorderBottomColor.length != 0 ? p.innerBorderBottomColor : '';
        let innerBorderLeftColor = p.innerBorderLeftColor && p.innerBorderLeftColor.length != 0 ? p.innerBorderLeftColor : '';
        let marginTop = p.marginTop && p.marginTop.length != 0 ? p.marginTop : '';
        let marginRight = p.marginRight && p.marginRight.length != 0 ? p.marginRight : '';
        let marginBottom = p.marginBottom && p.marginBottom.length != 0 ? p.marginBottom : '';
        let marginLeft = p.marginLeft && p.marginLeft.length != 0 ? p.marginLeft : '';
        let innerMarginTop = p.innerMarginTop && p.innerMarginTop.length != 0 ? p.innerMarginTop : '';
        let innerMarginRight = p.innerMarginRight && p.innerMarginRight.length != 0 ? p.innerMarginRight : '';
        let innerMarginBottom = p.innerMarginBottom && p.innerMarginBottom.length != 0 ? p.innerMarginBottom : '';
        let innerMarginLeft = p.innerMarginLeft && p.innerMarginLeft.length != 0 ? p.innerMarginLeft : '';
        let paddingTop = p.paddingTop && p.paddingTop.length != 0 ? p.paddingTop : '';
        let paddingRight = p.paddingRight && p.paddingRight.length != 0 ? p.paddingRight : '';
        let paddingBottom = p.paddingBottom && p.paddingBottom.length != 0 ? p.paddingBottom : '';
        let paddingLeft = p.paddingLeft && p.paddingLeft.length != 0 ? p.paddingLeft : '';
        let innerpaddingTop = p.innerpaddingTop && p.innerpaddingTop.length != 0 ? p.innerpaddingTop : '';
        let innerpaddingRight = p.innerpaddingRight && p.innerpaddingRight.length != 0 ? p.innerpaddingRight : '';
        let innerpaddingBottom = p.innerpaddingBottom && p.innerpaddingBottom.length != 0 ? p.innerpaddingBottom : '';
        let innerpaddingLeft = p.innerpaddingLeft && p.innerpaddingLeft.length != 0 ? p.innerpaddingLeft : '';
        let pageDisplay = p.pageDisplay && p.pageDisplay.length != 0 ? p.pageDisplay : '';
        let bGColor = p.bGColor && p.bGColor.length != 0 ? p.bGColor : '';
        let innerBGColor = p.innerBGColor && p.innerBGColor.length != 0 ? p.innerBGColor : '';
        let text_align = p.text_align && p.text_align.length != 0 ? p.text_align : '';
        let innerDisplay = p.innerDisplay && p.innerDisplay.length != 0 ? p.innerDisplay : '';
        let line_height = p.line_height || 0;
        let align_items = p.align_items && p.align_items.length != 0 ? p.align_items : '';
        let z_index = p.z_index || 0;
        let grouping_num = p.grouping_num || 0;
        let group_height = p.group_height || 0;
        let group_margin_top = p.group_margin_top || 0;
        let group_margin_right = p.group_margin_right || 0;
        let group_margin_bottom = p.group_margin_bottom || 0;
        let group_margin_left = p.group_margin_left || 0;
        let group_item_align = p.group_item_align && p.group_item_align.length != 0 ? p.group_item_align : '';
        let justifyContent = p.justifyContent && p.justifyContent.length != 0 ? p.justifyContent : '';
        let display = p.display && p.display.length != 0 ? p.display : '';
        let float = p.float && p.float.length != 0 ? p.float : '';
        let partPack_num = p.partPack_num || 0;
        let isPack = p.isPack && p.isPack.length != 0 ? p.isPack : '';
        let hasPack = p.hasPack && p.hasPack.length != 0 ? p.hasPack : '';
        let inSide = p.inSide && p.inSide.length != 0 ? p.inSide : '';
        let packAlign = p.packAlign && p.packAlign.length != 0 ? p.packAlign : '';
        let overlay = p.overlay && p.overlay.length != 0 ? p.overlay : '';
        let overlayNum = p.overlayNum || 0;
        let packWidth = p.packWidth || 0;
        let packHeight = p.packHeight || 0;
        let pack_v_h = p.pack_v_h && p.pack_v_h.length != 0 ? p.pack_v_h : '';
        let partDepth = p.partDepth || 0;
        let packDisplay = p.packDisplay && p.packDisplay.length != 0 ? p.packDisplay : '';
        let packBackgrountColor = p.packBackgrountColor && p.packBackgrountColor.length != 0 ? p.packBackgrountColor : '';
        let partPack_listStyle = p.partPack_listStyle && p.partPack_listStyle.length != 0 ? p.partPack_listStyle : '';
        let partPack_margin_top = p.partPack_margin_top && p.partPack_margin_top.length != 0 ? p.partPack_margin_top : '';
        let partPack_margin_right = p.partPack_margin_right && p.partPack_margin_right.length != 0 ? p.partPack_margin_right : '';
        let partPack_margin_bottom = p.partPack_margin_bottom && p.partPack_margin_bottom.length != 0 ? p.partPack_margin_bottom : '';
        let partPack_margin_left = p.partPack_margin_left && p.partPack_margin_left.length != 0 ? p.partPack_margin_left : '';
        let partPack_padding_top = p.partPack_padding_top && p.partPack_padding_top.length != 0 ? p.partPack_padding_top : '';
        let partPack_padding_right = p.partPack_padding_right && p.partPack_padding_right.length != 0 ? p.partPack_padding_right : '';
        let partPack_padding_bottom = p.partPack_padding_bottom && p.partPack_padding_bottom.length != 0 ? p.partPack_padding_bottom : '';
        let partPack_padding_left = p.partPack_padding_left && p.partPack_padding_left.length != 0 ? p.partPack_padding_left : '';
        let inPack_margin_top = p.inPack_margin_top && p.inPack_margin_top.length != 0 ? p.inPack_margin_top : '';
        let inPack_margin_right = p.inPack_margin_right && p.inPack_margin_right.length != 0 ? p.inPack_margin_right : '';
        let inPack_margin_bottom = p.inPack_margin_bottom && p.inPack_margin_bottom.length != 0 ? p.inPack_margin_bottom : '';
        let inPack_margin_left = p.inPack_margin_left && p.inPack_margin_left.length != 0 ? p.inPack_margin_left : '';
        let inPack_padding_top = p.inPack_padding_top && p.inPack_padding_top.length != 0 ? p.inPack_padding_top : '';
        let inPack_padding_right = p.inPack_padding_right && p.inPack_padding_right.length != 0 ? p.inPack_padding_right : '';
        let inPack_padding_bottom = p.inPack_padding_bottom && p.inPack_padding_bottom.length != 0 ? p.inPack_padding_bottom : '';
        let inPack_padding_left = p.inPack_padding_left && p.inPack_padding_left.length != 0 ? p.inPack_padding_left : '';
        let text = p.text && p.text.length != 0 ? p.text : '';
        let cd_img = p.cd_img && p.cd_img.length != 0 ? p.cd_img : '';
         
        
        let attr = [];
        attr.push(pageName, width, height, heightFix, hr, innerWidth, innerHeight, border, cd_onLoad, cd_onmouseover, cd_onmouseout, cd_timesGone, cd_onClick, borderTopStyle, borderRightStyle, borderBottomStyle, borderLeftStyle, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, innerBorder, innerBorderTopStyle, innerBorderRightStyle, innerBorderBottomStyle, innerBorderLeftStyle, innerBorderTopColor, innerBorderRightColor, innerBorderBottomColor, innerBorderLeftColor, marginTop, marginRight, marginBottom, marginLeft, innerMarginTop, innerMarginRight, innerMarginBottom, innerMarginLeft, paddingTop, paddingRight, paddingBottom, paddingLeft, innerpaddingTop, innerpaddingRight, innerpaddingBottom, innerpaddingLeft, pageDisplay, bGColor, innerBGColor, text_align, innerDisplay, line_height, align_items, z_index, grouping_num, group_height, group_margin_top, group_margin_right, group_margin_bottom, group_margin_left, group_item_align, justifyContent, display, float, partPack_num, isPack, hasPack, inSide, packAlign, overlay, overlayNum, packWidth, packHeight, pack_v_h, partDepth, packDisplay, packBackgrountColor, partPack_listStyle, partPack_margin_top, partPack_margin_right, partPack_margin_bottom, partPack_margin_left, partPack_padding_top, partPack_padding_right, partPack_padding_bottom, partPack_padding_left, inPack_margin_top, inPack_margin_right, inPack_margin_bottom, inPack_margin_left, inPack_padding_top, inPack_padding_right, inPack_padding_bottom, inPack_padding_left, text, cd_img);
        
        pagesTmp.push("(");
        for( let n = 0 ; n < attr.length ; n++ ){
            if( typeof attr[n] === 'number' && !isNaN(attr[n]) ) pagesTmp.push("  "+attr[n]+"");
            else pagesTmp.push("  '"+attr[n]+"'");

            if( n != attr.length-1 ) pagesTmp.push(",");
        }
        pagesTmp.push(")");
        if( i != data.pages.length-1 ) pagesTmp.push(",\n");
    }

    for( let j = 0 ; j < data.parts.length ; j++ ){
        let p = data.parts[j];

        let pageName = p.pageName && p.pageName.length != 0 ? p.pageName : '';
        let width = p.width || 0;
        let height = p.height || 0;
        let heightFix = p.heightFix && p.heightFix.length != 0 ? p.heightFix : '';
        let hr = p.hr && p.hr.length != 0 ? p.hr : '';
        let innerWidth = p.innerWidth || 0;
        let innerHeight = p.innerHeight || 0;
        let border = p.border && p.border.length != 0 ? p.border : '';
        let cd_onLoad = p.cd_onLoad && p.cd_onLoad.length != 0 ? p.cd_onLoad : '';
        let cd_onmouseover = p.cd_onmouseover && p.cd_onmouseover.length != 0 ? p.cd_onmouseover : '';
        let cd_onmouseout = p.cd_onmouseout && p.cd_onmouseout.length != 0 ? p.cd_onmouseout : '';
        let cd_timesGone = p.cd_timesGone && p.cd_timesGone.length != 0 ? p.cd_timesGone : '';
        let cd_onClick = p.cd_onClick && p.cd_onClick.length != 0 ? p.cd_onClick : '';
        let borderTopStyle = p.borderTopStyle && p.borderTopStyle.length != 0 ? p.borderTopStyle : '';
        let borderRightStyle = p.borderRightStyle && p.borderRightStyle.length != 0 ? p.borderRightStyle : '';
        let borderBottomStyle = p.borderBottomStyle && p.borderBottomStyle.length != 0 ? p.borderBottomStyle : '';
        let borderLeftStyle = p.borderLeftStyle && p.borderLeftStyle.length != 0 ? p.borderLeftStyle : '';
        let borderTopColor = p.borderTopColor && p.borderTopColor.length != 0 ? p.borderTopColor : '';
        let borderRightColor = p.borderRightColor && p.borderRightColor.length != 0 ? p.borderRightColor : '';
        let borderBottomColor = p.borderBottomColor && p.borderBottomColor.length != 0 ? p.borderBottomColor : '';
        let borderLeftColor = p.borderLeftColor && p.borderLeftColor.length != 0 ? p.borderLeftColor : '';
        let innerBorder = p.innerBorder && p.innerBorder.length != 0 ? p.innerBorder : '';
        let innerBorderTopStyle = p.innerBorderTopStyle && p.innerBorderTopStyle.length != 0 ? p.innerBorderTopStyle : '';
        let innerBorderRightStyle = p.innerBorderRightStyle && p.innerBorderRightStyle.length != 0 ? p.innerBorderRightStyle : '';
        let innerBorderBottomStyle = p.innerBorderBottomStyle && p.innerBorderBottomStyle.length != 0 ? p.innerBorderBottomStyle : '';
        let innerBorderLeftStyle = p.innerBorderLeftStyle && p.innerBorderLeftStyle.length != 0 ? p.innerBorderLeftStyle : '';
        let innerBorderTopColor = p.innerBorderTopColor && p.innerBorderTopColor.length != 0 ? p.innerBorderTopColor : '';
        let innerBorderRightColor = p.innerBorderRightColor && p.innerBorderRightColor.length != 0 ? p.innerBorderRightColor : '';
        let innerBorderBottomColor = p.innerBorderBottomColor && p.innerBorderBottomColor.length != 0 ? p.innerBorderBottomColor : '';
        let innerBorderLeftColor = p.innerBorderLeftColor && p.innerBorderLeftColor.length != 0 ? p.innerBorderLeftColor : '';
        let marginTop = p.marginTop && p.marginTop.length != 0 ? p.marginTop : '';
        let marginRight = p.marginRight && p.marginRight.length != 0 ? p.marginRight : '';
        let marginBottom = p.marginBottom && p.marginBottom.length != 0 ? p.marginBottom : '';
        let marginLeft = p.marginLeft && p.marginLeft.length != 0 ? p.marginLeft : '';
        let innerMarginTop = p.innerMarginTop && p.innerMarginTop.length != 0 ? p.innerMarginTop : '';
        let innerMarginRight = p.innerMarginRight && p.innerMarginRight.length != 0 ? p.innerMarginRight : '';
        let innerMarginBottom = p.innerMarginBottom && p.innerMarginBottom.length != 0 ? p.innerMarginBottom : '';
        let innerMarginLeft = p.innerMarginLeft && p.innerMarginLeft.length != 0 ? p.innerMarginLeft : '';
        let paddingTop = p.paddingTop && p.paddingTop.length != 0 ? p.paddingTop : '';
        let paddingRight = p.paddingRight && p.paddingRight.length != 0 ? p.paddingRight : '';
        let paddingBottom = p.paddingBottom && p.paddingBottom.length != 0 ? p.paddingBottom : '';
        let paddingLeft = p.paddingLeft && p.paddingLeft.length != 0 ? p.paddingLeft : '';
        let innerpaddingTop = p.innerpaddingTop && p.innerpaddingTop.length != 0 ? p.innerpaddingTop : '';
        let innerpaddingRight = p.innerpaddingRight && p.innerpaddingRight.length != 0 ? p.innerpaddingRight : '';
        let innerpaddingBottom = p.innerpaddingBottom && p.innerpaddingBottom.length != 0 ? p.innerpaddingBottom : '';
        let innerpaddingLeft = p.innerpaddingLeft && p.innerpaddingLeft.length != 0 ? p.innerpaddingLeft : '';
        let pageDisplay = p.pageDisplay && p.pageDisplay.length != 0 ? p.pageDisplay : '';
        let bGColor = p.bGColor && p.bGColor.length != 0 ? p.bGColor : '';
        let innerBGColor = p.innerBGColor && p.innerBGColor.length != 0 ? p.innerBGColor : '';
        let text_align = p.text_align && p.text_align.length != 0 ? p.text_align : '';
        let innerDisplay = p.innerDisplay && p.innerDisplay.length != 0 ? p.innerDisplay : '';
        let line_height = p.line_height || 0;
        let align_items = p.align_items && p.align_items.length != 0 ? p.align_items : '';
        let z_index = p.z_index || 0;
        let grouping_num = p.grouping_num || 0;
        let group_height = p.group_height || 0;
        let group_margin_top = p.group_margin_top || 0;
        let group_margin_right = p.group_margin_right || 0;
        let group_margin_bottom = p.group_margin_bottom || 0;
        let group_margin_left = p.group_margin_left || 0;
        let group_item_align = p.group_item_align && p.group_item_align.length != 0 ? p.group_item_align : '';
        let justifyContent = p.justifyContent && p.justifyContent.length != 0 ? p.justifyContent : '';
        let display = p.display && p.display.length != 0 ? p.display : '';
        let float = p.float && p.float.length != 0 ? p.float : '';
        let partPack_num = p.partPack_num || 0;
        let isPack = p.isPack && p.isPack.length != 0 ? p.isPack : '';
        let hasPack = p.hasPack && p.hasPack.length != 0 ? p.hasPack : '';
        let inSide = p.inSide && p.inSide.length != 0 ? p.inSide : '';
        let packAlign = p.packAlign && p.packAlign.length != 0 ? p.packAlign : '';
        let overlay = p.overlay && p.overlay.length != 0 ? p.overlay : '';
        let overlayNum = p.overlayNum || 0;
        let packWidth = p.packWidth || 0;
        let packHeight = p.packHeight || 0;
        let pack_v_h = p.pack_v_h && p.pack_v_h.length != 0 ? p.pack_v_h : '';
        let partDepth = p.partDepth || 0;
        let packDisplay = p.packDisplay && p.packDisplay.length != 0 ? p.packDisplay : '';
        let packBackgrountColor = p.packBackgrountColor && p.packBackgrountColor.length != 0 ? p.packBackgrountColor : '';
        let partPack_listStyle = p.partPack_listStyle && p.partPack_listStyle.length != 0 ? p.partPack_listStyle : '';
        let partPack_margin_top = p.partPack_margin_top && p.partPack_margin_top.length != 0 ? p.partPack_margin_top : '';
        let partPack_margin_right = p.partPack_margin_right && p.partPack_margin_right.length != 0 ? p.partPack_margin_right : '';
        let partPack_margin_bottom = p.partPack_margin_bottom && p.partPack_margin_bottom.length != 0 ? p.partPack_margin_bottom : '';
        let partPack_margin_left = p.partPack_margin_left && p.partPack_margin_left.length != 0 ? p.partPack_margin_left : '';
        let partPack_padding_top = p.partPack_padding_top && p.partPack_padding_top.length != 0 ? p.partPack_padding_top : '';
        let partPack_padding_right = p.partPack_padding_right && p.partPack_padding_right.length != 0 ? p.partPack_padding_right : '';
        let partPack_padding_bottom = p.partPack_padding_bottom && p.partPack_padding_bottom.length != 0 ? p.partPack_padding_bottom : '';
        let partPack_padding_left = p.partPack_padding_left && p.partPack_padding_left.length != 0 ? p.partPack_padding_left : '';
        let inPack_margin_top = p.inPack_margin_top && p.inPack_margin_top.length != 0 ? p.inPack_margin_top : '';
        let inPack_margin_right = p.inPack_margin_right && p.inPack_margin_right.length != 0 ? p.inPack_margin_right : '';
        let inPack_margin_bottom = p.inPack_margin_bottom && p.inPack_margin_bottom.length != 0 ? p.inPack_margin_bottom : '';
        let inPack_margin_left = p.inPack_margin_left && p.inPack_margin_left.length != 0 ? p.inPack_margin_left : '';
        let inPack_padding_top = p.inPack_padding_top && p.inPack_padding_top.length != 0 ? p.inPack_padding_top : '';
        let inPack_padding_right = p.inPack_padding_right && p.inPack_padding_right.length != 0 ? p.inPack_padding_right : '';
        let inPack_padding_bottom = p.inPack_padding_bottom && p.inPack_padding_bottom.length != 0 ? p.inPack_padding_bottom : '';
        let inPack_padding_left = p.inPack_padding_left && p.inPack_padding_left.length != 0 ? p.inPack_padding_left : '';
        let text = p.text && p.text.length != 0 ? p.text : '';
        let cd_img = p.cd_img && p.cd_img.length != 0 ? p.cd_img : '';
         
        
        let attr = [];
        attr.push(pageName, width, height, heightFix, hr, innerWidth, innerHeight, border, cd_onLoad, cd_onmouseover, cd_onmouseout, cd_timesGone, cd_onClick, borderTopStyle, borderRightStyle, borderBottomStyle, borderLeftStyle, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, innerBorder, innerBorderTopStyle, innerBorderRightStyle, innerBorderBottomStyle, innerBorderLeftStyle, innerBorderTopColor, innerBorderRightColor, innerBorderBottomColor, innerBorderLeftColor, marginTop, marginRight, marginBottom, marginLeft, innerMarginTop, innerMarginRight, innerMarginBottom, innerMarginLeft, paddingTop, paddingRight, paddingBottom, paddingLeft, innerpaddingTop, innerpaddingRight, innerpaddingBottom, innerpaddingLeft, pageDisplay, bGColor, innerBGColor, text_align, innerDisplay, line_height, align_items, z_index, grouping_num, group_height, group_margin_top, group_margin_right, group_margin_bottom, group_margin_left, group_item_align, justifyContent, display, float, partPack_num, isPack, hasPack, inSide, packAlign, overlay, overlayNum, packWidth, packHeight, pack_v_h, partDepth, packDisplay, packBackgrountColor, partPack_listStyle, partPack_margin_top, partPack_margin_right, partPack_margin_bottom, partPack_margin_left, partPack_padding_top, partPack_padding_right, partPack_padding_bottom, partPack_padding_left, inPack_margin_top, inPack_margin_right, inPack_margin_bottom, inPack_margin_left, inPack_padding_top, inPack_padding_right, inPack_padding_bottom, inPack_padding_left, text, cd_img);
        
        pagesTmp.push("(");
        for( let n = 0 ; n < attr.length ; n++ ){
            if( typeof attr[n] === 'number' && !isNaN(attr[n]) ) pagesTmp.push("  "+attr[n]+"");
            else pagesTmp.push("  '"+attr[n]+"'");

            if( n != attr.length-1 ) pagesTmp.push(",");
        }
        pagesTmp.push(")");
        if( j != data.pages.length-1 ) pagesTmp.push(",\n");
    }


    console.log(pagesTmp.join(''));
}