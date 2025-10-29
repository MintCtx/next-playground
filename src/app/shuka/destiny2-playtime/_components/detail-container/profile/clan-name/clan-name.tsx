import Image from 'next/image';
import styles from './clan-name.module.css';
import { GroupForDisplay } from '@/app/api/shuka/destiny2-playtime/users/[type]/[id]/profile/types/clan/display-types';
import { makeIconPath } from '@/app/shuka/destiny2-playtime/utils/img/utils';

const clanImage = '/img/theme/bungienet/account_sidebar/accountmenu_clan.png';

/**
 * ClanNameコンポーネントPropsタイプ
 */
type ClanNameProps = {
  clan: GroupForDisplay;
};

const ClanName = ({ clan }: ClanNameProps) => {
  const { name, clanCallsign } = clan;

  const clanAndCallsign = name
    ? name + ' [' + clanCallsign + ']'
    : 'no clan affiliation';

  return (
    <div className={styles.clanInfo}>
      <Image
        src={makeIconPath(clanImage)}
        alt="clan flag"
        width={25}
        height={25}
      />
      <p>{clanAndCallsign}</p>
    </div>
  );
};

export default ClanName;
