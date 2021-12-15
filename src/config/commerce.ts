/* eslint-disable max-len */
import Commerce from '@chec/commerce.js';

interface ICommerce {
  publicKey: string;
  secretKey: string;
}

const apiKeys: ICommerce = {
  publicKey: String(process.env.COMMERCE_PUBLIC_KEY),
  secretKey: String(process.env.COMMERCE_PRIVATE_KEY),
};

const commerce = new Commerce(apiKeys.publicKey);

export default commerce;
