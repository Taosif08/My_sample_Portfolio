function revstring(S) {
    var newstr="";

    for (var i = S.length-1; i >=0; i--) {
        newstr += S[i];
    }
        return newstr;
    
}  
revstring("Hello");