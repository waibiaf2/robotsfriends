import React from 'react';
import Card from "./Card";

const CardList = ({robots}) => {
	/*if (true) {
		throw new Error('Nooooooooooooooo,There was an error');
	}*/
	const robotList = robots.map((robot,i) => <Card robot={robot} key={i}/>);
	return (
		<div>
			{ robots? robotList: <h2>There are no robots to display!</h2>}
		</div>
	);
};

export default CardList;
