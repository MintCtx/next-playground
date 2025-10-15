import { NextResponse } from 'next/server';
import {
  ContentDefinition,
  FetchResponse,
  WorldComponentContentPath,
} from './types';
import { getBungieApiBaseUrl, requestBungieApi } from '../utils';

/**
 * BungieのManifestのバージョン
 */
let lastVerstion: string | undefined = undefined;

/**
 * 言語
 * TODO - 多言語対応
 */
const language = 'en';

/**
 * ハッシュ値のマッピング時に参照するDefinition名の一覧
 */
const components = [
  'DestinyClassDefinition',
  'DestinyGenderDefinition',
  'DestinyRaceDefinition',
  'DestinyRecordDefinition',
  'DestinyGuardianRankDefinition',
] as const;

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
 * @returns バージョンとDefinition
 */
export const GET = async (): Promise<NextResponse<ContentDefinition>> => {
  const endPoint = '/Platform/Destiny2/Manifest/';

  try {
    const response = await requestBungieApi({
      endPoint,
      method: 'GET',
      cache: 'no-store',
    });

    const data = (await response.json()) as FetchResponse;

    // バージョン確認
    const currentVersion = data.Response.version;
    const isLastestVersion = lastVerstion === currentVersion;

    // 最新バージョンの場合、更新しない
    if (isLastestVersion) {
      const lastestData = { isLastestVersion: true } as ContentDefinition;
      return NextResponse.json(lastestData, { status: 200 });
    } else {
      // 最新バージョンではない場合、各定義を更新する
      const worldContentPaths: WorldComponentContentPath =
        data.Response.jsonWorldComponentContentPaths;

      const definitiaonMap = await getContentManifest(worldContentPaths);

      // サーバでバージョン同期化
      lastVerstion = currentVersion;

      return NextResponse.json(definitiaonMap);
    }
  } catch (error) {
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
          datas[index] as { [key: string]: DestinyRecordItem }
        ).filter(([key, item]) => item.titleInfo?.hasTitle === true)
      );

      contents[component] = filteredObject;
      return;
    }

    contents[component] = datas[index];
  });

  return contents;
};
