// scripts.js
document.getElementById("subscribe-button").addEventListener("click", function() {
    document.getElementById("intro-section").style.display = "none";
    document.getElementById("login-section").style.display = "block";
});

document.getElementById("login-button").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // 간단한 로그인 검증 (실제 환경에서는 보안이 필요합니다)
    if (username === "user" && password === "password") {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("plans-section").style.display = "block";
    } else {
        alert("로그인 실패. 아이디와 비밀번호를 확인하세요.");
    }
});
