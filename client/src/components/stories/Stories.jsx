import React, { useCallback, useContext } from 'react'
import "./stories.scss"
import { AuthContext } from '../../context/authContext'

const Stories = () => {

    const {currentUser} = useContext(AuthContext)

    // TEMP DATA
    const stories = [
        {
            id: 1,
            name: "Detroit's Future",
            img: "https://preview.redd.it/6674ctfv9gs31.jpg?auto=webp&s=8667039c7e9bd2c191a95a63a7eb5f3d37831647"
        },
        {
            id: 2,
            name: "Hengsha Night Life",
            img: "https://live.staticflickr.com/5012/5510742220_cb5629cbdc_b.jpg"
        },
        {
            id: 3,
            name: "Shadow Ops",
            img: "https://i.imgur.com/ThfXten.png"
        },
        {
            id: 4,
            name: "UN Hearings",
            img: "https://images.nintendolife.com/screenshots/47117/large.jpg"
        },
    ]


    return (
        <div className='stories'>
            <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories
