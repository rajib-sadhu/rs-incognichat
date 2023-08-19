import axios from "axios";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const SentMessage = () => {

    const username = useLoaderData()
    // console.log(username);

    const [ip, setIp] = useState(null);

    const handleTrack = ip => {
        fetch(`ipinfo.io/${ip}?token=5bca689e0c2557`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIp(data)})
    }

    function getIp() {
        fetch("https://api.ipify.org?format=json")
            .then(res => res.json())
            .then(data => handleTrack(data.ip))
            .catch(error => console.error(error))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        getIp();

        const message = e.target.message.value;

        if (message == "") {
            Swal.fire({
                icon: 'error',
                text: 'Please enter message'
            })
        }
        else {
            axios.post(`https://rs-incognichat-server.vercel.app/u/${username}`, {
                message: message,
                ip: ip
            })
                .then(res => {
                    console.log(res.data)
                    e.target.reset();
                    window.my_modal_3.showModal();
                })
        }

    }


    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            <div className="md:w-1/3 w-[80%] mx-auto">
                <h1 className="text-center text-3xl font-semibold" >{username}</h1>
                <form onSubmit={handleSubmit} className="form-control">
                    <label className="label">
                        <span className="label-text">Write your secret message</span>
                    </label>
                    <textarea name="message" className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    <input className="btn" type="submit" value='Send' />
                </form>
            </div>
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Your message sent successfully!</h3>
                    <p className="py-4">Create your account and see your secret message</p>
                    <Link to='/' className="btn btn-success" >Create Account Low</Link>
                </form>
            </dialog>
        </div>
    );
};

export default SentMessage;