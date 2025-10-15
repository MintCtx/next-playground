import { ContentDefinition } from '@/app/api/shuka/destiny2-playtime/manifest/types';
import { getBffApiUrl } from '@/app/api/utils';

/**
 * Destiny2のManifestデータを取得
 * @returns Destiny2のManifestデータ
 */
export const getManifest = async (): Promise<ContentDefinition> => {
  try {
    const url = new URL(
      '/api/shuka/destiny2-playtime/manifest',
      getBffApiUrl()
    );

    const manifest = await fetch(url, {
      method: 'GET',
    });

    const data = await manifest.json();
    return data;
  } catch (error) {
    throw error;
  }
};
