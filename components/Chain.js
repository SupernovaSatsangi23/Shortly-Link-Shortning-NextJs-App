import Card from './Card.js'

import { css } from '@emotion/css'
import styled from 'styled-components'


const Chain = () => {
	return (
		<section className={css`
			width: 100vw;
			height: auto;
			padding-left: 2em;
			padding-right: 2em;
			margin-top: 6%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			position: relative;

			@media (max-width: 375px) {
				flex-direction: column;
			}
			// outline: 2px solid black;`}>
			<div className={css`
				position: absolute;
				top: 45%;
				left: 20%;
				width: 60vw;
				height: 2vh;
				background-color: #2acfcf;

				@media (max-width: 375px) {
					width: 2vw;
					height: 60vh;
					top: 15%;
					left: 49%;
				}
				// outline: 2px solid red;`}></div>
			<Card />
			<Card />
			<Card />
		</section>
	);
};

export default Chain;