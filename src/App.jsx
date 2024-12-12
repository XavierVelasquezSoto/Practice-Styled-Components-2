// import Button from './components/button/Button';
import CardContainer from './components/card-container/Card-Container';
import CardFlex from './components/card-flex/Card-flex';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<CardFlex>
				<CardContainer />
			</CardFlex>
		</>
	);
};

export default App;
