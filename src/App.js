import logo from './logo.svg';
import Slider from "./components/Slider";

function App() {

    const images = [
        'img/slide-1.png',
        'img/slide-2.png',
        'img/slide-3.png',
        'img/slide-4.png',
       ]

    return (
        <div className="App">
            <div className="container">
                <div className="lineMenu">
                    <div className="burgerMenu">
                        <div className="burgerMenuLine"/>
                        <div className="burgerMenuLine"/>
                        <div className="burgerMenuLine"/>
                    </div>
                    <div className="lineMenuLanguage">
                        Eng
                    </div>
                </div>
                <div className="mainPart">
                    <div className="mainPartUp">
                        <div className="mainPartUpTitle">Need for drive</div>
                        <div className="mainPartUpLocation"><img src="/img/location.png" alt=""/> Ульяновск</div>
                    </div>
                    <div className="mainPartMiddle">
                        <div className="mainPartMiddleTitle">Каршеринг</div>
                        <div className="mainPartMiddleSubtitle">Need for drive</div>
                        <div className="mainPartMiddleSubtitle2">Поминутная аренда авто твоего города</div>
                        <div className="mainPartMiddleButton">
                            <button className="buttonBook">Забронировать</button>
                        </div>
                    </div>
                    <div className="mainPartFooter">
                        <div className="mainPartYear">© 2016-2019 «Need for drive»</div>
                        <div className="mainPartPhone">8 (495) 234-22-44</div>
                    </div>
                </div>
                <div className="sliderPart">
                    <Slider slides={images}/>
                </div>
            </div>
        </div>
    );
}

export default App;
