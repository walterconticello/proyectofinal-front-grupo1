import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard/TeamMemberCard';


const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Torito Srur',
      position: 'CEO',
      description: 'Descripción del CEO',
      imageSrc: 'images/member1.jpg',
      imageAlt: 'Foto del CEO',
    },
    {
      name: 'Walter White',
      position: 'CTO',
      description: 'Descripción del CTO',
      imageSrc: 'images/member2.jpg',
      imageAlt: 'Foto del CTO',
    },
    {
      name: 'Diego Cow',
      position: 'Desarrollador',
      description: 'Descripción del desarrollador',
      imageSrc: 'images/member3.jpg',
      imageAlt: 'Foto del desarrollador',
    },

    {
     name: "Paul Walker" ,
      position: "Desarrollador" ,
      description: "Descripción del desarrollador",
      imageSrc: "images/member4.jpg",
      imageAlt: "Foto del desarrollador",
    },

    { name : "Maquinhos Quintero" ,
      position: "Desarrollador" ,
      description: "Descripción del desarrollador",
      imageSrc: "images/member5.jpg",
      imageAlt: "Foto del desarrollador",
    },
    

  ];

  return (
    <div>
      <h2>Sobre nosotros</h2>
      <p>Somos una empresa dedicada a ofrecer soluciones innovadoras en el campo de la tecnología. Nuestra misión es ayudar a nuestros clientes a alcanzar sus objetivos de negocio a través de soluciones personalizadas y de alta calidad.</p>
      <p>Nuestro equipo está formado por expertos en tecnología con años de experiencia en el campo. Nos apasiona lo que hacemos y nos esforzamos por ofrecer el mejor servicio posible a nuestros clientes.</p>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-md-4" key={index}>
            <TeamMemberCard
              name={member.name}
              position={member.position}
              description={member.description}
              imageSrc={member.imageSrc}
              imageAlt={member.imageAlt}
            />
          </div>
        ))}
      </div>
      <a href="#" className="btn btn-primary">Conoce más sobre nosotros</a>
    </div>
  );
};

export default AboutUs;