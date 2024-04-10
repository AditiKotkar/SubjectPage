import React from 'react';
import {Link } from 'react-router-dom';
import './App.css';
function App () {
  return (
    <div className="conten">
            <div className="yourSyllabus">
                <h1 className="Syllabus">Your Syllabus is here!</h1>
                <div className="img"></div>
            </div>
            <div className="chapter">
                <h1>Chapter Name</h1>
            </div>
            <div className="conteners">
                <div className="name">
                <Link to="/roman-numerals">
                    <h1>1.Roman Numerals</h1>
                </Link>
                </div>
                <div className="name">
                    <h1>2.Number Work</h1>
                </div>
                <div className="name">
                   <h1>3.Addition and Subtraction</h1>
                </div>
                <div className="name">
                    <h1>4.Circle</h1>
                </div>
                <div className="name">
                    <h1>5.Multiplication and Division</h1>
                </div>
                <div className="name">
                    <h1>6.Fractions</h1>
                </div>
                <div className="name">
                    <h1>7.Angles</h1>
                </div>
                <div className="name">
                    <h1>8.Multiples and Factors</h1>
                </div>
                <div className="name">
                    <h1>9.Decimal Fractions</h1>
                </div>
                <div className="name">
                    <h1>10.Measuring Time</h1>
                </div>
                <div className="name">
                    <h1>11.Problems on Measurement</h1>
                </div>
                <div className="name">
                    <h1>12.Perimeter and Area</h1>
                </div>
            </div>
        </div>
          
  );
}

export default App;
