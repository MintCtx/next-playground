import Image from 'next/image';
import styles from './user-name.module.css';
import { ProfileDataForDisplay } from '@/app/api/shuka/destiny2-playtime/users/[type]/[id]/profile/types/profile/display-types';
import { makeIconPath } from '@/app/shuka/destiny2-playtime/utils/img/utils';
import { ContentDefinition } from '@/app/api/shuka/destiny2-playtime/manifest/types';

/**
 * ランクイメージを探せなかった場合、代わりイメージ
 */
const notFoundRankImgUrl =
  '/img/theme/bungienet/account_sidebar/accountmenu_profile.png';

/**
 * コンポーネントのPropsタイプ
 */
type UserNameProps = {
  profile: ProfileDataForDisplay;
  definition: ContentDefinition;
};

/**
 * ランク定義タイプ
 */
type RankDefinitionItem = {
  displayProperties: {
    icon: string;
  };
};

/**
 * マッピング-ランクイメージ
 * @param definition
 * @param currentGuardianRank
 * @returns
 */
const getRankImageUrl = (
  definition: ContentDefinition,
  currentGuardianRank: number
) => {
  const rankDef = definition[currentGuardianRank] as RankDefinitionItem;
  const rankImgUrl: string =
    rankDef.displayProperties.icon ?? notFoundRankImgUrl;

  return rankImgUrl;
};

const UserName = ({ profile, definition }: UserNameProps) => {
  const { name, code, currentGuardianRank } = profile;
  const rankImgUrl = getRankImageUrl(definition, currentGuardianRank);

  return (
    <div className={styles.userInfo}>
      <Image src={makeIconPath(rankImgUrl)} alt="rank" width={23} height={23} />
      <span>
        {name}&#35;{code}
      </span>
    </div>
  );
};

export default UserName;
