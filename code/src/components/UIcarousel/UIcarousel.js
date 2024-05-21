import './style.css';
import React, { useEffect } from 'react';

const element = [
    { 'id': 1 },
    { 'id': 2 },
    { 'id': 3 },
    { 'id': 4 },
    { 'id': 5 },
    { 'id': 6 },
    { 'id': 7 },
    { 'id': 8 },
    { 'id': 9 }
]

function CarouselItem({ children }) {

    useEffect(() => {
        const sliderItem = document.querySelectorAll(".slideshow__item");

        for (let i = 0; i < 3; i++) {
            sliderItem[i].classList.add("current");
        }
        for (let i = 3; i < sliderItem.length; i++) {
            sliderItem[i].classList.add("next");
        }
    }, [])

    return (
        <article className="slideshow__item">{children}</article>
    )
}




export default function UICarousel({ props }) {


    return (
        <section className="slideshow" {...props}>
            {
                element.map(el => (
                    <CarouselItem key={el.id}>{el.id}</CarouselItem>
                ))
            }
        </section>
    )
}
