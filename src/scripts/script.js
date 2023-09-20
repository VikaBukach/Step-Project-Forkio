/**
 * Header
 */
document.querySelector('.burger').onclick = function (event) {
    document.querySelector('.burger').classList.toggle('show')
    document.querySelector('.nav__list').classList.toggle('show')
}