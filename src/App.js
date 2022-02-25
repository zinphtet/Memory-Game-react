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
import { useState } from 'react';
const cartItems = [
	{ src: cssImg, back: true, front: false, match: false },
	{
		src: htmlImg,
		back: true,
		front: false,
		match: false,
		alt: 'html img',
	},
	{ src: jsImg, back: true, front: false, match: false, alt: 'js img' },
	{
		src: sassImg,
		back: true,
		front: false,
		match: false,
		alt: 'sass img',
	},
	{
		src: reactImg,
		back: true,
		front: false,
		match: false,
		alt: 'react img',
	},
	{
		src: nodeImg,
		back: true,
		front: false,
		match: false,
		alt: 'node img',
	},
];

const allItems = [...cartItems, ...cartItems]
	.sort(() => Math.random() - 0.5)
	.map((item) => ({ ...item, id: Math.random() }));

function App() {
	const [allCards, setallCards] = useState(allItems);

	const suffleCards = () => {
		setallCards(
			[...cartItems, ...cartItems]
				.sort(() => Math.random() - 0.5)
				.map((item) => ({ ...item, id: Math.random() }))
		);
	};

	console.log(allCards);
	return (
		<div className="App">
			<Header suffleClick={suffleCards} />
			<CartList cards={allCards} />
		</div>
	);
}

export default App;
