import React, { useState } from 'react';
import './UploadMusic.css';

const UploadMusic = () => {
  const [songTitle, setSongTitle] = useState('');
  const [artistName, setArtistName] = useState('');
  const [audioFile, setAudioFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the upload logic here
    console.log({
      songTitle,
      artistName,
      audioFile,
      imageFile
    });
  };

  return (
    <div className="upload-container">
      <div className="header">
        <button className="back-button">←</button>
        <h2>Upload Music</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="upload-form">
        <input
          type="text"
          placeholder="Song Title"
          value={songTitle}
          onChange={(e) => setSongTitle(e.target.value)}
          className="text-input"
        />
        
        <input
          type="text"
          placeholder="Artist Name"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
          className="text-input"
        />

        <div className="file-buttons">
          <label className="file-button">
            Upload Audio File
            <input
              type="file"
              accept="audio/*"
              onChange={(e) => setAudioFile(e.target.files[0])}
              hidden
            />
          </label>

          <label className="file-button">
            Upload Image File
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              hidden
            />
          </label>
        </div>

        <button type="submit" className="submit-button">
          Upload Music
        </button>
      </form>
    </div>
  );
};

export default UploadMusic;
