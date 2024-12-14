import { CARD_INFO } from '../../constants/cardInfo';
import CardObjects from '../card-objects/Card-objects';

const CardContainer = () => {
	return (
		<>
			{CARD_INFO.map(cardInfo => {
				// console.log(cardInfo);
				return (
					<CardObjects
						key={cardInfo.id}
						marginTopDesktop={cardInfo.marginTopDesktop}
						marginTopMobile={cardInfo.marginTopMobile}
						colorText={cardInfo.colorText}
						bgColor={cardInfo.bgColor}
						heightCard={cardInfo.heightCard}
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
