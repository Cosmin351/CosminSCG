Dataa();
function Dataa(){
    const dt = new Date().toLocaleString();
    document.getElementById("data-ora").innerHTML=dt;
    setTimeout(Dataa,1000)
}
