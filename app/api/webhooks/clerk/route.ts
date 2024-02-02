import { WebhookEvent } from '@clerk/nextjs/server';
import { headers } from 'next/headers';
import { Webhook } from 'svix';

import { db } from '@/lib/db';

export async function POST(req: Request) {
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;

    if (!webhookSecret) {
        throw new Error('Please add secret from clerk dashboard');
    }

    // Get the headers
    const headerPayload = headers();
    const svix_id = headerPayload.get('svix-id');
    const svix_timestamp = headerPayload.get('svix-timestamp');
    const svix_signature = headerPayload.get('svix-signature');

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
            status: 400,
        });
    }

    // Get the body
    const payload = await req.json();
    const body = JSON.stringify(payload);

    // Create a new Svix instance with your secret.
    const wh = new Webhook(webhookSecret);

    let evt: WebhookEvent;

    // Verify the payload with the headers
    try {
        evt = wh.verify(body, {
            'svix-id': svix_id,
            'svix-timestamp': svix_timestamp,
            'svix-signature': svix_signature,
        }) as WebhookEvent;
    } catch (error) {
        console.error('Error verifying webhook:', error);
        return new Response('Error occured', {
            status: 400,
        });
    }

    // Get the ID and type
    const eventType = evt.type;
    const { id } = evt.data;

    if (!id) {
        return new Response('Error occured -- no id', {
            status: 400,
        });
    }

    switch (eventType) {
        case 'user.created': {
            console.log('User created with ID:', id);
            await db.notebook.create({
                data: {
                    userId: id,
                },
            });
            break;
        }
        case 'user.updated': {
            console.log('User updated with ID:', id);
            break;
        }
        case 'user.deleted': {
            console.log('User deleted with ID:', id);
            await db.notebook.delete({
                where: {
                    userId: id,
                },
            });
            break;
        }
        default: {
            console.log('Unknown event type');
            break;
        }
    }

    return new Response('Received', { status: 200 });
}

export async function GET() {
    return Response.json({ message: 'Hello' });
}
