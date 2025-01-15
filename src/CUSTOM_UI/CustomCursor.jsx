import React, { useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  useEffect(() => {
    const root = document.querySelector('html');

    // Create real cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    root.appendChild(cursor);

    // Create following extra cursor element
    const follower = document.createElement('div');
    follower.classList.add('cursor', 'cursor__follower');
    root.appendChild(follower);

    // Positions for cursor and follower
    let cursorPos = { x: 0, y: 0 };
    let followerPos = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      cursorPos.x = e.clientX;
      cursorPos.y = e.clientY;
      setPosition(cursor, cursorPos);
    };

    const setPosition = (element, pos) => {
      element.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    };

    const animateFollower = () => {
      // Apply lagging effect
      followerPos.x += (cursorPos.x - followerPos.x) * 0.1; // Adjust the multiplier for more or less lag
      followerPos.y += (cursorPos.y - followerPos.y) * 0.1;

      setPosition(follower, followerPos);
      requestAnimationFrame(animateFollower); // Continuously update the follower position
    };

    root.addEventListener('mousemove', handleMouseMove);
    animateFollower();

    // Cleanup on component unmount
    return () => {
      root.removeEventListener('mousemove', handleMouseMove);
      root.removeChild(cursor);
      root.removeChild(follower);
    };
  }, []);

  return null;
};

export default CustomCursor;
