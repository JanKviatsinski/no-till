import Link from 'next/link'

interface LinkWrapProp {
  children: any,
  href: string
}

export const LinkWrap = ({ children, href }: LinkWrapProp) =>
  <Link href={`${href}`}>
    <a>
      <span className='border-b-2'>
        {children}
      </span>
    </a>
  </Link>
