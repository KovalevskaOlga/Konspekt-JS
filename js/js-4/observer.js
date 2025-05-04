const elem = document.querySelectorAll('.img-fruit');
console.log(elem)

const options = {}

const animationObserver = () => {

};

const observer = new IntersectionObserver(animationObserver, options);


elem.forEach((image) => {
    observer.observe()
});