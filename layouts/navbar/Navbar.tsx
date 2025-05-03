import Image from 'next/image'
import Link from 'next/link'
import NavbarOptions from './NavbarOptions'
import PrimaryNavList from './PrimaryNavList'

const Navbar = () => {
  return (
    <nav className='hidden md:block w-full h-full md:px-28 md:py-5 p-5'>
      <div className='w-full h-full flex items-center'>
        <div className='md:w-3/12 h-full flex items-center'>
          <Link href={'/'} className='w-fit h-full flex items-center'>
            <Image
              src={'/navbar-brand.png'}
              alt='WonderTax'
              width={230}
              height={50}
              className=''
            />
          </Link>
        </div>

        <div className='w-6/12 h-full'>
          <PrimaryNavList />
        </div>

        <div className='w-3/12 h-full'>
          <NavbarOptions />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
