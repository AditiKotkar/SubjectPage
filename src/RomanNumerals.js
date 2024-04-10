import React, {useState} from 'react';
import { faSearch, faEllipsisVertical, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './RomanNumerals.css';

const RomanNumerals = () => {
    const [isActive, setIsActive] = useState(false);
    const [documentText, setDocumentText] = useState('');

    const toggleMenu = (menu) => {
        setIsActive(!isActive);
        fetchDocument(menu);
    };
    const fetchDocument = (menu) => {
        let endpoint = '';
        switch (menu) {
            case 'Introduction':
                endpoint = '/introduction';
                break;
            case 'Rules':
                endpoint = '/rules';
                break;
            case 'set1':
                endpoint = '/set1';
                break;
            default:
                return;
        }
    fetch(endpoint)
        .then(response => response.text())
        .then(text => {
            setDocumentText(text);
        })
    };
  return (
<div className='RomnNo'>
    <div className="bgimg">
        <nav className="navbar">
            <div className="max-width">
                <ul className={`menu ${isActive ? 'active' : ''}`}>
                    <li><a href="#Introduction" className="menu-btn" onClick={() => fetchDocument('Introduction')}>Introduction</a></li>
                    <li><a href="#Basic" className="menu-btn">Basic</a></li>
                    <li><a href="#Rules" className="menu-btn" onClick={() => fetchDocument('Rules')}>Rules</a></li>
                    <li><a href="#set1" className="menu-btn" onClick={() => fetchDocument('set1')}>Problem set 1</a></li>
                    <li><a href="#set2" className="menu-btn">Problem set 2</a></li>
                    <li><a href="#set3" className="menu-btn">Problem set 3</a></li>
                    <li><a href="#Example" className="menu-btn">Example</a></li>
                    <li><a href="#Video" className="menu-btn">Video Explanation</a></li>
                    <li><a href="#Basic1" className="menu-btn">1.Basic</a></li>
                    <li><a href="#Introduction2" className="menu-btn">2.Introduction</a></li>
                    <li><a href="#Solution3" className="menu-btn">3.Problem set Solution</a></li>
                    <li><a href="#Solution4" className="menu-btn">4.Problem set Solution</a></li>
                    <li><a href="#example" className="menu-btn">5.Real time Example</a></li>
                </ul>
                <div className="menu-btn" onClick={toggleMenu} >
                    <FontAwesomeIcon icon={isActive ? faTimes : faEllipsisVertical} />
                </div>
            </div>
        </nav>
        <div className='Roman1'>
            <h1>1.Roman Numerals</h1>
            <FontAwesomeIcon icon={faSearch} className='search'></FontAwesomeIcon>
            <input className='Search' type="search" id="name" placeholder="Search By Name"></input>    
        </div>
        <div className='content'>
            <div className='intro' onClick={toggleMenu}>
            <div>{documentText}</div>
            </div>
        </div>
    </div>
</div>
  );
}
export default RomanNumerals;