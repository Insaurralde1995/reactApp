import React from 'react';
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
		
	},
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
	//la nueva forma de invocar a los componentes
const Content = () => {
	const classes = useStyles({});
	return (
	
		<div className={classes.content}>
			<div className={classes.rectanculo}>
				<p>rectanculo1</p>
			</div>
			<div className={classes.rectanculo}>
				<p>rectanculo2</p>
			</div>
			<div className={classes.rectanculo}>
				<p>rectanculo3</p>
			</div>
		</div>
	
	);	
};
		
export default React.memo(Content);