import Icon from './icon-brand-recognition.svg'

import { css } from '@emotion/css'
import styled from 'styled-components'

const Box = styled.div`
	width: 22em;
	height: auto;
	padding: 1.5em;
	background: white;
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-around;
	position: relative;

	@media (max-width: 375px) {
		width: 18em;
		margin-bottom: 30%;
		align-items: center;
		justify-content: space-between;
		padding: 1.3em;
	}
	// outline: 2px solid red;`;

const Card = () => {
	return (
		<Box>

			<div className={css`
				position: absolute;
				top: -15%;
				width: auto;
				height: auto;
				padding: 1.5em;
				border-radius: 50%;
				background-color: #35323e;
				display: flex;
				justify-content: center;
				align-items: center;`}>
				<Icon />
			</div>


			<h2 className={css`
				margin-top: 15%;
				color: #35323e;
                font-family: 'Poppins', sans-serif;
                font-weight: bold;

                @media (max-width: 375px) {
                	font-size: 1.2em;
                	text-align: center;
                }`}>Brand Recognition</h2>

			<p className={css`
				margin-top: -2%;
				color: #8e8f91;
                font-family: 'Poppins', sans-serif;

                @media (max-width: 375px) {
                	font-size: 0.9em;
                	text-align: center;
                }`}>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>

		</Box>
	);
};

export default Card;