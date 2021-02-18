import xEngine from '@financial-times/x-engine';

import styles from './BrandLogos.scss';

export const FTLiveLogo = () => (
    <div className={[styles['brand'], [styles['brand--ft-live']]].join(' ')}>
        Presented by
        <span className={styles['visually-hidden']}>FT Live</span>
    </div>
)

export const BDPLogo = () => (
    <div className={[styles['brand'], [styles['brand--ft-bdp']]].join(' ')}>
        Presented by
        <span className={styles['visually-hidden']}>FT Board Director Programme</span>
    </div>
)

export const ForumsLogo = () => (
    <div className={[styles['brand'], [styles['brand--ft-forums']]].join(' ')}>
        Presented by
        <span className={styles['visually-hidden']}>FT Forums</span>
    </div>
)
