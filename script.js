let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll = () =>{
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}
let shoppingcart = document.querySelector('.cart-items-container')
document.querySelector('#cart-btn').onclick = () =>{
    shoppingcart.classList.add('active');
}
document.querySelector('#close').onclick = () =>{
    shoppingcart.classList.remove('active');
};
// account form
let accountform = document.querySelector('.account-form');

document.querySelector('#account-btn').onclick = () =>{
    accountform.classList.add('active');
}
document.querySelector('#close-form').onclick = () =>{
    accountform.classList.remove('active');
}
let registerbtn = document.querySelector('.account-form .register-btn');
let loginbtn = document.querySelector('.account-form .login-btn');
registerbtn.onclick = () => {
    registerbtn.classList.add('active');
    loginbtn.classList.remove('active');
    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .register-form').classList.add('active');
}
loginbtn.onclick = () => {
    registerbtn.classList.remove('active');
    loginbtn.classList.add('active');
    document.querySelector('.account-form .login-form').classList.add('active');
    document.querySelector('.account-form .register-form').classList.remove('active');
};