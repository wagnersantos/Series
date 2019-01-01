import React from 'react';

const Develop = () => (
	<footer className='blockquote position-absolute' style={
			(window.location.href.indexOf('series') > 0) ? ({bottom: -40, right: 0 , left: 0}) 
				: ({bottom: 0, right: 0 , left: 0})}
			>
		<p className='mb-0' style={{fontFamily : `Great Vibes , cursive`}}>Developed by
			<a className='blockquote-footer mt-n2' target='_blank' rel="noopener noreferrer" 
				href='https://github.com/wagnersantos' style={{fontSize: '100%'
				, textDecoration: 'none'}}>
				wagnersantos
			</a>
		</p>
	</footer>
);

export default Develop;