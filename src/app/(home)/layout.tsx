import { inter } from '@/utils/fonts'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${inter.variable} font-inter`}>{children}</div>
}
