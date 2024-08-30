window.onload = function () {
    let loader = document.getElementById('loading');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);
}