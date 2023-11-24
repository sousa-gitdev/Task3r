import './header.css'
import React, { useEffect } from 'react';
import Logo from '../Logo/logo';


const Header = ({onClearBoards}) => {
    useEffect(() => {
        const clearBoards = document.getElementById('Clear-Boards');
        const sortBoards = document.getElementById('Sort-Boards');

        const hideSortBoards = () => {
            sortBoards.style.display = 'none';
        };

        const hideClearBoards = () => {
            clearBoards.style.display = 'none';
        };

        const showSortBoards = () => {
            sortBoards.style.display = 'block'; 
        };

        const showClearBoards = () => {
            clearBoards.style.display = 'block'; 
            clearBoards.style.marginRight = '0px';
        };

        clearBoards.addEventListener('mouseover', hideSortBoards);
        clearBoards.addEventListener('mouseout', showSortBoards);

        sortBoards.addEventListener('mouseover', hideClearBoards);
        sortBoards.addEventListener('mouseout', showClearBoards);

        return () => {
            clearBoards.removeEventListener('mouseover', hideSortBoards);
            clearBoards.removeEventListener('mouseout', showSortBoards);

            sortBoards.removeEventListener('mouseover', hideClearBoards);
            sortBoards.removeEventListener('mouseout', showClearBoards);
        };
    }, []);

    return (
        <div id="header">
            <div id="header-box">
                <div id="tool-box">
                    <h5 id="tool-box-text">Tool Box</h5>
                    <div id="box">
                        <div id="Sort-Boards" className="button">
                            Sort Boards
                        </div>
                        <div id="Clear-Boards" className="button" onClick={onClearBoards}>
                            Clear Boards
                        </div>
                    </div>
                </div>
                <div id="logo"><Logo /></div> {/* Include the Logo component */}
                <div id="load-download-box">
                    <div className="button">
                        Download
                    </div>
                    <div className="button">
                        Load
                    </div>
                </div>            
        </div>
    </div>
    );
};

export default Header;
