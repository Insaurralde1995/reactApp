import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( () => ({
	// aca van los styles

	rectanculo:{
		background: 'white',
		width: '100%',
		height: 'calc(100% / 3)',
		margin: '10px 0 ',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	
		"& p": {
			color: 'black',
			fontSize: 30
		}
	}
}));

const Item = ({
	title = 'falopa de la buena', 
	image
}) => {

	const classes = useStyles({});
	const imgLogo = require('../assets/logo.svg');

	return (
		<div className={classes.rectanculo}>
			<p>{title}</p>
			<img src={image || imgLogo} alt={'imgEjemplo'} />
		</div>
	);

};
export default React.memo(Item);