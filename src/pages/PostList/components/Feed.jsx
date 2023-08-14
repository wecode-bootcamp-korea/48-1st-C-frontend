import React, { useState } from 'react';
import './Feed.scss';
import FeedItem from './FeedItem';

const Feed = ({ feedData, handleRemove }) => {
  const [heartToggle, setHeartToggle] = useState(false);
  const [like, setLike] = useState(0);
  const [hideFeedContent, setHideFeedContent] = useState(true);

  const feedDate = new Date(feedData.createdAt).toLocaleDateString();

  const handleHeartToggle = () => {
    setHeartToggle(!heartToggle);
    setLike(heartToggle ? like - 1 : like + 1);
  };

  const handleHideFeedContent = () => {
    setHideFeedContent(!hideFeedContent);
  };

  return (
    <div className="feed">
      <div className="feedProfileBox" onClick={handleHideFeedContent}>
        <div className="feedProfileBoxLeft">
          <img
            className="profileImg"
            src={feedData.userImage}
            alt="프로필 이미지"
          />
          <p className="userName">
            <b>{feedData.nickname}</b>
          </p>
        </div>
        <div className="feedProfileBoxRight">
          <p className="date">{feedDate}</p>
          <button
            className="deleteBtn"
            onClick={() => handleRemove(feedData.id)}
          >
            삭제
          </button>
        </div>
      </div>
      {!hideFeedContent && (
        <FeedItem
          like={like}
          heartToggle={heartToggle}
          handleHeartToggle={handleHeartToggle}
          feedData={feedData}
        />
      )}
    </div>
  );
};

export default Feed;
