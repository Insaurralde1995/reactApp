import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const iamgeBackground = require('../assets/lagarto.jpeg')

const useStyles = makeStyles( () => ({
	rectanculo: {
		background: 'white',
		width: 450,
		height: 480,
		margin: 10,
		display: 'flex',
		overflow: 'hidden',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		borderRadius: 20,
	},
	content: {
		"& h2": {
			color: 'black',
			fontSize: 30,
			margin: 0
		}
	},
	image: {
		backgroundImage: `url(${iamgeBackground})`,
		backgroundSize: '100%',
		backgroundRepeat: 'no-repeat',
		height: 260,
		width: '100%'
	},
	subTitleClass: {
		width: '100%',

		"& p": {
			color: '#CCC',
			margin: 0,
			fontSize: 20
		}
	}
}));
const Lizard = ({
	// acá se llaman a las props. 
	title = 'Lagarto', 
	subtitles = 'Son lagartos',
	image,
	height,
	border = null
}) => {

	const classes = useStyles({height,border});
	const imgLogo = require('../assets/logo.svg');

	return (
		<div className={classes.rectanculo}>
			<div className={classes.image} />	
			<div className={classes.content}>		
				<h2>{title}</h2>
				<p className={classes.subTitleClass}>
					<span>{subtitles}</span>
				</p>
			</div>
			{/* creando un condicional con || */}
		</div>
	);
	}
export default React.memo(Lizard);


//<div>
//<img src=""alt=""/>
//<h2></h2>
//<p></p>
//</div>