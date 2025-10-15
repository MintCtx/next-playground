import { UserInfoCard } from '../../../../../types';

/**
 * BFF用 - ユーザー詳細のレスポンス
 */
export type DestinyProfileResponse = {
  Response: ProfileResponse;
  ErrorCode: number;
  ThrottleSeconds: number;
  ErrorStatus: string;
  Message: string;
  MessageData: object;
};

/**
 * BFF用 - プロフィールレスポンス
 */
type ProfileResponse = {
  responseMintedTimestamp: string;
  secondaryComponentsMintedTimestamp: string;
  profile: ProfileComponent;
  characters: CharactersComponent;
};

/**
 * BFF用 - プロフィール要素
 */
type ProfileComponent = {
  data: ProfileData;
  privacy: number;
  disabled: boolean | null;
};

/**
 * BFF用 - プロフィールデータ
 */
export type ProfileData = {
  userInfo: UserInfoCard;
  dateLastPlayed: string;
  versionsOwned: number;
  characterIds: Array<number>;
  seasonHashes: Array<number>;
  seasonPassHashes: Array<number>;
  eventcardhashesowned: Array<number>;
  currentSeasonHash: number | null;
  currentSeasonRewardPowerCap: number | null;
  activeEventCardHash: number | null;
  currentGuardianRank: number;
  lifetimeHighestGuardianRank: number;
  renewedGuardianRank: number;
};

/**
 * BFF用 - キャラ情報要素
 */
type CharactersComponent = {
  data: CharactersData;
  privacy: number;
  disabled: boolean | null;
};

/**
 * BFF用 - キャラデータ
 */
export type CharactersData = {
  [key: string]: Character;
};

/**
 * BFF用 - キャラ詳細
 */
type Character = {
  membershipid: string;
  membershipType: number;
  characterId: string;
  dateLastPlayed: string;
  minutesPlayedThisSession: string;
  minutesPlayedTotal: string;
  light: number;
  stats: { [key: string]: number };
  raceHash: number;
  genderHash: number;
  classHash: number;
  raceType: number;
  classType: number;
  genderType: number;
  emblemPath: string;
  emblemBackgroundPath: string;
  emblemHash: number;
  emblemColor: {
    red: number;
    green: number;
    blue: number;
    alpha: number;
  };
  levelProgression: {
    progressionHash: number;
    dailyProgress: number;
    dailyLimit: number;
    weeklyProgress: number;
    weeklyLimit: number;
    currentProgress: number;
    level: number;
    levelCap: number;
    stepIndex: number;
    progressToNextLevel: number;
    nextLevelAt: number;
  };
  baseCharacterLevel: number;
  percentToNextLevel: number;
  titleRecordHash: number | null;
};
