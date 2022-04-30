function displayUsers(usersArray){
    for (let i=0; i<usersArray.length;i++){
        let user=usersArray[i];
        console.log(user);
    }
}
function init(){
    console.log("Listing users");
    let users=readUsers();
   displayUsers(users);
   //create the row=`<>${}</>
   
}
window.onload=init;