import React from 'react';
import Image, { StaticImageData } from 'next/image';
import dev1 from '@/images/developers/dev1.jpg';
import dev2 from '@/images/developers/dev2.jpg';
import dev3 from '@/images/developers/dev3.jpg';
import dev4 from '@/images/developers/dev4.jpg';
import dev5 from '@/images/developers/dev5.jpg';
import dev6 from '@/images/developers/dev6.png';


interface TeamMemberProps {
    name: string;
    title: string;
    image: StaticImageData; 
}

const teamMembers: TeamMemberProps[] = [
    {
        name: 'Megadhana',
        title: '230030031 (Developer)',
        image: dev1, 
    },
    {
        name: 'Bagus Widiana',
        title: '230030062 (Developer)',
        image: dev2, 
    },
    {
        name: 'Adi Sedaya',
        title: '230030012 (Developer)',
        image: dev3, 
    },
    {
        name: 'Vinto Dhammanda',
        title: '230030051 (Developer)',
        image: dev4, 
    },
    {
        name: 'Kanda Pasek',
        title: '230030236 (Developer)',
        image: dev5, 
    },
    {
        name: 'Stikom Bali',
        title: 'Our Campus',
        image: dev6, 
    },
];

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, image }) => (
    <div className="flex flex-col items-center">
        <Image className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter" src={image} alt={name} />
        <p className="mt-5 text-lg font-bold text-golddark sm:text-xl sm:mt-8 font-pj">{name}</p>
        <p className="mt-2 text-base font-normal text-golddark/50 font-pj">{title}</p>
    </div>
);

const OurTeam: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-golddark sm:text-4xl xl:text-5xl font-pj">Our Developers</h2>
                </div>

                {/* Team Members */}
                <div className="grid grid-cols-1 gap-y-12 mt-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;