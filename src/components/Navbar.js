import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

export default function Navbar() {
  return (
    <>
      <div className="h-23 bg-slate-900 text-white  leading-[6rem] text-2xl w-1/4 ">
        <i className="fa fa-spotify mr-5 "></i>
        Spotify
        <div className="text-left mx-20">
          <p className="hover:bg-gray-600 p-2.5"><HomeIcon className="mr-5"></HomeIcon>Trang chủ</p>
          <p className="hover:bg-gray-600 p-2.5"><SearchIcon className="mr-5"></SearchIcon>Search</p>
          <p className="hover:bg-gray-600 p-2.5"><LibraryMusicIcon className="mr-5"></LibraryMusicIcon>Your pbrary</p>
        <br />
        </div>
        
        </div>
    </>
  );
}
