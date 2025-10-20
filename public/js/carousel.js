const galleryImageSources = [
    'assets/1.png', 'assets/2.png', 'assets/3.png', 'assets/4.png', 'assets/5.png', 'assets/6.png', 'assets/7.png',
    'assets/8.png', 'assets/9.png', 'assets/10.png', 'assets/11.png', 'assets/12.png', 'assets/13.png',
    'assets/14.png', 'assets/15.png', 'assets/16.png', 'assets/17.png', 'assets/18.png', 'assets/19.png', 'assets/20.png',
    'assets/21.png', 'assets/22.png', 'assets/23.png', 'assets/24.png', 'assets/25.png', 'assets/26.png', 'assets/27.png',
    'assets/28.png', 'assets/29.png', 'assets/30.png', 'assets/32.png'
];

const shuffleArray = (array) => array.sort(() => 0.5 - Math.random());
shuffleArray(galleryImageSources);

const mobileGalleryContainer = document.getElementById('mobile-gallery-container');
if (mobileGalleryContainer && window.innerWidth < 768) {
    const mobileImg = document.querySelector('#mobile-gallery-slide img');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const mobileGallerySlide = document.getElementById('mobile-gallery-slide');

    let currentIndex = 0;

    function showImage(index) {
        mobileImg.src = galleryImageSources[index];
    }

    function nextImage() {
        mobileGallerySlide.style.transition = 'transform 0.5s ease-in-out';
        mobileGallerySlide.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % galleryImageSources.length;
            showImage(currentIndex);
            mobileGallerySlide.style.transition = 'none';
            mobileGallerySlide.style.transform = 'translateX(100%)';
            setTimeout(() => {
                mobileGallerySlide.style.transition = 'transform 0.5s ease-in-out';
                mobileGallerySlide.style.transform = 'translateX(0)';
            }, 20);
        }, 500);
    }

    function prevImage() {
        mobileGallerySlide.style.transition = 'transform 0.5s ease-in-out';
        mobileGallerySlide.style.transform = 'translateX(100%)';
        setTimeout(() => {
            currentIndex = (currentIndex - 1 + galleryImageSources.length) % galleryImageSources.length;
            showImage(currentIndex);
            mobileGallerySlide.style.transition = 'none';
            mobileGallerySlide.style.transform = 'translateX(-100%)';
            setTimeout(() => {
                mobileGallerySlide.style.transition = 'transform 0.5s ease-in-out';
                mobileGallerySlide.style.transform = 'translateX(0)';
            }, 20);
        }, 500);
    }

    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);

    showImage(currentIndex);
} else if (mobileGalleryContainer) {
    mobileGalleryContainer.style.display = 'none';
}