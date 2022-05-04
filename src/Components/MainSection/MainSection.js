import React, { useEffect, useState, useMemo } from 'react';
import Table from './Table/Table';
import { columns, mobileColumns, tabletColumns } from './Columns';
// import { Select, QuantityPill, StatusPill } from './Table/TableElements/ElementProcessor';

const MainSection = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("./listData.json")
            .then((res) => res.json())
            .then((data) => setList(data));
    }, []);

    const data = useMemo(() => list, [list])

    const desktop = useMemo(() => columns, [])
    const tablet = useMemo(() => tabletColumns, [])
    const mobile = useMemo(() => mobileColumns, [])

    return (
        <div className="flex flex-col w-full h-full overflow-y-auto bg-skin-neutral-2
                lg:w-5/6
        ">
            <div className="flex w-full items-center justify-start border-b-2 p-6 py-4">
                <h5 className="text-xl font-bold text-neutral-9">Inventory</h5>
            </div>
            <div className="w-full h-full hidden md:hidden lg:block">
                <Table columns={desktop} data={data} className='h-full' />
            </div>
            <div className="w-full h-full hidden md:block lg:hidden">
                <Table columns={tablet} data={data} className='h-full' />
            </div>
            <div className="w-full h-full block md:hidden lg:hidden">
                <Table columns={mobile} data={data} className='h-full' />
            </div>
        </div >
    );
};

export default MainSection;