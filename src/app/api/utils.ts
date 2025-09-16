export const getBffApiUrl = (): string => {
  const bffApiUrl = process.env.BFF_API_URL;
  if (!bffApiUrl) {
    throw new Error('BFF_API_URL is not defined');
  }
  return bffApiUrl;
};
