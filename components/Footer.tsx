import { collections, navigations, socialMedia } from "@/constants/list"
import { Box, Center, Icon } from "@chakra-ui/react"
import Link from "next/link"

const Footer = () => {
  return (
  <footer className="bg-black pb-6 pt-10 px-6 text-white">
    <Box className="boxWidth flex flex-col gap-14">
      <Box className="grid grid-cols-4 mb-12">
        <Box>
            <Link href="/" className="font-bold text-2xl flex items-center gap-1">
                EuroPark
            </Link>
        </Box>

        <Box>
          <span className="font-medium">Collections</span>
          <ul className="flex flex-col gap-4 mt-4 text-sm text-gray-300">
            {collections.map(item => (
            <li key={item.label}>
              <Link href={item.link}>{item.label}</Link>
            </li>
            ))}
          </ul>
        </Box>
        <Box>
          <span className="font-medium">Navigation</span>
          <ul className="flex flex-col gap-4 mt-4 text-sm text-gray-300">
            {navigations.map(item => (
            <li key={item.label}>
              <Link href={item.link}>{item.label}</Link>
            </li>
            ))}
          </ul>
        </Box>
        <Box>
          <span className="font-medium">Follow Us</span>
          <ul className="flex items-center justify-start gap-4 mt-2">
            {socialMedia.map(item => (
            <li key={item.link}>
              <Link href={item.link}>
                <Icon as={item.icon} className="text-5xl" />
              </Link>
            </li>
            ))}
          </ul>
        </Box>
      </Box>

      <Center className=" text-sm text-center">
        Created at 2023 By Mr.B Citamiang
      </Center>
    </Box>
  </footer>
  )
}

export default Footer
