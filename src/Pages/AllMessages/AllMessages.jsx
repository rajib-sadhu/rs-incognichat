
import useAllMessages from "../../hooks/useAllMessages";
import download from 'downloadjs';

const AllMessages = () => {

    const [messages, isLoading] = useAllMessages();

    const handleConvertTextToJPG = (text, username) => {
        // const text = 'Hello, world!'; 
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        const fontSize = 24;
        const fontFamily = 'Arial';
        const fontStyle = 'bold';
        const fontColor = 'red';

        // Set text properties
        const x = 100;
        const y = 100;

        // Set font style
        context.font = `${fontStyle} ${fontSize}px ${fontFamily}`;
        context.fillStyle = fontColor;

        // Draw text on the canvas
        context.fillText(text, x, y);


        canvas.toBlob((blob) => {
            download(blob, `${username}-image.jpg`);
        }, 'image/jpeg');
    };

    if (isLoading) {
        return <div className="min-h-screen grid place-content-center"><span className="loading loading-spinner loading-lg"></span></div>
    }

    return (
        <div className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-5">
            {
                messages.map((msg, index) => <div key={msg._id} className="card w-[20rem] bg-base-100 shadow-xl mx-auto">
                    <div className="card-body">
                        <h2 className="card-title">#{index + 1}</h2>
                        <p>Message: {msg.message}</p>
                        <div className="card-actions justify-between">
                            <div className="space-y-2">
                                <span className="badge badge-outline" >{new Date(msg.date).toLocaleTimeString()}, {new Date(msg.date).toDateString()}</span>
                                <div>
                                    <button className="btn btn-xs" >Share</button>
                                    <button className='btn btn-xs btn-success' onClick={() => handleConvertTextToJPG(msg.message, msg.username)}>Get Image</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllMessages;