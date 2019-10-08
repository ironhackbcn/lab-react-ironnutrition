import React, { Component } from "react";

import Form from './Form';

class ToggleBox extends Component {

	state = {
		opened: false,
	}
  
	toggleBox = () => {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});
	}
  
	render() {
		let  title;
		const { opened } = this.state;

		if (opened){
			title ='Hide form';
		} else {
			title ='Add new food';
		}

		return (
			<div className="box">
				<div className="boxTitle" onClick={this.toggleBox}>
					<strong>{title}</strong>
				</div>
				{opened && 					
					<div className="boxContent">
						<Form addTheFood={this.props.addTheFood} hideForm={this.toggleBox}></Form>
					</div>
				}
			</div>
		);
	}
}

export default ToggleBox;