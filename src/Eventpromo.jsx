import {EventDetails, ForumDetails} from './Details';
import styles from './Eventpromo.scss';
import Image from './Image';

const Eventpromo = ({brand = 'ft-live', ctaText, imageUrl, ...props}) => {
	return (
		<div className={styles.eventpromo} data-event-focus="" data-event-brand={brand} data-focus-concept={props.id}>
			<EventDetails {...props}/>
			<Image {...props}/>
		</div>
	);
};

const Forumpromo = ({...props}) => {
	return (
		<div className={styles.eventpromo} data-forum-id={props.id}>
			<ForumDetails {...props}/>
			<Image {...props}/>
		</div>
	);
};

export {
	Forumpromo,
	Eventpromo
};
