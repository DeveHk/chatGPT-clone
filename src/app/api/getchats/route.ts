import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    console.log("hey look this", id)
    const supabase = createClient();
    const { data: data } = await supabase.from("messages").select('*')
        .eq('p_id', id)
        .order('created_at', { ascending: true });;
    console.log(data)
    return NextResponse.json(data, { status: 200 })
}

