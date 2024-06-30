document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeOptions = document.querySelectorAll('.theme-option');
    let currentTheme = localStorage.getItem('theme') || 'light';
    let isSwapped = false;

    themeOptions.forEach(option => {
        option.addEventListener('click', function () {
            const newTheme = this.getAttribute('data-theme');

            if (newTheme === currentTheme) {
                // If clicking the same theme, swap colors
                isSwapped = !isSwapped;
                document.body.classList.toggle('swapped-theme', isSwapped);
                this.querySelector('.color-box').classList.toggle('swapped', isSwapped);
            } else {
                // If selecting a new theme, reset swap state
                isSwapped = false;
                document.body.classList.remove('swapped-theme');
                themeOptions.forEach(opt => opt.querySelector('.color-box').classList.remove('swapped'));
            }

            setTheme(newTheme);
            currentTheme = newTheme;
        });
    });

    function setTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeToggleButton();
    }

    // Check for saved theme preference or use default
    setTheme(currentTheme);

    function updateThemeToggleButton() {
        const computedStyle = getComputedStyle(document.body);
        const bgColor = isSwapped ? computedStyle.getPropertyValue('--text-color') : computedStyle.getPropertyValue('--background-color');
        const textColor = isSwapped ? computedStyle.getPropertyValue('--background-color') : computedStyle.getPropertyValue('--text-color');

        themeToggle.style.backgroundColor = bgColor;
        themeToggle.style.color = textColor;
    }
});
