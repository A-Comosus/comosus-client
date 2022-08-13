import axios from 'axios';

/* This is for future pinata functions. Do not delete please. */
const key = '8ff788c041f7eb3ca186';
const secret =
  '2830c6d10389a171d7d772a5ba7c6224b02dbd14344fdeab7f72d53cdf5a112b';

export const pinJSONToIPFS = async (JSONBody: any) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  return axios
    .post(url, JSONBody, {
      headers: {
        pinata_api_key: key,
        pinata_secret_api_key: secret,
      },
    })
    .then(function (response) {
      return {
        status: true,
        pinataUrl:
          'https://gateway.pinata.cloud/ipfs/' + response.data.IpfsHash,
      };
    })
    .catch(function (error) {
      return {
        status: false,
        message: error.message,
      };
    });
};
