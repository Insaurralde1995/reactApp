import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const iamgeBackground = require('../assets/lagarto.jpeg')

const useStyles = makeStyles( () => ({
	rectanculo: {
		background: 'white',
		width: 450,
		height: 500,
		margin: 10,
		display: 'flex',
		overflow: 'hidden',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'space-between',
		borderRadius: 20,
	
		"& p": {
			color: 'black',
			fontSize: 50
		}
	},
	image: {
		backgroundImage: `url(${iamgeBackground})`,
		backgroundSize: '100%',
		backgroundRepeat: 'no-repeat',
		height: 300,
		width: '100%'
	},
	subTitleClass: {
		textAlign: "center",
		width: '100%',

		"& span": {
			color: '#CCC',
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
				<p>{title}</p>
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