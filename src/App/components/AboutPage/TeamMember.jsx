import React from 'react'
import Button from '../SmallComponents/Button'

const TeamMember = () => {
  return (
    <div className='w-full padding'>
      <div className='w-full md:flex md:justify-between'>
        <div> 
          <p className='font-sans font-light text-2xl text-pink-400'>OUR TEAM MEMBER</p>
          <p className='font-serif font-thin text-5xl'>Flower Experts</p>
        </div>
        <Button content="MEET OUR TEAM" outLineBtn={true}/>
      </div>
      <div>

      </div>
    </div>
  )
}

export default TeamMember