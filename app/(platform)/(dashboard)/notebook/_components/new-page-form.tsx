'use client';

import * as z from 'zod';
import { useTransition, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { NewPageSchema } from '@/schemas';
import { newPage } from '@/actions/new-page';

export const NewPageForm = () => {
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof NewPageSchema>>({
        resolver: zodResolver(NewPageSchema),
        defaultValues: {
            name: '',
            nickname: '',
            pronouns: '',
        },
    });

    const onSubmit = (values: z.infer<typeof NewPageSchema>) => {
        startTransition(() => {
            newPage(values)
        });
    };

    return (
        <Card className='w-[600px]'>
            <CardHeader className='flex items-center'>New Page Form</CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder='Your friends name' disabled={isPending} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='nickname'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nickname</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder='Your friends nickname' disabled={isPending} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='pronouns'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Pronouns</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder='Your friends pronouns' disabled={isPending} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button type='submit'>
                            Add
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};
