let inputEl = document.getElementById("input-el")
console.log(inputEl)
let inputBtn = document.getElementById("input-btn")
console.log(inputBtn)

let myLeads = []
let ulEl = document.getElementById("ul-el")
const LeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")
)
const tabBtn = document.getElementById("tab-btn")
console.log(tabBtn)
const deleteBtn = document.getElementById("delete-btn")
console.log(deleteBtn)
if(LeadsFromLocalStorage){
  myLeads = LeadsFromLocalStorage
  render(myLeads)
}
deleteBtn.addEventListener("click", function(){
localStorage.clear()
myLeads = []
render(myLeads)
})
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    inputEl.value = " " //this removes previous input
    
})
tabBtn.addEventListener("click", function(){
  chrome.tabs.query({active: true, currentWinodw: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

  })

})

function render(leads){
let listItems = " "

for(let i = 0; i< leads.length; i++){
    listItems += `<li>
    <a target = '_blank' href = ${leads[i]}>
     ${leads[i]} 
    </a></li>`
  //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
  // let li = document.createElement("li")
   //li.textContent = myLeads[i]
   //ulEl.append(li)
     }
ulEl.innerHTML = listItems}