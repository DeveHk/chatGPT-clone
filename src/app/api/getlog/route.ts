import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    console.log("hey look this", id)
    const supabase = createClient();
    const { data: data } = await supabase.from("chats").select('*')
        .eq('p_id', id)
        .order('created_at', { ascending: true });;
    console.log(data)
    return NextResponse.json(data, { status: 200 })
}



















/*if (!name || !email) {
   return res.status(400).json({ error: "Name and email are required" });
 }
 const client = await clientPromise;
 const db = client.db();
 const collection = db.collection("users");
 const result = await collection.insertOne({ name, email });

 return NextResponse.json({ error: 'hello ji..kesse ho' }, { status: 500 })*/












//const { name, email } = request.body;

/*if (!name || !email) {
  return res.status(400).json({ error: "Name and email are required" });
}

const client = await clientPromise;
const db = client.db();
const collection = db.collection("users");

const result = await collection.insertOne({ name, email });

return NextResponse.json({ error: 'hello ji..kesse ho' }, { status: 500 })*/
