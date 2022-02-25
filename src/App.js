import logo from './logo.svg';
import './App.css';
import CartList from './components/CardList/CardList';
import Header from './components/Header/Header';
import cssImg from './img/css.jpg';
import htmlImg from './img/html.png';
import jsImg from './img/js.png';
import sassImg from './img/sass.png';
import reactImg from './img/react.png';
import nodeImg from './img/node.png';

const cartItems = [
	{ src: cssImg, back: true, front: false, match: false },
	{ src: htmlImg, back: true, front: false, match: false },
	{ src: jsImg, back: true, front: false, match: false },
	{ src: sassImg, back: true, front: false, match: false },
	{ src: reactImg, back: true, front: false, match: false },
	{ src: nodeImg, back: true, front: false, match: false },
];

function App() {
	return (
		<div className="App">
			<Header />
			<CartList />
		</div>
	);
}

export default App;
