/* Validation Form */
function validateForm() {
    /*Mengambil Nilai*/
    var name = document.forms ["costumer-form"] ["full-name"].value;
    var email = document.forms ["costumer-form"] ["email"].value;
    var destination = document.forms ["costumer-form"] ["destination"].value;
    console.log({ name, email, destination });
    /*Validasi Form*/
    if ( name =="" || email =="" || destination =="" || destination =="Select Your Destination") {
        alert ("Input tidak boleh kosong");
        return false;
    }
}