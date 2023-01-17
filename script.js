let input = document.getElementById('input');
let taskList = document.getElementById('div_affichage')

function aff() {
  if (input.value) {
    const buttona = document.createElement('button')
    buttona.innerHTML = 'Delete'
    buttona.setAttribute("onclick", "removeTask(this)")

    const para = document.createElement("p");
    para.innerHTML = input.value
    para.setAttribute("style", "display:inline-block")

    const check = document.createElement("input")
    check.setAttribute("type", "checkbox")
    check.setAttribute("onchange", "finishTask(this)")
     
   const d = document.createElement("div")
    d.appendChild(check);
    d.appendChild(para);
    d.appendChild(buttona);
    taskList.appendChild(d)

    input.value = ""
  }
}
function removeTask(elm) {
  elm.parentNode.remove()
}

function finishTask(e) {
  if (e.checked)
    e.parentElement.children[1].style.textDecoration = "line-through"
  else
    e.parentElement.children[1].style.textDecoration = "none"

}










