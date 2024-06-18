import { Button } from "./button"
import { Form } from "./form"

interface Props {
    key: number, 
    index: number,
    ticketData: TicketInfo,
}

export const TicketCard = ({key, index, ticketData}: Props) => {
    const requireButton = ticketData.ownerId || ticketData.assigneeId !== null 
    const buttonText = ticketData.ownerId ? "Contact" : "Unassign"
    
    return (
        <div key={key} className="grid grid-cols-3 text-center items-center py-3 border border-grey-100">
            <h4 className="font-bold">{`Ticket ${index+1}`}</h4>
            {/* need to change this to user name! and add some logic for if user has assigned themself */}
            <p>{ticketData.assigneeId | ticketData.ownerId}</p>
            <div>
                {requireButton 
                    ? <Button text={buttonText} ticketId={ticketData.id}></Button>
                    : <Form ticketId={ticketData.id}></Form>
                }
            </div>
        </div>
    )
}