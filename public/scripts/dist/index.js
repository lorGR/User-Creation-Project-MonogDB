console.log('connected');
function handleVisiblePass(event) {
    try {
        event.preventDefault();
        var passwordInput = document.getElementById('password');
        var passwordIcon = document.getElementById('passwordIcon');
        if (!passwordInput)
            throw new Error("Couldn't find password input with the id password");
        if (!passwordIcon)
            throw new Error("Couldn't find password icon with the id passwordIcon");
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordIcon.src = './assets/svgs/icons/visible-password-security-protect-svgrepo-com.svg';
            passwordIcon.style.width = '2.2em';
        }
        else {
            passwordInput.type = 'password';
            passwordIcon.src = './assets/svgs/icons/eye-invisible-svgrepo-com.svg';
            passwordIcon.style.width = '2.4em';
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleVisibleRePass(event) {
    try {
        event.preventDefault();
        var passwordInput = document.getElementById('rePassword');
        var passwordIcon = document.getElementById('rePasswordIcon');
        if (!passwordInput)
            throw new Error("Couldn't find password input with the id rePassword");
        if (!passwordIcon)
            throw new Error("Couldn't find password icon with the id rePasswordIcon");
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordIcon.src = './assets/svgs/icons/visible-password-security-protect-svgrepo-com.svg';
        }
        else {
            passwordInput.type = 'password';
            passwordIcon.src = './assets/svgs/icons/eye-invisible-svgrepo-com.svg';
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleHomePage(event) {
    try {
        window.location.href = "../views/home.html";
    }
    catch (error) {
        console.error(error);
    }
}
