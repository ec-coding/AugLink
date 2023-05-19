import React, { useState, useContext } from 'react';
import './shiftingButton.scss'
import { makeRequest } from '../../axios';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../../context/authContext";
import { useLocation } from "react-router-dom";
import Update from '../update/Update';

const ShiftingButton = (props) => {
    const [openUpdate, setOpenUpdate] = useState(false)
    
    const { currentUser } = useContext(AuthContext);
    const userId = parseInt(useLocation().pathname.split("/")[2])

    const { isLoading, error, data } = useQuery(['user'], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );

    return (
        <section id="button-container">
            <div className="container">
                <div className="button v6" onClick={() => setOpenUpdate(true)}>
                    <span className="label">UPDATE</span>
                    <span className="icon">
                        <span></span>
                    </span>
                </div>
            </div>
            {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
        </section>
    )
}

export default ShiftingButton