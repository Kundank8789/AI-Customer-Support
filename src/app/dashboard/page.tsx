import DashboardClient from '@/src/components/DashboardClient'
import { getSession } from '@/src/lib/getSession'
import { redirect } from 'next/navigation'
import React from 'react'

async function page() {
  const session = await getSession()

  if (!session?.user?.id) {
    redirect("/") // or /login
  }

  return <DashboardClient ownerId={session.user.id} />
}

export default page