import React from 'react';
import moment from "moment";
import "./comments.scss";
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from '../../axios';

const Comments = ({ postId }) => {
    const [desc, setDesc] = useState("")
    
    const { currentUser } = useContext(AuthContext)

    const { isLoading, error, data } = useQuery(['comments'], () =>
        makeRequest.get("/comments?postId=" + postId).then(res => {
            return res.data;
        })

    )

    // Re-fetches data when adding a new comment to a post
    const queryClient = useQueryClient();

    // Mutations allow you to fetch data and add new data
    const mutation = useMutation(
        (newComment) => {
            return makeRequest.post("/comments", newComment);
        },
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries(["comments"]);
            },
        }
    );

    const handleClick = async (e) => {
        e.preventDefault();
        let imgUrl = "";
        mutation.mutate({ desc, postId });
        setDesc("");
    };

    // const comments = [
    //     {
    //         id: 1,
    //         desc: "Mr. Sarif, while I am unequivocally opposed to the violent crime sprees that your company has suffered from, I must insist that human augmentation research undergo strict regulations to ensure a safe transition for all of mankind.",
    //         name: "William Taggart",
    //         userId: 1,
    //         profilePicture: "https://www.gamerguides.com/assets/trophies/resize100x-/3/11705.jpeg"
    //     },
    //     {
    //         id: 2,
    //         desc: "Strict regulations may only serve to hamper the merits of augmentation research, Mr. Taggart. Perhaps a more refined discussion amongst our delegates can be had once the UN Summit is in session.",
    //         name: "Hugh Darrow",
    //         userId: 2,
    //         profilePicture: "https://i.psnprofiles.com/games/3f4795/trophies/38S88b939.png"
    //     },
    // ]

    return (
        <div className='comments'>
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input 
                type="text" 
                placeholder='write a comment'
                value={desc} 
                onChange={e => setDesc(e.target.value)} 
                />
                <button onClick={handleClick}>Send</button>
            </div>
            {isLoading ? "loading" : data.map((comment) => (
                <div className="comment">
                    <img src={comment.profilePic} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className='date'>{moment(comment.createdAt).fromNow()}</span>
                </div>
            ))}
        </div>
    )
}

export default Comments
