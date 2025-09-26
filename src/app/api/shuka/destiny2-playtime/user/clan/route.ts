import { NextRequest, NextResponse } from 'next/server';
import { getAPIkey, getBaseUrl } from '../../config';
import { toGroupForDisplay } from './utils';
import { GroupForDisplay } from './types/display-types';

const API_KEY = getAPIkey();
const BASE_URL = getBaseUrl();

/**
 * 選択したユーザーのクラン情報取得
 * @param req
 * @returns
 */
export const GET = async (
  req: NextRequest
): Promise<NextResponse<GroupForDisplay>> => {
  const { searchParams } = req.nextUrl;
  const type = searchParams.get('type');
  const id = searchParams.get('id');

  if (!type || !id) {
    return new NextResponse('Missing type or id in searchParams', {
      status: 400,
    });
  }

  const url = `${BASE_URL}Platform/GroupV2/User/${type}/${id}/0/1`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-API-Key': API_KEY,
    },
  });

  const result = await response.json();

  // clan 未所属
  if (!Array.isArray(result.Response.results) || !result.Response.results[0]) {
    const init: GroupForDisplay = { name: '', avatarPath: '', bannerPath: '' };
    return NextResponse.json(init);
  }

  const groupForDisplay = toGroupForDisplay(result.Response.results[0].group);

  return NextResponse.json(groupForDisplay);
};
