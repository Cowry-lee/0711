let lis=document.querySelectorAll('.list li');
for(let i=0;i<lis.length;i++){
    addClick(lis[i]);
}
function addClick(curLi){
    let i=curLi.getElementsByTagName('i');
    let strong=curLi.getElementsByTagName('strong');
    // 加
    i[1].onclick=function(){
        let val=Number(this.previousElementSibling.innerHTML);
        val+=1;
        this.previousElementSibling.innerHTML=val;
        strong[1].innerHTML=parseFloat(strong[0].innerHTML)*val+'元';
        computed();
    }
    // 减
    i[0].onclick=function(){
        let val=Number(this.nextElementSibling.innerHTML);
        val-=1;
        if(val<=0){
            this.nextElementSibling.innerHTML=0;
            val=0;
        }else{
            this.nextElementSibling.innerHTML=val;
        }
        strong[1].innerHTML=parseFloat(strong[0].innerHTML)*val+'元';
        computed();
    }
}
let ems=document.querySelectorAll('.info em');
function computed(){
    let val1=0;
    let val2=0;
    let ary=[0];
    for(let i=0;i<lis.length;i++){
        let em=lis[i].querySelector('em');
        let strong=lis[i].querySelectorAll('strong');
        val1+=Number(em.innerHTML);
        val2+=parseFloat(strong[1].innerHTML);
        if(em.innerHTML>=1){
            ary.push(parseFloat(strong[0].innerHTML));
        }
    }  
    ary.sort((a,b)=>b-a);
    ems[0].innerHTML=val1;
    ems[1].innerHTML=val2;
    ems[2].innerHTML=ary[0]; 
}


