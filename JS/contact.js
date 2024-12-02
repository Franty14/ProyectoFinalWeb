document.getElementById('birthdate').addEventListener('change', function () {
    const birthdate = new Date(this.value);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    // Llenar el campo oculto
    document.getElementById('age-hidden').value = age;

    // Llenar el campo visible
    document.getElementById('age-visible').value = age;
});
