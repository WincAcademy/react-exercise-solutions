import './App.css';

const Button = () => {
	return (
		<button>Press me!</button>
	);
};

export const App = () => {
	const hello = "Hello Wincer!";

	return (
		<main>
			<h1>{hello}</h1>
			<Button />
		</main>
	);
};