var login = {
    loginBtn: function() {

        // click Đăng Nhập
        var buttonOk = document.querySelector('.button-login');

        var loginTitle = document.querySelector('.login-title')

        var userLogin = document.querySelector('.user-login');

        // click Thử lại

        var retryBtn = document.querySelector('.retry');

        var loginError = document.querySelector('.login-title-error');

        var error = document.querySelector('.error')

        buttonOk.addEventListener('click', function() {
            loginTitle.style.display = 'none';
            userLogin.style.display = 'none';
            loginError.style.display = 'block';
            error.style.display = 'block';
        })

        retryBtn.addEventListener('click', function() {
            loginTitle.style.display = 'block';
            userLogin.style.display = 'block';
            loginError.style.display = 'none';
            error.style.display = 'none';
        })
    },
    loginStart: function() {
        this.loginBtn();
    }
}

login.loginStart()
