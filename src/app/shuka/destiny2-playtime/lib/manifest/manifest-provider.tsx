'use client';

import { ContentDefinition } from '@/app/api/shuka/destiny2-playtime/manifest/types';
import { useEffect, useState } from 'react';
import { ManifestContext } from './manifest-context';
import { DEFINITION, DEFINITION_VERSION } from './constants';

/**
 * localStorageからManifestを取得
 * @returns Stateに格納するManifest
 */
const loadManifestFromCache = (): ContentDefinition | null => {
  const cached = localStorage.getItem(DEFINITION);
  if (!cached) return null;
  try {
    return JSON.parse(cached);
  } catch {
    return null;
  }
};

/**
 * localStorageにバージョンとデータを格納する
 * @param version Manifestバージョン
 * @param manifestData Manifest本データ
 */
const updateManifestCache = (
  version: string | undefined,
  manifestData: ContentDefinition
) => {
  localStorage.setItem(DEFINITION_VERSION, version ?? '');
  localStorage.setItem(DEFINITION, JSON.stringify(manifestData));
};

const ManifestProvider = ({ children }: { children: React.ReactNode }) => {
  const [manifest, setManifest] = useState<ContentDefinition | null>(null);

  // BungieのManifestを取得
  useEffect(() => {
    // アンマウントされた時、setStateを実行しないため
    // TODO: 他にいい方法がある場合、切り替え
    let isMounted = true;

    /**
     * 安全にstateを格納する
     * @param data manifest(state)に格納する値
     */
    const setManifestSafe = (data: ContentDefinition | null) => {
      if (isMounted) setManifest(data);
    };

    /**
     *　BFFで初期Manifestを取得し、localStorageとstateを設定する
     * @returns
     */
    const getInitialManifest = async () => {
      // TODO: IndexedDB検討

      // localStorageにデータがあった場合、stateに格納
      const parsed = loadManifestFromCache();
      setManifestSafe(parsed);

      try {
        // localStorageからバージョンを取得
        const localVersion = localStorage.getItem(DEFINITION_VERSION) ?? '';

        // バージョンをBFFに送信
        const res = await fetch(`/api/shuka/destiny2-playtime/manifest`, {
          method: 'GET',
          headers: {
            'X-Manifest-Version': localVersion,
          },
        });

        if (res.status === 500) {
          setManifestSafe(null);
          return;
        }

        const data = (await res.json()) as ContentDefinition;
        const { version, isLastestVersion, ...dataWithoutVersion } = data;

        // バージョンが一致しない場合、localStorageとstate更新
        if (!isLastestVersion) {
          updateManifestCache(version, dataWithoutVersion);
          setManifestSafe(dataWithoutVersion);
        }
      } catch (error: unknown) {
        setManifestSafe(null);
      }
    };

    getInitialManifest();

    // アンマウントの場合、setStateを防止するため
    return () => {
      isMounted = false;
    };
  }, []);

  return <ManifestContext value={{ manifest }}>{children}</ManifestContext>;
};

export default ManifestProvider;
