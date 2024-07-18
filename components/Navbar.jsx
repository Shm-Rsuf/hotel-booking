import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import Logout from "./auth/Logout";

const Navbar = async ({ sideMenu }) => {
  const session = await auth();
  console.log(session);

  return (
    <nav>
      <Link href='/'>
        <Image
          src='/stayswift.svg'
          alt='Stay Swift Logo'
          width={200}
          height={200}
        />
      </Link>

      <ul>
        <li>
          <Link href='#'>Recommended Places</Link>
        </li>

        <li>
          <Link href='#'>About Us</Link>
        </li>

        <li>
          <Link href='#'>Contact us</Link>
        </li>

        {sideMenu && (
          <>
            <li>
              <Link href='/bookings'>Bookings</Link>
            </li>
            <li>
              {session?.user ? (
                <>
                  <span>{session?.user.name} | </span>
                  <Logout className='login bg-rose-500' />
                </>
              ) : (
                <Link href='/login' className='login'>
                  Login
                </Link>
              )}
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
