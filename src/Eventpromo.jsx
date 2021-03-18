import xEngine from '@financial-times/x-engine';

import {EventDetails, ForumDetails} from './Details';
import styles from './Eventpromo.scss';
import Image from './Image';
import {getBranding} from './utils/brands';

const Eventpromo = ({...props}) => {
	const branding = getBranding(props.brand || 'ft-live')
	return (
		<div className={styles.eventpromo} data-event-focus="" data-event-brand={props.brand} data-focus-concept={props.id}>
			<EventDetails {...branding} {...props}/>
			<Image {...branding} {...props}/>
		</div>
	);
};

const Forumpromo = ({...props}) => {
	const branding = getBranding('ft-forums')
	return (
		<div className={styles.eventpromo} data-forum-id={props.id}>
			<ForumDetails {...branding} {...props}/>
			<Image {...branding} {...props}/>
		</div>
	);
};

export {
	Forumpromo,
	Eventpromo
};
