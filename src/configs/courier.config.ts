import { CourierClient } from '@trycourier/courier';

const courier = new CourierClient({
  authorizationToken: process.env.COURIER_API_KEY!.trim(),
});

export default courier;
