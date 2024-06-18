'use client'

import { unassignTicket, contact } from "../actions"

export const Button = ({text, ticketId}: {text: string, ticketId: number}) => {
    const handleClick = () => {
        if (text == "Contact"){
            contact({ticketId: ticketId})
        } else if (text == "Unassign"){
            unassignTicket({ticketId: ticketId})
        }   
    }

    return (
        <button onClick={handleClick} className="bg-gray-300 text-sm px-6 py-2 rounded-xl text-purple-800 font-bold hover:bg-purple-800 hover:text-white hover:scale-110">{text}</button>
    )
}