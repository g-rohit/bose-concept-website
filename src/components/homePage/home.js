import headphones from '../../images/red-headphones.png';
import './home.css';


function Home() {
    return(
        <main>
            <section>
                <h3>THE HOLIDAYS SHINE WITH BOSE SOUND.</h3>
                <img src={headphones}  alt="bose-headphones" className="homeHeadphones" />

                <div className="content">
                    <h1>DISCOVER GREAT GIFT IDEAS.</h1>
                    <a href="#" className='btn-1'>Learn more</a>
                </div>
            </section>
        </main>
    )
}

export default Home;