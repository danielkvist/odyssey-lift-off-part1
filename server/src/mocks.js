const { MockList } = require('apollo-server');

// This mocks object contains functions that provide the
// mocked data we want the server to return for each
// queried field.
const mocks = {
	Query: () => ({
		tracksFromHome: () => new MockList([6, 9]),
	}),
	Track: () => ({
		id: () => 'track_01',
		title: () => 'Astro Kitty, Space Explorer',
		author: () => {
			return {
				name: 'Grumpy Cat',
				photo:
					'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
			};
		},
		thumbnail: () =>
			'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
		length: () => 1210,
		modulesCount: () => 6,
	}),
};

module.exports = mocks;
