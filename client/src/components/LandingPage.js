import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class LandingPage extends React.Component{

	render() {
		return(

<div>
	<div className='LandingPageText'>
	<h1> Welcome to H. Smith </h1>
	<h3>Full Barber Experience Point Breeze, Philadelphia, PA </h3>
{this.props.LoggedIn ? '' :
	<div>
	<h4>Ready to make an appointment already? Click here!</h4>

	<Link to='Login'>
		<button className='LoginButton'>Login to get Started</button>
	</Link>
	</div>
	}
</div>

<div className='box'>
</div>
</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		LoggedIn: state.clientManager.isLoggedIn
	}
}
export default connect(mapStateToProps)(LandingPage)

//Client ID d28e632cb0a74d63a544cc45805d6d24

//Client Secret 6f57bec7e4124ec5a470369affbbeaf7
