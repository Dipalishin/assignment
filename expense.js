function saveTolocalStorage(event)
{
    event.preventDefault();
    const amount=event.target.amount.value;
    const descript=event.target.descript.value;
    const category=event.target.category.value;
  //  localStorage.setItem("Expense Amount",amount);
   // localStorage.setItem("Description",decript);
   // localStorage.setItem("Category",category);
   const obj={amount,descript,category}
   localStorage.setItem(obj,JSON.stringify(obj));
   showNewUserOnScreen(obj);

}
window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj);
    }
})
function showNewUserOnScreen(user)
{
    document.getElementById("amount").value='';
    document.getElementById("descript").value='';
    document.getElementById("category").value='';

    if(localStorage.getItem(user.amount,user.descript,user.category)!==null)
    {
        removeUserFromScreen(amount,descript,category);
    }
    const parentNode = document.getElementById('listOfUsers');
                const childHTML = `<li id=${user.amount}>${user.amount}- ${user.descript}-${user.category}
                                        <button onclick=deleteUser('${user.amount}','${user.descript}','${user.category}')> Delete User </button>
                                        <button onclick=editUser('${user.amount}','${user.descript}','${user.category}')> Edit User </button>
                                        </li>`
parentNode.innerHTML=parentNode.innerHTML+childHTML;
}
function deleteUser(amount,descript,category){
    localStorage.removeItem(amount,descript,category);
    removeUserFromScreen(amount,descript,category);

}

function removeUserFromScreen(amount,descript,category){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(amount);
    const childNodeToBeDeleted2 = document.getElementById(descript);

    const childNodeToBeDeleted3 = document.getElementById(category);

if(childNodeToBeDeleted){
    parentNode.removeChild(childNodeToBeDeleted,childNodeToBeDeleted2,childNodeToBeDeleted3)
}
}
function editUser(amount,descript,category)
{
    document.getElementById("amount").value=amount;
    document.getElementById("descript").value=descript;
    document.getElementById("category").value=category;
  deleteUser(amount,descript,category);

}