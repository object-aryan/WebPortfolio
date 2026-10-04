const IsToogle=document.getElementById('Istoogle');
IsToogle.addEventListener('onClick',(e)=>{
   e==true;
   if(e){
    document.body.style.backgroundColor="#0B1120";
    document.body.style.color="#F8FAFC"
    console.log("done");
    
   }
   else {
    e=false;
   }
})