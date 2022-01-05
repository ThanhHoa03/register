function showPass() {
    var x = document.getElementById("myPass");
    var y = document.getElementById("switch-icon");
    if (x.type == "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    if (y.classList == "fas fa-eye-slash") {
        y.classList = "fas fa-eye";
    } else {
        y.classList = "fas fa-eye-slash";
    }
}