'use client';

import styles from './detail-container.module.css';
import Characters from './characters/characters';
import Profile from './profile/profile';
import PlayInfoDetail from './play-info-detail/play-info-detail';
import { useManifestContext } from '../../lib/manifest/manifest-context';
import {
  CharactersDataForDisplay,
  UserProfile,
} from '@/app/api/shuka/destiny2-playtime/users/[type]/[id]/profile/types/profile/display-types';

/**
 * キャラクター一覧から合計プレイ時間（時・分）を計算する
 * @param characters キャラクター一覧
 * @returns 合計プレイ時間（hours: 時, minutes: 分）
 */
const getTotalPlayTime = (characters: CharactersDataForDisplay) => {
  let totalMinutesPlayTime = 0;

  Object.entries(characters).forEach(([, value]) => {
    totalMinutesPlayTime += Number(value.minutesPlayedTotal);
  });

  const hours = Math.floor(totalMinutesPlayTime / 60);
  const minutes = totalMinutesPlayTime % 60;

  return { hours, minutes };
};

/**
 * 最終接続日から現在までの経過を計算する
 * @param isoString 最終接続日
 * @returns 経過した時間
 */
const getTimeAgo = (isoString: string): string => {
  const past = new Date(isoString);
  const now = new Date();

  const diffMs = now.getTime() - past.getTime();
  if (diffMs < 0) return 'in the future';

  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffMonth = Math.floor(diffDay / 30);
  const diffYear = Math.floor(diffDay / 365);

  if (diffYear > 0) return `${diffYear}y ${diffMonth % 12}m ago`;
  if (diffMonth > 0) return `${diffMonth}m ${diffDay % 30}d ago`;
  if (diffDay > 0) return `${diffDay}d ${diffHour % 24}h ago`;
  if (diffHour > 0) return `${diffHour}h ${diffMin % 60}m ago`;
  if (diffMin > 0) return `${diffMin}m ${diffSec % 60}s ago`;
  if (diffSec > 0) return `${diffSec}s ago`;
  return 'just now';
};

const DetailContainer = ({ userDetail }: { userDetail: UserProfile }) => {
  // TODO: manifestがnullの場合、エラー対応(#57)
  const { manifest } = useManifestContext();
  const rankDefinition = manifest && manifest['DestinyGuardianRankDefinition'];

  const {
    user: { profile, characters },
    clan,
  } = userDetail;
  const { hours, minutes } = getTotalPlayTime(characters);

  return (
    <div className={styles.detailInfo}>
      <Profile profile={profile} clan={clan} definition={rankDefinition} />

      <PlayInfoDetail title={'Play Time'} value={`${hours}h ${minutes}m`} />
      <PlayInfoDetail
        title={'Last Played'}
        value={getTimeAgo(profile.dateLastPlayed)}
      />

      <Characters characters={characters} />
    </div>
  );
};

export default DetailContainer;
