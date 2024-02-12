'use server';

import * as z from 'zod';
import { auth } from '@clerk/nextjs';

import { db } from '@/lib/db';
import { NewPageSchema } from '@/schemas';

export const newPage = async (values: z.infer<typeof NewPageSchema>) => {
    const { userId } = auth();

    if (!userId) {
        return { error: 'Not authorized' };
    }

    const notebook = await db.notebook.findUnique({
        where: { userId },
    });

    if (!notebook) {
        return { error: 'Notebook not found' };
    }

    const validateFields = NewPageSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: 'Invalid fields' };
    }

    const { name, nickname, pronouns } = validateFields.data;

    await db.page.create({
        data: {
            userId,
            notebookId: notebook.id,
            name,
            nickname,
            pronouns,
        },
    });

    return { success: 'Page created successfully' };
};
