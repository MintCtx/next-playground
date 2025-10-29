'use client';

import styles from './item.module.css';
import Image from 'next/image';
import { makeIconPath } from '@/app/shuka/destiny2-playtime/utils/img/utils';
import { ContentDefinition } from '@/app/api/shuka/destiny2-playtime/manifest/types';
import { CharacterForDisplay } from '@/app/api/shuka/destiny2-playtime/users/[type]/[id]/profile/types/profile/display-types';

/**
 * コンポーネントPropsタイプ
 */
type CharacterItemProps = {
  character: CharacterForDisplay;
  definition: ContentDefinition;
};

/**
 * 種族と性別定義タイプ
 */
type RaceDefinitionItem = {
  [raceHash: number]: {
    genderedRaceNamesByGenderHash: {
      [genderHash: number]: string;
    };
  };
};

/**
 * クラス定義タイプ
 */
type ClassDefinitionItem = {
  [classHash: number]: {
    displayProperties: {
      name: string;
    };
  };
};

/**
 * 称号定義タイプ
 */
type TitleDefinitionItem = {
  [titleHash: string]: {
    titleInfo: {
      titlesByGenderHash: string;
    };
  };
};

/**
 * マッピング-クラス
 * @param definition
 * @param classHash
 * @returns
 */
const getClassName = (
  definition: ContentDefinition,
  classHash: number
): string => {
  const classDef = definition['DestinyClassDefinition'] as ClassDefinitionItem;
  const mappedClassName = classDef[classHash]['displayProperties'].name;

  return mappedClassName;
};

/**
 * マッピング-種族、性別
 * @param definition
 * @param raceHash
 * @param genderHash
 * @returns
 */
const getRaceAndGenderName = (
  definition: ContentDefinition,
  raceHash: number,
  genderHash: number
): string => {
  const raceDef = definition['DestinyRaceDefinition'] as RaceDefinitionItem;
  const raceAndGender =
    raceDef[raceHash]['genderedRaceNamesByGenderHash'][genderHash];

  return raceAndGender;
};

/**
 * マッピング-称号
 * @param definition 定義
 * @param titleHash タイトルハッシュ
 * @param genderHash 性別ハッシュ
 * @returns
 */
const getTitleName = (
  definition: ContentDefinition,
  titleHash: number | null,
  genderHash: number
) => {
  const titleHashNotNull = titleHash ? titleHash : '';
  const titleDef = definition['DestinyRecordDefinition'] as TitleDefinitionItem;
  const title = titleDef[titleHashNotNull]
    ? titleDef[titleHashNotNull]['titleInfo']['titlesByGenderHash'][genderHash]
    : '';

  return title;
};

const CharacterItem = ({ character, definition }: CharacterItemProps) => {
  const {
    classHash,
    raceHash,
    genderHash,
    light,
    titleRecordHash,
    emblemBackgroundPath,
    minutesPlayedTotal,
  } = character;

  // キャラクター毎の詳細情報
  const className = getClassName(definition, classHash);
  const raceAndGender = getRaceAndGenderName(definition, raceHash, genderHash);
  const title = getTitleName(definition, titleRecordHash, genderHash);

  // キャラクター毎のプレイタイム
  const playTimeToNumber = Number.parseInt(minutesPlayedTotal);
  const hours = Math.floor(playTimeToNumber / 60);
  const minutes = playTimeToNumber % 60;

  return (
    <div className={styles.characterItem}>
      <Image
        src={makeIconPath(emblemBackgroundPath)}
        alt="banner"
        fill
        sizes="width:266px"
      />
      <div>
        {className}&nbsp;
        {raceAndGender}
      </div>
      <div className={styles.secondDiv}>
        <span>{`${hours}h ${minutes}m`}</span>
        <span className={styles.light}>✧{light}</span>
      </div>
      <div className={styles.thirdDiv}>{title}</div>
    </div>
  );
};

export default CharacterItem;
