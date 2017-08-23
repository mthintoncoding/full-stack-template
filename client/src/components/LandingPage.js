import React from 'react';
import { Link } from 'react-router';

const LandingPage = () =>(
	<div>
	<h1> Welcome to H. Smith </h1>
	<h3>Full Barber Experience Point Breeze, Philadelphia, PA </h3>
	<h4>Ready to make an appointment already? Click here!</h4>
	<Link to='Login'>
		<button>Book Now</button>
	</Link>
	</div>
)

export default LandingPage
