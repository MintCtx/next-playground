import { Group } from './bff-types';
import { GroupForDisplay } from './display-types';

/**
 * BFFモデルから画面用モデルに変換
 * @param bffModel Group
 * @returns GroupForDisplay
 */
export const toGroupForDisplay = (bffModel: Group): GroupForDisplay => {
  const { name, bannerPath, avatarPath } = bffModel;

  return { name, bannerPath, avatarPath };
};
