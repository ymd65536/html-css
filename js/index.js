function test(){
    let vis = document.getElementsByName("test");
    let chk = document.getElementsByName("chk");
    
    if(chk.item(0).checked == true){
        vis.item(0).style.visibility = "hidden";
    }else{
        vis.item(0).style.animation = "anime1 1s";
        vis.item(0).style.visibility = "visible";
    }

}