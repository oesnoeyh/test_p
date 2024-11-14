// 페이지 로드 시 초기 화면 처리
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('first-screen').classList.remove('hidden');
    document.getElementById('pricing-screen').classList.add('hidden');
});

// 구독하기 버튼 클릭 시 로그인 페이지로 이동 (가상 처리)
function navigateToLogin() {
    alert('로그인 페이지로 이동합니다!');
    // 로그인 로직이 성공하면 요금제 화면으로 전환
    document.getElementById('first-screen').classList.add('hidden');
    document.getElementById('pricing-screen').classList.remove('hidden');
}

// 계좌번호 섹션 표시 함수
function showBankInfo(planType) {
    const bankDetails = document.getElementById('bank-details');
    const messageElement = document.getElementById('message');

    // 계좌번호 섹션 표시
    bankDetails.classList.remove('hidden');

    // 기존 메시지 초기화
    messageElement.classList.add('hidden');
    messageElement.textContent = '';

    // 요금제 선택 알림
    alert(`${planType} 요금제를 선택하셨습니다. 계좌 정보를 확인하세요.`);
}

// 인증번호 확인 함수
document.getElementById('verify-btn').addEventListener('click', () => {
    const verificationCode = document.getElementById('verification-code').value; // 입력된 인증번호 가져오기
    const messageElement = document.getElementById('message');

    // 인증번호 확인
    if (verificationCode === '1234') { // 올바른 인증번호
        messageElement.textContent = '인증 성공! 다운로드가 시작됩니다.';
        messageElement.style.color = '#00ff00'; // 성공 메시지 색상
        messageElement.classList.remove('hidden');

        // 다운로드 실행 (2초 후)
        setTimeout(() => {
            window.location.href = 'files/your-program.exe'; // 다운로드할 파일 경로
        }, 2000);
    } else { // 잘못된 인증번호
        messageElement.textContent =
            '잘못된 인증번호입니다. 관리자(admin@example.com)에게 문의하세요.';
        messageElement.style.color = '#e50914'; // 오류 메시지 색상
        messageElement.classList.remove('hidden');
    }
});
