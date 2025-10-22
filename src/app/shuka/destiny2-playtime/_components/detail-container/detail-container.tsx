'use client';

import styles from './detail-container.module.css';
import Characters from './characters/characters';
import Profile from './profile/profile';
import PlayInfoDetail from './play-info-detail/play-info-detail';
import { useManifestContext } from '../../lib/manifest/manifest-context';

const DetailContainer = () => {
  // TODO: manifestがnullの場合、固定値で交換（画面は正常表示、値は指定した固定値）
  const { manifest } = useManifestContext();

  return (
    <div className={styles.detailInfo}>
      <Profile />

      <PlayInfoDetail title={'Play Time'} value={'1,675h 49m'} />
      <PlayInfoDetail title={'Last Played'} value={'1 months ago..'} />

      <Characters />
    </div>
  );
};

export default DetailContainer;
