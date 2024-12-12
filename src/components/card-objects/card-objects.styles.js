import styled from 'styled-components';

const StyledCardObjects = styled.div`
	background-color: ${props => {
		if (props.$bodyColor === 'daniel') return '#733FC8';
		if (props.$bodyColor === 'jonathan') return '#48556A';
		if (props.$bodyColor === 'jeanette') return '#fff';
		if (props.$bodyColor === 'patrick') return '#19202D';
		if (props.$bodyColor === 'kira') return '#fff';
	}};
	height: ${props => {
		if (props.$bodyColor === 'daniel') return '444px';
		if (props.$bodyColor === 'jonathan') return '240px';
		if (props.$bodyColor === 'jeanette') return '222px';
		if (props.$bodyColor === 'patrick') return '384px';
		if (props.$bodyColor === 'kira') return '438px';
	}};
	padding: 26px 32px 32px 32px;
	margin-bottom: 24px;
	border-radius: 10px;
`;

/* const StyledDivImg = styled.img`
	position: relative;
	left: 205px;
	top: -26px;
`; */

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
	color: #fff;
	margin: 0;
	line-height: var(--line-height-l);
	padding-bottom: 4px;
`;

const StyleFlexTextVerify = styled.p`
	font-size: var(--line-height-m);
	font-weight: var(--font-weight-medium);
	color: #fff;
	margin: 0;
	opacity: 0.5;
	line-height: var(--line-height-m);
`;

const StyledTestimonyHighlights = styled.h2`
	margin: 0;
	color: ${props => {
		if (props.$bodyColor === 'daniel') return '#fff';
		if (props.$bodyColor === 'jonathan') return '#fff';
		if (props.$bodyColor === 'jeanette') return '#48556A';
		if (props.$bodyColor === 'patrick') return '#fff';
		if (props.$bodyColor === 'kira') return '#48556A';
	}};
	font-weight: var(--font-weight-semibold);
	font-size: var(--font-size-xl);
	line-height: var(--line-height-auto);
	padding-top: 18px;
`;

const StyledTestimony = styled.p`
	margin: 0;
	color: ${props => {
		if (props.$bodyColor === 'daniel') return '#fff';
		if (props.$bodyColor === 'jonathan') return '#fff';
		if (props.$bodyColor === 'jeanette') return '#48556A';
		if (props.$bodyColor === 'patrick') return '#fff';
		if (props.$bodyColor === 'kira') return '#48556A';
	}};
	opacity: 0.7;
	padding-top: ${props => {
		if (props.$bodyColor === 'daniel') return '40px';
		if (props.$bodyColor === 'jonathan') return '16px';
		if (props.$bodyColor === 'jeanette') return '16px';
		if (props.$bodyColor === 'patrick') return '16px';
		if (props.$bodyColor === 'kira') return '16px';
	}};
`;
// 16 16 16 16
export {
	StyledCardObjects,
	// StyledDivImg,
	StyledDivFlexImg,
	StyledImg,
	StyleFlexTextName,
	StyleFlexTextVerify,
	StyledTestimonyHighlights,
	StyledTestimony
};
