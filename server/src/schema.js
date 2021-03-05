const { gql } = require('apollo-server');

// The graphql package provides the core logic for parsing
// and validating GraphQL queries.
// The apollo-server provides a full-fledged GraphQL server
// with some utils like the gql template literal.

const typeDefs = gql`
	"Query types are the entrypoint into the rest of our schema"
	type Query {
		"query to get tracks array for the homepage"
		tracksForHome: [Track!]
	}

	"A track if a group of modules that teaches about a specific topic"
	type Track {
		id: ID!
		"the track's title"
		title: String!
		"the track's main author"
		author: Author!
		"the track's main illustration"
		thumbnail: String
		"the track's approximate length to complete in minutes"
		length: Int
		"the number of modules this track contains"
		modulesCount: Int
	}

	"Author of a complete Track"
	type Author {
		id: ID!
		"the author's name"
		name: String!
		"Author's profile picture URL"
		photo: String
	}
`;

module.exports = typeDefs;
