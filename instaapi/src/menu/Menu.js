import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./menu.css"




function Menu() {
    return (
        <div className='menu'>
            <img src='https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png' alt='instagramLogo' className='logo'>
            </img>

            <div className='botoes'>
                <button className='botao'>
                    <HomeIcon />
                    <span>Pagina Inicial</span>
                </button>

                <button className='botao'>
                    <SearchIcon />
                    <span>Pesquisar</span>
                </button>

                <button className='botao'>
                    <ExploreIcon />
                    <span>Explorar</span>
                </button>

                <button className='botao'>
                    <SlideshowIcon />
                    <span>Reels</span>
                </button>

                <button className='botao'>
                    <ChatIcon />
                    <span>Mensagens</span>
                </button>

                <button className='botao'>
                    <FavoriteBorderIcon />
                    <span>Notificações</span>
                </button>

                <button className='botao'>
                    <AddCircleOutlineIcon />
                    <span>Criar</span>
                </button>

                <button className='botao'>
                    <AccountCircleIcon />
                    <span>Perfil</span>
                </button>

            </div>

        </div>
    )
}

export default Menu