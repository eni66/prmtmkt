"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Layout/Header";
import Hero from "@/components/Route/Hero";
import About from "@/components/Route/About";
import Image from "next/image";
import { styles } from "@/utils/styles";
import PromptCard from "@/components/Prompts/PromptCard";
import BestSellers from "@/components/Shop/BestSellers";
import Future from "@/components/Route/Future";
import Partners from "@/components/Route/Partners";
import SellersBanner from "@/components/Shop/SellersBanner";
import Footer from "@/components/Layout/Footer";
import { Divider } from "@nextui-org/react";
import { User } from "@clerk/nextjs/server";
import PromptCardLoader from "@/utils/PromptCardLoader";
import ShopBanner from "@/components/Shop/ShopBanner";

type Props = {
  user: User | undefined;
  isSellerExist: boolean | undefined;
};

const RoutePage = ({ user, isSellerExist }: Props) => {
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="shop-banner">
        <Header activeItem={3} user={user} isSellerExist={isSellerExist} />
        <ShopBanner title="Contact Us" />
      </div>
      <div>
        <div className="w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto">
          
        <div className="w-full relative grid md:grid-cols-2 md:py-8">
            <div className="col-span-1 w-full md:w-[60%] md:mt-5 px-5 md:px-[unset]">
                <h5 className={`${styles.heading} mb-5 !leading-[50px]`}>
                For Inquiries
                </h5>
                <p className={`${styles.paragraph} pb-5`}>
                +1 360-799-5626
                </p>
                <p className={`${styles.paragraph} pb-5`}>
                We are available 24/7 to make your experience on Promptsuperette as hitch free as possible.
            </p>
            </div>
      <div className="col-span-1 my-10 md:mt-[unset]">
        <Image
          src={"https://pixner.net/aikeu/assets/images/craft-thumb.png"}
          alt=""
          width={600}
          height={600}
          priority
        />
      </div>
    </div>

          <div>
            <Divider className="bg-[#ffffff23]" />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoutePage;
