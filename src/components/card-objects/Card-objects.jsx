import {
	StyledCardObjects,
	StyledDivFlexImg,
	StyledImg,
	StyleFlexTextName,
	StyleFlexTextVerify,
	StyledTestimonyHighlights,
	StyledTestimony
} from './card-objects.styles';
// console.log(StyledCardObjects);

const CardObjects = ({
	marginTopDesktop,
	marginTopMobile,
	heightCard,
	colorText,
	bgColor,
	img,
	name,
	verify,
	testimonyHighlights,
	testimony
}) => {
	// console.log(colorText);
	return (
		<StyledCardObjects $bgColor={bgColor} $heightCard={heightCard}>
			<StyledDivFlexImg>
				<StyledImg src={img} alt='' />
				<div>
					<StyleFlexTextName $colorText={colorText}>{name}</StyleFlexTextName>
					<StyleFlexTextVerify $colorText={colorText}>
						{verify}
					</StyleFlexTextVerify>
				</div>
			</StyledDivFlexImg>
			<StyledTestimonyHighlights $colorText={colorText}>
				{testimonyHighlights}
			</StyledTestimonyHighlights>
			<StyledTestimony
				$colorText={colorText}
				$marginTopMobile={marginTopMobile}
				$marginTopDesktop={marginTopDesktop}
			>
				{testimony}
			</StyledTestimony>
		</StyledCardObjects>
	);
};

export default CardObjects;
