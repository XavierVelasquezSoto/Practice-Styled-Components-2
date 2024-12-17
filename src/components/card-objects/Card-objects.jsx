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
	paddingContainerDesktop,
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
			$paddingContainerDesktop={paddingContainerDesktop}
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

// Object-Products.jsx
// const ObjectProducts = ({ images, product }) => {
// 	return (
// 		<StyledDivProduct>
// 			<StyledImg src={images.mobile} />
// 			<StyledText>{product}</StyledText>
// 		</StyledDivProduct>
// 	);
// };

// export default ObjectProducts;

// object-products.styles.js------
// import styled from 'styled-components';
// import { COLORS } from '../../styles/colors';

// const StyledDivProduct = styled.div`
// 	padding: 26px 24px 24px;
// `;

// const StyledImg = styled.img`
// 	border: 1px solid ${COLORS.red};
// `;

// const StyledText = styled.p`
// 	color: red;
// `;

// export { StyledDivProduct, StyledImg, StyledText };
