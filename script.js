const Items = document.querySelectorAll(".item");

function onClick() {
    this.classList.toggle('open');
}

function onActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

Items.forEach(item => item.addEventListener('click', onClick));
Items.forEach(item => item.addEventListener('transitionend', onActive));