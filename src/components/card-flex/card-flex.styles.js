import styled from 'styled-components';

const StyledCardFlex = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (width > 1024px) {
		display: grid;
		grid-template-columns: repeat(4, 282px);
		grid-template-rows: repeat(3, 255px);
		gap: 60px 30px;
		/* height: 282px; */
		/* max-width: 1110px; */
		margin: auto;
		margin-top: 150px;
		margin-left: 150px;
	}
`;

export { StyledCardFlex };
