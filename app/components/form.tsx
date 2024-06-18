'use client'

import { FormEvent } from "react";

import { revalidate } from "../actions"

export const assignTicket = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = event.currentTarget.assigneeEmail.value;
    const ticketId = event.currentTarget.ticketId.value

    // alert(`You want to assign ticket ${ticketId} to ${email}?`);
    console.log(`You want to assign ticket ${ticketId} to ${email}?`);

    try {
        const response = await fetch(`http://localhost:8000/tickets/${ticketId}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ 
                assigneeEmail: email,
            }),
        })
        if (response.ok) {
            const data = await response.json();
            console.log(data.message)
            console.log('assigned')
            await revalidate()
        } else {
            console.log('something went wrong')
        }
    } catch(error) {
        console.log('ERROR inside assign ticket function')
        console.error(error)
    }
}

export const Form = ({ticketId}: {ticketId: number}) => {
    return (
        <form onSubmit={assignTicket} className="flex flex-row flex-nowrap gap-2 pr-3">
            <label htmlFor="assigneeEmail" className="sr-only">Assign</label>
            <input
                type="email"
                id="assigneeEmail"
                name="assigneeEmail"
                className="border border-gray-300 px-3 py-1 rounded-md"
                placeholder="Assignee email"
            />
            <input type="hidden" id="ticketId" name="ticketId" value={ticketId}></input>
            <button type="submit" className="bg-gray-300 text-sm px-6 py-2 rounded-xl text-purple-800 font-bold hover:bg-purple-800 hover:text-white hover:scale-110">Assign</button>
        </form>
    )
}
