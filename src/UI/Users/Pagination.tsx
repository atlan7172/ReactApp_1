import {FC} from 'react';
import ReactPaginate from 'react-paginate';
import {useSelector} from "react-redux";
import {RootState} from "../../BLL/store";

type propsType = {
    changePage: (number: number) => void
}

const Pagination: FC<propsType> = ({changePage}) => {

    const totalCount = useSelector((state: RootState) => state.users.totalCount)
    const pageCount = Math.ceil(totalCount / 10)

    return (
        <div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                pageRangeDisplayed={5}
                pageCount={pageCount}
                onPageChange={(e: any) => changePage(e.selected + 1)}
                previousLabel="<"
            />
        </div>
    )
}

export default Pagination