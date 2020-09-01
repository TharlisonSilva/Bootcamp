import {Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response){
    const user = createUser({
        name: 'Tharlison',
        email: 'tharlison.pro@gmail.com',
        password: '12345678',
        techs: ['Node.js', 
                'React', 
                'Reac-native',
                {
                    title: 'Java',
                    experience : 100
                },
            ],
    });
};