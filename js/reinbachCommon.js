// 使用者密碼輸入時的雙重驗證
function pwdValidation(pwdInput, callbackTrue, confirmPwdInput, callbackFalse) {
    if (pwdInput != confirmPwdInput) {
        callbackTrue();
    } else {
        callbackFalse();
    }
};

// 確認是否已經登入
function checkMemberLogin(callback) {
    if (typeof Cookies.get('member') === "undefined") {
        callback();
        console.log("請先登入");
    } else {
        console.log("已經登入");
    }
};