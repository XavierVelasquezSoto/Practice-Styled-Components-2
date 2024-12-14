import styled from 'styled-components';

const StyledCardObjects = styled.div`
	background-color: ${props => props.$bgColor};
	height: ${props => props.$heightCard};
	padding: 26px 32px 32px 32px;
	margin-bottom: 24px;
	border-radius: 10px;

	&:nth-child(1) {
		background-image: url(assets/images/bg-pattern-quotation.svg);
		background-repeat: no-repeat;
		background-position: 250px top;
	}

	@media screen and (width > 1024px) {
		height: ${props => {
			if (props.$bgColor === 'daniel') return '282px';
			if (props.$bgColor === 'jonathan') return '282px';
			if (props.$bgColor === 'jeanette') return '255px';
			if (props.$bgColor === 'patrick') return '255px';
			if (props.$bgColor === 'kira') return '572px';
		}};
		grid-column: ${props => {
			if (props.$bgColor === 'daniel') return '1/3';
			if (props.$bgColor === 'jonathan') return '3/4';
			if (props.$bgColor === 'jeanette') return '1/2';
			if (props.$bgColor === 'patrick') return '2/4';
			if (props.$bgColor === 'kira') return '4/5';
		}};
		grid-row: ${props => {
			if (props.$bgColor === 'daniel') return '1/3';
			if (props.$bgColor === 'jonathan') return '1/3';
			if (props.$bgColor === 'jeanette') return '2/2';
			if (props.$bgColor === 'patrick') return '2/3';
			if (props.$bgColor === 'kira') return '1/2';
		}};

		margin-bottom: 0;
		box-shadow: rgb(207, 207, 207, 0.5) 0 0px 20px 10px;
		&:nth-child(1) {
			background-image: url(assets/images/bg-pattern-quotation.svg);
			background-repeat: no-repeat;
			background-position: 150px top;
		}
	}
`;

const StyledDivFlexImg = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const StyledImg = styled.img`
	height: 28px;
	border-radius: 50px;
	margin-right: 17px;
`;

const StyleFlexTextName = styled.p`
	font-size: var(--line-height-l);
	font-weight: var(--font-weight-medium);
	color: ${props => props.$colorText};
	margin: 0;
	line-height: var(--line-height-l);
	padding-bottom: 4px;
`;

const StyleFlexTextVerify = styled.p`
	font-size: var(--line-height-m);
	font-weight: var(--font-weight-medium);
	color: ${props => props.$colorText};
	margin: 0;
	opacity: 0.5;
	line-height: var(--line-height-m);
`;

const StyledTestimonyHighlights = styled.h2`
	margin: 0;
	color: ${props => props.$colorText};
	font-weight: var(--font-weight-semibold);
	font-size: 20px;
	line-height: var(--line-height-auto);
	padding-top: 18px;
`;

const StyledTestimony = styled.p`
	margin: 0;
	font-size: 13px;
	color: ${props => props.$colorText};
	opacity: 0.7;
	margin-top: ${props => props.$marginTopMobile};

	@media screen and (width > 1024px) {
		margin-top: ${props => props.$marginTopDesktop};
	}
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
