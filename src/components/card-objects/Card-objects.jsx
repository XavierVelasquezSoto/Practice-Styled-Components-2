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
	gridRow,
	gridColumn,
	marginBottomDesktop,
	marginBottomMobile,
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
		<StyledCardObjects
			$bgColor={bgColor}
			$heightCard={heightCard}
			$gridColumn={gridColumn}
			$gridRow={gridRow}
		>
			<StyledDivFlexImg>
				<StyledImg src={img} alt='' />
				<div>
					<StyleFlexTextName $colorText={colorText}>{name}</StyleFlexTextName>
					<StyleFlexTextVerify $colorText={colorText}>
						{verify}
					</StyleFlexTextVerify>
				</div>
			</StyledDivFlexImg>
			<StyledTestimonyHighlights
				$colorText={colorText}
				$marginBottomMobile={marginBottomMobile}
				$marginBottomDesktop={marginBottomDesktop}
			>
				{testimonyHighlights}
			</StyledTestimonyHighlights>
			<StyledTestimony $colorText={colorText}>{testimony}</StyledTestimony>
		</StyledCardObjects>
	);
};

export default CardObjects;
