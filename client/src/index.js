import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

// The ApolloClient represents the Apollo client itself. Every
// instance of ApolloClient uses an in-memory cache. This enables
// it to store and reuse query results so it doesn't have to make
// as many network requests.
// The ApolloProvider uses React's Context API to make
// a configured Apollo client instance available throughout
// a React component tree.

const client = new ApolloClient({
	uri: 'http://localhost:4000',
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<GlobalStyles />
			<Pages />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
