import BGImage from './BGImage'

import { css } from '@emotion/css'
import styled from 'styled-components'

const Wrapper = styled.div`
	margin-top: 10%;
	position: relative;
	width: 100vw;
	height: 30vh;
	// outline: 2px solid red`;

const GetStarted = () => {
	return (
		<Wrapper>
			<BGImage />
			<div className={css`
				position: absolute;
				top: 11%;
				left: 35%;
				right: auto;
				text-align: center;

				@media (max-width: 375px) {
					top: 20%;
					left: 5%;
				}`}>
				
				<h1 className={css`
					color: white;
					font-family: 'Poppins', sans-serif;
	                font-weight: bold;
					text-align: center;

					@media (max-width: 375px) {
						font-size: 1.4em;
						text-transform: uppercase;
					}`}>Boost your links today</h1>

				<button className={css`
					width: 10em;
					height: 3em;
					background-color: #2acfcf;
					border-top-left-radius: 50px;
					border-bottom-left-radius: 50px;
					border-top-right-radius: 50px;
					border-bottom-right-radius: 50px;
					color: white;
					font-family: 'Poppins', sans-serif;
	                font-weight: bold;
					text-align: center;
					font-size: 1.2em;
					cursor: pointer;
					border: 0;

					@media (max-width: 375px) {
						width: 9em;
						height: 2.5em;
					}`}>Get Started</button>
			</div>
		</Wrapper>
	);
};

export default GetStarted;