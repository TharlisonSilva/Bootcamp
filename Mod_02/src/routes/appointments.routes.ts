import { Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns';

const appointmentsRouter = Router();

interface Appoinment{
    id: String;
    provider: String;
    date: Date;
};

const appointments: Appoinment[] = [];

appointmentsRouter.post('/', (request, response) => {
    const { provider, date } = request.body;
    
    const parsedDate = startOfHour(parseISO(date));
    const findAppointmentInSameDate = appointments.find(appointment => isEqual(parsedDate, appointment.date),);
    if(findAppointmentInSameDate){
        return response.status(400).json({message : 'This appointment is already booked '})
    }

    const appointment = {
        id: uuid(),
        provider,
        date: parsedDate
    };

    appointments.push(appointment);

    return response.json(appointment);
});

appointmentsRouter.get('/', (request, response) => {
    return response.json({message:'Hello World - Get '});
});

export default appointmentsRouter;