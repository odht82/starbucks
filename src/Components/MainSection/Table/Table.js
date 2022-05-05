import React from "react";
import {
    useTable,
    useFilters,
    useGlobalFilter,
    useAsyncDebounce,
    useSortBy,
    usePagination,
} from "react-table";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { PageButton } from "./TableElements/Button";
import { SortIcon, SortUpIcon, SortDownIcon } from "./TableElements/Icons";
import { IoSearchOutline } from "react-icons/io5";


// Table search bar rendering function
export function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const [value, setValue] = React.useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined);
    }, 200);

    return (
        <div className="mx-4 my-6">
            <div className="h-10 rounded-lg bg-skin-neutral-2 w-full
                md:w-3/6 
                lg:w-2/6">
                <label className="relative block">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <IoSearchOutline className="h-5 w-5 text-neutral-8 focus:text-primary-2" />
                    </span>
                    <input
                        className="shadow-sm focus:border-skin-primary-2 focus:outline-none block w-full rounded-lg border-none bg-skin-neutral-2 py-2 pl-9 pr-3 text-sm placeholder:text-neutral-8 focus:placeholder-transparent focus:ring-1 focus:ring-primary-2 sm:text-sm"
                        placeholder="Search"
                        type="text"
                        aria-label="search"
                        value={value || ""}
                        onChange={(e) => {
                            setValue(e.target.value);
                            onChange(e.target.value);
                        }}
                    />
                </label>
            </div>
        </div>
    );
}

// Table rendering function takes the column and data from props
function Table({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,

        page,

        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,

        state,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination,
    );

    return (
        <>
            <div className="flex w-full items-center justify-start pb-28 p-2
                md:p-6
                lg:p-6">
                <div className="h-full w-full rounded bg-white shadow-lst">
                    {/* ===Table Search bar===  */}
                    <GlobalFilter
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={state.globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    />
                    {/* ===Table===  */}
                    <div className="mt-6 h-full">
                        <table {...getTableProps()} className="w-full table-auto">
                            {/* ===Table Head===  */}
                            <thead>
                                {headerGroups.map((headerGroup) => (
                                    <tr
                                        {...headerGroup.getHeaderGroupProps()}
                                        className="bg-skin-warning-1"
                                    >
                                        {headerGroup.headers.map((column) => (
                                            <th
                                                scope="col"
                                                className="group bg-skin-warning-1 px-3 py-2 text-left text-sm font-normal"
                                                {...column.getHeaderProps(
                                                    column.getSortByToggleProps()
                                                )}
                                            >
                                                {column.canSort === false && column.render("Header")}
                                                {console.log(column.align)}

                                                {column.canSort === true && (
                                                    <div>
                                                        {column.align === 'flex-start' ?
                                                            <div className="flex items-center" style={{ justifyContents: `${column.align}` }}>
                                                                {column.render("Header")}
                                                                {column.canSort === true &&
                                                                    <span className="ml-2">
                                                                        {column.isSorted ? (
                                                                            column.isSortedDesc ? (
                                                                                <SortDownIcon className="h-4 w-4 text-gray-900" />
                                                                            ) : (
                                                                                <SortUpIcon className="h-4 w-4 text-gray-900" />
                                                                            )
                                                                        ) : (
                                                                            <SortIcon className="h-4 w-4 text-gray-900 opacity-0 group-hover:opacity-100" />
                                                                        )}
                                                                    </span>
                                                                }
                                                            </div> :
                                                            <div className="flex items-center justify-end">
                                                                {column.render("Header")}
                                                                {column.canSort === true &&
                                                                    <span className="ml-2">
                                                                        {column.isSorted ? (
                                                                            column.isSortedDesc ? (
                                                                                <SortDownIcon className="h-4 w-4 text-gray-900" />
                                                                            ) : (
                                                                                <SortUpIcon className="h-4 w-4 text-gray-900" />
                                                                            )
                                                                        ) : (
                                                                            <SortIcon className="h-4 w-4 text-gray-900 opacity-0 group-hover:opacity-100" />
                                                                        )}
                                                                    </span>
                                                                }
                                                            </div>
                                                        }
                                                    </div>
                                                )}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            {/* ===Table Body===  */}
                            <tbody {...getTableBodyProps()} className="bg-white">
                                {page.map((row, i) => {
                                    // new
                                    prepareRow(row);
                                    return (
                                        <tr
                                            {...row.getRowProps()}
                                            className="hover:bg-skin-primary-1"
                                            for="checkChecked"
                                        >
                                            {row.cells.map((cell) => {
                                                return (
                                                    <td
                                                        {...cell.getCellProps()}
                                                        className="h-16 px-3 py-2 text-left"
                                                        role="cell"
                                                    >
                                                        {cell.column.Cell.name === "defaultRenderer" ? (
                                                            <div className="text-sm text-gray-900">
                                                                {cell.render("Cell")}
                                                            </div>
                                                        ) : (
                                                            cell.render("Cell")
                                                        )}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        {/* ===Table Head===  */}
                        <div className="px-4 bg-white rounded">
                            <div className="w-full flex items-center justify-between pt-6 pb-10">
                                <div className="h-10 w-full flex items-center justify-between">
                                    {/* ===Table row amount selection dropdown Button===  */}
                                    <div className="gap-x-2 hidden
                                        md:flex md:items-baseline md:justify-between
                                        lg:flex lg:items-baseline lg:justify-between">
                                        <label>
                                            <span className="sr-only">Items Per Page</span>
                                            <select
                                                className="shadow-sm block w-48 h-10 rounded-md bg-white px-2 py-2 text-md font-medium text-neutral-8 hover:bg-neutral-1 border-neutral-5 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                value={state.pageSize}
                                                onChange={(e) => {
                                                    setPageSize(Number(e.target.value));
                                                }}
                                            >
                                                {[5, 10, 20].map((pageSize) => (
                                                    <option key={pageSize} value={pageSize}>
                                                        {pageSize} Items per page
                                                    </option>
                                                ))}
                                            </select>
                                        </label>
                                    </div>
                                    {/* ===Table pagination Section===  */}
                                    <div className="w-full">
                                        <div className="flex justify-between w-full items-baseline gap-x-2 md:justify-end">
                                            {/* ===Table Go to page dropdown Button===  */}
                                            <label>
                                                <select
                                                    className="shadow-sm block w-48 h-10 rounded-md bg-white px-2 py-2 text-md font-medium text-neutral-8 hover:bg-neutral-1 border-neutral-5 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                    value={state.pageIndex}
                                                    onChange={(e) => {
                                                        gotoPage(Number(e.target.value));
                                                    }}
                                                >
                                                    {console.log(state)}
                                                    {pageOptions.map((pageSize) => (
                                                        <option key={pageSize} value={pageSize}>
                                                            Page
                                                            {" "}
                                                            {state.pageIndex + 1}
                                                            {" "}
                                                            of
                                                            {" "}
                                                            {pageOptions.length}
                                                        </option>
                                                    ))}
                                                </select>
                                            </label>
                                            {/* ===Table Next page and previous page Buttons===  */}
                                            <nav
                                                className="shadow-sm relative z-0 inline-flex -space-x-px rounded-md"
                                                aria-label="Pagination"
                                            >
                                                <PageButton
                                                    onClick={() => previousPage()}
                                                    disabled={!canPreviousPage}
                                                >
                                                    <span className="sr-only">Previous</span>
                                                    <ChevronLeftIcon
                                                        className="h-5 w-5 rounded-md border-gray-500 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                </PageButton>
                                                <PageButton
                                                    onClick={() => nextPage()}
                                                    disabled={!canNextPage}
                                                >
                                                    <span className="sr-only">Next</span>
                                                    <ChevronRightIcon
                                                        className="h-5 w-5 rounded-md border-gray-500 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                </PageButton>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </div >
        </>
    );
}

export default Table