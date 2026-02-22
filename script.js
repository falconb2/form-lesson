const form = document.getElementById("contactForm")//contactFormを操作する//

form.addEventListener("submit",function(e){ 
    e.preventDefault();

    const name= document.getElementById("name").value; //formLesson.htmlからname idのinputに入力さえた内容を取得する。//
    const email = document.getElementById("email").value; //formLesson.htmlから　email idのinputに入力された内容を取得する。//
    const message = document.getElementById("message").value;//formLesson.htmlから message idのinputに入力された内容を取得する。//

    if(name === ""|| email === "" ||message === ""){ 
        alert("すべて入力してください");  
        return;
    }

    console.log("送信データ");
    console.log(name,email,message);

    alert("送信されました");



})

