import { useState, useEffect } from 'react';
import CopyToClipboard from "react-copy-to-clipboard"

import { css } from '@emotion/css'
import styled from 'styled-components'

const Wrapper = styled.div`
	overflow: hidden;
	margin-top: 3%;
	border-radius: 6px;
	width: 67em;
	height: 4em;
	padding-left: 2em;
	padding-right: 1em;
	background-color: white;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	font-size: 0.9em;

	@media (max-width: 375px) {
		flex-direction: column;
		width: 20em;
		height: auto;
		margin-top: 5%;
		align-items: flex-start;
		padding-left: 1em;
		padding-right: 1em;
	}`;


const ListUrl = props => {
	const [bgColor, setBgColor] = useState('#2acfcf');
	const [text, setText] = useState('Copy');

	useEffect(() => {
		const timer = setTimeout(() => {
			setBgColor('#2acfcf');
			setText('Copy');
		}, 2000);

		return () => clearTimeout(timer);
	}, [bgColor, text]);

	return (
		<div className={css`
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;`}>
			<Wrapper>
				<p className={css`
					color: black;
					font-family: 'Poppins', sans-serif;
					width: 60%;
					height: auto;
					overflow: hidden;
					hr {
						display: none;
					}
					@media (max-width: 375px) {
						width: 100%;
						hr {
							display: block;
							width: 100%;
						}
					}`}>{props.pair[0]} <hr /></p>

				<p className={css`
					color: #2acfcf;
					font-family: 'Poppins', sans-serif;
					margin: 0 1em 0 1em;
					@media (max-width: 375px) {
						width: 100%;
						margin: -5% 0 0 0;
					}`}>{props.pair[1]}
					
					<CopyToClipboard text={props.pair[1]} onCopy={() => {
						setBgColor('#3b3054');
						setText('Copied!')}}>
						<button className={css`
							width: 6em;
							height: 2.5em;
							background-color: ${bgColor};
							border: 0;
							border-radius: 6px;
							color: white;
							font-family: 'Poppins', sans-serif;
							font-weight: bold;
							cursor: pointer;
							margin-left: 1.5em;
							@media (max-width: 375px) {
								width: 100%;
								margin: 3% 0 3% 0;
							}`}>{text}</button>
						</CopyToClipboard>
				</p>
			</Wrapper>
		</div>
	);
};

export default ListUrl;