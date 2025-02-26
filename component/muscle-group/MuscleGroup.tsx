import React from 'react'

interface MuscleGroupProps {
  muscleGroup: string;
  exercises: string[];
}

const MuscleGroup = ({muscleGroup, exercises} : MuscleGroupProps) => {
  return (
    <div>
      <h2>{muscleGroup}</h2>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
    </ul>
    </div>
  )
}

export default MuscleGroup
