import React, { useEffect } from 'react';

const GradioApp = ({ src }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://gradio.s3-us-west-2.amazonaws.com/4.41.0/gradio.js";
        script.type = "module";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <gradio-app src={src}></gradio-app>;
};

export default GradioApp;