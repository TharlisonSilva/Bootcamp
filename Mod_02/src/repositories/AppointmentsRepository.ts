import { isEqual } from 'date-fns';
import Appointment from '../Models/Appointment';

interface CreateAppoinmentDTO{
    provider: string;
    date: Date;
};

class AppointmentRespository{
    private appointments : Appointment[];

    constructor(){
        this.appointments = [];
    }

    public all(): Appointment[]{
        return this.appointments;
    }

    public findByDate(date: Date): Appointment | null{
        const findAppointment = this.appointments.find(appointment => isEqual(date, appointment.date));
        
        return findAppointment || null;
    }

    public create({ provider, date}: CreateAppoinmentDTO): Appointment{
        const appointment = new Appointment({ provider, date });

        this.appointments.push(appointment);

        return appointment;
    }
}


export default AppointmentRespository;