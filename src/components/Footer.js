import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
const MainFooterWrapper = styled.div`
	display: flex;
	background-color: wheat;
`;

const MainFooterInner = styled.div`
	max-width: 960px;
	margin: 0 auto;
	display: flex;
	width: 960px;
	height: 100%;
`;

export default () => (
	<MainFooterWrapper>
		<MainFooterInner>
			<p>Copy Right 2020. Fitslash Inc.</p>
		</MainFooterInner>
	</MainFooterWrapper>
);
