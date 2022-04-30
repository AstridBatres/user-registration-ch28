const STORE_KEY="users";
function saveUser(user){
    //load the old data
    let oldData=readUsers();//localstorage info
    oldData.push(user)
    let val=JSON.stringify(oldData);
    localStorage.setItem(STORE_KEY,val);
}

function readUsers(){
    let data=localStorage.getItem(STORE_KEY);
    console.log(data);//<--JSON
    if(!data){
        return[];
    }else{
        let list=JSON.parse(data);
        return list;
    }
}