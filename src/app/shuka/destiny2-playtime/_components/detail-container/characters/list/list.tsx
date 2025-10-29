'use client';

import { CharactersDataForDisplay } from '@/app/api/shuka/destiny2-playtime/users/[type]/[id]/profile/types/profile/display-types';
import CharacterItem from '../item/item';
import styles from './list.module.css';
import { useManifestContext } from '@/app/shuka/destiny2-playtime/lib/manifest/manifest-context';
import { ContentDefinition } from '@/app/api/shuka/destiny2-playtime/manifest/types';

/**
 * CharacterListコンポーネントPropsタイプ
 */
type CharacterListProps = {
  characters: CharactersDataForDisplay;
};

const CharacterList = ({ characters }: CharacterListProps) => {
  const { manifest } = useManifestContext();
  // TODO: Menifest取得エラー対応(#57)
  const definition = manifest
    ? manifest
    : ({ isLastestVersion: false } as ContentDefinition);

  return (
    <div className={styles.characterList}>
      {Object.entries(characters).map(([key, item]) => (
        <CharacterItem key={key} character={item} definition={definition} />
      ))}
    </div>
  );
};

export default CharacterList;
