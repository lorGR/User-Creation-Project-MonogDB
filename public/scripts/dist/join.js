var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function handleVisiblePass() {
    try {
        var passwordInput = document.getElementById('password');
        var passwordIcon = document.getElementById('passwordIcon');
        if (!passwordInput)
            throw new Error("Couldn't find password input with the id password");
        if (!passwordIcon)
            throw new Error("Couldn't find password icon with the id passwordIcon");
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordIcon.src = '../assets/svgs/icons/visible-password-security-protect-svgrepo-com.svg';
            passwordIcon.style.width = '2.2em';
        }
        else {
            passwordInput.type = 'password';
            passwordIcon.src = '../assets/svgs/icons/eye-invisible-svgrepo-com.svg';
            passwordIcon.style.width = '2.4em';
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleVisibleRePass() {
    try {
        var passwordInput = document.getElementById('rePassword');
        var passwordIcon = document.getElementById('rePasswordIcon');
        if (!passwordInput)
            throw new Error("Couldn't find password input with the id rePassword");
        if (!passwordIcon)
            throw new Error("Couldn't find password icon with the id rePasswordIcon");
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordIcon.src = '../assets/svgs/icons/visible-password-security-protect-svgrepo-com.svg';
        }
        else {
            passwordInput.type = 'password';
            passwordIcon.src = '../assets/svgs/icons/eye-invisible-svgrepo-com.svg';
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleHomePage() {
    try {
        window.location.href = "../index.html";
    }
    catch (error) {
        console.error(error);
    }
}
function handleRegisterForm(event) {
    return __awaiter(this, void 0, void 0, function () {
        var firstName, lastName, email, password, repeatedPassword, data, user, error, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    event.preventDefault();
                    firstName = event.target.firstName.value;
                    lastName = event.target.lastName.value;
                    email = event.target.email.value;
                    password = event.target.password.value;
                    repeatedPassword = event.target.rePassword.value;
                    return [4 /*yield*/, axios.post("/users/register", { firstName: firstName, lastName: lastName, email: email, password: password, repeatedPassword: repeatedPassword })];
                case 1:
                    data = (_a.sent()).data;
                    if (!data)
                        throw new Error("Coulnd't receive data from axios POST '/users/register' ");
                    console.log(data);
                    user = data.user, error = data.error;
                    if (error)
                        handleErrorMessage(error);
                    console.log(user);
                    if (user)
                        window.location.href = "./login.html";
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleErrorMessage(error) {
    try {
        var firstNameError = document.getElementById('firstNameError');
        var lastNameError = document.getElementById('lastNameError');
        var emailError = document.getElementById('emailError');
        var passwordError = document.getElementById('passwordError');
        var reapeatedPasswordError = document.getElementById('rePasswordError');
        firstNameError.innerHTML = '';
        lastNameError.innerHTML = '';
        emailError.innerHTML = '';
        reapeatedPasswordError.innerHTML = '';
        passwordError.innerHTML = '';
        if (error.includes('"firstName" length must be at least 2 characters long'))
            firstNameError.innerHTML = "First name is too short.";
        if (error.includes('"lastName" length must be at least 2 characters long'))
            lastNameError.innerHTML = "Last name is too short.";
        if (error.includes('E11000'))
            emailError.innerHTML = "Email address already in use.";
        if (error.includes('"email" must be a valid email'))
            emailError.innerHTML = "Email is not valid.";
        if (error.includes('"password" length must be at least 6 characters long'))
            passwordError.innerHTML = "Password must contain at least 6 characters.";
        if (error.includes('"password" length must be less than or equal to 18 characters long'))
            passwordError.innerHTML = "Password should contain 18 or less characters.";
        if (error.includes('"password" should contain at least 1 special character'))
            passwordError.innerHTML = "Password should contain at least 1 special character.";
        if (error.includes('"password" should contain at least 1 lowercase character'))
            passwordError.innerHTML = "Password should contain at least 1 lowercase character.";
        if (error.includes('"password" should contain at least 1 uppercase character'))
            passwordError.innerHTML = "Password should contain at least 1 uppercase character.";
        if (error.includes('"repeatedPassword" must be [ref:password]'))
            reapeatedPasswordError.innerHTML = "Password dosen't match!";
    }
    catch (error) {
        console.error(error);
    }
}
