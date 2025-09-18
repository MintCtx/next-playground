import { NextRequest, NextResponse } from 'next/server';
import { UserDetailInfo, UserSearchResponseDetail } from './types';
import { toUserDetailInfoModel } from './utils';
import { API_KEY, BASE_URL } from '../../destiny2-playtime/config';

/**
 * RequestBody
 */
type UserSearchRequestBody = {
  displayNamePrefix: string;
};

/**
 * ResponseBody
 */
type PostUserResponseBody = {
  Response: UserSearchResponseBody;
  ErrorCode: number;
  ThrottleSeconds: number;
  ErrorStatus: string;
  Message: string;
  MessageData: {};
};

/**
 * ユーザー検索結果
 */
type UserSearchResponseBody = {
  searchResults: UserSearchResponseDetail[];
  page: number;
  hasMore: boolean;
};

/**
 * (外部API)検索したユーザー名で該当するユーザーリストを取得
 * @param req RequestBody: UserSearchRequestModel
 * @returns UserDetailInfoModel
 */
export const GET = async (
  req: NextRequest
): Promise<NextResponse<UserDetailInfo[]>> => {
  const url = `${BASE_URL}/Platform/User/Search/GlobalName/0`;

  const { searchParams } = req.nextUrl;
  const displayNamePrefix = searchParams.get('name');

  if (!displayNamePrefix) {
    return new NextResponse('Internal Server Error', { status: 400 });
  }

  const requestBody: UserSearchRequestBody = {
    displayNamePrefix,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'X-API-Key': API_KEY!,
    },
    body: JSON.stringify(requestBody),
  });

  const result = (await response.json()) as PostUserResponseBody;
  const resultForComponent: UserDetailInfo[] = toUserDetailInfoModel(
    result.Response.searchResults
  );

  return NextResponse.json(resultForComponent);
};
