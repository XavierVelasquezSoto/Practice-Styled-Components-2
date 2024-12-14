import styled from 'styled-components';

const StyledCardObjects = styled.div`
	background-color: ${props => props.$bgColor};
	/* height: ${props => props.$heightCard}; */
	padding: 26px 32px 32px 32px;
	margin-bottom: 24px;
	border-radius: 10px;

	&:nth-child(1) {
		background-image: url(assets/images/bg-pattern-quotation.svg);
		background-repeat: no-repeat;
		background-position: 250px top;
	}

	@media screen and (width > 1024px) {
		grid-column: ${props => props.$gridColumn};
		grid-row: ${props => props.$gridRow};
		padding: 26px 32px 32px 32px;
		margin-bottom: 0;
		box-shadow: rgb(207, 207, 207, 0.5) 0 0px 20px 10px;
		&:nth-child(1) {
			background-image: url(assets/images/bg-pattern-quotation.svg);
			background-repeat: no-repeat;
			background-position: 400px top;
		}
	}
`;

const StyledDivFlexImg = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 18px;
`;

const StyledImg = styled.img`
	height: 28px;
	border-radius: 50px;
	margin-right: 17px;
`;

const StyleFlexTextName = styled.p`
	font-size: 13px;
	font-weight: 500;
	color: ${props => props.$colorText};
	margin: 0;
	line-height: 13px;
	padding-bottom: 4px;
`;

const StyleFlexTextVerify = styled.p`
	font-size: 11px;
	font-weight: 500;
	color: ${props => props.$colorText};
	margin: 0;
	opacity: 0.5;
	line-height: 13px;
`;

const StyledTestimonyHighlights = styled.h2`
	margin: 0;
	color: ${props => props.$colorText};
	font-weight: 600;
	font-size: 20px;
	line-height: var(--line-height-auto);
	margin-bottom: 16px;
	line-height: auto;
	margin-bottom: ${props => props.$marginBottomMobile};
	@media screen and (width > 1024px) {
		margin-bottom: ${props => props.$marginBottomDesktop};
	}
`;

const StyledTestimony = styled.p`
	margin: 0;
	font-size: 13px;
	line-height: 18px;
	font-weight: 500;
	color: ${props => props.$colorText};
	opacity: 0.7;
`;

export {
	StyledCardObjects,
	StyledDivFlexImg,
	StyledImg,
	StyleFlexTextName,
	StyleFlexTextVerify,
	StyledTestimonyHighlights,
	StyledTestimony
};
