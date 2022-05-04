function login(){
    // get values from the form
    let inputEmail=$("#txtEmail").val();
    let inputPassword=$("#txtPassword").val(); 
    // use a flag
    let flag=false;
    //get the users from LS
    let userList=readUsers();//fn is on storeManager
    //travel the userlist
   for(let i=0;i<userList.length;i++){
        let user=userList[i];
        if(user.email===inputEmail && user.password===inputPassword){
            //3 equals is same value and same data type & 2 equals is same value
            flag=true;
            window.location="users.html";
   }
  // if(!flag){
  //     $("#alertError").removeClass("hide");
   //    setTimeout(function)(){
     //      $("#alertError").addClass("hide");
      // }
  // }
}
}

function init(){
    $("#loginBtn").click(login);
}

window.onload=init;