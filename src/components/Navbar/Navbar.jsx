import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <ul className='text-2xl font-bold'>
        <li className='underline'>
          <Link to='/about'>About</Link>
        </li>
        <li className='underline'>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </nav>
  )
}
