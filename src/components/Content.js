import React from 'react';
import Item from './Item';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( () => ({
	// aca van los styles
	content:{
		position: 'absolute',
		background: 'blue',
		padding: 10,
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column', //delimita el orden de los elementos hijos, si van a ser columnas o filas (row o column)
		//justifyContent: 'center',
		//alignItems: 'center'
		//justifyContent: 'flex-start',
		//alignItems: 'flex-start'
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		boxSizing: 'border-box',	
	}
}));

const Content = () => {

	const classes = useStyles({});

	return (
		<div className={classes.content}>
			<Item />
			<Item />
			<Item />
		</div>
	);

};
export default React.memo(Content);