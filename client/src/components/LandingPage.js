import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Video from './Video'


class LandingPage extends React.Component{

	render() {
		return(

<div className='landingPageTextContainer'>
		<div className='LandingPageText'>

		<div className='wallpaper'>
			<Video/>
		</div>

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
		<div className='footerPic'>

		</div>
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
