import React,{Component}  from "react";
import {render} from 'react-dom';

class Main extends Component{
	render(){
		return (
				<div>
					react Yet!
				</div>
			)
	}
} 

render(
	<Main/>,
	document.body
);