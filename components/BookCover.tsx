import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import BookCoverSvg from "./BookCoverSvg";

type BookCoverVarient="extraSmall" | "small" | "medium" | 'regular' | "wide"

const varientStyles:Record<BookCoverVarient,string>={
    extraSmall:'book-cover_extra_small',
    small:'book-cover_small',
    medium:'book-cover_medium',
    regular:'book-cover_regular',
    wide:'book-cover_wide',

}

interface props {
  className?: string;
  variant?: BookCoverVarient;
  coverColor: string;
  coverImage: string;
}

const BookCover = ({ variant="regular", className, coverColor="#012B48", coverImage, }: props) => {
  return <div className={cn
    ("relative transition-all duration-300 "
        ,varientStyles[variant],className)}>
            <BookCoverSvg coverColor={coverColor}/>

                <div className="absolute z-10" style={{ left:'12%',width:'87.5%',height:'88%'}}>
                    <Image
                    src={coverImage}
                    alt="bookcover"
                    fill

                    />


                </div>

        </div>
};

export default BookCover;
