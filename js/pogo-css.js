
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


function toggleActiveClass(divName) {
    console.log('asd');
    /*document.getElementById("'" + divName + "'").classList.toggle("active");*/
}