import "./footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/AnGeLiTa.ARU/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://twitter.com/GlatoRU'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.instagram.com/angie.aru/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por GELATO Angela Rosales</strong>
    </footer>
}

export default Footer