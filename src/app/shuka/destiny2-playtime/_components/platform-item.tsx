import Image from "next/image";
import platformImg from '../assets/imgs/raid-icon.png'
import styles from '../destiny-styles.module.css'

const PlatFormItem = () => {
  return (
    <span className={styles.platFormItem}><Image src={platformImg} alt="platform" height={20} width={20} /></span>
  )
}

export default PlatFormItem;