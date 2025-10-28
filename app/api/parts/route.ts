import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get("search")
  const category = searchParams.get("category")

  const supabase = await createClient()

  let query = supabase
    .from("parts")
    .select(`
      *,
      categories:category_id (
        id,
        name
      )
    `)
    .order("created_at", { ascending: false })

  if (search) {
    query = query.or(`name.ilike.%${search}%,part_number.ilike.%${search}%,description.ilike.%${search}%`)
  }

  if (category) {
    query = query.eq("category_id", category)
  }

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}
