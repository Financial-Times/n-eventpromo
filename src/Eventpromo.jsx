import xEngine from '@financial-times/x-engine';

import {EventDetails, ForumDetails} from './Details';
import styles from './Eventpromo.scss';
import Image from './Image';
import {getBranding} from './utils/brands';

const Eventpromo = ({...props}) => {
	const branding = getBranding(props.brand || 'ft-live');
	const eventsPageUrl = "https://events.ft.com/events-list";

	return (
		<div data-event-focus="" data-event-brand={props.brand} data-focus-concept={props.id}>
			<div className={styles.eventpromo} >
				<EventDetails {...branding} {...props}/>
				<Image {...branding} {...props}/>
			</div>

			<div className={styles.eventpromo__btn__container}>
				<a
					className={styles.explore__btn}
					href={eventsPageUrl}
					data-trackable="community-explore-all-events-cta"
				>
					Explore all events
				</a>
			</div>
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
