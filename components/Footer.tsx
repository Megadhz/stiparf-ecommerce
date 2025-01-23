import React from "react";
import Container from "./container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { Input } from "./ui/input";
import { categoriesData, quickLinksData } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#111111] border-t border-[#8B6D2F]">
      <Container>

      <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo>Stiparf</Logo>
            <p className="text-[#886d36] text-sm">Discover the scent that defines you. Explore our collection of exclusive fragrances, crafted to evoke emotions and leave a lasting impression. An olfactory journey through refined notes and unique accords.
            </p>
            <SocialMedia className="text-golddark"
            iconClassName="border-golddark hover:border-whitegold hover:text-whitegold" tooltipClassName="bg-golddark text-whitegold"/>
          </div>
          <div>
            <h3 className="font-semibold text-whitegold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-3">
              {quickLinksData?.map((item) => (
              <Link 
              key={item?.title} 
              href={item?.href}
              className="text-[#886d36] hover:text-whitegold text-sm font-medium hoverEffect"
              > 
              {item?.title}
              </Link>))}
            </div>
          </div>
          <div>
          <h3 className="font-semibold text-whitegold mb-4">Categories</h3>
            <div className="flex flex-col gap-3">
              {categoriesData?.map((item) => (
              <Link 
              key={item?.title} 
              href={`/category${item?.href}`}
              className="text-[#886d36] hover:text-whitegold text-sm font-medium hoverEffect"
              > 
              {item?.title}
              </Link>))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-whitegold mb-4">Newsletter</h3>
            <p className="text-[#886d36] text-sm mb-4">
              Subscribe to our newsletter to receive updates and exclusive offers.
            </p>
            <form className="space-y-3">
              <Input 
              type='email' 
              placeholder='Enter your email' 
              required 
              className='w-full px-4 py-2 border border-[#886d36] rounded-lg focus:outline-none text-whitegold focus:ring-2 focus:ring-[#886d36]' 
            />
            <button type='submit' className="w-full bg-golddark text-white px-4 py-2 rounded-lg hover:bg-[#886d36] transition-colors">Subscribe</button>
            </form>
          </div>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
