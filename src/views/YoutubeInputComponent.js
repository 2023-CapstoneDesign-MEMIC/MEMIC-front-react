import React, { useState } from 'react';

function YouTubeInputComponent() {
    const [url, setUrl] = useState('');
    const [timeline, setTimeline] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const validateInput = () => {
        const urlPattern = /^(http|https):\/\/(www.youtube.com|youtu.be)\/.+/;
        const timelinePattern = /^([0-5]?[0-9]):([0-5]?[0-9])~([0-5]?[0-9]):([0-5]?[0-9])$/;

        if (!urlPattern.test(url)) {
            setError('Please enter a valid YouTube URL.');
            return false;
        }

        if (!timelinePattern.test(timeline)) {
            setError('Please enter a valid timeline format (00:00~00:10).');
            return false;
        }

        setError('');
        return true;
    };

    const handleSubmit = () => {
        if (validateInput()) {
            setSubmitted(true);
        }
    };

    return (
        <div>
            {submitted ? (
                <p style={{ color: 'green' }}>Great! Well done, Now move on to Record page!</p>
            ) : (
                <div>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter YouTube URL"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            disabled={submitted}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter Timeline (00:00~00:10)"
                            value={timeline}
                            onChange={(e) => setTimeline(e.target.value)}
                            disabled={submitted}
                        />
                    </div>
                    <div>
                        <button onClick={handleSubmit}>Submit</button>
                        {!submitted && error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                </div>
            )}
        </div>
    );
}

export default YouTubeInputComponent;
