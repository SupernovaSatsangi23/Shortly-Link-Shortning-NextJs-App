import { useState, useEffect, useRef } from 'react';
import BGImage from './BGImage'
import ListUrl from './ListUrl'

import { css } from '@emotion/css'
import styled from 'styled-components'

const Wrapper = styled.div`
	position: relative;
	width: 65em;
	height: 10em;
	margin-top: -5%;

	@media (max-width: 375px) {
		width: 18em;
		height: 11em;
		margin-top: -20%;
	}
	outline: 2px solid green`;

const shortenedURLs = [];

const ShrinkForm = () => {
	const inputUrl = useRef();

	console.log(inputUrl);

	const [originalLink, setOriginalLink] = useState('');
	const [shortLink, setShortLink] = useState('');

	console.log(originalLink, shortLink);

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	console.log(isLoading, isError);
	console.log(shortenedURLs);

	const submitHandler = event => {
		event.preventDefault();

		if (inputUrl.current.value === '' || inputUrl.current.value === undefined|| inputUrl.current.value === null) {
			console.log(1);
			setIsError(true);
			return;
		} else {
			console.log(2);
			console.log('ref ' + inputUrl.current.value);
			setIsError(false);
			setOriginalLink(inputUrl.current.value);
		}
	};

	const fetchShortLink = async () => {
		setIsLoading(true);
		setIsError(null);
		fetch(`https://api.shrtco.de/v2/shorten?url=${originalLink}`).then(res => {
			return res.json();
		}).then(data => {
			// console.log('response returned...');
			setShortLink(data.result.full_short_link);			
			console.log(3);
		}).catch(error => {
			console.log(error.message);
			setIsError(true);
			setOriginalLink('');
		});

		if (shortLink !== '') {
			if (!shortenedURLs.includes(originalLink)) {
				console.log('short link: ' + shortLink);
				shortenedURLs.push([`${originalLink}`, `${shortLink}`]);
				console.log(shortenedURLs);
				console.log(4);
			}
		}

		setIsLoading(false);
		inputUrl.current.value = '';
	};

	useEffect(() => {
		if (originalLink !== '') {
			fetchShortLink();
		}

		console.log(5);
		
	}, [originalLink]);

	return (
		<Wrapper>
			<BGImage />
			<form 
			className={css`
				z-index: 5;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				position: absolute;
				top: 20%;
				right: auto;
				bottom: auto;
				left: 5%;

				@media (max-width: 375px) {
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
				// outline: 2px solid red;`}>
				<input
					type="text"
					ref={inputUrl}
					placeholder="Shorten a link here..."
					className={css`
						width: 60em;
						height: 4em;
						border-radius: 6px;
						border: 0;
						margin: 1.2em;

						@media (max-width: 375px) {
							display: block;
							width: 20em;
							height: 3.9em;
							margin-top: -5%;
							margin-left: 8%;
							outline: 3px solid #f46262;
						}
						::placeholder {
							color: #f46262;
							opacity: 0.5;
							font-family: 'Poppins', sans-serif;
							font-size: 1.3em;
							padding-left: 1em;
						}`} />

				{isError && <p className={css`
					color: red;
					font-family: 'Poppins', sans-serif;
					font-weight: bold;`}>Error. Try again.</p>}

				{isLoading && <p>Loading...</p> }

				<button type='submit' onClick={submitHandler} className={css`
								margin: 1.2em;
								width: 8em;
								height: 2.8em;
								border-radius: 6px;
								border: 0;
								text-align: center;
								color: white;
								font-family: 'Poppins', sans-serif;
				                font-weight: bold;
								text-align: center;
								font-size: 1.1em;
								cursor: pointer;
								background-color: #2acfcf;

								@media (max-width: 375px) {
									display: block;
									width: 96%;
									height: 2.6em;
									margin-left: 10%;
								}`}>Shorten It!</button>
			</form>

			{shortenedURLs.map((ele) => <ListUrl key={shortenedURLs.indexOf(ele)} pair={ele} />)}
		</Wrapper>
	);
};

export default ShrinkForm;