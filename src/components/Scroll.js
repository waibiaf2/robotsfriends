import React from 'react';

const Scroll = (props) => {
	console.log(props.children);
	return (
		<div style={{overflowY: 'scroll', border: '1px solid back', height:'800px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;
