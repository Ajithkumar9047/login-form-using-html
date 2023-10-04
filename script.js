document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.querySelector('.login-form');
  const forgotPasswordLink = document.getElementById('forgot-password');
  const signUpLink = document.getElementById('sign-up');
  const showHidePassword = document.getElementById('show-hide-password');
  const passwordInput = document.getElementById('password');

  // Background image settings
  const backgroundImages = [
    'img.jpg',
    'ani.jpg',
    'images3.jpg'
  ];
  let currentIndex = 0;

  function changeBackground() {
    currentIndex = (currentIndex + 1) % backgroundImages.length;
    const imageUrl = backgroundImages[currentIndex];
    document.body.style.backgroundImage = `url(${imageUrl})`;
  }

  setInterval(changeBackground, 9000);

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = passwordInput.value;

    if (username === 'admin' && password === 'admin') {
      window.location.href = 'home.html'; // Redirect to the home page
    } else {
      alert('Invalid username or password');
    }
  });

  forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the link from navigating
    alert('Forgot Password?');
  });

  signUpLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the link from navigating
    alert('Sign Up');
  });

  showHidePassword.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      showHidePassword.innerHTML = '<div class="icon"><i class="fas fa-eye-slash"></i></div>';
    } else {
      passwordInput.type = 'password';
      showHidePassword.innerHTML = '<div class="icon"><i class="fas fa-eye"></i></div>';
    }
  });
});
function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const eyeIcon = document.querySelector('.toggle-password i');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  }
}
let subMenu =document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}
