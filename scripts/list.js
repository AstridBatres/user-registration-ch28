function displayUsers(usersArray){
    let row="";
    for (let i=0; i<usersArray.length;i++){
        let user=usersArray[i];
        console.log(user);
        //create the row=`<>${}</>
        row=`
        <table>
        <tr>
        <td>${user.first}</td>
        <td>${user.last}</td>
        <td>${user.email}</td>
        <td>${user.gender}</td>
        <td>${user.age}</td>
        <td>${user.adress}</td>
        <td>${user.phone}</td>     
        </tr>
        </table> 
        `
    }
    $("#userTable").append(row);
    //append the user on the html table
}
function init(){
    console.log("Listing users");
    let users=readUsers();
   displayUsers(users);
   

}
window.onload=init;