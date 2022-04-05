function init(){
    //add your javascript between these two lines of code
    function alertFunction(){
        var text = document.getElementById("entryinput").value;
        var text2 = document.getElementById("textoutput");
        alert("Muhammad Arbi: " + text);
        document.getElementById("textoutput").innerHTML = text
    }
    var button = document.getElementById('entrybutton');
    button.addEventListener('click', alertFunction);
}

    window.addEventListener('load', init);