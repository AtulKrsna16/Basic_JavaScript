function one (){
    const username = "Atul"

    function two (){
        const website = "youtube.com"
        console.log(username)
    }
    // console.log(website);  // cant be access because this is blocke scope

    two()
}

one()


// using  if statement
if (true){
    const username = "atul"
    if (username === "atul"){
        const website = " youtube"
        console.log(username + website);
    }
}

