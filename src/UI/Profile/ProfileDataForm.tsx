import React, {FC} from "react";
import {useForm} from "react-hook-form";
import {profileType} from "../../Types/types";

type propsType = {
    onSubmit: (profile: any) => void
}

const ProfileDataForm: FC<propsType> = ({onSubmit}) => {

    const {register, handleSubmit} = useForm()

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div><b>Full Name</b>:<input {...register('fullName')} placeholder={'Full Name'}/></div>
            <div><b>lookingForAJob</b>:<input {...register('lookingForAJob')} type={'checkbox'}/></div>
            <div><b>My Skills</b>:<input {...register('lookingForAJobDescription')} placeholder='My Skills'/></div>
            <div><b>About Me</b>:<input {...register('aboutMe')} placeholder='About me'/></div>
            <input type='submit'/>
        </form>
    )
}

export default ProfileDataForm