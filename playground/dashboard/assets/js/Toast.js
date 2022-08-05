// export const toast = () => {
//     var option = {
//         Animation: true,
//         delay: 2000
//     };
    
//     document.getElementById("toastbtn").onclick = function() {
//         var toastElList = [].slice.call(document.querySelectorAll('.toast'))
//         var toastList = toastElList.map(function(toastEl) {
//           return new bootstrap.Toast(toastEl)
//         })
//         toastList.forEach(toast => toast.show()) 
//       }
// }

var option = {
    Animation: true,
    delay: 2000
};

function Toasty( )
{
    var toastHTMLElement = document.getElementById("mytoast");
    var toastElement = new bootstrap.Toast( toastHTMLElement, option);
    toastElement.show();
}

var popoverTriggerList = [].slice.call( document.querySelectorAll ( '[data-toggle="popover"]'));
var popoverList = popoverTriggerList.map( function( popoverTigger)
{
    return new bootstrap.Popover( popoverTigger );
});

// document.getElementById("toastbtn").onclick = function() {
//     var toastElList = [].slice.call(document.querySelectorAll('.toast'))
//     var toastList = toastElList.map(function(toastEl) {
//       return new bootstrap.Toast(toastEl)
//     })
//     toastList.forEach(toast => toast.show()) 
//   }