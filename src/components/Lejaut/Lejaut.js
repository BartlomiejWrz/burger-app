import React from 'react';

import styles from './Lejaut.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
	<div>
		<Toolbar />
		<SideDrawer />
		<main className={styles.Content}>
			{props.children}
		</main>
	</div>
);

export default layout;