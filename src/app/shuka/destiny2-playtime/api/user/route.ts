import { NextResponse } from 'next/server';
import { UserSearchResponse } from '../api-model';

export const POST = async (req: Request): Promise<NextResponse> => {
  const apiKey = process.env.BUNGIE_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_BUNGIE_BASE_URL;
  const url = baseUrl + '/Platform/User/Search/GlobalName/0';

  const body = await req.json();

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'X-API-Key': apiKey!,
    },
    body: JSON.stringify(body),
  });

  const result: UserSearchResponse = await response.json();

  return NextResponse.json(result);
};
