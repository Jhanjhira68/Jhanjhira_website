window.addEventListener('load', function () {
  document.body.classList.add('loaded');
});
///

window.addEventListener('load', function () {
  Swal.fire({
    title: 'ยินดีต้อนรับ!',
    text: 'ยินดีต้อนรับสู่เว็บไซต์ของเรา 😊',
    icon: 'success',
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false
  });
});


///
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.remove('transparent');
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.add('transparent');
    navbar.classList.remove('scrolled');
  }
});
////
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});