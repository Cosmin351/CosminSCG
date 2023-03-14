Dataa();
function Dataa(){
    const dt = new Date().toLocaleString();
    document.getElementById("data-ora").innerHTML=dt;
    setTimeout(Dataa,1000)
}
function Discord(){
    const dt ="CosminSCG#3518";
    navigator.clipboard.writeText(dt);
}

