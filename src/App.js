import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const start = new Date(2024, 6, 13, 0, 0);
    const [render, setRender] = useState({});
    const [state, setState] = useState(false);
    const text = [
        'Đi water bus',
        'Đi cf mèo',
        'Bông hoa xinh nhất',
        'Đi lắp hoa lego',
        'Đi net',
        'Trai đẹp',
        'Chuỗi 50!!!!',
        'Like',
        'Chu li bi',
        'Mua nước cho cả nhà',
        'Đi cà hê ghép lego',
        'Làm bánh',
        'Ăn cơm tấm đim',
        'Cf mèo',
        'Púng chả',
    ];
    let t = new Date() - start;
    let d = Math.floor(t / 1000 / 60 / 60 / 24);
    let h = Math.floor((t / 1000 / 60 / 60) % 24);
    if (h < 10) {
        h = '0' + h;
    }
    let m = Math.floor((t / 1000 / 60) % 60);
    if (m < 10) {
        m = '0' + m;
    }
    let s = Math.floor((t / 1000) % 60);
    if (s < 10) {
        s = '0' + s;
    }
    const handleClick = (e) => {
        const target = document.querySelector('.img-container');
        target.style.animation = 'rotate 35s linear infinite';
        const audio = document.querySelector('#audio');
        audio.play();
    };

    setInterval(() => {
        setRender(new Date());
    }, 1000);

    return (
        <div className="App">
            <audio id="audio" src="bentrai.mp3" autoPlay={false}></audio>
            <div className="main">
                <div className="content">
                    <div className="fire-text">
                        <span id="together">Kỉ niệm giữ chuỗi tóp tóp</span>
                    </div>
                    <div id="timer">
                        <span id="d">{d}</span> Days
                        <span id="h"> {h}</span> Hours
                        <span id="m"> {m}</span> Minutes
                        <span id="s"> {s}</span> Seconds
                    </div>
                </div>
                <div className="img-container">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item, index) => (
                        <div
                            className="img"
                            style={{ '--i': index + 1, height: '250px', width: '140.625px', overflow: 'hidden' }}
                            key={index}
                        >
                            <img style={{ height: '100%' }} src={`pic${index + 1}.jpg`} />

                            <div className="img-title">{text[index]}</div>
                        </div>
                    ))}
                </div>

                <img
                    src="fire.png"
                    style={{ height: '50px', width: '50px', marginTop: '470px', border: 0, padding: 0 }}
                    onClick={handleClick}
                />
            </div>
        </div>
    );
}

export default App;
