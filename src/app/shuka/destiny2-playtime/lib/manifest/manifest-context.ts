import { ContentDefinition } from '@/app/api/shuka/destiny2-playtime/manifest/types';
import { createContext, useContext } from 'react';

/**
 * ManifestContextのvalueタイプ
 */
type ManifestContextValue = {
  manifest: ContentDefinition | null;
};

/**
 * BungieのManifestデータ管理用Context作成
 */
export const ManifestContext = createContext<ManifestContextValue>({
  manifest: null,
});

/**
 * BungieのManifestのContextを使用する
 * @returns useContext
 */
export const useManifestContext = () => useContext(ManifestContext);
