import styled from 'styled-components';

const StyledCardFlex = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (width > 1024px) {
		display: grid;
		grid-template-columns: repeat(3, 282px);
		gap: 24px 30px;
	}
`;

export { StyledCardFlex };
