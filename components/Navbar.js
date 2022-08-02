import Logo from './logo.svg' // https://frontend-digest.com/how-to-import-svgs-into-nextjs-8ec6100e613f
import HamburgerMenu from './hamburger-icon.jpg'
import Image from 'next/image'

import { css } from '@emotion/css'
import styled from 'styled-components'

const StyledImage = styled(Image)`
	opacity: 0;
	@media (max-width: 375px) {
		opacity: 1;
	}`

const classForLi = css`
	margin: 1em;
	color: #9e9aa7;
	&:hover {
		color: black;
	};
	font-family: 'Poppins', sans-serif; font-weight: bold;
	@media (max-width: 375px) {
		display: none;
	}`;

const Navbar = () => {
	return (
		<nav className={css`
			max-width: 100vw;
			max-height: auto;`}>
	        <ul className={css`
	        		width: 100vw;
					height: auto;
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					list-style: none;
					padding-left: 7em;
					padding-right: auto;

					@media (max-width: 375px) {
						padding-left: 0;
						padding-right: 5%;
						justify-content: space-between;
					}
					// outline: 2px solid black;`}>
		        
		        <Logo className={css`margin: 2em;`} />
		        <StyledImage src={HamburgerMenu} width="35%" height="40%" />
		        <li className={classForLi}>Features</li>
		        <li className={classForLi}>Pricing</li>
		        <li className={classForLi}>Resources</li>

	        </ul>
    	</nav>
	);
};

export default Navbar;