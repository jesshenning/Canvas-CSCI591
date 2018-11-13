$(function(){
    $('#exp_page').click(function(){
        //console.log('hi'); TEST
        window.location='experience.html';
    });
});

$(function(){
    $('#contact_page').click(function(){
        //console.log('hi'); TEST
        window.location='contact.html';
    });
});

$(function(){
    $('#home_page').click(function(){
        //console.log('hi'); TEST
        window.location='homepage.html';
    });
});

$(function() {
    $('#registration_page').click(function() {
        window.location='registration.html';
    });
});

$(function() {
    $('#canvas_page').click(function() {
        window.location='canvas_view.html';
    });
});

$(function() {
    $('#webworker_page').click(function() {
        window.location='webworker.html';
    });
});

$(function() {
    $('#babylon_page').click(function() {
        window.location='babylon.html';
    });
});

$(function() {
    $('#phaser_page').click(function() {
        window.location='phaser.html';
    });
});


if($("#myform").submit()) {
    console.log("hi");
}
else {
    console.log("bye");
}


  

//function getCookie(c_name){
//    if (document.cookie.length>0){
//        c_start=document.cookie.indexOf(c_name + "=");
//        if (c_start!==-1){ 
//            c_start=c_start + c_name.length+1; 
//            c_end=document.cookie.indexOf(";",c_start);
//            if (c_end===-1) c_end=document.cookie.length;
//            return unescape(document.cookie.substring(c_start,c_end));
//        } 
//    }
//    return "";
//}
//
//function setCookie(c_name,value,expiredays){
//    var exdate=new Date();
//    exdate.setDate(exdate.getDate()+expiredays);
//    document.cookie=c_name+ "=" +escape(value)+
//    ((expiredays===null) ? "" : ";expires="+exdate.toGMTString());
//}
//
//function checkCookie(){
//    username=getCookie('username');
//    
//    if(username!==null && username!=="") {
//        alert('Welcome again '+username+'!');
//        console.log(username);
//    }
//    else {
//        username=prompt('Please enter your name:',"");
//        
//        if(username!==null && username!==""){
//            setCookie('username',username,365);
//            console.log(username);
//        }
//    }
//}
//console.log(username);
//window.onload=checkCookie;
