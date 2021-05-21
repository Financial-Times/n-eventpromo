import xEngine from '@financial-times/x-engine';
import styles from './Meta.scss';

const Meta = ({ location, dates }) => {
	return (
		<div className={styles.meta}>
			{!!location && <p>{location}</p>}
			{!!dates && <p>{dates}</p>}
		</div>
	);
};

export default Meta;
