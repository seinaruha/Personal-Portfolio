let username;
document.getElementById("username-submit").onclick = function(){
    username = document.getElementById("username").value;
    document.getElementById("target").textContent = `Hi ${username}!`
}