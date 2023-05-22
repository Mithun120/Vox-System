import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.heading}>VOX SYSTEM</h1>
    </header>
  );
}

const styles = {
  header: {
    position: 'fixed', // make the header position fixed
    top: -30, // set the top position to 0
    left: 0, // set the left position to 0
    backgroundColor: 'skyblue', // change the background color to blue
    width: '100%', // set the width to cover from left to right of the screen
    height: '80px', // set the height of the header
    display: 'flex', // use flexbox for positioning
    justifyContent: 'center', // center the logo horizontally
    alignItems: 'center',
    margin:'10px'
  },
  heading: {
    color: 'white', // set the text color to white
    fontSize: '24px', // set the font size
  }
}

export default Header;
