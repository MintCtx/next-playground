import { CharactersData, ProfileData } from './bff-types';
import {
  CharactersDataForDisplay,
  ProfileDataForDisplay,
} from './display-types';

/**
 * BFFモデルから画面用モデルに変換
 * ProfileData
 * @param bffModel ProfileData
 * @returns ProfileDataForDisplay
 */
export const toProfileDataForDisplay = (
  bffModel: ProfileData
): ProfileDataForDisplay => {
  const { userInfo, dateLastPlayed, currentGuardianRank } = bffModel;
  const { bungieGlobalDisplayName: name, bungieGlobalDisplayNameCode: code } =
    userInfo;

  return { name, code, dateLastPlayed, currentGuardianRank };
};

/**
 * BFFモデルから画面用モデルに変換
 * @param bffModel CharactersData
 * @returns CharactersDataForDiplay
 */
export const toCharactersDataForDisplay = (
  bffModel: CharactersData
): CharactersDataForDisplay => {
  const modelForDisplay: CharactersDataForDisplay = {};

  Object.entries(bffModel).forEach(([key, character]) => {
    const {
      characterId,
      dateLastPlayed,
      minutesPlayedTotal,
      light,
      raceHash,
      genderHash,
      classHash,
      emblemPath,
      emblemBackgroundPath,
      titleRecordHash,
    } = character;

    modelForDisplay[key] = {
      characterId,
      dateLastPlayed,
      minutesPlayedTotal,
      light,
      raceHash,
      genderHash,
      classHash,
      emblemPath,
      emblemBackgroundPath,
      titleRecordHash,
    };
  });

  return modelForDisplay;
};
