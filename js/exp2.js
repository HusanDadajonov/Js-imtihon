const obj = {
    login : "",
    parol : "forever123",
}

if(!(obj.login.length >= 3)) console.log("Login kamida 3 ta belgidan iborat bo'lishi kerak");
if(!(obj.parol.length >= 8)) console.log("Parol kamida 8 ta belgidan iborat bo'lishi kerak");
if(obj.login.length >= 3 && obj.parol.length >= 8) console.log("Siz muvaffaqiyatli ro'yxatdan o'tdingiz");