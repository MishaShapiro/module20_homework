const myNodelist: any = document.getElementsByTagName("LI")
let i : number
for (i = 0; i < myNodelist.length; i++) {
    const span: HTMLElement | null = document.createElement("SPAN");
    const txt: Text = document.createTextNode("\u00D7");
    span.className = "close"
    span.appendChild(txt)
    myNodelist[i].appendChild(span)
}

const classClose : HTMLCollectionOf<any> = document.getElementsByClassName("close");
for (i = 0; i < classClose.length; i++) {
    classClose[i].onclick = function (): void {
        const div: HTMLElement = this.parentElement;
        div.style.display = "none"
    }
}

const list : any = document.querySelector('ul');
list.addEventListener('click', function(ev: any):void {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false)

function newElement(): void {
    const li: HTMLElement = document.createElement("li");
    const inputValue = (<HTMLInputElement>document.getElementById("myInput")).value;
    const t : Text = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
      (<HTMLElement>document.getElementById("myUL")).appendChild(li);
    }
    (<HTMLInputElement>document.getElementById("myInput")).value = "";

    const span: HTMLElement | null = document.createElement("SPAN");
    const txt: Text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        classClose[i].onclick = function () {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
}