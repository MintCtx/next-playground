import Image from 'next/image';
import styles from '../destiny-styles.module.css';
import exImg from '../assets/imgs/scanner-icon.jpg';
import CharacterList from './character-list';
import PlatFormList from './platform-list';

const flg = true;

const DetailInfo = () => {
    return (
        <div className={styles.detailInfo}>
            <PlatFormList />
            <div className={styles.userInfo}>
                {/* TODO:コンポーネント化の考慮 */}
                <div className={styles.userMainInfo}>
                    <Image src={exImg} alt="rank" width={35} height={35} />
                    <p>PlayerName &#35;1234</p>
                </div>
                {/* ここまで */}
                <div className={styles.clanInfo}>
                    <Image src={exImg} alt='clan flag' width={25} height={25} />
                    <p>ClanName</p>
                </div>
            </div>
            <div className={styles.playInfo}>
                <div className={styles.playInfoDetail}>
                    {/* TODO:コンポーネント化の考慮 */}
                    <p className={styles.column}>PlayTime</p>
                    <p className={styles.value}>1670h 40m</p>
                    {/* ここまで */}
                    <p className={styles.column}>Last Played</p>
                    <p className={styles.value}>1 minutes ago...</p>
                </div>
                <div className={styles.playInfoDetail}>
                    for more info..
                </div>
            </div>
            <div className={styles.dropDownDiv}>
                Characters 🔽
            </div>
            {flg && <CharacterList />}
        </div>
    )
}

export default DetailInfo;