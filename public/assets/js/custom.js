$('.search-toggle').addClass('closed');

$('.search-toggle .search-icon').click(function(e) {
    if ($('.search-toggle').hasClass('closed')) {
        $('.search-toggle').removeClass('closed').addClass('opened');
        $('.search-toggle, .search-container').addClass('opened');
        $('#search-terms').focus();
    } else {
        $('.search-toggle').removeClass('opened').addClass('closed');
        $('.search-toggle, .search-container').removeClass('opened');
    }
});

// const togglePassword = document.querySelector('#togglePassword');
//   const password = document.querySelector('#id_password');
 
//   togglePassword.addEventListener('click', function (e) {
//     // toggle the type attribute
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     // toggle the eye slash icon
//     this.classList.toggle('fa-eye-slash');
// });

