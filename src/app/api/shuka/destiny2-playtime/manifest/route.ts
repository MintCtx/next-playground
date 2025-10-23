import { NextRequest, NextResponse } from 'next/server';
import {
  ContentDefinition,
  FetchResponse,
  WorldComponentContentPath,
} from './types';
import { getBungieApiBaseUrl, requestBungieApi } from '../utils';
import { components } from '@/app/shuka/destiny2-playtime/lib/manifest/constants';

/**
 * 言語
 * TODO - 多言語対応
 * 参照: https://nextjs.org/docs/15/app/guides/internationalization
 */
const language = 'en';

/**
 * Destiny Record Item Response
 * 称号のみフィルタリングする為のタイプ
 */
type DestinyRecordItem = {
  titleInfo?: { hasTitle?: boolean };
  [key: string]: unknown;
};

/**
 * BungieのManifestを取得
 * @param req localStorageのManifestバージョン
 * @returns
 */
export const GET = async (
  req: NextRequest
): Promise<NextResponse<ContentDefinition>> => {
  const endPoint = '/Platform/Destiny2/Manifest/';

  // localStorageのManifestバージョン
  const localVersion = req.headers.get('X-Manifest-Version');

  try {
    const response = await requestBungieApi({
      endPoint,
      method: 'GET',
    });

    const data = (await response.json()) as FetchResponse;

    // バージョン確認
    const currentVersion = data.Response.version;

    // 最新バージョンの場合、更新しない
    if (localVersion === currentVersion) {
      const lastestData = { isLastestVersion: true } as ContentDefinition;
      return NextResponse.json(lastestData, { status: 200 });
    }
    // 最新バージョンではない場合、各定義を更新する
    const worldContentPaths: WorldComponentContentPath =
      data.Response.jsonWorldComponentContentPaths;

    const definitiaonMap = await getContentManifest(worldContentPaths);
    definitiaonMap.version = currentVersion;

    return NextResponse.json(definitiaonMap);
  } catch (error: unknown) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};

/**
 * 各定義（Menifest）を取得
 * @param worldContentPaths Definition Name - Value(url)
 * @returns バージョンとDefinition
 */
const getContentManifest = async (
  worldContentPaths: WorldComponentContentPath
): Promise<ContentDefinition> => {
  // content毎、fetch実行
  const resultsByContent = await Promise.all(
    components.map((component) => {
      const url = new URL(
        worldContentPaths[language][component],
        getBungieApiBaseUrl()
      );
      return fetch(url);
    })
  );

  // fetch結果をjson化
  const datas: unknown[] = await Promise.all(
    resultsByContent.map((result) => result.json())
  );

  const contents: ContentDefinition = {};
  components.forEach((component, index) => {
    if (component === 'DestinyRecordDefinition') {
      // 「称号」のみフィルタリング
      const filteredObject = Object.fromEntries(
        Object.entries(
          datas.at(index) as { [key: string]: DestinyRecordItem }
        ).filter(([, item]) => item.titleInfo?.hasTitle === true)
      );

      contents[component] = filteredObject;
      return;
    }

    contents[component] = datas[index];
  });

  return contents;
};
