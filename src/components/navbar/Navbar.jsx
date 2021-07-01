import "./navbar.scss";
import React, { useState } from 'react';
import { Notifications, Search, ArrowDropDown } from "@material-ui/icons";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img 
                    src="data:image/png;base64,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" 
                    alt="" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span> Travel </span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="https://wallpaperhook.com/wp-content/uploads/2020/11/HD-dc-netflix-sweet-tooth-art-1920x1080-From-WallpaperHook.com-For-Free.jpg" alt=""/>
                <div className="profile">
                 <ArrowDropDown className="icon"/>
                 <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>     
                </div>    
                </div>
                
                </div>
            </div>
        </div>
    )
}

export default Navbar; 
