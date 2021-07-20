import { useEffect, useState } from 'react'
import { database } from '../services/firebase'
import { useAuth } from './useAuth';

type FirebasePhone = Record<string, {
    adress: {
        bairro: string;
        cep: string;
        cidade: string;
        complemento: string;
        logradouro: string;
        numero: string;
        uf: string;
    };
    emailId: string;
    name: string;
    numberPhone: string;
    userId: string;
    numberHouse: string | undefined;

    
}>

type CardPhone = {
    id: string;
    adress: {
        bairro: string;
        cep: string;
        cidade: string;
        complemento: string;
        logradouro: string;
        numero: string;
        uf: string;
        
    };
    emailId: string;
    name: string;
    numberPhone: string;
    userId: string;
    numberHouse: string | undefined;
}


export function useCards(){
    const [cardPhone, setCardPhone] = useState<CardPhone[]>([])
    const {user} = useAuth()
    
    useEffect(() => {

        const phonesDb = database.ref('phone')
        phonesDb.on('value', phones => {
            const databasePhone = phones.val();
            const firebasePhone: FirebasePhone = databasePhone ?? {};

            console.log(databasePhone)

            const parsePhone = Object.entries(firebasePhone).map(
                ([key, value]) => {
                return {
                    id: key,
                    name: value.name,
                    numberPhone: value.numberPhone,
                    userId: value.userId,
                    adress: value.adress,
                    emailId: value.emailId, 
                    numberHouse: value.numberHouse
                    
                }

            })

            
            setCardPhone(parsePhone)    


        })
        return () => {
            phonesDb.off('value')
        }
    }, [user?.id])

   
    

    return {cardPhone}
}