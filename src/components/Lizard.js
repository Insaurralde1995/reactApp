import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( () => ({
    
    
    rectanculo:{
		background: 'white',
		backgroundImage: require('../assets/facebook.svg'),
		width: 'calc(100% / 3)',
		height: '100%',
		margin: 10,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'space-between',
		borderRadius: 20,
	
		"& p": {
		color: 'black',
		fontSize: 50
		}
	},
	imageClass: ({height,border}) => ({
		height: height || 150,
		border: border ? '1px solid red' : null,	
	}),
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
{/* 			<img 
				className={classes.imageClass} 
				src={image || imgLogo} 
				alt={'imgEjemplo'} 
			/> */}
			<p>{title}</p>
			<p className={classes.subTitleClass}>
				<span>{subtitles}</span>
			</p>
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