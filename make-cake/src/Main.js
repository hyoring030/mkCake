import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./App.module.css";



const Main = (props) => {
	return (
		<>
			<h3 className={styles.Back}>생일축하합니당 :) </h3>
			<ul>
				<Link to="/createcake" ><li >createcake</li> </Link>  
				<Link to="/Writemsg"><li>write</li></Link>
				<Link to="/Readmsg"><li>read</li></Link>
			</ul>
		</>
	);
};

export default Main;