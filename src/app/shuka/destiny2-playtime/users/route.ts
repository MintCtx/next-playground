import { NextRequest, NextResponse } from 'next/server';
import { UserDetailInfoModel, UserSearchResponseDetail } from './types';
import { toUserDetailInfoModel } from './utility';

/**
 * RequestBodyの定義
 * 画面側にてqueryParamsとして使用
 */
type UserSearchRequestModel = {
  displayNamePrefix: string;
};

type PostUserResponse = {
  Response: UserSearchResponse;
};

type UserSearchResponse = {
  searchResults: UserSearchResponseDetail[];
};

/**
 * (外部API)検索したユーザー名で該当するユーザーリストを取得
 * @param req RequestBody: UserSearchRequestModel
 * @returns UserDetailInfoModel
 */
export const GET = async (
  req: NextRequest
): Promise<NextResponse<UserDetailInfoModel[]>> => {
  const apiKey = process.env.BUNGIE_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_BUNGIE_BASE_URL;
  const url = baseUrl + '/Platform/User/Search/GlobalName/0';

  const { searchParams } = req.nextUrl;
  const paramObject: UserSearchRequestModel = {
    displayNamePrefix: searchParams.get('name') ?? '',
  };
  const requestBody = JSON.stringify(paramObject);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'X-API-Key': apiKey!,
    },
    body: requestBody,
  });

  const result: PostUserResponse = await response.json();
  const resultForComponent: UserDetailInfoModel[] = toUserDetailInfoModel(
    result.Response.searchResults
  );

  return NextResponse.json(resultForComponent);
};
