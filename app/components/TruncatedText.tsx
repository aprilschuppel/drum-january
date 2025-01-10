import React, { useState } from 'react';

interface TruncatedTextProps {
  text: string;
  maxLength: number;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      {isTruncated ? `${text.slice(0, maxLength)}...` : text}
      {text.length > maxLength && (
        <button onClick={toggleTruncate} className="text-blue-500 ml-2">
          {isTruncated ? 'View More' : 'View Less'}
        </button>
      )}
    </div>
  );
};

export default TruncatedText;