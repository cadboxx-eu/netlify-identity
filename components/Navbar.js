import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

export default function Navbar() {
  const {user, authReady, login, logout} = useContext(AuthContext);

  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" width={50} height={48} />
        <h1>Gaming Vibes</h1>
        {/* {authReady && ( */}
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/guides"><a>Guides</a></Link></li>
            {!user && (
              <li onClick={login} className="btn">
                Login / Signup
              </li>
            )}
            {user && (
              <li>{user.email}</li>
            )}
            {user && (
              <li onClick={logout} className="btn">
                Logout
              </li>
            )}
          </ul>
        {/* )} */}
      </nav>
      <div className="banner">
        <Image src="/banner.jpg" width={966} height={276} />
      </div>
    </div>
  )
}
