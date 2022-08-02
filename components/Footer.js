import Logo from './logo_white.svg'
import Facebook from './icon-facebook.svg'
import Twitter from './icon-twitter.svg'
import Pinterest from './icon-pinterest.svg'
import Instagram from './icon-instagram.svg'

import { css } from '@emotion/css'
import styled from 'styled-components'

const UL = styled.ul`
	color: white;

	@media (max-width: 375px) {
		text-align: center;
	}`;

const LI = styled.li`
	list-style: none;
	color: white;
	font-family: 'Poppins', sans-serif;
	line-height: 2;
	&:hover {
		color: #2acfcf;
	}
	@media (max-width: 375px) {
		text-align: center;
	}`;

const P = styled.p`
	font-family: 'Poppins', sans-serif;
	font-weight: bold;
	@media (max-width: 375px) {
		text-align: center;
	}`;

const SocialMedias = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-left: 0;
	// outline: 1px solid white;
	@media (max-width: 375px) {
		position: absolute;
		bottom: 10%;
		right: 24%;
	}`;

const svgHover = css`
	cursor: pointer;
	&:hover {
		filter: invert(59%) sepia(71%) saturate(448%) hue-rotate(131deg) brightness(102%) contrast(88%);
		// background-color: #2acfcf;
	}
	@media (max-width: 375px) {
		margin: 0.8em;
	}`;

const Footer = () => {
	return (
		<div className={css`
			background: #232127;
			width: 100vw;
			height: 40vh;
			padding-right: 15em;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: flex-start;

			@media (max-width: 375px) {
				flex-direction: column;
				height: 100%;
				padding: 3em 10em 10em 10em;
				justify-content: center;
				align-items: center;
				position: relative;
			}`}>
				
				<div className={css`
					margin-top: 5%;`}>
					<Logo className={css`
						margin: 2em; 
						margin-left: 0;
						@media (max-width: 375px) {
							margin: 0;
						}`} />

					<SocialMedias>
						<Facebook className={svgHover} />
						<Twitter className={svgHover} />
						<Pinterest className={svgHover} />
						<Instagram className={svgHover} />
					</SocialMedias>
				</div>
				
				<div className={css`
					margin-top: 5%; 
					margin-left: -30%;
					@media (max-width: 375px) {
						margin-left: -70%;
					}`}>
					<UL>
						<P>Features</P>
						<br />
						<LI>Link Shortening</LI>
						<LI>Branded Links</LI>
						<LI>Analytics</LI>
					</UL>
				</div>

				<div className={css`
					margin-top: 5%; 
					margin-left: -40%;
					@media (max-width: 375px) {
						margin-left: -70%;
					}`}>
					<UL>
						<P>Resources</P>
						<br />
						<LI>Blog</LI>
						<LI>Developers</LI>
						<LI>Support</LI>
					</UL>
				</div>

				<div className={css`
					margin-top: 5%; 
					margin-left: -40%;
					@media (max-width: 375px) {
						margin-left: -70%;
					}`}>
					<UL className={css`margin-top: 10%;`}>
						<P>Company</P>
						<br />
						<LI>About</LI>
						<LI>Our Team</LI>
						<LI>Careers</LI>
						<LI>Contact</LI>
					</UL>
				</div>

			</div>
	);
};

export default Footer;