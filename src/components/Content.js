import React from 'react';
import Item from './Item';
import { makeStyles } from '@material-ui/core/styles';
import  Lizard from './Lizard';

const useStyles = makeStyles( () => ({
	// aca van los styles
	content:{
		position: 'absolute',
		background: 'blue',
		padding: 10,
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'row', //delimita el orden de los elementos hijos, si van a ser columnas o filas (row o column)
		justifyContent: 'center',
		alignItems: 'center',
		//justifyContent: 'flex-start',
		//alignItems: 'flex-start'
		//justifyContent: 'flex-end',
		//alignItems: 'flex-end',
		boxSizing: 'border-box',	
	}
}));

const Content = () => {

	const classes = useStyles({});

	return (
		<div className={classes.content}>

			<Lizard
				title='Lagarto'
				image={require('../assets/lagarto.jpeg')}
				subtitles={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
				height={100}
			/>
		</div>
	);

};
export default React.memo(Content);