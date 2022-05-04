function displayUsers(usersArray){
    for (let i=0; i<usersArray.length;i++){
        let user=usersArray[i];
        console.log(user);
        //create the row=`<>${}</>
        user=`
        <table>
        <tr>
        <td>${user.first}</td>
        <td>${user.last}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td>${user.gender}</td>
        <td>${user.age}</td>
        <td>${user.adress}</td>
        <td>${user.phone}</td>
        <td>${user.payment}</td>       
        </tr>
        </table> 
        `
    }
}
function init(){
    console.log("Listing users");
    let users=readUsers();
   displayUsers(users);
   

}
window.onload=init;