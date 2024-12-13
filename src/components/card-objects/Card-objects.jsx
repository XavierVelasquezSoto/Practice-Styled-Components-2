import {
	StyledCardObjects,
	// StyledDivImg,
	StyledDivFlexImg,
	StyledImg,
	StyleFlexTextName,
	StyleFlexTextVerify,
	StyledTestimonyHighlights,
	StyledTestimony
} from './card-objects.styles';
// console.log(StyledCardObjects);

const CardObjects = ({
	bodyColor,
	img,
	name,
	verify,
	testimonyHighlights,
	testimony
}) => {
	return (
		<StyledCardObjects $bodyColor={bodyColor}>
			<StyledDivFlexImg>
				<StyledImg src={img} alt='' />
				<div>
					<StyleFlexTextName $bodyColor={bodyColor}>{name}</StyleFlexTextName>
					<StyleFlexTextVerify $bodyColor={bodyColor}>
						{verify}
					</StyleFlexTextVerify>
				</div>
			</StyledDivFlexImg>
			<StyledTestimonyHighlights $bodyColor={bodyColor}>
				{testimonyHighlights}
			</StyledTestimonyHighlights>
			<StyledTestimony $bodyColor={bodyColor}>{testimony}</StyledTestimony>
		</StyledCardObjects>
	);
};

export default CardObjects;
