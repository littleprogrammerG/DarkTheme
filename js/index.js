const TOGGLETHEME = document.querySelector('.container input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('theme', 'dark');
    } else {
        document.documentElement.setAttribute('theme', 'light');
    }
}

TOGGLETHEME.addEventListener('change', switchTheme, false);