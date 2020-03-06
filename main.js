function area()
{
        num1 = document.getElementById("lengthvalue").value;
 
        document.getElementById("res").innerHTML = (num1)* (num1) ;
        var1 = document.getElementById("squaresize").value;
        var2 = document.getElementById("squarecolor").value;
        document.getElementById("res2").innerHTML = var1 + "  "+ var2;
}