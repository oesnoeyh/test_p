// scripts.js

// 회원 데이터 저장
const users = {};

// 구독하기 버튼 클릭 시 로그인 화면으로 이동
document.getElementById("subscribe-button").addEventListener("click", function() {
    document.getElementById("intro-section").style.display = "none";
    document.getElementById("login-section").style.display = "block";
});

// 로그인 버튼 클릭 시 로그인 검증
document.getElementById("login-button").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (users[username] && users[username] === password) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("plans-section").style.display = "block";
    } else {
        alert("로그인 실패. 아이디와 비밀번호를 확인하세요.");
    }
});

// 회원가입 버튼 클릭 시 회원가입 화면으로 이동
document.getElementById("signup-button").addEventListener("click", function() {
    document.getElementById("intro-section").style.display = "none";
    document.getElementById("signup-section").style.display = "block";
});

// 회원가입 완료 버튼 클릭 시 회원가입 처리
document.getElementById("signup-submit-button").addEventListener("click", function() {
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;
    
    if (newUsername && newPassword) {
        users[newUsername] = newPassword;
        alert("회원가입이 완료되었습니다. 로그인 해주세요.");
        document.getElementById("signup-section").style.display = "none";
        document.getElementById("login-section").style.display = "block";
    } else {
        alert("모든 필드를 입력해주세요.");
    }
});

// 마이페이지 버튼 클릭 시 마이페이지로 이동
document.getElementById("mypage-button").addEventListener("click", function() {
    document.getElementById("plans-section").style.display = "none";
    document.getElementById("mypage-section").style.display = "block";
    
    const currentUsername = document.getElementById("username").value;
    document.getElementById("mypage-username").textContent = `아이디: ${currentUsername}`;
    // 추가적인 구독 정보 등은 여기에 추가할 수 있습니다.
});

// 로그아웃 버튼 클릭 시 초기 화면으로 이동
document.getElementById("logout-button").addEventListener("click", function() {
    document.getElementById("mypage-section").style.display = "none";
    document.getElementById("intro-section").style.display = "block";
});
