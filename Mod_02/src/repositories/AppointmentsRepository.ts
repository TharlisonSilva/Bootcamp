import Appointment from '../Models/Appointment';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Appointment)
class AppointmentRespository extends Repository<Appointment> {
   
    public async findByDate(date: Date): Promise<Appointment | null>{
        const findAppointment = await this.findOne({
            where: { date: date},
        });
        return findAppointment || null;
    }
}


export default AppointmentRespository;