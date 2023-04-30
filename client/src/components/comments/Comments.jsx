import React from 'react'
import "./comments.scss"
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

const Comments = () => {

    const {currentUser} = useContext(AuthContext)

    const comments = [
        {
            id: 1,
            desc: "Mr. Sarif, while I am unequivocally opposed to the violent crime sprees that your company has suffered from, I must insist that human augmentation research undergo strict regulations to ensure a safe transition for all of mankind.",
            name: "William Taggart",
            userId: 1,
            profilePicture: "https://www.gamerguides.com/assets/trophies/resize100x-/3/11705.jpeg"
        },
        {
            id: 2,
            desc: "Strict regulations may only serve to hamper the merits of augmentation research, Mr. Taggart. Perhaps a more refined discussion amongst our delegates can be had once the UN Summit is in session.",
            name: "Hugh Darrow",
            userId: 2,
            profilePicture: "https://i.psnprofiles.com/games/3f4795/trophies/38S88b939.png"
        },
    ]

    return (
        <div className='comments'>
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder='write a comment' />
                <button>Send</button>
            </div>
            {comments.map(comment => (
                <div className="comment">
                    <img src={comment.profilePicture} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>1 hour ago</span>
                </div>
            ))}
        </div>
    )
}

export default Comments
