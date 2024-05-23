import heroImage from './assets/hero.svg'

function Hero() {
    return ( 
            <section className="hero">
            <div className="hero-center">
            <div className='hero-title'>
            <h1>Contentful</h1>
            <p className='hero-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum diam quis tristique dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a odio et orci lacinia posuere et a elit. Sed dapibus nunc sit amet tortor scelerisque venenatis. Aliquam laoreet ut tortor ut ornare. Duis eu libero scelerisque, lacinia sapien sed, feugiat odio. Phasellus eleifend odio sit amet consequat pretium. Nunc tempus libero arcu, euismod faucibus diam cursus vel. Sed in mi semper erat viverra sagittis. Praesent a orci a nisi pellentesque dignissim. Nunc interdum mattis nisl, eu sollicitudin quam eleifend a.

            Ut molestie venenatis sapien, ac imperdiet dolor tempor nec. Nullam sit amet condimentum metus, ac euismod libero. Phasellus vulputate dui eu justo tristique, sed molestie lacus dapibus. Aliquam erat volutpat. Duis tempus nibh in lacus pellentesque, at dignissim arcu laoreet. Vivamus porta fringilla metus. Fusce fermentum tellus eget mauris eleifend, ut consectetur ante sagittis.</p>
            </div>
            
            </div>
            <div className='img-container'>
            <img src={heroImage} alt="hero"></img>
            </div>
            </section> );
}

export default Hero;