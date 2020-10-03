import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';

const SiteLogoWrapper = styled.div`
	flex-grow: 1;
	color: white;
	margin: auto 0;
`;

const LogoImage = styled.img`max-width: 100px;`;

const Logo = () => {
	return (
		<StaticQuery
			query={graphql`
				{
					allWordpressWpLogo {
						edges {
							node {
								id
								url {
									source_url
								}
							}
						}
					}
				}
			`}
			render={(props) => (
				<SiteLogoWrapper>
					<LogoImage src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt="Main Logo" />
				</SiteLogoWrapper>
			)}
		/>
	);
};

export default Logo;
