'use client';

import axios from "axios";

export default function Page() {
    const url = 'http://localhost:3000';
    const payload = {
        id: 1,
        name: 'kob'
    }

    const doGet = async () => { // SELECT, READ
        await axios.get(url);
    }
    const doPost = async () => { // INSERT, CREATE
        await axios.post(url, payload);
    }
    const doPut = async () => { // UPDATE, UPDATE
        await axios.put(url, payload);
    }
    const doDelete = async () => { // DELETE, DELETE
        await axios.delete(url);
    }

    return (
        <>
            <button onClick={doPost}>POST</button>
            <button onClick={doPut}>PUT</button>
            <button onClick={doDelete}>Delete</button>
            <button onClick={doGet}>Get</button>
        </>
    )
}