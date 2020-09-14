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
	},
	imageClass: {
		height: 150,
	},
	subTitleClass: {
		textAlign: "center",
		width: '100%',

		"& span": {
			color: 'pink',
			fontSize: 20
		}
	}
}));

const Item = ({
	// acá se llaman a las props. 
	title = 'falopa de la buena', 
	subtitles = 'default text',
	image
}) => {

	const classes = useStyles({});
	const imgLogo = require('../assets/logo.svg');

	return (
		<div className={classes.rectanculo}>
			<p>{title}</p>
			<p className={classes.subTitleClass}>
				<span>{subtitles}</span>
			</p>
			<img className={classes.imageClass} src={image || imgLogo} alt={'imgEjemplo'} />{/* creando un condicional con || */}
		</div>
	);

};
export default React.memo(Item);