import MuscleGroup from '@/components/muscle-group/MuscleGroup';
import React from 'react'

const data = {
        group: "Chest",
        exercises: [
            "Bench Press",
            "Dumbbell Flys",
            "Incline Bench Press",
            "Cable Crossover",
            "Cable Flys",
            "Cable Rows",
            "Dips",
            "Push-Ups",
            "Reverse Flys",
            "Seated Rows",
            "Tricep Dips",]
    };

interface Params {
group: string
}

interface IProps {
    params: Promise<Params>
}
const page = async ({params} : IProps) => {
    const group = (await params).group
    console.log(group);
  return (
    <div>
        <MuscleGroup muscleGroup={data.group} exercises={data.exercises}/>
    </div>
  )
}

export default page
