import React from 'react';
import {Link} from 'react-router-dom';

const ButtonBack = ({series}) => (
	<Link to={'/'}>
		<div>
			<input type='button' className='btn btn-dark' value='Voltar' />
		</div>
	</Link>
);

export default ButtonBack;