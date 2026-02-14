const form = document.getElementById("contactForm")//contactFormを操作する//

form.addEventListener("submit",function(e){
    e.preventDefault();

    const name= document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name === ""|| email === "" ||message === ""){
        alert("すべて入力してください");
        return;
    }

    console.log("送信データ");
    console.log(name,email,message);

    alert("送信されました");



})



