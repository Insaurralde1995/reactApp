import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( () => ({
	// aca van los styles

	rectanculo:{
		background: '#1769aa',
		width: 'calc(100% / 3)',
		height: '100%',
		margin: 10,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	
		"& p": {
		color: 'white',
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

const Item = ({
	// acá se llaman a las props. 
	title = 'falopa de la buena', 
	subtitles = 'Falopa Salvaje',
	image,
	height,
	border = null
}) => {

	const classes = useStyles({height,border});
	const imgLogo = require('../assets/logo.svg');

	return (
		<div className={classes.rectanculo}>
			<p>{title}</p>
			<p className={classes.subTitleClass}>
				<span>{subtitles}</span>
			</p>
			<img 
				className={classes.imageClass} 
				src={image || imgLogo} 
				alt={'imgEjemplo'} 
			/>{/* creando un condicional con || */}
		</div>
	);

};
export default React.memo(Item);


//En lugar de filas tres columnas
//la imagen del primer item tiene que medir 300px
//En el segundo debe medir 150px
//en el tercero tiene que medir 50px y un borde rojo de 1px


//como hacer una imagen background

//si le paso una imagen con el ancho, sólo se acomoda el alto



//[17:43] Luciano Recchini
//<div>
//<img src=""alt=""/>
//<h2></h2>
//<p></p>
//</div>
