import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function AdminPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <form action="/auth/signout" method="post">
            <Button variant="outline">Sign Out</Button>
          </form>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Parts Management</h2>
            <p className="text-gray-600 mb-4">Manage BMW spare parts inventory</p>
            <Link href="/admin/parts">
              <Button>View Parts</Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Categories</h2>
            <p className="text-gray-600 mb-4">Manage part categories</p>
            <Link href="/admin/categories">
              <Button>View Categories</Button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Contact Messages</h2>
            <p className="text-gray-600 mb-4">View customer inquiries</p>
            <Link href="/admin/contacts">
              <Button>View Messages</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
