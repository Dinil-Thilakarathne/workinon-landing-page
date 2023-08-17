// import '../css/style.css';
import brands from './brands.js';
import features from './features.js';
import portfolios from './portfolios.js';
import testimonials from './testimonials.js';

// brands section 
const brandsWrapper = document.querySelector('.brands__wrapper');

brands.forEach((brand) => {
    const brandElement = document.createElement('div');
    brandElement.classList.add('swiper-slide');

    const brandImage = document.createElement('img');
    brandImage.setAttribute('src', brand.img);

    brandElement.appendChild(brandImage);
    brandsWrapper.appendChild(brandElement);
})

// testimonial section 
const testimonialWrapper = document.querySelector('.testimonial__wrapper');

testimonials.forEach((testimonial) => {
    const testimonialElement = document.createElement('div');
    testimonialElement.classList.add( 'testimonial-card','swiper-slide','rd-2');

    const testimonialImg = document.createElement('img');
    testimonialImg.setAttribute('src', testimonial.img);

    const testimonialContent = document.createElement('div');
    testimonialContent.classList.add('testimonial-card__content');

    const contentDescription = document.createElement('p');
    contentDescription.textContent = testimonial.description;

    const contentHeader = document.createElement('div');
    contentHeader.classList.add('content__header');

    const headerName = document.createElement('span');
    headerName.textContent = testimonial.name;

    const headerPosition = document.createElement('span');
    headerPosition.textContent = testimonial.position;

    contentHeader.appendChild(headerName)
    contentHeader.appendChild(headerPosition)

    testimonialContent.appendChild(contentDescription)
    testimonialContent.appendChild(contentHeader)

    testimonialElement.appendChild(testimonialImg)
    testimonialElement.appendChild(testimonialContent)

    testimonialWrapper.appendChild(testimonialElement)
})


// features section 
const featuresWrapper = document.querySelector('.features__wrapper');

features.forEach((feature) => {
    const featureElement = document.createElement('div');
    featureElement.classList.add('feature-card','rd-4');

    const featureImage = document.createElement('img');
    featureImage.setAttribute('src', feature.img);

    const featureHeader = document.createElement('h1');
    featureHeader.textContent = feature.header;
    featureHeader.classList.add('feature-card__header')
    
    const featureInfo = document.createElement('p');
    featureInfo.textContent = feature.description;
    featureInfo.classList.add('feature-card__info')

    featureElement.appendChild(featureImage)
    featureElement.appendChild(featureHeader)
    featureElement.appendChild(featureInfo)

    featuresWrapper.appendChild(featureElement)
})


// portfolio section 
const portfolioWrapper = document.querySelector('.portfolios__wrapper');

portfolios.forEach((portfolio) => {
    const portfolioElement = document.createElement('div');
    portfolioElement.classList.add('portfolio');

    const portfolioImage = document.createElement('img');
    portfolioImage.classList.add('portfolio__img');
    portfolioImage.setAttribute('src', portfolio.img);



    const portfolioContent = document.createElement('div');
    portfolioContent.classList.add('portfolio__content', 'pd-4');

    const contentHeader = document.createElement('h1');
    contentHeader.classList.add('content__header');
    contentHeader.textContent = portfolio.header;

    const contentDecription = document.createElement('p');
    contentDecription.classList.add('content__decription');
    contentDecription.textContent = portfolio.description;

    const contentTags = document.createElement('div');
    contentTags.classList.add('content__tags');

    portfolio.tags.forEach((tag) => {
        const contentTag = document.createElement('button');
        contentTag.classList.add('button', 'outline' , 'rd-4');
        contentTag.textContent = tag;
        contentTags.appendChild(contentTag);
    })

    const contentBtn = document.createElement('button');
    contentBtn.classList.add('button','primary','half', 'rd-5','content__btn');
    contentBtn.textContent = portfolio.btn;


    portfolioContent.appendChild(contentHeader)
    portfolioContent.appendChild(contentDecription)
    portfolioContent.appendChild(contentTags)
    portfolioContent.appendChild(contentBtn)

    portfolioElement.appendChild(portfolioImage);
    portfolioElement.appendChild(portfolioContent);

    portfolioWrapper.appendChild(portfolioElement);

})