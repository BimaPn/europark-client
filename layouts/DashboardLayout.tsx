import { authOptions } from '@/app/api/auth/[...nextauth]/nextOptions'
import TopSideBar from '@/components/dashboard/TopSideBar'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { getServerSession } from 'next-auth'

const DashboardLayout = async ({children}:{children:React.ReactNode}) => {
  const session = await getServerSession(authOptions)
  return (
    <div className='min-h-screen bg-sky-100'>
      <TopSideBar name={session?.user.name as string} avatar={session?.user.avatar as string} />
      <Box ml={{ base: 0, md: 60 }} className='ss:!p-4 !p-3'>
        {children}
      </Box>
    </div>
  )
}

export const PageTitle = ({title, className}:{title:string, className?:string}) => {
  return (
    <div className={`mb-4 sm:block hidden text-slate-600 ${className}`}>
      <h1 className='text-[28px] font-semibold'>{title}</h1>
    </div>
  )
}

export default DashboardLayout
