import { NextRequest, NextResponse } from 'next/server';
import { getAPIkey, getBaseUrl } from '../config';
import { DestinyProfileResponse } from './types/bff-types';
import { toCharactersDataForDisplay, toProfileDataForDisplay } from './utils';
import {
  CharactersDataForDisplay,
  ProfileDataForDisplay,
} from './types/display-types';

const API_KEY = getAPIkey();
const BASE_URL = getBaseUrl();

/**
 * 取得する情報タイプ
 * Destiny.DestinyComponentType
 * 100: Profile
 * 200: Characters
 */
const QUERY_PARAM = [100, 200];

/**
 * 選択したユーザーの詳細情報取得
 * @param req
 * @returns
 */
export const GET = async (
  req: NextRequest
): Promise<
  NextResponse<{
    profile: ProfileDataForDisplay;
    characters: CharactersDataForDisplay;
  }>
> => {
  const { searchParams } = req.nextUrl;
  const type = searchParams.get('type');
  const id = searchParams.get('id');

  if (!type || !id) {
    return new NextResponse('Missing type or id in searchParams', {
      status: 400,
    });
  }

  const params = new URLSearchParams({
    components: QUERY_PARAM.join(','),
  });

  const url = `${BASE_URL}Platform/Destiny2/${type}/Profile/${id}?${params.toString()}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-API-Key': API_KEY,
    },
  });

  const result = (await response.json()) as DestinyProfileResponse;

  const obj = {
    profile: toProfileDataForDisplay(result.Response.profile.data),
    characters: toCharactersDataForDisplay(result.Response.characters.data),
  };

  return NextResponse.json(obj);
};
