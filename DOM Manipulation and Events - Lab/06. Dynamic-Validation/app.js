function validate() {
    document.getElementById('email').addEventListener('change', onChange);

    function onChange(e) {
        const element = e.currentTarget;
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (!pattern.test(element.value)) {
            element.classList.add('error');
        } else {
            element.classList.remove('error');
        }
    }
}