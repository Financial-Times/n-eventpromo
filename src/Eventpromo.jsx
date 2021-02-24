import xEngine from '@financial-times/x-engine';

import Details from './Details';
import styles from './Eventpromo.scss';
import Image from './Image';

const Eventpromo = (props) => {
	return (
		<div className={styles.eventpromo} data-event-focus="" data-focus-concept={props.id}>
			<Details {...props} />
			<Image {...props} />
		</div>
	);
};

export { Eventpromo };
