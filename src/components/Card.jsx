import React, {Component} from 'react';

const Card = (props) => {
	const {name, email} = props.robot
	return (
		<div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 cursor-pointer">
			<img src="https://robohash.org/2?200x200" alt="robots"/>
			<div>
				<h2 className="fw9">{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
