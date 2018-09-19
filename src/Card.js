import React from 'react';

const card = (props) => {
	const { name,id,email }=props;
	return(
		<div className='tc bg-light-blue pa3 ma2 dib br3 grow shadow-5 '>
			<img alt='robots' src={`https://robohash.org/${id}?(100x100)`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default card;