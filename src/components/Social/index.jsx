import React from 'react'
import styles from './styles.module.css'
import FcbookIcon from '../../assets/svg/akar-icons_facebook-fill.svg'
import InstIcon from '../../assets/svg/ant-design_instagram-filled.svg'
import TgIcon from '../../assets/svg/akar-icons_telegram-fill.svg'
import YoutubeIcon from '../../assets/svg/akar-icons_youtube-fill.svg'

const Social = () => {
  return (
    <div className={styles.socialBox}>
      <a href=""><img src={FcbookIcon} alt="facebook" /></a>
      <a href=""><img src={InstIcon} alt="facebook" /></a>
      <a href=""><img src={TgIcon} alt="facebook" /></a>
      <a href=""><img src={YoutubeIcon} alt="facebook" /></a>
    </div>
  )
}

export default Social