function focused() {

    let fieldsList = Array.from(document.getElementsByTagName('input'));

    for (const field of fieldsList) {
        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', onBlur);
    }

    function onFocus(e) {
        let parentElement = e.currentTarget.parentNode;
        parentElement.classList.add('focused');
    }

    function onBlur(e) {
        let parentElement = e.currentTarget.parentNode;
        parentElement.classList.remove('focused');
    }
}