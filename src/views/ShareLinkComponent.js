import React from 'react';

const ShareLinkComponent = () => {
  const copyLinkToClipboard = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        alert('링크가 성공적으로 복사되었습니다.');
      })
      .catch(err => {
        console.error('Error copying link:', err);
      });
  };

  return (
    <button className="af-class-button af-class-is-secondary w-button" onClick={copyLinkToClipboard}>공유하기</button>
  );
};

export default ShareLinkComponent;
