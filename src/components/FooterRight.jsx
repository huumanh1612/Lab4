import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCirclePlus, 
    faCircleCheck, 
    faHeart, 
    faCommentDots, 
    faBookmark, 
    faShare 
} from '@fortawesome/free-solid-svg-icons';
import './FooterRight.css';

function FooterRight({ likes, comments, saves, shares, profilePic }) {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [userAddIcon, setUserAddIcon] = useState(faCirclePlus);

    const handleUserAddClick = () => {
        setUserAddIcon(faCircleCheck);
        setTimeout(() => {
            setUserAddIcon(null);
        }, 3000); // Change the delay time (in milliseconds) as needed
    };

    // Function to convert likes count to a number
    const parseLikesCount = (count) => {
        if (typeof count === 'string') {
            if (count.endsWith('k')) {
                return parseFloat(count) * 1000;
            }
            return parseInt(count);
        }
        return count;
    };

    // Function to format likes count
    const formatLikesCount = (count) => {
        if (count >= 10000) {
            return (count / 1000).toFixed(1) + 'k';
        }
        return count;
    };

    const handleLikeClick = () => {
        setLiked((prevLiked) => !prevLiked);
    };

    return (
      <div className="footer-right">
          <div className="sidebar-icon">
              {/* Displaying the user profile picture */}
              {profilePic ? (
                  <img
                      src={profilePic}
                      className="userprofile"
                      alt="Profile"
                      style={{ width: '45px', height: '45px', color: '#616161' }}
                  />
              ) : null}
              {/* The user add icon */}
              <FontAwesomeIcon
                  icon={userAddIcon}
                  className="useradd"
                  style={{ width: '15px', height: '15px', color: '#FF0000' }}
                  onClick={handleUserAddClick}
              />
          </div>
  
          <div className="sidebar-icon">
              {/* The heart icon for liking */}
              <FontAwesomeIcon
                  icon={faHeart}
                  style={{
                      width: '35px',
                      height: '35px',
                      color: liked ? '#FF0000' : 'white',
                  }}
                  onClick={handleLikeClick}
              />
              {/* Displaying the formatted likes count */}
              <p>{formatLikesCount(parseLikesCount(likes)) + (liked ? 1 : 0)}</p>
          </div>
  
          <div className="sidebar-icon">
              {/* The comment icon */}
              <FontAwesomeIcon
                  icon={faCommentDots}
                  style={{ width: '35px', height: '35px', color: 'white' }}
              />
              {/* Displaying the number of comments */}
              <p>{comments}</p>
          </div>
  
          <div className="sidebar-icon">
              {/* The bookmark icon when saved */}
              {saved ? (
                  <FontAwesomeIcon
                      icon={faBookmark}
                      style={{
                          width: '35px',
                          height: '35px',
                          color: '#ffc107',
                      }}
                      onClick={() => setSaved(false)}
                  />
              ) : (
                  <FontAwesomeIcon
                      icon={faBookmark}
                      style={{
                          width: '35px',
                          height: '35px',
                          color: 'white',
                      }}
                      onClick={() => setSaved(true)}
                  />
              )}
              {/* Displaying the number of saves */}
              <p>{saved ? saves + 1 : saves}</p>
          </div>
  
          <div className="sidebar-icon">
              {/* The share icon */}
              <FontAwesomeIcon
                  icon={faShare}
                  style={{ width: '35px', height: '35px', color: 'white' }}
              />
              {/* Displaying the number of shares */}
              <p>{shares}</p>
          </div>
  
          <div className="sidebar-icon record">
              {/* Displaying the record icon */}
              <img
                  src="https://static.thenounproject.com/png/934821-200.png"
                  alt="Record Icon"
              />
          </div>
      </div>
  );
  
}

export default FooterRight;
