var all=[];
function add(){
    var x =document.getElementById("item").value;
    if (validateform(x)==true)
    {
     all.push(x);
    display();
    }
    
};
function display(){
    
   var output="" ;
    
   for(var i=0; i< all.length; i++)
   
       {
           output+="<div class='resstyle'>"+all[i]+"<button class='btn btn-danger del' onclick='deleteitem(\""+i+"\")'>X</button></div><br>";
       }
   
   document.getElementById("result").innerHTML=output;
   document.getElementById("item").value=""; 
};
function deleteitem(id)
{
    all.splice(id,1);
    display();
}
function validateform(x)
{
    if(!x)
        {
            alert("please Enter Text");
            return false;
        }
        else
        {
            return true;
        }
    }
/*
$("#summer").mouseenter(function(){
    
    setInterval(function(){
        var x=Math.round(Math.random()*255);
        var y=Math.round(Math.random()*255);
        var z=Math.round(Math.random()*255);
        var bg="background:rgb("+x+","+y+","+z+");";
        var element=document.getElementById("ques2");
        element.style=bg;
    },1000); 
    

});
$("#summer").mouseleave(function(){
    $("#ques2").css("backgroundColor","red")
})
*/
var intervalfun="";
$("#summer").hover
(
   
    function()
    {
        document.getElementById("audio").play();
        function  gochange(){
            var x=Math.round(Math.random()*255);
            var y=Math.round(Math.random()*255);
            var z=Math.round(Math.random()*255);
            $("#ques2").css("backgroundColor","rgb("+x+","+y+","+z+")");
        }
        intervalfun=setInterval(gochange,1000);  
        
    }
    
    ,
    function()
    {
        document.getElementById("audio").pause(); 
        clearInterval(intervalfun);
        $("#ques2").css("backgroundColor","white");
    }

);
$("#img1").hover(
    function(){
    $(".ques4").css("backgroundColor","red");
      }
      ,
      function(){
        $(".ques4").css("backgroundColor","white");
          }  
);
$("#img2").hover(
    function(){
    $(".ques4").css("backgroundColor","green");
      }
      ,
      function(){
        $(".ques4").css("backgroundColor","white");
          }  
);
$("#img3").hover(
    function(){
    $(".ques4").css("backgroundColor","blue");
      }
      ,
      function(){
        $(".ques4").css("backgroundColor","white");
          }  
);
 function hi(){
    var d,h,m,s,animate;
    function init(){
        d=12;
        h=24;
        m=60;
        s=60;
        clock();
        
    };
    function clock(){
        s--;
        if(s==0)
            {
                s=60;
                m--;
                if(m==0)
                    {
                        m=60;
                        h--;
                        if(h==0)
                        {
                            h=24;
                            d--;
                        }
                    }
            }
        
        $('sec',s);
        $('min',m);
        $('hr',h);
        $('day',d);
        animate=setTimeout(clock,1000);
    };
    function $(id,val){
        if(val<10)
            {
                val='0'+val;
            }
        document.getElementById(id).innerHTML=val;
        
        
    };
    window.onload=init;
    
 }
 hi();





/*
function adduser()
{
    var nameInp=document.getElementById("nameInput").value;
    var mailInp=document.getElementById("mailInput").value;
    var phoneInp=document.getElementById("phoneInput").value;
    var textInp=document.getElementById("textInput").value;
   if(nameValid()==true)
   {
       
   }
}*/


function nameValid()
{
var nameInp=document.getElementById("nameInput").value;
 var regex=/^[a-z]{3,20}$/;
 if(regex.test(nameInp)==false)
 {
    document.getElementById("nameAlert").style.display="block";
    return false;
 }
 else
 {
    document.getElementById("nameAlert").style.display="none";
    return true;

 }

}
function mailValid()
{
    var mailInp=document.getElementById("mailInput").value;
var nameInp=document.getElementById("mailInput").value;
 var regex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 if(regex.test(mailInp)==false)
 {
    document.getElementById("mailAlert").style.display="block";
    return false;
 }
 else
 {
    document.getElementById("mailAlert").style.display="none";
    return true;

 }

}
function phoneValid()
{
var phoneInp=document.getElementById("phoneInput").value;
 var regex=/^01(0|1|2|5)[0-9]{8}$/ ;
 if(regex.test(phoneInp)==false)
 {
    document.getElementById("phoneAlert").style.display="block";
    return false;
 }
 else
 {
    document.getElementById("phoneAlert").style.display="none";
    return true;

 }

}
function textValid()
{
    var textInp=document.getElementById("textInput").value;
var phoneInp=document.getElementById("textInput").value;
 var regex=/^[a-zA-Z0-9]{20}/ ;
 if(regex.test(textInp)==false)
 {
    document.getElementById("textAlert").style.display="block";
    return false;
 }
 else
 {
    document.getElementById("textAlert").style.display="none";
    return true;

 }

}
