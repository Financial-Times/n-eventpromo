import xEngine from '@financial-times/x-engine';

import styles from './Image.scss';

const Image = ({imageUrl, defaultImageUrl, link}) => {
	const baseSrc = `https://www.ft.com/__origami/service/image/v2/images/raw/${imageUrl || defaultImageUrl}?source=next&amp;fit=cover&amp;compression=best&amp;`;
	const imgSrc = `${baseSrc}width=340 340w,${baseSrc}width=400 740w`;
	return (
		<a className={styles['img-block']} href={link} data-trackable="event-promo" aria-hidden="true" tabIndex="-1">
			<img
				className={styles['img']}
				srcSet={imgSrc}
				alt=""
				sizes="(max-width: 46.24em) 100vw, 45vw"
				data-testid="promoimage"
			/>
		</a>
	);
};

export default Image;
