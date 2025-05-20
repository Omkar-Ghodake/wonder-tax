import Image from 'next/image'
import Link from 'next/link'
import NavbarOptions from './NavbarOptions'
import PrimaryNavList from './PrimaryNavList'

const Navbar = () => {
  return (
    <nav className='hidden md:block w-full h-full bg-white text-lg shadow-md'>
      <div className='w-full h-full flex items-center justify-evenly p-5 gap-5'>
        <div className='md:w-fit h-full flex items-center'>
          <Link href={'/'} className='w-fit h-full flex items-center'>
            <Image
              src={'/navbar-brand.png'}
              alt='WonderTax'
              width={220}
              height={50}
              className=''
            />
          </Link>
        </div>

        <div className='w-fit h-full flex items-center justify-center gap-10'>
          <PrimaryNavList />

          <NavbarOptions />
        </div>

        {/* <div className='w-fit h-full'></div> */}
      </div>
    </nav>
  )
}

export default Navbar
