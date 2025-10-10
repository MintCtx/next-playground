import { GroupForDisplay } from '../clan/display-types';

/**
 * 画面用 - ユーザー接続情報
 */
export type ProfileDataForDisplay = {
  name: string;
  code: number | null;
  dateLastPlayed: string;
  currentGuardianRank: number;
};

/**
 * 画面用 - ユーザーのキャラ情報
 */
export type CharactersDataForDisplay = {
  [key: string]: CharacterForDisplay;
};

/**
 * 画面用 - ユーザーのキャラ情報詳細
 */
export type CharacterForDisplay = {
  characterId: string;
  dateLastPlayed: string;
  minutesPlayedTotal: string;
  light: number;
  raceHash: number;
  genderHash: number;
  classHash: number;
  emblemPath: string;
  emblemBackgroundPath: string;
  titleRecordHash: number | null;
};

/**
 * 画面用 - ユーザーのプロフィール情報
 */
export type UserProfile = {
  user: UserProfileDetail;
  clan: GroupForDisplay;
};

/**
 * ユーザー詳細情報
 */
export type UserProfileDetail = {
  profile: ProfileDataForDisplay;
  characters: CharactersDataForDisplay;
};
