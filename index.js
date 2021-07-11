var vari = document.querySelectorAll("span.ZjFb7c");
let text="";
for (let i=0 ;i<vari.length ; i++)
{
    text+=vari[i].innerHTML + "\n";
}
console.log(text);