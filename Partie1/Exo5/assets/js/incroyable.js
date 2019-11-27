 var validation = document.getElementById('button');
 validation.addEventListener('click', Incredible);
function Incredible() {
    var firstnumber = document.getElementById('firstnumber').value;
    var secondnumber = document.getElementById('secondnumber').value;                                                                                           
    var result = (firstnumber % secondnumber);
    alert(result);
}