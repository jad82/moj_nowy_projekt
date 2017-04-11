var x = prompt('Określ wysokość drzewka');
function drawTree(x) {
 for (var i = 0; i <= x - 1; i++) {
   var star = '';    
   for (var j = 0; j <= i; j++) {
     star += ' *';
   }
   console.log(star);
 }
}
drawTree(x);