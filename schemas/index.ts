import * as z from 'zod';

export const HolderSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
  }),
  nickname: z.string({
    required_error: 'Nickname is required',
  }),
  pronouns: z.string({
    required_error: 'Pronouns are required',
  }),
});
