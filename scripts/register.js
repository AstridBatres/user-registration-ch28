//console.log("Script");

//create a user and display it on console
function User(first, last,email,password,gender,age){
        this.first=first;
        this.last=last;
        this.email=email;
        this.password=password;
        this.gender=gender;
        this.age=age;
}

function register(){
        let inputfirst= $("#txtfirst").val;//getting value
        let inputlast= $("#txtlast").val;
        let inputemail =$("#txtemail").val;
        let inputpassword =$("#txtpassword");
        let inputgender=$("#txtgender").val;
        let inputage=$("#txtage").val;

        console.log(inputfirst,inputlast,inputemail,inputpassword,inputgender,inputage);

        let newUser = new User(inputfirst,inputlast,inputemail,inputpassword,inputgender,inputage);
}

function init(){
    console.log("Init function");

    //create two users and display on console
    let user1= new User("Astrid", "Guerrero",)
}

window.onload=init;