import React from 'react'
import './programs.css'
import program_4 from '../../assets/program-4.jpg'
import program_5 from '../../assets/program-5.jpg'
import program_6 from '../../assets/program-6.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_4} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>Sekolah Dasar</p>
                <p>Elementary School</p>
            </div>
        </div>
        <div className="program">
            <img src={program_6} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Sekolah Menengah Pertama</p>
                <p>Junior High School</p>
            </div>
        </div>
        <div className="program">
            <img src={program_5} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Sekolah Menengah Atas</p>
                <p>Senior High School</p>
            </div>
        </div>
    </div>
  )
}

export default Programs