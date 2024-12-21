function dc()
{
let dateobj = new Date()
let chour= dateobj.getHours()
let cdate= dateobj.getMinutes()
let csec= dateobj.getSeconds()
let cdd= dateobj.getDate()
let cmm= dateobj.getMonth()
let cyear= dateobj.getFullYear()
let cweek= dateobj.getDay()

document.getElementById("hr").innerText= chour
document.getElementById("min").innerText= cdate
document.getElementById("sec").innerText= csec
document.getElementById("dd").innerText= cdd
document.getElementById("mm").innerText= cmm+1
document.getElementById("yyyy").innerText= cyear

switch(cweek)
{
    case 1 : cweek="monday"
    break;
    case 2 : cweek="tuesday"
    break;
    case 3 : cweek="wednesday"
    break;
    case 4 : cweek="thursday"
    break;
    case 5 : cweek="friday"
    break;
    case 6 : cweek="saturday"
    break;
    case 7 : cweek="sunday"
    break;
}
document.getElementById("base").innerText= cweek

switch(cmm)
{
    case 0 : cmm="jan"
    break;
    case 1 : cmm="feb"
    break;
    case 2 : cmm="march"
    break;
    case 3 : cmm="april"
    break;
    case 4 : cmm="may"
    break;
    case 5 : cmm="june"
    break;
    case 6 : cmm="july"
    break;
    case 7 : cmm="aug"
    break;
    case 8 : cmm="sept"
    break;
    case 9 : cmm="oct"
    break;
    case 10 : cmm="nov"
    break;
    case 11 : cmm="dec"
    break;
}
document.getElementById("base2").innerText= cmm
}