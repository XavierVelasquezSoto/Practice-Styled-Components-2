import { CARD_INFO } from '../../constants/cardInfo';
import CardObjects from '../card-objects/Card-objects';
// import { StyledCardContainer } from './card-container.styles';

const CardContainer = () => {
	return (
		<>
			{CARD_INFO.map(cardInfo => {
				return (
					<CardObjects
						key={cardInfo.id}
						bodyColor={cardInfo.bodyColor}
						img={cardInfo.img}
						name={cardInfo.name}
						verify={cardInfo.verify}
						testimonyHighlights={cardInfo.testimonyHighlights}
						testimony={cardInfo.testimony}
					/>
				);
			})}
		</>
	);
};

export default CardContainer;
