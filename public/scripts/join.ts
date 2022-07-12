function handleVisiblePass() {
    try {
        const passwordInput = document.getElementById('password') as HTMLInputElement;
        const passwordIcon = document.getElementById('passwordIcon') as HTMLImageElement;
        if (!passwordInput) throw new Error("Couldn't find password input with the id password");
        if (!passwordIcon) throw new Error("Couldn't find password icon with the id passwordIcon");
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordIcon.src = '../assets/svgs/icons/visible-password-security-protect-svgrepo-com.svg';
            passwordIcon.style.width = '2.2em';
        } else {
            passwordInput.type = 'password';
            passwordIcon.src = '../assets/svgs/icons/eye-invisible-svgrepo-com.svg';
            passwordIcon.style.width = '2.4em';
        }
    } catch (error) {
        console.error(error);
    }

}

function handleVisibleRePass() {
    try {
        const passwordInput = document.getElementById('rePassword') as HTMLInputElement;
        const passwordIcon = document.getElementById('rePasswordIcon') as HTMLImageElement;
        if (!passwordInput) throw new Error("Couldn't find password input with the id rePassword");
        if (!passwordIcon) throw new Error("Couldn't find password icon with the id rePasswordIcon");
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordIcon.src = '../assets/svgs/icons/visible-password-security-protect-svgrepo-com.svg'
        } else {
            passwordInput.type = 'password';
            passwordIcon.src = '../assets/svgs/icons/eye-invisible-svgrepo-com.svg';
        }
    } catch (error) {
        console.error(error);
    }
}

function handleHomePage() {
    try {
        window.location.href = `../index.html`;
    } catch (error) {
        console.error(error);
    }
}

async function handleRegisterForm(event) {
    try {
        event.preventDefault();
        //Users's  Form Input
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const repeatedPassword = event.target.rePassword.value;

        //Error Message Elements


        // @ts-ignore
        const { data } = await axios.post("/users/register", { firstName, lastName, email, password, repeatedPassword })
        if (!data) throw new Error("Coulnd't receive data from axios POST '/users/register' ");
        console.log(data);
        const { user, error } = data;
        if (error) handleErrorMessage(error);
        console.log(user);
        if (user) window.location.href = `./login.html`;
    } catch (error) {
        console.error(error);
    }
}

function handleErrorMessage(error: string) {
    try {
        const firstNameError = document.getElementById('firstNameError') as HTMLSpanElement;
        const lastNameError = document.getElementById('lastNameError') as HTMLSpanElement;
        const emailError = document.getElementById('emailError') as HTMLSpanElement;
        const passwordError = document.getElementById('passwordError') as HTMLSpanElement;
        const reapeatedPasswordError = document.getElementById('rePasswordError') as HTMLSpanElement;
        firstNameError.innerHTML = '';
        lastNameError.innerHTML = '';
        emailError.innerHTML = '';
        reapeatedPasswordError.innerHTML = '';
        passwordError.innerHTML = '';

        if (error.includes('"firstName" length must be at least 2 characters long')) firstNameError.innerHTML = `First name is too short.`;
        if (error.includes('"lastName" length must be at least 2 characters long')) lastNameError.innerHTML = `Last name is too short.`

        if (error.includes('E11000')) emailError.innerHTML = `Email address already in use.`;
        if (error.includes('"email" must be a valid email')) emailError.innerHTML = `Email is not valid.`;

        if (error.includes('"password" length must be at least 6 characters long')) passwordError.innerHTML = `Password must contain at least 6 characters.`;
        if (error.includes('"password" length must be less than or equal to 18 characters long')) passwordError.innerHTML = `Password should contain 18 or less characters.`;
        if (error.includes('"password" should contain at least 1 special character')) passwordError.innerHTML = `Password should contain at least 1 special character.`;
        if (error.includes('"password" should contain at least 1 lowercase character')) passwordError.innerHTML = `Password should contain at least 1 lowercase character.`;
        if (error.includes('"password" should contain at least 1 uppercase character')) passwordError.innerHTML = `Password should contain at least 1 uppercase character.`;

        if (error.includes('"repeatedPassword" must be [ref:password]')) reapeatedPasswordError.innerHTML = `Password dosen't match!`;
    } catch (error) {
        console.error(error);
    }
}