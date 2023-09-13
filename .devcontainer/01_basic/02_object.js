
// const tinderUser = new Object(); //singleton object
const tinderUser = {} //singleton object
tinderUser.id = "abc@tinder.in"
tinderUser.name = "gopal"

// console.log(tinderUser)

const regularUser = {
    email : "gopal108@gmail.com",
    fullname : {
        Userfullname : {
            firtname : "Radhe",
            lastname : "Shayam"
        }

        }
    }
    // console.log(regularUser.fullname.Userfullname.firtname);

    // concate the object using spread operator

    
    // values and keys
    const obj1 = {1 : "a", 2 : "b"}
    const obj2 = {3 : "a", 4 : "b"}

    obj3 = {...obj1,...obj2}
    console.log(obj3);



    const users = [
        {
            id : 1,
            email : "atul@gmail.com",
        },
        {

        },
        {

        },
    ]
    users[1].email
    console.log(tinderUser);
    console.log(Object.keys(tinderUser));
    console.log(Object.values(tinderUser));
    console.log(Object.entries(tinderUser));

    console.log(tinderUser.hasOwnProperty('isLoggedIn'));


    const course = {
        coursename : "JS in hindi" ,
        price : "999",
        courseInstructor : "hitesh"
    }

    const {courseInstructor : Instructor} = course
    console.log(Instructor);