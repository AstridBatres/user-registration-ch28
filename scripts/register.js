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

function isValid(User){
        let valid=true;
        $("input").removeClass("input-error");
        if (User.email.length==0){
        
        valid=false;
        console.error("Add an email");
        $("#txtemail").addClass("input-error");
        }

        if (User.password.length==0){
                valid=false;
                console.error("Add a password")
                $("#txtpassword").addClass("input-error");
        }

        if(User.first.length==0){
                valid=false;
                console.error("Add a first name")
                $("#txtfirst").addClass("input-error");
        }
        
        if(User.last.length==0){
                valid=false;
                console.error("Add a last name")
                $("#txtlast").addClass("input-error");
        }
        if(User.gender.length==0){
                valid=false;
                console.error
                $("#txtgender").addClass("input-error");
        }
        return valid;

}

function validatePass(){
        let txtpass=$("#txtpassword");
        let password=txtpass.val();
        //is the password less than 6?
        if(password.length<6){
                txtpass.css("background", "red"); //jquery to change the css
                displayErrror("The password is too short :(");
        }else{
                txtpass.css("background", "green");
                hideError();
        }

        }

function displayErrror(msg){
        $("#alertError").removeClass("hide").text(msg);
}
function hideError(){
        $("alertError").addClass("hide");
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
        if(isValid(newUser)){
        saveUser (newUser);
        $('input').val("");// clears all the inputs
        //function on store manager
        //add display error
}
}

function init(){
    console.log("Register");
//hook events
   $("#txtpassword").change(validatePass);
}

window.onload=init;