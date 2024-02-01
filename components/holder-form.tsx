'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Card, CardTitle, CardContent, CardHeader } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { HolderSchema } from '@/schemas';
import { Input } from './ui/input';
import { Button } from './ui/button';

export const HolderForm = () => {
    const form = useForm<z.infer<typeof HolderSchema>>({
        resolver: zodResolver(HolderSchema),
        defaultValues: {
            name: '',
            nickname: '',
            pronouns: '',
        },
    });

    const onSubmit = (values: z.infer<typeof HolderSchema>) => {
        console.log(values);
    };

    return (
        <Card className='w-[600px] shadow-md bg-amber-100'>
            <CardTitle className='px-4 pt-4'>Before we being</CardTitle>
            <CardHeader>Tell us a little about yourself...</CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                        <div className='space-y-3'>
                            <FormField
                                control={form.control}
                                name='name'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Whats your name?</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder='Tabuki Hana' className='bg-transparent border-black' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='name'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>What do you prefer to be called?</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder='Tabu' className='bg-transparent border-black' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='name'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>What are your pronouns?</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder='They/Them, She/Her, He/Him, etc.' className='bg-transparent border-black' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className='flex justify-end'>
                            {/* <Button type='submit' className='w-24' variant='ghost'>
                            Skip
                        </Button> */}
                            <Button type='submit' className='w-24'>
                                Continue
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};
