document.getElementById("check-btn").addEventListener("click",submit);
function submit(){
    var flag=0;
    var str1;
    var str2;
    var inputValue=document.getElementById("text-input").value;
    
    if(inputValue===""){
        alert("please input a value");
        return;
    }
    str1=inputValue.toLowerCase().replace(/[ ,.!]/g,"");
    str2=inputValue.toLowerCase().replace(/[ ,.!]/g,"").split("").reverse().join("");
    if(str1===str2){
        flag=1;
        console.log("\nstr1="+str1);
        console.log("\nstr2="+str2);
    }
    if(flag===1){
        document.getElementById("result").textContent=inputValue + " is a palindrome";
        
    }
    else{
        document.getElementById("result").textContent=inputValue + " is not a palindrome";
    }
}