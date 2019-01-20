import React from 'react';

import styles from './Lejaut.module.css';

const layout = (props) => (
	<div>
		<div >Toolbar, SideDraw, Backdrop</div>
		<main className={styles.Content}>
			{props.children}
		</main>
	</div>
);

export default layout;