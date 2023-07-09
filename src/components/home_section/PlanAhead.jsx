import React from 'react'
import { guides, gettingAround, gettingHere, culture, accomodation } from '../../assets'
import ArrowButton from '../common/ArrowButton'

const PlanAhead = ({className}) => {
  return (

    <>
    {/* MAX SMARTPHONE SCREEN */}
    <div className={`max-w-[1300px] mx-auto md:hidden ${className}`}>
  <table className='mx-auto'>
    <tr>
      <td className='w-[380px] h-[7rem]'>
        <div className='font-body'>
          <p className='text-xl font-semibold mb-2'>Plan A Head</p>
          <p>Get the most out of your visit</p>
          <div className='border border-[#676767] w-10 mt-3'></div>
        </div>
      </td>
    </tr>
    <tr>
      <td className="w-[380px] h-[7rem] border border-[#676767]">
        <div className='w-full px-5 flex justify-between items-center'>
          <div className='flex pr-10 gap-4 items-center'>
            <img src={guides} alt='icon' className='w-16' />
            <p className='text-xl font-semibold'>Traveler Guides</p>
          </div>
          <ArrowButton className="ml-auto" />
        </div>
      </td>
    </tr>
    <tr>
      <td className="w-[380px] h-[7rem] border border-[#676767]">
        <div className='w-full px-5 flex justify-between items-center'>
          <div className='flex pr-10 gap-4 items-center'>
            <img src={gettingHere} alt='icon' className='w-16' />
            <p className='text-xl font-semibold'>Getting Here</p>
          </div>
          <ArrowButton className="ml-auto" />
        </div>
      </td>
    </tr>
    <tr>
      <td className="w-[380px] h-[7rem] border border-[#676767]">
        <div className='w-full px-5 flex justify-between items-center'>
          <div className='flex pr-10 gap-4 items-center'>
            <img src={gettingAround} alt='icon' className='w-16' />
            <p className='text-xl font-semibold'>Getting Around</p>
          </div>
          <ArrowButton className="ml-auto" />
        </div>
      </td>
    </tr>
    <tr>
      <td className="w-[380px] h-[7rem] border border-[#676767]">
        <div className='w-full px-5 flex justify-between items-center'>
          <div className='flex pr-10 gap-4 items-center'>
            <img src={culture} alt='icon' className='w-16' />
            <p className='text-xl font-semibold'>Culture</p>
          </div>
          <ArrowButton className="ml-auto" />
        </div>
      </td>
    </tr>
    <tr>
      <td className="w-[380px] h-[7rem] border border-[#676767]">
        <div className='w-full px-5 flex justify-between items-center'>
          <div className='flex pr-10 gap-4 items-center'>
            <img src={accomodation} alt='icon' className='w-16' />
            <p className='text-xl font-semibold'>Accomodation</p>
          </div>
          <ArrowButton className="ml-auto" />
        </div>
      </td>
    </tr>
  </table>
</div>



    {/* MAX DESKTOP SCREEN */}
    <div className={`max-w-[1300px] mx-auto max-sm:hidden ${className}`}>
     <table className='mx-auto'>
      <tbody >
        <tr >
          <td className='w-[380px] h-[7rem]'>
            <div className='font-body'>
              <p className='text-xl font-semibold max-lg:text-sm mb-2'>Plan A Head</p>
              <p>Get the most out of your visit</p>
              <div className='border border-[#676767] w-10 mt-3'></div>
            </div>
          </td>
          <td className="w-[380px] h-[7rem] border border-[#676767]">
            <div className='w-full px-5 flex justify-between items-center'>
              <div className='flex pr-10 gap-4 items-center'>
              <img src={guides} alt='icon' className='w-16' />
              <p className='text-xl font-semibold max-lg:text-sm'>Traveler Guides</p>
              </div>
              <ArrowButton className="ml-auto" />
            </div>
          </td>
          <td className="w-[380px] h-[7rem] border border-[#676767]">
          <div className='w-full px-5 flex justify-between items-center'>
              <div className='flex pr-10 gap-4 items-center'>
              <img src={gettingHere} alt='icon' className='w-16' />
              <p className='text-xl font-semibold max-lg:text-sm'>Getting Here</p>
              </div>
              <ArrowButton className="ml-auto" />
            </div>
          </td>
        </tr>
        <tr>
          <td className="w-[380px] h-[7rem] border border-[#676767]">
          <div className='w-full px-5 flex justify-between items-center'>
              <div className='flex pr-10 gap-4 items-center'>
              <img src={gettingAround} alt='icon' className='w-16' />
              <p className='text-xl font-semibold max-lg:text-sm'>Getting Around</p>
              </div>
              <ArrowButton className="ml-auto" />
            </div>
          </td>
          <td className="w-[380px] h-[7rem] border border-[#676767]">
          <div className='w-full px-5 flex justify-between items-center'>
              <div className='flex pr-10 gap-4 items-center'>
              <img src={culture} alt='icon' className='w-16' />
              <p className='text-xl font-semibold max-lg:text-sm'>Culture</p>
              </div>
              <ArrowButton className="ml-auto" />
            </div>
          </td>
          <td className="w-[380px] h-[7rem] border border-[#676767]">
          <div className='w-full px-5 flex justify-between items-center'>
              <div className='flex pr-10 gap-4 items-center'>
              <img src={accomodation} alt='icon' className='w-16' />
              <p className='text-xl font-semibold max-lg:text-sm'>Accomodation</p>
              </div>
              <ArrowButton className="ml-auto" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>  

  </div>
  </>
  )
}

export default PlanAhead