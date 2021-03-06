function addUser()
{
    //Variable User Name
    user_name = document.getElementById("user_name").value;
    //Local Storage
    localStorage.setItem("user_name",user_name);
    //Navigate to Kwitter Room
    window.location = "kwitter_room.html";
}