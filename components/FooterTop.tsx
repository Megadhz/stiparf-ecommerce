import { MapPin, Phone } from 'lucide-react';
import React from 'react'

interface Props {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
}
const data: Props[] = [
    {
        title: 'Visit Us',
        subtitle: 'Denpasar, Bali',
        icon: (<MapPin className='text-[#886d36] group-hover:text-darkColor transition-colors'
        />
        ),
    },
    {
        title: 'Call Us',
        subtitle: '+62 812 822 193',
        icon: (<Phone className='text-[#886d36] group-hover:text-darkColor transition-colors'
        />
        ),
    },
    {
        title: 'Working Hours',
        subtitle: 'Mon - Sat: 10:00 AM - 6:00 PM',
        icon: (<MapPin className='text-[#886d36] group-hover:text-darkColor transition-colors'
        />
        ),
    },
    {
        title: 'Email Us',
        subtitle: 'stiparf@gmail.com',
        icon: (<MapPin className='text-[#886d36] group-hover:text-darkColor transition-colors'
        />
        ),
    },
];
const FooterTop = () => {

    return ( 
        <div className='grid grid-cols-2 lg:grid-cols-4 border-b border-[#8B6D2F]'>
            {data?.map((item, index) => (
                <ContactItem 
                key={index} 
                icon={item?.icon}
                title={item?.title}
                subtitle={item?.subtitle} 
            />
            ))}
        </div>
    );
};



const ContactItem = ({icon,title,subtitle}: Props) => {
    return <div className='flex items-center gap-3 group hover:bg-gray-50 p-4 transition-colors'>
        {icon}
        <div>
            <h3 className='font-semibold text-[#886d36] group-hover:text-darkColor transition-colors'>{title}</h3>
            <p className='text-[#b6a88bda] text-sm mt-1 group-hover:text-gray-900 transition-colors'>{subtitle}</p>
        </div>
    </div>;
};

export default FooterTop
