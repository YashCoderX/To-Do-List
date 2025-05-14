import React from 'react';
import { AuthorContainer } from './styles';

function Author() {
	return (
		<AuthorContainer>
			Created by{' '}
			<a
				href="https://github.com/YashCoderX"
				target="_blank"
				rel="noopener noreferrer"
			>
				Yash Agarwal
			</a>
		</AuthorContainer>
	);
}

export default Author;
