
function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}


function getFullDate() {

    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
     ];


     var d = new Date();
     var month = monthNames[d.getMonth()]
    
     var d = new Date();
     var year = d.getFullYear();

     var fullDate = month+' '+year

     return fullDate
 
}