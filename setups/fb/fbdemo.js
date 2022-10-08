$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                fname:true
            },
            sname:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true
            },
            pass:{
                required:true,
                minlength:8 
            },
            dob:{
                required:true,
            },
            gender:{
                required:true,
            },
        },
        message:{
            fname:{
                required:"enter first name",
                minlength:"ener atleast four characters"
            },
            sname:{
                required:"enter surname",
                minlength:"enter atleast character"
            },
            email:{
                required:"enter email"
            },
            pass:{
                required:"enter password"
            },
            dob:{
                required:"enter date of birth"
            },
            gender:{
                required:"please choose gender"
            },
        }

    })
})
