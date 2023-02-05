const clickBars = () => {
    icon.classList.toggle('fa-close');
    list.classList.toggle('ml-250');
}
let links = document.querySelectorAll('.mobile-nav');
let linksArr = Array.from(links);

linksArr.forEach((button) => {
    button.addEventListener('click', () => {
        list.classList.toggle('ml-250');
        icon.classList.toggle('fa-close');
    })
})