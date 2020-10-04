import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const MainMenuWrapper = styled.div`
	display: flex;
	background-color: wheat;
`;

const MainMenuInner = styled.div`
	max-width: 960px;
	margin: 0 auto;
	display: flex;
	width: 960px;
	height: 100%;
`;

const MenuItem = styled(Link)`
color:white;
display:block;
padding: 15px 20px;
`;

const MainMenu = () => (
	<StaticQuery
		query={graphql`
			{
				wordpressMenuLocation(menuData: { slug: { eq: "main-menu" } }) {
					id
					menuData {
						items {
							slug
							url
							title
							object
						}
					}
				}
			}
		`}
		render={(props) => (
			<MainMenuWrapper>
				<MainMenuInner>
					<Logo />
					{props.wordpressMenuLocation.menuData.items.map((object) => <MenuItem>{object.title}</MenuItem>)}
				</MainMenuInner>
			</MainMenuWrapper>
		)}
	/>
);

export default MainMenu;
