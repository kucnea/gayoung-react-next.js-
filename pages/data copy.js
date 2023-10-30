/*
    * DB -> 배열로 만드는 로직 몇가지 해보고, 속도 측정 해보기
    DB
    1. 화면의 정보
    2. 화면의 구성
    3. 화면의 이미지
    4. 수행 기능

    1-1 사용자계정, 어플리케이션번호, 화면코드, 화면 이름, 넓이, 높이
    
    2-1 사용자계정, 어플리케이션번호, 화면코드, 순서, 넓이, 높이, text, text정렬, 이미지코드

    3-1 사용자계정, 이미지코드, 넓이, 높이, inline/block, alt, 클릭여부, 기능코드

    4-1 기능코드, 기능종류, 대상, 기능
     ex)       ,   창이동, 경로, 새창/지금창
               ,   증가  , 가격, 수치
               ,   조회  , 테이블, 조건전달
               
    테이블을 쪼개고 이걸 배열로 만들어서 화면에 전송하면 될듯
    복잡할 수 있는 로직의 생성/전달은 하면서 고민해보기.
    분산 데이터베이스를 고려하기때문에 각 코드들은 식별자+UUID 혹은 눈송이 알고리즘 고려.
    
    https://stackoverflow.com/questions/68682260/how-do-i-calculate-a-one-dimensional-index-from-a-multidimensional-array-for-ex
    논리적 3차원배열인데 물리적으로는 1차원으로
    1차원으로 풀어보내도 잘라서 구분할 수 있으니까 바로 위치 찾아서 적용하게 할 수도 있을거같고
    하나씩 읽으며 키가 적용되면 처리 함수를 다른걸로 적용시킨다거나 할 수 있을듯.
    이 경우 로직 감추기도 좋을 것도 같음.

    아니면 아에 모델로 분리시키는 방법도 있을 거같은데 속도면에서 탐색시간이 추가되지 않을까 싶음.

    // DB에서 가져온 세팅값 혹은 만드는 프로그램에서 입력한 값으로 세팅
    // 이렇게 하면 환경변수를 굳이?
    // 환경변수에 넣을만한건 처음에 만들때 넣어버려도?
    // parts도 통으로 가져오게
    // text : 폰트, 사이즈, 색깔 클릭 여부, 링크 도 같이 넘겨받는걸로
    // 수정해야 할 수 있음.

    // useEffect

    
*/
// 화면 이름, footer 총 넓이 ( 비율 ), 높이 ( 비율 ), 내부 요소 넓이, 높이
export const pages = [{pageName: "Footer"
                            , pageWidth: 100
                            , pageHeight: 15
                            , innerWidth: 80
                            , innerHeight: 100
                            , onLoad: []
                            , pageBorder:"0px 0px 0px 0px"
                            , borderTopStyle : ""
                            , borderRightStyle : ""
                            , borderBottomStyle: ""
                            , borderLeftStyle: ""
                            , borderTopColor: ""
                            , borderRightColor: ""
                            , borderBottomColor: ""
                            , borderLeftColor: ""
                            , pageDisplay: "block"
                            , align_items: ''
                            , text_align: "center"
                            , inenrDisplay: "inline-flex"
                            , align_items: "center"
                            , z_index: 0 }
                            ,{pageName: "Header"
                            , pageWidth: 100
                            , pageHeight: 30
                            , innerWidth: 80
                            , innerHeight: 100
                            , onLoad: []
                            , pageBorder:"0px 0px 0px 0px"
                            , borderTopStyle : ""
                            , borderRightStyle : ""
                            , borderBottomStyle: ""
                            , borderLeftStyle: ""
                            , borderTopColor: ""
                            , borderRightColor: ""
                            , borderBottomColor: ""
                            , borderLeftColor: ""
                            , pageDisplay: "block"
                            , align_items: ''
                            , text_align: "center"
                            , inenrDisplay: "inline-flex"
                            , align_items: "center"
                            , z_index: 0}
                            ,{pageName: "HeaderLine"
                            , pageWidth: 100
                            , pageHeight: 2
                            , innerWidth: 100
                            , innerHeight: 100
                            , onLoad: []
                            , pageBorder:"1px 0px 0px 0px"
                            , borderTopStyle : "solid"
                            , borderRightStyle : ""
                            , borderBottomStyle: ""
                            , borderLeftStyle: ""
                            , borderTopColor: "#8BBA1F"
                            , borderRightColor: ""
                            , borderBottomColor: ""
                            , borderLeftColor: ""
                            , pageDisplay: "block"
                            , align_items: ''
                            , text_align: "center"
                            , inenrDisplay: "inline-flex"
                            , align_items: "center"
                            , z_index: 0}
                            ,{pageName: "FooterLine"
                            , pageWidth: 0
                            , pageHeight: 0
                            , innerWidth: 0
                            , innerHeight: 0
                            , onLoad: []
                            , pageBorder:"0px 0px 0px 0px"
                            , borderTopStyle : ""
                            , borderRightStyle : ""
                            , borderBottomStyle: ""
                            , borderLeftStyle: ""
                            , borderTopColor: ""
                            , borderRightColor: ""
                            , borderBottomColor: ""
                            , borderLeftColor: ""
                            , pageDisplay: "block"
                            , align_items: ''
                            , text_align: "center"
                            , inenrDisplay: "inline-flex"
                            , align_items: "center"
                            , z_index: 0}
                            ,{pageName: "HeaderLine"
                            , pageWidth: 100
                            , pageHeight: 2
                            , innerWidth: 100
                            , innerHeight: 100
                            , onLoad: []
                            , pageBorder:"1px 0px 0px 0px"
                            , borderTopStyle : "solid"
                            , borderRightStyle : ""
                            , borderBottomStyle: ""
                            , borderLeftStyle: ""
                            , borderTopColor: "green"
                            , borderRightColor: ""
                            , borderBottomColor: ""
                            , borderLeftColor: ""
                            , pageDisplay: "block"
                            , align_items: ''
                            , text_align: "center"
                            , inenrDisplay: "inline-flex"
                            , align_items: "center"
                            , z_index: 0}
                            ,{pageName: "Index"
                            , pageWidth: 100
                            , pageHeight: 55
                            , innerWidth: 100
                            , innerHeight: 100
                            , onLoad: []
                            , pageBorder:"0px 0px 0px 0px"
                            , borderTopStyle : ""
                            , borderRightStyle : ""
                            , borderBottomStyle: ""
                            , borderLeftStyle: ""
                            , borderTopColor: ""
                            , borderRightColor: ""
                            , borderBottomColor: ""
                            , borderLeftColor: ""
                            , pageDisplay: "block"
                            , align_items: ''
                            , text_align: "center"
                            , inenrDisplay: "inline-flex"
                            , align_items: "center"
                            , z_index: 0}]; 

                            
export const parts = [               
    { pageName: 'Footer'
        , partCode: 'p000000001'
        , width: 20
        , height: 100
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: []
        , backGroundColor: ''
        , grouping_num: 0
        , group_height: 0
        , content_r_l_b: 'l'
        , display: ''
        , partPack_num: 0
        , isPack: 'n'
        , hasPack: 'n'
        , overlay: ''
        , overlayNum: 0
        , packWidth: 0
        , packHeight: 0
        , pack_v_h: ''
        , partDepth: 1
        , packDisplay: ''
        , packBackgrountColor: ''
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , display: ''
        , partPack_num: 0
        , isPack: 'n'
        , hasPack: 'n'
        , overlay: ''
        , overlayNum: 0
        , packWidth: 0
        , packHeight: 0
        , pack_v_h: ''
        , partDepth: 1
        , packDisplay: ''
        , packBackgrountColor: ''
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: "　"
        , align_items: ''
        , text_align: "left"
        , image_file: [{ i_width: 100
                        , i_height: 100
                        , i_inline_block: "block"
                        , i_alt: "logo"
                        , i_clickable: "y"
                        , i_newWindow: "n"
                        , i_working: "n"
                        , i_href: "/"
                        , i_file: "toplogo.png"}] },
    { pageName: 'Footer'
        , partCode: 'p000000002'
        , width: 60
        , height: 100
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: []
        , backGroundColor: ''
        , grouping_num: 0
        , group_height: 0
        , content_r_l_b: 'l'
        , display: ''
        , partPack_num: 0
        , isPack: 'n'
        , hasPack: 'n'
        , overlay: ''
        , overlayNum: 0
        , packWidth: 0
        , packHeight: 0
        , pack_v_h: ''
        , partDepth: 1
        , packDisplay: ''
        , packBackgrountColor: ''
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: "<b>사업장명</b> <br /><br /><span>주소 : 사업장주소 | 대표 : 사업장대표</span><br /><span>전화 : 사업장전화번호 | 팩스 : 사업장팩스번호 | 사업자등록번호 : 사업자등록번호</span><br /><br /><b>COPYRIGHT © 2023 ALL RIGHTS RESERVED BY 이민호.&nbsp;&nbsp;</b>　"
        , align_items: ''
        , text_align: "left"
        , image_file: [{ i_width: 5
                        , i_height: 5
                        , i_inline_block: "inline-block"
                        , i_alt: "github"
                        , i_clickable: "y"
                        , i_newWindow: "y"
                        , i_working: "n"
                        , i_href: "https://kucnea.github.io/"
                        , i_file: "githubIcon.png"}] },
    { pageName: 'Footer'
        , partCode: 'p000000003'
        , width: 20
        , height: 100
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: []
        , backGroundColor: ''
        , grouping_num: 0
        , group_height: 0
        , content_r_l_b: 'l'
        , text:"\\10\\　\\30\\　" // \10\ : 공백 10%, \\ -> \
        , align_items: ''
        , text_align: "center"
        , image_file: [{ i_width: 40
                        , i_height: 40
                        , i_inline_block: "inline-block"
                        , i_alt: "logo"
                        , i_clickable: "y"
                        , i_newWindow: "y"
                        , i_working: "n"
                        , i_href: "https://www.guri.go.kr/www/index.do"
                        , i_file: "guri_logo.jpg"},
                        { i_width: 20
                            , i_height: 20
                            , i_inline_block: "inline-block"
                            , i_alt: "logo"
                            , i_clickable: "y"
                            , i_newWindow: "n"
                            , i_working: "y"
                            , i_href: function() { window.scrollTo({ top: 0, behavior: 'smooth'}) }
                            , i_file: "btn_top.png"}] },
    { pageName: 'Header'
        , partCode: 'p000000004'
        , width: 10
        , height: 5
        , heightFix: 'y'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: []
        , backGroundColor: ''
        , grouping_num: 0
        , group_height: 3
        , content_r_l_b: 'r'
        , display: ''
        , partPack_num: 0
        , isPack: 'n'
        , hasPack: 'n'
        , overlay: ''
        , overlayNum: 0
        , packWidth: 0
        , packHeight: 0
        , pack_v_h: ''
        , partDepth: 1
        , packDisplay: ''
        , packBackgrountColor: ''
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: " "
        , align_items: ''
        , text_align: "center"
        , image_file: [] },
    { pageName: 'Header'
        , partCode: 'p000000005'
        , width: 10
        , height: 10
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: []
        , backGroundColor: ''
        , grouping_num: 1
        , group_height: 40
        , content_r_l_b: 'r'
        , display: ''
        , partPack_num: 0
        , isPack: 'n'
        , hasPack: 'n'
        , overlay: ''
        , overlayNum: 0
        , packWidth: 0
        , packHeight: 0
        , pack_v_h: ''
        , partDepth: 1
        , packDisplay: ''
        , packBackgrountColor: ''
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: "<a href='/'>HOME</a>"
        , align_items: ''
        , text_align: "center"
        , image_file: [] },
    { pageName: 'Header'
        , partCode: 'p000000006'
        , width: 2
        , height: 10
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: []
        , backGroundColor: ''
        , grouping_num: 1
        , group_height: 40
        , content_r_l_b: 'r'
        , display: ''
        , partPack_num: 0
        , isPack: 'n'
        , hasPack: 'n'
        , overlay: ''
        , overlayNum: 0
        , packWidth: 0
        , packHeight: 0
        , pack_v_h: ''
        , partDepth: 1
        , packDisplay: ''
        , packBackgrountColor: ''
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: "|"
        , align_items: ''
        , text_align: "center"
        , image_file: [] },       
    { pageName: 'Header'
        , partCode: 'p000000007'
        , width: 11
        , height: 10
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: []
        , backGroundColor: ''
        , grouping_num: 1
        , group_height: 40
        , content_r_l_b: 'r'
        , display: ''
        , partPack_num: 0
        , isPack: 'n'
        , hasPack: 'n'
        , overlay: ''
        , overlayNum: 0
        , packWidth: 0
        , packHeight: 0
        , pack_v_h: ''
        , partDepth: 1
        , packDisplay: ''
        , packBackgrountColor: ''
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: "<a href='/'>☆ 즐겨찾기</a>"
        , align_items: ''
        , text_align: "center"
        , image_file: [] },
    { pageName: 'Header'
        , partCode: 'p000000008'
        , width: 2
        , height: 10
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: []
        , backGroundColor: ''
        , grouping_num: 1
        , group_height: 40
        , content_r_l_b: 'r'
        , display: ''
        , partPack_num: 0
        , isPack: 'n'
        , hasPack: 'n'
        , overlay: ''
        , overlayNum: 0
        , packWidth: 0
        , packHeight: 0
        , pack_v_h: ''
        , partDepth: 1
        , packDisplay: ''
        , packBackgrountColor: ''
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: "|"
        , align_items: ''
        , text_align: "center"
        , image_file: [] },
    { pageName: 'Header'
        , partCode: 'p000000009'
        , width: 10
        , height: 10
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: []
        , backGroundColor: ''
        , grouping_num: 1
        , group_height: 40
        , content_r_l_b: 'r'
        , display: ''
        , partPack_num: 0
        , isPack: 'n'
        , hasPack: 'n'
        , overlay: ''
        , overlayNum: 0
        , packWidth: 0
        , packHeight: 0
        , pack_v_h: ''
        , partDepth: 1
        , packDisplay: ''
        , packBackgrountColor: ''
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: "<a href='/'>관리자</a>"
        , align_items: ''
        , text_align: "center"
        , image_file: [] },
    { pageName: 'Header'
        , partCode: 'p000000010'
        , width: 25
        , height: 100
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: []
        , backGroundColor: ''
        , grouping_num: 2
        , group_height: 100
        , content_r_l_b: 'l'
        , display: ''
        , partPack_num: 0
        , isPack: 'n'
        , hasPack: 'n'
        , overlay: ''
        , overlayNum: 0
        , packWidth: 0
        , packHeight: 0
        , pack_v_h: ''
        , partDepth: 1
        , packDisplay: ''
        , packBackgrountColor: ''
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: "　"
        , align_items: ''
        , text_align: "center"
        , image_file: [{ i_width: 100
                        , i_height: 100
                        , i_inline_block: "inline-block"
                        , i_alt: "logo"
                        , i_clickable: "y"
                        , i_newWindow: "n"
                        , i_working: "n"
                        , i_href: '/'
                        , i_file: "toplogo.png"},] },
    { pageName: 'Header'
        , partCode: 'p000000011'
        , width: 5
        , height: 100
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: []
        , backGroundColor: ''
        , grouping_num: 2
        , group_height: 100
        , content_r_l_b: 'l'
        , display: ''
        , partPack_num: 0
        , isPack: 'n'
        , hasPack: 'n'
        , overlay: ''
        , overlayNum: 0
        , packWidth: 0
        , packHeight: 0
        , pack_v_h: ''
        , partDepth: 1
        , packDisplay: ''
        , packBackgrountColor: ''
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: " "
        , align_items: ''
        , text_align: "center"
        , image_file: [] },
    { pageName: 'Header'
        , partCode: 'p000000012'
        , width: 25
        , height: 100
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: [{target: `Header_wrap_in_group_2_part_pack_2`
                         , first: [0]
                         , second: ['style']
                         , third: [['display']]
                         , fourth: [['block']]
                         , fifth: ['']
                         , sixth: [[0,[],[[]]]]}]
        , onmouseout: [{target: `Header_wrap_in_group_2_part_pack_2`
                        , first: [0]
                        , second: ['style']
                        , third: [['display']]
                        , fourth: [['none']]
                        , fifth: ['']
                        , sixth: [[0,[],[[]]]]}]
        , timesGone: []
        , backGroundColor: ''
        , grouping_num: 2
        , group_height: 100
        , content_r_l_b: 'l'
        , display: ''
        , partPack_num: 1
        , isPack: 'y'
        , hasPack: 'y'
        , overlay: 'n'
        , overlayNum: 0
        , packWidth: 70
        , packHeight: 100
        , pack_v_h: ''
        , partDepth: 1
        , packDisplay: 'block'
        , packBackgrountColor: ''
        , partPack_listStyle: 'none'
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: "<a>센터 소개</a>"
        , align_items: ''
        , text_align: "center"
        , image_file: [] },
    { pageName: 'Header'
        , partCode: 'p000000013'
        , width: 16
        , height: 100
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: []
        , backGroundColor: ''
        , grouping_num: 2
        , group_height: 100
        , content_r_l_b: 'l'
        , display: 'flex'
        , partPack_num: 2
        , isPack: 'y'
        , hasPack: 'n'
        , overlay: 'y'
        , overlayNum: 1
        , packWidth: 50
        , packHeight: 7 
        , pack_v_h: 'v'
        , partDepth: 3
        , packDisplay: 'none'
        , packBackgrountColor: '#8BBA1F'
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: "<a style='color:white' href='/'>치료실 소개</a>"
        , align_items: 'center'
        , text_align: "center"
        , image_file: [] },
    { pageName: 'Header'
        , partCode: 'p000000014'
        , width: 16
        , height: 100
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: []
        , backGroundColor: ''
        , grouping_num: 2
        , group_height: 100
        , content_r_l_b: 'l'
        , display: 'flex'
        , partPack_num: 2
        , isPack: 'y'
        , hasPack: 'n'
        , overlay: ''
        , overlayNum: 0
        , packWidth: 0
        , packHeight: 0
        , pack_v_h: 'v'
        , partDepth: 4
        , packDisplay: ''
        , packBackgrountColor: ''
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: "<a style='color:white' href='/'>원장/부원장 소개</a>"
        , align_items: 'center'
        , text_align: "center"
        , image_file: [] },
    { pageName: 'Header'
        , partCode: 'p000000015'
        , width: 16
        , height: 100
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: []
        , backGroundColor: ''
        , grouping_num: 2
        , group_height: 100
        , content_r_l_b: 'l'
        , display: 'flex'
        , partPack_num: 2
        , isPack: 'y'
        , hasPack: 'n'
        , overlay: ''
        , overlayNum: 0
        , packWidth: 0
        , packHeight: 0
        , pack_v_h: 'v'
        , partDepth: 4
        , packDisplay: ''
        , packBackgrountColor: ''
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: "<a style='color:white' href='/'>치료사 소개</a>"
        , align_items: 'center'
        , text_align: "center"
        , image_file: [] },
    { pageName: 'Header'
        , partCode: 'p000000016'
        , width: 16
        , height: 100
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: []
        , backGroundColor: ''
        , grouping_num: 2
        , group_height: 100
        , content_r_l_b: 'l'
        , display: 'flex'
        , partPack_num: 2
        , isPack: 'y'
        , hasPack: 'n'
        , overlay: ''
        , overlayNum: 0
        , packWidth: 0
        , packHeight: 0
        , pack_v_h: 'v'
        , partDepth: 4
        , packDisplay: ''
        , packBackgrountColor: ''
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: "<a style='color:white' href='/'>센터 둘러보기</a>"
        , align_items: 'center'
        , text_align: "center"
        , image_file: [] },
    { pageName: 'Header'
        , partCode: 'p000000017'
        , width: 16
        , height: 100
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: []
        , backGroundColor: ''
        , grouping_num: 2
        , group_height: 100
        , content_r_l_b: 'l'
        , display: 'flex'
        , partPack_num: 2
        , isPack: 'y'
        , hasPack: 'n'
        , overlay: ''
        , overlayNum: 0
        , packWidth: 0
        , packHeight: 0
        , pack_v_h: 'v'
        , partDepth: 4
        , packDisplay: ''
        , packBackgrountColor: ''
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: "<a style='color:white' href='/'>찾아오시는 길</a>"
        , align_items: 'center'
        , text_align: "center"
        , image_file: [] },
    { pageName: 'Header'
        , partCode: 'p000000018'
        , width: 16
        , height: 100
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: []
        , backGroundColor: ''
        , grouping_num: 2
        , group_height: 100
        , content_r_l_b: 'l'
        , display: 'flex'
        , partPack_num: 2
        , isPack: 'y'
        , hasPack: 'n'
        , overlay: ''
        , overlayNum: 0
        , packWidth: 0
        , packHeight: 0
        , pack_v_h: 'v'
        , partDepth: 4
        , packDisplay: ''
        , packBackgrountColor: ''
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: "<a style='color:white' href='/'>바우처 안내</a>"
        , align_items: 'center'
        , text_align: "center"
        , image_file: [] },         
    { pageName: 'Header'
        , partCode: 'p000000019'
        , width: 25
        , height: 100
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: []
        , backGroundColor: ''
        , grouping_num: 2
        , group_height: 100
        , content_r_l_b: 'l'
        , display: ''
        , partPack_num: 1
        , isPack: 'y'
        , hasPack: 'n'
        , overlay: ''
        , overlayNum: 0
        , packWidth: 0
        , packHeight: 0
        , pack_v_h: ''
        , partDepth: 2
        , packDisplay: ''
        , packBackgrountColor: ''
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: "<a>치료/검사 프로그램</a>"
        , align_items: ''
        , text_align: "center"
        , image_file: [] },         
    { pageName: 'Header'
        , partCode: 'p000000020'
        , width: 25
        , height: 100
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: []
        , backGroundColor: ''
        , grouping_num: 2
        , group_height: 100
        , content_r_l_b: 'l'
        , display: ''
        , partPack_num: 1
        , isPack: 'y'
        , hasPack: 'n'
        , overlay: ''
        , overlayNum: 0
        , packWidth: 0
        , packHeight: 0
        , pack_v_h: ''
        , partDepth: 2
        , packDisplay: ''
        , packBackgrountColor: ''
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: "<a>상담/문의</a>"
        , align_items: ''
        , text_align: "center"
        , image_file: [] },  
    { pageName: 'Header'
        , partCode: 'p000000021'
        , width: 25
        , height: 100
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: []
        , backGroundColor: ''
        , grouping_num: 2
        , group_height: 100
        , content_r_l_b: 'l'
        , display: ''
        , partPack_num: 1
        , isPack: 'y'
        , hasPack: 'n'
        , overlay: ''
        , overlayNum: 0
        , packWidth: 0
        , packHeight: 0
        , pack_v_h: ''
        , partDepth: 2
        , packDisplay: ''
        , packBackgrountColor: ''
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: "<a>커뮤니티</a>"
        , align_items: ''
        , text_align: "center"
        , image_file: [] },
    { pageName: 'Index'
        , partCode: 'p000000022'
        , width: 100
        , height: 70
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: [{target: `Index_parts_0_img_inner_0`
                       , first: [0]
                       , second: ['src']
                       , third: [[]]
                       , fourth: ['/image/visual1.jpg', '/image/visual2.jpg', '/image/visual3_2.png' ]
                       , fifth: ['']
                       , sixth: [ [3000,[],[['style','opacity',1,0.0166,0,16,1000,1]]] ] }]
        , backGroundColor: ''
        , grouping_num: 0
        , group_height: 100
        , content_r_l_b: 'l'
        , display: ''
        , partPack_num: 0
        , isPack: 'n'
        , hasPack: 'n'
        , overlay: ''
        , overlayNum: 0
        , packWidth: 0
        , packHeight: 0
        , pack_v_h: ''
        , partDepth: 2
        , packDisplay: ''
        , packBackgrountColor: ''
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: "　"
        , align_items: ''
        , text_align: "center"
        , image_file: [{ i_width: 100
                        , i_height: 100
                        , i_inline_block: "inline-block"
                        , i_alt: "main_img"
                        , i_clickable: "y"
                        , i_newWindow: "n"
                        , i_working: "n"
                        , i_href: '/'
                        , i_file: "visual1.jpg"},] },
    { pageName: 'Index'
        , partCode: 'p000000023'
        , width: 1
        , height: 1
        , heightFix: 'n'
        , hr: ''
        , onClick: []
        , onmouseover: []
        , onmouseout: []
        , timesGone: []
        , backGroundColor: '#f37221'
        , grouping_num: 0
        , group_height: 100
        , content_r_l_b: 'l'
        , display: 'flex'
        , partPack_num: 0
        , isPack: 'n'
        , hasPack: 'n'
        , overlay: 'y'
        , overlayNum: 1
        , overlayLeft: 15
        , overlayTop: 33
        , packWidth: 0
        , packHeight: 0
        , pack_v_h: ''
        , partDepth: 2
        , packDisplay: ''
        , packBackgrountColor: ''
        , partPack_listStyle: ''
        , partPack_margin_top: ''
        , partPack_margin_right: ''
        , partPack_margin_bottom: ''
        , partPack_margin_left: ''
        , partPack_padding_top: ''
        , partPack_padding_right: ''
        , partPack_padding_bottom: ''
        , partPack_padding_left: ''
        , inPack_margin_top: ''
        , inPack_margin_right: ''
        , inPack_margin_bottom: ''
        , inPack_margin_left: ''
        , inPack_padding_top: ''
        , inPack_padding_right: ''
        , inPack_padding_bottom: ''
        , inPack_padding_left: ''
        , border:"0px 0px 0px 0px"
        , borderTopStyle : ""
        , borderRightStyle : ""
        , borderBottomStyle: ""
        , borderLeftStyle: ""
        , borderTopColor: ""
        , borderRightColor: ""
        , borderBottomColor: ""
        , borderLeftColor: ""
        , text: ""
        , align_items: ''
        , text_align: "center"
        , image_file: [] },
];