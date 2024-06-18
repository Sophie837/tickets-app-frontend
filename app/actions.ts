'use server'

import { revalidateTag, revalidatePath } from "next/cache";

export const contact = async ({ticketId}: {ticketId: number}) => {
    console.log('Contact clicked')
    alert(`Contact clicked for ticket ${ticketId}`);
}

export const unassignTicket = async ({ticketId}: {ticketId: number}) => {
    try {
        const response = await fetch(`http://localhost:8000/tickets/${ticketId}`, {
            method: 'PATCH',
            body: JSON.stringify({ 
                assigneeEmail: null,
            }),
        })
        if (response.ok) {
            const data = await response.json();
            console.log(data.message)
            console.log('assigned')
            //subposedly triggers update
            revalidateTag('tickets')
        }
    } catch(error) {
        console.log('ERROR in the unassign ticket function')
        console.error(error)
    }
}
export const revalidate = async() => {
    console.log('revalidate called')
    revalidatePath('/')
}

// can interact directly with DB - don't need to call an API and can use FormData instead of event handler
// export const assignTicket = async (prevState: any, formData: FormData) => {
//     event.preventDefault();
//     const email = event.currentTarget.assigneeEmail.value;
//     alert(`You want to assign this ticket to ${email}?`);
// }
