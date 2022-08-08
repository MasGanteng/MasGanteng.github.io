<script src="dist/sweetalert.all.min.js"></script>
export const sweet = () => {
const btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    Swal.fire('Any fool can use a computer')
});
};