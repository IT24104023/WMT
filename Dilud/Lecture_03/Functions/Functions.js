function getMAx(a,b){
    if(a<b){
        return b;
    }else{
        return a;
        }

}

document.write("<p>");
document.write("The largest number of 5 or 6 is: "+getMAx(5,6));


function checkUserName( form ) {
            if ( form.username.value.length != 8 ) {
                alert( "You have not entered an eight character string" );
                return false;
            } else {
                alert( "This is correct" );
                return true;
            }
        }