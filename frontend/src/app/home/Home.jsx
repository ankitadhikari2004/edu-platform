import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Cards';
import { ReviewCard } from '../../components/Reviews';
import { CardsData, Detaildata, ReviewData, features } from '../../utils/utils';
import educate from '../../assets/studentclass.svg';
import agreement from '../../assets/agreement.svg';
import student from '../../assets/student.svg';
import teacher from '../../assets/teacher.svg';
import { DetailCard } from '../../components/DetailsCard';
import { Context } from '../../context/Context';

const Section = ({ title, description, image, buttonText, link, bgcolor, blendMood }) => {
  const { isAuthenticated } = useContext(Context);

  return (
    <div className={`border shadow-sm w-full flex flex-col-reverse md:flex-row items-start ${bgcolor ? bgcolor : 'bg-neutral-900/10'} py-8 px-10 rounded-md gap-5`}>
      <div className="flex flex-col md:w-[50%] md:mt-8">
        <h1 className="text-4xl font-semibold text-neutral-900 mb-4">{title}</h1>
        <div className="flex flex-col gap-2">
          {Array.isArray(description) ? (
            description.map((text, index) => (
              <p key={index} className="text-lg font-normal text-neutral-900">
                {text}
              </p>
            ))
          ) : (
            <p className="text-lg font-normal text-neutral-900">{description}</p>
          )}
        </div>
        {!isAuthenticated && <Link to={link} className="w-max bg-orange-500 py-2 px-5 rounded-md text-neutral-200 mt-4 inline-block hover:bg-orange-600 transition-colors duration-300 ease-in-out">
          {buttonText}
        </Link>}
      </div>
      <div className="flex justify-center w-full md:w-[50%] h-[15em] md:h-[20em]">
        <img src={image} alt={title} className="w-full h-full" />
      </div>
    </div>
  )
};



const DashboardSection = ({ title, description, image, buttonText, link, bgcolor }) => (
  <div className={`border shadow-sm flex flex-row w-full items-start justify-between ${bgcolor} p-8 rounded-lg`}>
    <div className="flex flex-col gap-5 w-[45%]">
      <h1 className="text-2xl font-medium text-neutral-900">{title}</h1>
      <p className="text-lg font-normal text-neutral-900">{description}</p>
      <Link to={link} className="bg-orange-500 py-2 px-5 rounded-md w-fit text-neutral-200 mt-auto">
        {buttonText}
      </Link>
    </div>
    <div className="flex justify-end w-[50%] h-full">
      <img src={image} alt={title} className={title === 'Student Dashboard' ? 'w-[13em] h-fit object-cover' : 'w-auto h-fit object-cover'} />
    </div>
  </div>
);

const StudyMaterialSection = ({ title, cardsData }) => (
  <div className="py-8 bg-gray-200">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  </div>
);

export const Home = () => {
  const { user } = useContext(Context);
  return (
    <div className="flex flex-col gap-8 mx-4 my-5">
      <Section
        title="Complete Guide For Students"
        description={[
          'Learn, explore and grow with our comprehensive guide for students.',
          'We provide a complete learning solution for students to excel in their studies and score good marks in exams. Discover the best resources for your learning journey and enhance your skills.',
        ]}
        image={educate}
        buttonText="Getting Start"
        link="/getting-started"
        bgcolor="bg-red-500/10"
        blendMood='mix-blend-multiply'
      />

      <div className="w-full h-fit flex flex-col md:flex-row justify-center gap-5">
        <DashboardSection
          title="Student Dashboard"
          description="Learning App for CBSE students and Test Generator for teachers to create question papers in minutes."
          image={student}
          buttonText="Students"
          link={user ? `/profile/${user._id}/overview` : "/dashboard"}
          bgcolor="bg-orange-200"
        />
        <DashboardSection
          title="Teachers Dashboard"
          description="Learning App for CBSE students and Test Generator for teachers to create question papers in minutes."
          image={teacher}
          link={user ? `/profile/${user._id}/overview` : "/dashboard"}
          buttonText="Teachers"
          bgcolor="bg-orange-200"
        />
      </div>

      <StudyMaterialSection title="Study Material" cardsData={CardsData} />

      <div className="py-6 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">A platform trusted by students worldwide</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {Detaildata.map((item) => (
              <DetailCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-200 py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Reviews</h2>
          <div className="flex w-full overflow-x-auto scrollHeight">
            <div className="flex gap-5">
              {ReviewData.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full rounded-lg p-5 bg-slate-300/10">
        <h2 className="text-4xl font-bold mb-8 text-neutral-900 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <DetailCard key={index} item={feature} />
          ))}
        </div>
      </div>


      <Section
        title="Want to learn with us!"
        description="We keep on updating our question bank and enrich our content on a daily basis. Teachers can join us as subject matter experts and work from home with us."
        image={agreement}
        buttonText="Join Now"
        link="/career"
      />
    </div>
  );
};