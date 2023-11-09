function button(){
    let a = document.getElementById("full-name").value
    let b = document.getElementById("date-of-birth").value
    let c = document.getElementById("email").value
    let d = document.getElementById("mobile-number").value
    let e = document.getElementById("genter").value
    let f = document.getElementById("occupation").value
    let g = document.getElementById("id-type").value
    let h = document.getElementById("id-number").value
    let i = document.getElementById("issue-authority").value
    let j = document.getElementById("issue-date").value
    let k = document.getElementById("issue-state").value
    let l = document.getElementById("expirydate").value
  
    
    if( !a || !b || !c || !d || !e || !f || !g || !h || !i || !j || !k || l === ""){
        alert("Sorry")
        return false;
    }else{
        alert("Success")
        window.open ("formsecondpage.html")
        return true;
    }
    
}