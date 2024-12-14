import styled from 'styled-components';

const StyledCardFlex = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (width > 1024px) {
		display: grid;
		grid-template-columns: repeat(4, 255px);
		grid-template-rows: 282px, 282px, 266px, 266px, 572px;
		align-items: start;
		gap: 24px 30px;
		margin: auto;
		margin-top: 150px;
		margin-left: 150px;
	}
`;

export { StyledCardFlex };
