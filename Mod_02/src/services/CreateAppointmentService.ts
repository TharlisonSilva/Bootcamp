import Appointment from '../Models/Appointment';
import { startOfHour } from 'date-fns';
import AppointmentRepository from '../repositories/AppointmentsRepository';
import appointmentsRouter from '../routes/appointments.routes';

interface RequestDTO{
    provider: string;
    date: Date;
}

class CreateAppointmentService{
    private appointmentRepository: AppointmentRepository;

    constructor(appointmentRepository: AppointmentRepository){
        this.appointmentRepository = appointmentRepository;
    }
    
    public execute({provider, date}: RequestDTO): Appointment{

        const appointmentDate = startOfHour(date);
    
        const findAppointmentInSameDate = this.appointmentRepository.findByDate(appointmentDate);
    
        if(findAppointmentInSameDate){
            throw Error('This appointment is already booked');
        }

        const appointment = this.appointmentRepository.create({
            provider,
            date: appointmentDate,
        });
    
        return appointment;
    }
}

export default CreateAppointmentService;