function lockedProfile() {
    let buttons = Array.from(document.getElementsByTagName('button'));

    buttons.forEach((button) => {
        button.addEventListener('click', showHiddenInfo);
    });

    function showHiddenInfo(e) {
        let btn = e.currentTarget;
        let profile = btn.parentElement;
        let profileChildren = Array.from(profile.children);

        let unlock = profileChildren[4];
        let hiddenInfo = profileChildren[9];

        if (!unlock.checked) {
            return;
        }

        if (btn.textContent === 'Show more') {
            hiddenInfo.style.display = 'block';
            btn.textContent = 'Hide it';
        } else if (btn.textContent = 'Hide it') {
            hiddenInfo.style.display = 'none';
            btn.textContent = 'Show more';
        }
    }
}