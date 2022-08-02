import Image from 'next/image'
// import Meteor from './Meteor.png'

import { css } from '@emotion/css'
import styled from 'styled-components'

const Meteor = require('./Meteor.png');

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	// outline: 2px solid orange`;

const BGImage = () => {
	return (
		<Wrapper>
			<Image className={css`position: absolute; top: 0; left: 0;`} src={Meteor} width="100%" height="100%" layout="fill" />
		</Wrapper>
	);
};

export default BGImage;