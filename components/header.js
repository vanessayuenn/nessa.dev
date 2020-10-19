import { useRouter } from 'next/router'
import classnames from 'classnames'
import Link from 'next/link'
import Logo from './logo'

export default function Header() {

  const router = useRouter()

  const NavLink = ({ href, displayName }) => {
    return (
      <Link href={href}>
        <a className={classnames(
          "ml-2 md:ml-6 px-2 md:px-4 py-1 border-b-2",
          `${router.pathname === href ? 'border-red' : 'border-light'}`)}
        >{displayName}</a>
      </Link>
    )
  }


  return (
    <div className="my-6 md:my-10 flex flex-1">
      <Link href="/">
        <a><Logo /></a>
      </Link>
      <div className="font-display flex flex-grow items-end justify-end">
        <NavLink href="/projects" displayName="Projects" />
        <NavLink href="/posts" displayName="Fragments" />
      </div>
    </div>
  )
}
