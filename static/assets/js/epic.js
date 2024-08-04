document.addEventListener('DOMContentLoaded', function () {
    const iframe = document.querySelector('iframe');
    const removeButton = document.getElementById('removeButton');
    const fixedNavBar = document.querySelector('.fixed-nav-bar');
    const particlesJs = document.getElementById('particles-js');

    removeButton.addEventListener('click', function () {
        iframe.parentNode.removeChild(iframe);
        removeButton.parentNode.removeChild(removeButton);

        fixedNavBar.style.display = 'inline';
        particlesJs.style.display = 'block';
    });
});