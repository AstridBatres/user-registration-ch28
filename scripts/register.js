//console.log("Script");

//create a user and display it on console
function User(first,last,email,password,gender,age,adress,phone,payment){
        this.first=first;
        this.last=last;
        this.email=email;
        this.password=password;
        this.gender=gender;
        this.age=age;
        this.adress=adress;
        this.phone=phone;
        this.payment=payment;
}

function register(){
        let inputfirst= $("#txtfirst").val();//getting value
        let inputlast= $("#txtlast").val();
        let inputemail =$("#txtemail").val();
        let inputpassword =$("#txtpassword").val();
        let inputgender=$("#txtgender").val();
        let inputage=$("#txtage").val();
        let inputadress=$("#txtadress").val();
        let inputphone=$("#txtphone").val();
        let inputpayment=$("#txtpayment").val();

        //console.log(inputfirst,inputlast,inputemail,inputpassword,inputgender,inputage,inputadress,inputphone,inputpayment);

        let newUser = new User(inputfirst,inputlast,inputemail,inputpassword,inputgender, inputage,inputadress,inputphone,inputpayment);
        console.log(newUser)
}

function init(){
    console.log("Init function");

    //create two users and display on console
    let user1= new User("Astrid", "Guerrero",)
}

window.onload=init;