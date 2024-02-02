'use server';

import * as z from 'zod';

import { db } from '@/lib/db';
import { HolderSchema } from '@/schemas';
import { auth } from '@clerk/nextjs';

export const register = async (values: z.infer<typeof HolderSchema>) => {
    const validateFields = HolderSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: 'Invalid fields' };
    }

    const { userId } = auth();

    if (!userId) {
        return { error: 'User not found' };
    }

    const { name, nickname, pronouns } = validateFields.data;

    await db.holder.create({
        data: {
            name,
            nickname,
            pronouns,
            userId,
        },
    });

    return { success: 'Holder created successfully!' };
};
