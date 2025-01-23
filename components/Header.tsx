import React from "react";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import Container from "./container";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import { auth, currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Archive } from "lucide-react";
import { getMyOrders } from "@/sanity/helpers/queries";

const Header = async () => {
  const user = await currentUser();
  const { userId } = await auth();
  let orders = null
  if (userId) {
    orders = await getMyOrders(userId);
  }

  return (
    <header className=" border-b border-[#8B6D2F] py-5 sticky top-0 z-50 bg-[#111111]">
      <Container className="flex items-center justify-between gap-7 text-lightColor">
        <HeaderMenu/>
        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
          <MobileMenu />
          <Logo>Stiparf</Logo>
        </div>
        <div
          className="w-auto md:w-1/3 flex items-center
          justify-end gap-5"
        >
          <SearchBar />
          <CartIcon />
          <ClerkLoaded>
            <SignedIn>
              <Link href={"/orders"} className="group relative">
                <Archive className="w-5 h-5 text-whitegold group-hover:text-[#fcf2df79] hoverEffect" />
                <span className="absolute -top-1 -right-1 bg-[#111111] text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
                  {orders?.length ? orders?.length : 0}
                </span>
              </Link>
              <UserButton />
            </SignedIn>
            {!user && (
              <SignInButton mode="modal">
                <button className="text-sm font-semibold hover:text-darkColor hoverEffect">Login</button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
