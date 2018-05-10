let myButtonArray=document.querySelectorAll('.info');
let myBoxArray=document.querySelectorAll('.col-sm');
for( let i=0; i<myButtonArray.length; i++){
 myButtonArray[i].addEventListener('click', function(){
     for( let y=0; y<myBoxArray.length; y++){
     myBoxArray[i].style.backgroundColor="#484c84";
    }     
 });
}