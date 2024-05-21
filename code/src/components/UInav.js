function handleNext() {
    const currentEl = document.querySelectorAll(".slideshow__item.current");
    const nextEl = document.querySelectorAll(".slideshow__item.next");

    if (!nextEl.length) return

    if (nextEl.length > 0 && currentEl.length > 0) {
        for (var i = 0; i < 3; i++) {
            nextEl[i].classList.remove("next");
            nextEl[i].classList.add("current");
            currentEl[i].classList.remove("current")
            currentEl[i].classList.add("prev")
        }
    }
}
function handlePrev() {
    const currentEl = document.querySelectorAll(".slideshow__item.current");
    const prevEl = document.querySelectorAll(".slideshow__item.prev");

    if (!prevEl.length) return

    if (prevEl.length > 0 && currentEl.length > 0) {
        for (var i = prevEl.length; i > (prevEl.length - 3); i--) {
            prevEl[i - 1].classList.remove("prev");
            prevEl[i - 1].classList.add("current");
        };
        for (var j = 0; j < 3; j++) {
            currentEl[j].classList.remove("current")
            currentEl[j].classList.add("next")
        }
    }
}

export default function UInav() {

    return (
        <nav>
            <button className="prev" onClick={handlePrev}>
                &#8592;
            </button>
            <button className="next" onClick={handleNext}>
                &#8594;
            </button>
        </nav>
    )
}