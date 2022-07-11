import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../BLL/store";
import {FC, useEffect, useState} from "react";
import {setStatus} from "../../BLL/profileSlice";

type propsType = {
    isOwner: boolean
}

const ProfileStatus: FC<propsType> = ({isOwner}) => {

    const status = useSelector((state: RootState) => state.profile.status)
    const dispatch = useDispatch<AppDispatch>()
    const [mode, setMode] = useState(false)
    const [statusText, setStatusText] = useState(status)

    useEffect(() => {
        setStatusText(status)
    }, [status])

    const updateStatus = () => {
        dispatch(setStatus(statusText))
        setMode(false)
    }

    const changeStatus = (e: any) => {
        setStatusText(e.currentTarget.value)
    }

    return (
        <div>
            {isOwner &&
                <div>
                    {!mode &&
                        <div>
                            <span onDoubleClick={() => setMode(true)}>MY STATUS:{status}</span>
                        </div>
                    }
                    {mode &&
                        <div>
                            <input onChange={changeStatus} onBlur={updateStatus} autoFocus={true}
                                   value={statusText}/>
                        </div>
                    }
                </div>
            }
            {
                !isOwner &&
                <div>
                    <span>MY STATUS: {status}</span>
                </div>
            }
        </div>
    )
}

export default ProfileStatus