import { NotesData } from '../../../utils/utils';
import { NotesCard } from '../common/NotesCard';


export const Study = () => {
  return (
    <>
      <p className='text-4xl md:text-5xl text-neutral-900 font-medium pt-12 pb-8'>Best Study Material for you</p>
      <div className="flex flex-wrap gap-6 mb-10 items-stretch justify-center">
        {
          NotesData.map((item) => (
            <NotesCard key={item._id} item={item} />
          ))
        }
      </div>
    </>
  )
}
