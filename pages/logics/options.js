export function apply_options(option){


    /*
    [{target: ["Index_wrap_in_group_4_part_pack_1", "Index_wrap_in_group_4_part_pack_2", "Index_wrap_in_group_4_part_pack_3"]
    , first: [0]
    , second: ['style']
    , third: [['height']]
    , fourth: [['top']]         // top : 높은거에 맞추기, bot : 낮은거에 맞추기
    , fifth: ['']
    , sixth: [] }]
    */
    
    for( let i = 0 ; i < option.target.length ; i++ ){
    
        // console.log(document.getElementById(option.target[i]).childElementCount);
        // console.log(document.getElementById(option.target[i]).childNodes);
        // console.log(document.getElementById(option.target[i]).children);
        // console.log(document.getElementById(option.target[i]).firstChild);
        // console.log(document.getElementById(option.target[i]).child);
        console.log(i+" : "+document.getElementById(option.target[i]).style.height);
    }

}