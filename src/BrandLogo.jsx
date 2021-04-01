import xEngine from '@financial-times/x-engine';

import styles from './BrandLogos.scss';
import commonStyles from './styles/common.scss'

export const FTLiveLogo = () => (
    <div className={`${styles['brand']} ${styles['brand--ft-live']}`}>
        Presented by
        <span className={`${styles['brand__logo-alt-text']} ${commonStyles['visually-hidden']}`} >FT Live</span>
    </div>
)

export const BDPLogo = () => (
    <div className={`${styles['brand']} ${styles['brand--ft-board-director-programme']}`}>
        Presented by
        <span className={`${styles['brand__logo-alt-text']} ${commonStyles['visually-hidden']}`}>FT Board Director Programme</span>
    </div>
)

export const ForumsLogo = () => (
    <div className={`${styles['brand']} ${styles['brand--ft-forums']}`}>
        Presented by
        <span className={`${styles['brand__logo-alt-text']} ${commonStyles['visually-hidden']}`}>FT Forums</span>
    </div>
)
